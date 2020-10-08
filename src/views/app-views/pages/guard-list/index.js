import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu } from 'antd';
import {
	EyeOutlined, DeleteOutlined,
	UserAddOutlined,
	FileExcelOutlined,
	PrinterOutlined,
	PlusOutlined,
	EllipsisOutlined,
	StopOutlined,
	ReloadOutlined
} from '@ant-design/icons';
import moment from 'moment';
import GuardsView from './GuardsView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "./../../../../assets/styles";
import { componentStyles } from "./../../dashboards/styles";
import SearchInput from "./../../../../components/layout-components/NavSearch/SearchInput.js"
import userData from "assets/data/user-list.data.json";
import Position from 'views/app-views/components/data-display/carousel/Position';

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
	// 		users: this.state.users.filter(item => item.id !== userId),
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
		const { users, search } = this.state;
		let userList = userData
		let empType = search.empType
		let subcontractName = search.subcontractName
		let position = search.position
		let status = search.status

		let filteredArray = []
		filteredArray = userList.filter(element => {
			if (empType && subcontractName && position && status) {

				return element.empType == empType && element.subcontractName == subcontractName && element.position == position && element.status == status
			
			} else if (empType && subcontractName && position) {

				return element.empType == empType && element.subcontractName == subcontractName && element.position == position

			} else if (empType && subcontractName && status) {

				return element.empType == empType && element.subcontractName == subcontractName && element.status == status

			} else if (subcontractName && position && status) {

				return element.subcontractName == subcontractName && element.position == position && element.status == status

			} else if (empType && position && status) {

				return element.empType == empType && element.position == position && element.status == status

			} else if (empType && subcontractName) {

				return element.empType == empType && element.subcontractName == subcontractName

			} else if (empType && position) {

				return element.empType == empType && element.position == position

			} else if (empType && status) {

				return element.empType == empType && element.status == status

			} else if (subcontractName && position) {

				return element.subcontractName == subcontractName && element.position == position

			} else if (subcontractName && status) {

				return element.subcontractName == subcontractName && element.status == status

			} else if (position && status) {

				return element.position == position && element.status == status

			} else if (empType) {

				return element.empType == empType

			} else if (subcontractName) {

				return element.subcontractName == subcontractName

			} else if (position) {

				return element.position == position

			} else if (status) {

				return element.status == status

			}

		});
		this.setState({ users: filteredArray })

	}

	render() {
		const { users, userProfileVisible, selectedUser, search } = this.state;

		const tableColumns = [
			{
				title: 'Guard Name',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},
			{
				title: 'Date of Birth',
				dataIndex: 'birthday',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.birthday).unix() - moment(b.birthday).unix(),
				width: 150
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
				width: 150
			},
			{
				title: 'SIA License',
				dataIndex: 'siaLicence',
				sorter: {
					compare: (a, b) => a.siaLicence.length - b.siaLicence.length,
				},
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
			},
			{
				title: 'Pay Rate',
				dataIndex: 'payRate',
				sorter: {
					compare: (a, b) => a.payRate.length - b.payRate.length,
				},
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
			{
				title: 'Subcontract Name',
				dataIndex: 'subcontractName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.subcontractName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.subcontractName.toLowerCase();
						b = b.subcontractName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<>
				<Row gutter={16}>
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
									placeholder="Subcontractor Name"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("subcontractName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="ABC">ABC</Option>
									<Option value="DEF">DEF</Option>
									<Option value="GHI">GHI</Option>
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
					<Col xs={24} sm={24} md={0} lg={0}>
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
									placeholder="Subcontractor Name"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("subcontractName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="ABC">ABC</Option>
									<Option value="DEF">DEF</Option>
									<Option value="GHI">GHI</Option>
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

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card title="Guards List" extra={cardDropdown(latestTransactionOption)}>
							<Table bordered columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 2000, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default GuardsList
