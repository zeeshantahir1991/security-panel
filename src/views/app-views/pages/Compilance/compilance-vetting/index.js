import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Table, Tooltip } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const vettingData = [
	{
		"id": "1",
		"guardName": "John Smith",
		"img": "/img/avatars/thumb-1.jpg",
		"screenStatus": "Completed",
		"auditBy": "SC user A",
		"vettedBy": "SC user B",
		"vettingCompletedOn": 1583107200,
		"vettingStartDate": 1583107200,
		"auditDate": 1583107200,

	},
	{
		"id": "2",
		"guardName": "Terrance Moreno",
		"img": "/img/avatars/thumb-2.jpg",
		"screenStatus": "Pending Vetting",
		"auditBy": "Empty",
		"vettedBy": "SC user A",
		"vettingCompletedOn": 1583107200,
		"vettingStartDate": 1583107200,
		"auditDate": 1583107200,


	},
	{
		"id": "3",
		"guardName": "Ron Vargas",
		"img": "/img/avatars/thumb-3.jpg",
		"screenStatus": "Pending Vetting",
		"auditBy": "Empty",
		"vettedBy": "SC user A",
		"vettingCompletedOn": 1583107200,
		"vettingStartDate": 1583107200,
		"auditDate": 1583107200,
	}
]

const vettingStatisticData = [
	{
		title: 'Vetting Completed',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Vetting',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Audit Checks',
		value: '20',
		backgroundColor: "#60b0f4"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	},
]

const { Option } = Select;



export class CompilanceVetting extends Component {

	state = {
		vetting: vettingData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			screenStatus: "",
			auditBy: "",
			vettedBy: "",
			guardName: "",
			vettingPeriod: ""
		}
	}

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

	handleChangeInput = (type, event) => {
		console.log(`selected ${event.target.value}`);
		const { search } = this.state;
		this.setState({
			search: {
				...search,
				[type]: event.target.value
			}
		})

	}

	searchInTable = () => {
		const { search } = this.state;
		let userList = vettingData
		let screenStatus = search.screenStatus
		let auditBy = search.auditBy
		let vettedBy = search.vettedBy
		let guardName = search.guardName
		let vettingCompletedOn = search.vettingPeriod

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(screenStatus, auditBy, vettedBy, guardName, vettingCompletedOn, element)


		});
		this.setState({ vetting: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { vetting, search } = this.state;

		const tableColumns = [
			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.guardName} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Screen Status',
				dataIndex: 'screenStatus',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.screenStatus}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.screenStatus.toLowerCase();
						b = b.screenStatus.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},



			{
				title: 'Audit By',
				dataIndex: 'auditBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.auditBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.auditBy.toLowerCase();
						b = b.auditBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Vetted By',
				dataIndex: 'vettedBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.vettedBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.vettedBy.toLowerCase();
						b = b.vettedBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Vetting Completed On',
				dataIndex: 'vettingCompletedOn',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.vettingCompletedOn).unix() - moment(b.vettingCompletedOn).unix(),
				width: 200
			},

			{
				title: 'Vetting Start Date',
				dataIndex: 'vettingStartDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.vettingStartDate).unix() - moment(b.vettingStartDate).unix(),
				width: 200
			},
			{
				title: 'Audit Date',
				dataIndex: 'auditDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.auditDate).unix() - moment(b.auditDate).unix(),
				width: 200
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
				<Row gutter={16} justify="center">
					<Col xs={20} sm={20} md={20} lg={20}>

						<Row gutter={16}>
							{
								vettingStatisticData.map((elm, i) => (
									<Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}>
										<StatisticWidget
											title={elm.title}
											value={elm.value}
											status={elm.status}
											subtitle={elm.subtitle}
											backgroundColor={elm.backgroundColor}
										/>
									</Col>
								))
							}
						</Row>

					</Col>
				</Row>
				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={20} lg={20}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Vetting Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("screenStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending Vetting">Pending Vetting</Option>
									<Option value="Pending Audit Checks">Pending Audit Checks</Option>

								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Audit By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("auditBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Vetted By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("vettedBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("vettingPeriod", val)}
									placeholder="Vetting Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.screenStatus || search.auditBy || search.vettedBy || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.screenStatus || search.auditBy || search.vettedBy || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Vetting Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("screenStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending Vetting">Pending Vetting</Option>
									<Option value="Pending Audit Checks">Pending Audit Checks</Option>

								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Audit By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("auditBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Vetted By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("vettedBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("vettingPeriod", val)}
									placeholder="Vetting Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.screenStatus || search.auditBy || search.vettedBy || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.screenStatus || search.auditBy || search.vettedBy || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Vetting List" >
							<Table bordered columns={tableColumns} dataSource={vetting} rowKey='id' scroll={{ x: 1600, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default CompilanceVetting



export const filterCombination = (screenStatus, auditBy, vettedBy, guardName, vettingCompletedOn, element) => {
	if (screenStatus && auditBy && vettedBy && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (screenStatus && auditBy && vettedBy && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && auditBy && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (auditBy && vettedBy && guardName && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && vettedBy && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (screenStatus && auditBy && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && vettedBy && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (auditBy && vettedBy && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (auditBy && guardName && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (vettedBy && guardName && vettingCompletedOn) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && auditBy && vettedBy) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (screenStatus && auditBy && guardName) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (auditBy && vettedBy && guardName) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (screenStatus && vettedBy && guardName) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()
	} else if (screenStatus && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (auditBy && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (vettedBy && vettingCompletedOn) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (guardName && vettingCompletedOn) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (screenStatus && auditBy) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (screenStatus && vettedBy) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (screenStatus && guardName) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (auditBy && vettedBy) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (auditBy && guardName) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (vettedBy && guardName) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (vettingCompletedOn) {

		return moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (vettedBy) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (auditBy) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (screenStatus) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase()

	}
}
