import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip, TimePicker } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
import StatisticWidget from 'components/shared-components/StatisticWidget';

const { RangePicker } = TimePicker
const timeSheets = [
	{
		"id": "1",
		"date": 1583107200,
		"day": "Mon",
		"siteName": "Site A",
		"securityServices": "SG",
		"position": 'Security Officer',
		"startTime": 1583107200,
		"endTime": 1583107200,
		'hour': 12,
		"clientName": "John Smith",
		"payRate": 10,
		"expenses": "10 GBP",
		"total": "80 GBP",
		"status": "Pending Approval",

	},

]



const { Option } = Select;



export class TimeSheets extends Component {

	state = {
		timeSheetsList: timeSheets,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			guardName: "",
			securityServices: "",
			siteName: "",
			clientName: "",
			position: "",
			status: ""
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
		let timeSheetsList = timeSheets
		let guardName = search.guardName
		let securityServices = search.securityServices
		let siteName = search.siteName
		let clientName = search.clientName
		let position = search.position
		let status = search.status

		let filteredArray = []
		filteredArray = timeSheetsList.filter(element => {

			return filterCombination(guardName, securityServices, siteName, clientName, position, status, element)


		});
		this.setState({ timeSheetsList: filteredArray })

	}



	render() {
		const { timeSheetsList, search } = this.state;

		const tableColumns = [




			{
				title: 'Date',
				dataIndex: 'date',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
				width: 150,
				fixed: 'left'

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
				width: 150
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						{/* <a onClick={() => this.viewItem("viewItem", record)}> */}

						<span>{record.siteName}</span>
						{/* </a> */}

					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				// fixed: 'left'

			},

			{
				title: 'Security Services',
				dataIndex: 'securityServices',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.securityServices}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.securityServices.toLowerCase();
						b = b.securityServices.toLowerCase();
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
				width: 150
			},



			{
				title: 'Start Time',
				dataIndex: 'startTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.startTime).unix() - moment(b.startTime).unix(),
				width: 150
			},


			{
				title: 'End Time',
				dataIndex: 'endTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.endTime).unix() - moment(b.endTime).unix(),
				width: 150
			},



			{
				title: 'Hour',
				dataIndex: 'hour',
				sorter: {
					compare: (a, b) => a.hour.length - b.hour.length,
				},
				width: 150

			},

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.clientName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
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
				title: 'Expenses',
				dataIndex: 'expenses',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.expenses}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.expenses.toLowerCase();
						b = b.expenses.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Total',
				dataIndex: 'total',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.total}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.total.toLowerCase();
						b = b.total.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Status',
				dataIndex: 'actions',
				render: (_, record) => (
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<Tooltip title="">
							{
								record.status.toLowerCase() == "pending approval" ?
									<Button danger type="warning" size="small" >{record.status}</Button> :
									record.status.toLowerCase() == "approved" ?
										<Button type="success" size="small" >{record.status}</Button> :

										null
							}
						</Tooltip>

					</div>
				),
				width: 150,
			},








			// {
			// 	title: '',
			// 	dataIndex: 'actions',
			// 	render: (_, elm) => (
			// 		<div className="text-right">

			// 			<Tooltip title="Cancel Shift">
			// 				<Button danger onClick={() => this.cancelledShift("cancelledShift", elm)} size="small" >Cancel Shift</Button>
			// 			</Tooltip>
			// 		</div>
			// 	)
			// }
		];

		return (
			<div style={AppStyles.marginTop50}>

				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={24} lg={24}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>



								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Client Name"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("clientName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Client A">Client A</Option>
									<Option value="Client B">Client B</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Site Name"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("siteName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Site A">Site A</Option>
									<Option value="Site B">Site B</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Security Services"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("securityServices", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="DS">DS</Option>
									<Option value="SG">SG</Option>

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
									<Option value="Security Officer">Security Officer</Option>
									<Option value="Supervisor">Supervisor</Option>
									<Option value="Mobile Patrol">Mobile Patrol</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Timesheet status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Approved">Approved</Option>
									<Option value="Pending Approval">Pending Approval</Option>

								</Select>


								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.guardName || search.securityServices || search.siteName || search.clientName || search.position || search.status)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.securityServices || search.siteName || search.clientName || search.position || search.status) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Client Name"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("clientName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Client A">Client A</Option>
									<Option value="Client B">Client B</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Site Name"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("siteName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Site A">Site A</Option>
									<Option value="Site B">Site B</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Security Services"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("securityServices", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="DS">DS</Option>
									<Option value="SG">SG</Option>

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
									<Option value="Security Officer">Security Officer</Option>
									<Option value="Supervisor">Supervisor</Option>
									<Option value="Mobile Patrol">Mobile Patrol</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Timesheet status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Approved">Approved</Option>
									<Option value="Pending Approval">Pending Approval</Option>

								</Select>

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.guardName || search.securityServices || search.siteName || search.clientName || search.position || search.status)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.securityServices || search.siteName || search.clientName || search.position || search.status) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Time Sheet List" >
							<Table searchable bordered columns={tableColumns} dataSource={timeSheetsList} rowKey='id' scroll={{ x: 2000, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default TimeSheets





export const filterCombination = (guardName, securityServices, siteName, clientName, position, status, element) => {
	if (guardName && securityServices && siteName && clientName && position, status) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase() &&
			element.status.trim().toUpperCase() === status.trim().toUpperCase()


	}
	if (guardName && securityServices && siteName && clientName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()

	} else if (guardName && securityServices && siteName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (guardName && securityServices && clientName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (securityServices && siteName && clientName && position) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (guardName && siteName && clientName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()

	} else if (guardName && securityServices && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (guardName && siteName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (guardName && clientName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()

	} else if (securityServices && siteName && position) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (securityServices && clientName && position) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (siteName && clientName && position) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (guardName && securityServices && siteName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (guardName && securityServices && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (securityServices && siteName && clientName) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (guardName && siteName && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()
	} else if (guardName && position) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (securityServices && position) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (siteName && position) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()


	} else if (clientName && position) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.position.trim().toUpperCase() === position.trim().toUpperCase()

	} else if (guardName && securityServices) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase()

	} else if (guardName && siteName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (guardName && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (securityServices && siteName) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (securityServices && clientName) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (siteName && clientName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (position) {

		return element.position.trim().toUpperCase() === position.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase()

	} else if (clientName) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (securityServices) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase()

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	}
}
