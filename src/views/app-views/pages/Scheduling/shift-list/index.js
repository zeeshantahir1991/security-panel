import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";

const shiftData = [
	{
		"id": "1",
		"clientName": "John Smith",
		"img": "/img/avatars/thumb-1.jpg",
		"shiftType": "MP",
		"siteName": "Site A",
		"guardName": "John Sm",
		"shiftStartTime": 1583107200,
		"shiftEndTime": 1583107200,
		"shiftDate": 1583107200,
		"day": "Mon",
		"chargeRate": 12,
		"break": "No",
		"position": "Security",
		"payRate": 10,
		"checkinRadius": 1,
		"trackingInterval": 60,
		"expenseType": "Mileage",
		"expense": 5

	},
	{
		"id": "2",
		"clientName": "Terrance Moreno",
		"img": "/img/avatars/thumb-2.jpg",
		"shiftType": "DS",
		"siteName": "Site B",
		"guardName": "John Sm",
		"shiftStartTime": 1583107200,
		"shiftEndTime": 1583107200,
		"shiftDate": 1583107200,
		"day": "Mon",
		"chargeRate": 12,
		"break": "No",
		"position": "Security",
		"payRate": 10,
		"checkinRadius": 1,
		"trackingInterval": 60,
		"expenseType": "Mileage",
		"expense": 5


	},
	{
		"id": "3",
		"clientName": "Ron Vargas",
		"img": "/img/avatars/thumb-3.jpg",
		"shiftType": "DS",
		"siteName": "Site C",
		"guardName": "John Sm",
		"shiftStartTime": 1583107200,
		"shiftEndTime": 1583107200,
		"shiftDate": 1583107200,
		"day": "Mon",
		"chargeRate": 12,
		"break": "30",
		"position": "Security",
		"payRate": 20,
		"checkinRadius": 1,
		"trackingInterval": 60,
		"expenseType": "N/A",
		"expense": 0

	}
]



const { Option } = Select;



export class ShiftList extends Component {

	state = {
		shiftList: shiftData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			guardName: "",
			shiftType: "",
			siteName: "",
			clientName: "",
			shiftStartTime: "",
			shiftEndTime: ""
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
		let userList = shiftData
		let guardName = search.guardName
		let shiftType = search.shiftType
		let siteName = search.siteName
		let clientName = search.clientName
		let shiftStartTime = search.shiftStartTime
		let shiftEndTime = search.shiftEndTime

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(guardName, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element)


		});
		this.setState({ shiftList: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { shiftList, search } = this.state;

		const tableColumns = [
			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.clientName} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.siteName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Shift Type',
				dataIndex: 'shiftType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.shiftType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.shiftType.toLowerCase();
						b = b.shiftType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Shift Date',
				dataIndex: 'shiftDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftDate).unix() - moment(b.shiftDate).unix(),
				width: 200
			},

			{
				title: 'Day',
				dataIndex: 'day',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.day}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.day.toLowerCase();
						b = b.day.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Start Time',
				dataIndex: 'shiftStartTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftStartTime).unix() - moment(b.shiftStartTime).unix(),
				width: 200
			},



			{
				title: 'End Time',
				dataIndex: 'shiftEndTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftEndTime).unix() - moment(b.shiftEndTime).unix(),
				width: 200
			},

			{
				title: 'Charge Rate',
				dataIndex: 'chargeRate',
				sorter: {
					compare: (a, b) => a.chargeRate.length - b.chargeRate.length,
				},
				width: 150

			},

			{
				title: 'Break',
				dataIndex: 'break',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.break}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.break.toLowerCase();
						b = b.break.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Position',
				dataIndex: 'position',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.position}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.position.toLowerCase();
						b = b.position.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.guardName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
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
				title: 'Checkin Radius',
				dataIndex: 'checkinRadius',
				sorter: {
					compare: (a, b) => a.checkinRadius.length - b.checkinRadius.length,
				},
				width: 150

			},

			{
				title: 'Tracking Interval',
				dataIndex: 'trackingInterval',
				sorter: {
					compare: (a, b) => a.trackingInterval.length - b.trackingInterval.length,
				},
				width: 150

			},

			{
				title: 'Expense Type',
				dataIndex: 'expenseType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.expenseType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.expenseType.toLowerCase();
						b = b.expenseType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Expense',
				dataIndex: 'expense',
				sorter: {
					compare: (a, b) => a.expense.length - b.expense.length,
				},
				width: 150

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
			<div style={AppStyles.marginTop50}>

				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={20} lg={20}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>


								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Shift Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("shiftType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="DS">DS</Option>
									<Option value="MP">MP</Option>

								</Select>

								<Input
									placeholder="Client Name"
									onChange={(val) => this.handleChangeInput("clientName", val)}
									style={componentStyles.filtersInputStyle} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />



								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftStartTime", val)}
									placeholder="Shift Start Time"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftEndTime", val)}
									placeholder="Shift End Time"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Shift Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("shiftType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="DS">DS</Option>
									<Option value="MP">MP</Option>

								</Select>

								<Input
									placeholder="Client Name"
									onChange={(val) => this.handleChangeInput("clientName", val)}
									style={componentStyles.filtersInputStyle} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />



								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftStartTime", val)}
									placeholder="Shift Start Time"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftEndTime", val)}
									placeholder="Shift End Time"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Shift List" >
							<Table searchable bordered columns={tableColumns} dataSource={shiftList} rowKey='id' scroll={{ x: 3100, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default ShiftList



export const filterCombination = (guardName, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element) => {
	if (guardName && shiftType && siteName && clientName && shiftStartTime, shiftEndTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD") &&
			moment.unix(element.shiftEndTime).format("YYYY/MM/DD") === moment(shiftEndTime).format("YYYY/MM/DD")


	}
	if (guardName && shiftType && siteName && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (guardName && shiftType && siteName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && shiftType && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && siteName && clientName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && siteName && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (guardName && shiftType && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && siteName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (shiftType && siteName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && clientName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (siteName && clientName && shiftStartTime) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && shiftType && siteName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (guardName && shiftType && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftType && siteName && clientName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (guardName && siteName && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()
	} else if (guardName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (siteName && shiftStartTime) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (clientName && shiftStartTime) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (guardName && shiftType) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase()

	} else if (guardName && siteName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (guardName && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftType && siteName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (shiftType && clientName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (siteName && clientName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftStartTime) {

		return moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (shiftEndTime) {

		return moment.unix(element.shiftEndTime).format("YYYY/MM/DD") === moment(shiftEndTime).format("YYYY/MM/DD")

	} else if (clientName) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (shiftType) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase()

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	}
}
