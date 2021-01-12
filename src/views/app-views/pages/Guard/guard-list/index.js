import {
	DeleteOutlined, EditOutlined,




	EllipsisOutlined, FileExcelOutlined,
	PrinterOutlined,



	ReloadOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Menu, Progress, Row, Select, Table, Tag, Tooltip } from 'antd';
import userData from "assets/data/user-list.data.json";
import { AppColors } from 'assets/styles/colors';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../../../dashboards/styles";

const { Option } = Select;

const latestTransactionOption = (
	<Menu>
		<Menu.Item key="0">
			<span>
				<div className="d-flex align-items-center">
					<ReloadOutlined />
					<span className="ml-2">Refresh</span>
				</div>
			</span>
		</Menu.Item>
		<Menu.Item key="1">
			<span>
				<div className="d-flex align-items-center">
					<PrinterOutlined />
					<span className="ml-2">Print</span>
				</div>
			</span>
		</Menu.Item>
		<Menu.Item key="12">
			<span>
				<div className="d-flex align-items-center">
					<FileExcelOutlined />
					<span className="ml-2">Export</span>
				</div>
			</span>
		</Menu.Item>
	</Menu>
);

const cardDropdown = (menu) => (
	<Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
		<a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
			<EllipsisOutlined />
		</a>
	</Dropdown>
)

export class GuardsList extends Component {

	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			empType: "",
			subcontractName: "",
			position: "",
			status: "",
		}
	}

	// deleteUser = userId => {
	// 	this.setState({
	// 		users: this.state.users.filter(item => item.id !=== userId),
	// 	})
	// 	message.success({ content: `Deleted user ${userId}`, duration: 2 });
	// }

	// showUserProfile = userInfo => {
	// 	this.setState({
	// 		userProfileVisible: true,
	// 		selectedUser: userInfo
	// 	});
	// };

	// closeUserProfile = () => {
	// 	this.setState({
	// 		userProfileVisible: false,
	// 		selectedUser: null
	// });
	// }
	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		const { search } = this.state;
		this.setState({
			search: {
				...search,
				[type]: value
			}
		})

	}
	searchInTable = () => {
		const { search } = this.state;
		let userList = userData
		let empType = search.empType
		let position = search.position
		let status = search.status

		let filteredArray = []
		filteredArray = userList.filter(element => {
			if (empType && position && status) {

				return element.empType === empType && element.position === position && element.status === status
			
			} else if (empType && position) {

				return element.empType === empType && element.position === position

			} else if (empType && status) {

				return element.empType === empType && element.status === status

			} else if (position && status) {

				return element.position === position && element.status === status

			} else if (empType) {

				return element.empType === empType

			} else if (position) {

				return element.position === position

			} else if ( status) {

				return element.status === status

			} 
			

		});
		this.setState({ users: filteredArray })

	}

	viewItem = (action, record) => {
		this.props.propsData.history.push({
			pathname: '/app/pages/guard-view',
			state: { action, record }
		})
	}

	render() {
		const { users, search } = this.state;

		const tableColumns = [
			
			{
				title: 'Guard Name',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} />

						<span style={AppStyles.alignSelfCenter}>
							<a onClick={()=>this.viewItem("viewItem", record)}>
							{record.name}
							</a>
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				fixed: 'left'
			},
			
			{
				title: 'Compliance Score',
				dataIndex: 'complianceSc',
				render: (_, record) => (
					<div className="d-flex">
						{record.complianceSc && record.complianceSc < 50 ? 
						 <Progress percent={record.complianceSc}  strokeColor={AppColors.radicalRed}/> :
						 record.complianceSc && record.complianceSc >= 50 && record.complianceSc != 100 ?
						 <Progress percent={record.complianceSc}  strokeColor={AppColors.brightSun}/> :
						 <Progress percent={record.complianceSc}  strokeColor={AppColors.conifer}/>
						}
					</div>
				),
				width: 150
			},

			{
				title: 'Progress',
				dataIndex: 'progress',
				render: (_, record) => (
					<div className="d-flex">
						 <Progress percent={record.progress}  strokeColor={AppColors.skyBlue}/>
					</div>
				),
				width: 150
			},
		
			{
				title: 'Date of Birth',
				dataIndex: 'birthday',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.birthday).unix() - moment(b.birthday).unix(),
				width: 200
			},
			{
				title: 'Email',
				dataIndex: 'email',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.email}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.email.toLowerCase();
						b = b.email.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Phone',
				dataIndex: 'phoneNumber',
				sorter: {
					compare: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
				},
				width: 120
			},
			{
				title: 'SIA License',
				dataIndex: 'siaLicence',
				sorter: {
					compare: (a, b) => a.siaLicence.length - b.siaLicence.length,
				},
				width: 150
			},
			{
				title: 'SIA Licence Expiry',
				dataIndex: 'siaLicenceExpiry',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.siaLicenceExpiry).unix() - moment(b.siaLicenceExpiry).unix(),
				width: 200
			},

			{
				title: 'Position',
				dataIndex: 'position',
				sorter: {
					compare: (a, b) => {
						a = a.position.toLowerCase();
						b = b.position.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 60
			},
			{
				title: 'Pay Rate',
				dataIndex: 'payRate',
				sorter: {
					compare: (a, b) => a.payRate.length - b.payRate.length,
				},
				width: 150
			},
			{
				title: 'Employment Type',
				dataIndex: 'empType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.empType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.empType.toLowerCase();
						b = b.empType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			// {
			// 	title: 'Subcontract Name',
			// 	dataIndex: 'subcontractName',
			// 	render: (_, record) => (
			// 		<div className="d-flex">
			// 			<span>{record.subcontractName}</span>
			// 		</div>
			// 	),
			// 	sorter: {
			// 		compare: (a, b) => {
			// 			a = a.subcontractName.toLowerCase();
			// 			b = b.subcontractName.toLowerCase();
			// 			return a > b ? -1 : b > a ? 1 : 0;
			// 		},
			// 	},
			// 	width: 200
			// },

			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
				width: 100
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-center">
						<Tooltip title="Edit">
							<Button type="primary" className="mr-2" icon={<EditOutlined />} 
							onClick={() => { this.viewItem("editItem", elm) }} 
							size="small" />
						</Tooltip>
					</div>
				),
				width:0				
			},

		];
		return (
			<>
				<Row gutter={16} 
				// justify="center"
				>
					<Col xs={0} sm={0} md={24} lg={24}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Employment Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("empType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Employment 1">Employment 1</Option>
									<Option value="Employment 2">Employment 2</Option>
									<Option value="Employment 3">Employment 3</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Position"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("position", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SG">SG</Option>
									<Option value="SG">SG</Option>
									<Option value="SG">SG</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="active">Active</Option>
									<Option value="inactive">Inactive</Option>
								</Select>
								<Button
									disabled={!(search.empType || search.subcontractName || search.position || search.status)}
									onClick={() => { this.searchInTable() }}
									style={!(search.empType || search.subcontractName || search.position || search.status) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>
					<Col xs={20} sm={20} md={0} lg={0}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.justifyContentCenter}>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Employment Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("empType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Employment 1">Employment 1</Option>
									<Option value="Employment 2">Employment 2</Option>
									<Option value="Employment 3">Employment 3</Option>
								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Position"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("position", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SG">SG</Option>
									<Option value="SG">SG</Option>
									<Option value="SG">SG</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="active">Active</Option>
									<Option value="inactive">Inactive</Option>
								</Select>
								<div style={AppStyles.marginTop20}>
									<Button
										disabled={!(search.empType || search.subcontractName || search.position || search.status)}
										onClick={() => { this.searchInTable() }}
										style={!(search.empType || search.subcontractName || search.position || search.status) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
										htmlType="submit"
										block>
										Search
										
					                </Button>
								</div>
							</div>
						</Card>
					</Col>

					<Col xs={20} sm={20} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Guards List" extra={cardDropdown(latestTransactionOption)}>
							<Table bordered columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 1600, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default GuardsList
