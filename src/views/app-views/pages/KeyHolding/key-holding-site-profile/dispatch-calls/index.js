import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import { componentStyles } from "./../../styles";
import EditDispatchCall from "../edit-dispatch-call";

const dispatchCallsData = [
	{
		"id": "1",
		"siteName": "Store 1",
		"status": "Open",
		"incidentType": "Alarm",
		"severity": "Low",
		"incidentPeriod": 1583107200,
		"dispatchCallId": "Dispatch Call ID",
		"clientName": "ABC Ltd",
		"dispatchedGuard": "Guard A",
		"notifiedB": "Police"

	},
	{
		"id": "2",
		"siteName": "Store 2",
		"status": "Open",
		"incidentType": "Alarm",
		"severity": "Medium",
		"incidentPeriod": 1583107200,
		"dispatchCallId": "Dispatch Call ID",
		"clientName": "ABC Ltd",
		"dispatchedGuard": "Guard B",
		"notifiedB": "Help Desk"


	},
	{
		"id": "3",
		"siteName": "Store 3",
		"status": "Closed",
		"incidentType": "Arson",
		"severity": "High",
		"incidentPeriod": 1583107200,
		"dispatchCallId": "Dispatch Call ID",
		"clientName": "ABC Ltd",
		"dispatchedGuard": "Guard C",
		"notifiedB": "Other"

	}
]



const { Option } = Select;



export class DispatchCalls extends Component {

	state = {
		dispatchCalls: dispatchCallsData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			status: "",
			incidentType: "",
			severity: "",
			siteName: "",
			incidentPeriod: ""
		},
		edit: false
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
		let userList = dispatchCallsData
		let status = search.status
		let incidentType = search.incidentType
		let severity = search.severity
		let siteName = search.siteName
		let incidentPeriod = search.incidentPeriod

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(status, incidentType, severity, siteName, incidentPeriod, element)


		});
		this.setState({ dispatchCalls: filteredArray })

	}

	callbackFunction = (edit) => {

		this.setState({ edit: edit })

	}

	render() {
		const { dispatchCalls, search, edit } = this.state;

		const tableColumns = [
			{
				title: 'Dispatch Call ID',
				dataIndex: 'dispatchCallId',
				render: (_, record) => (
					<div className="d-flex">

						<a onClick={() => this.setState({
							edit: true
						})}>
							{record.dispatchCallId} </a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.dispatchCallId.toLowerCase();
						b = b.dispatchCallId.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">
						<a>{record.clientName}</a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'KH Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						<a>{record.siteName}</a>
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
				title: 'Dispatched Guard',
				dataIndex: 'dispatchedGuard',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.dispatchedGuard}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.dispatchedGuard.toLowerCase();
						b = b.dispatchedGuard.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},


			{
				title: 'Incident',
				dataIndex: 'incidentType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.incidentType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.incidentType.toLowerCase();
						b = b.incidentType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Incident Date & Time',
				dataIndex: 'incidentPeriod',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.incidentPeriod).unix() - moment(b.incidentPeriod).unix(),
				width: 200
			},


			{
				title: 'Severity',
				dataIndex: 'severity',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.severity}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.severity.toLowerCase();
						b = b.severity.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},


			{
				title: 'Notified By',
				dataIndex: 'notifiedB',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.notifiedB}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.notifiedB.toLowerCase();
						b = b.notifiedB.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Status',
				dataIndex: 'status',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.status}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.status.toLowerCase();
						b = b.status.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
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
			<div style={AppStyles.marginTop50}>
				{!edit ?
					<Row gutter={16} justify="center">
						<Col xs={0} sm={0} md={24} lg={24}>
							<Card title="Filters" style={AppStyles.paddingBottom20}>
								<div style={AppStyles.flexDirectionRow}>
									<DatePicker style={componentStyles.datePicker}
										onChange={(val) => this.handleChange("incidentPeriod", val)}
										placeholder="Incident Period"
										// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
										format={'YYYY/MM/DD'} />

									<Select
										showSearch
										style={componentStyles.selectStyle}
										bordered={false}
										placeholder="Incident Type"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("incidentType", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="Alarm">Alarm</Option>
										<Option value="Arson">Arson</Option>

									</Select>

									<Select
										showSearch
										style={componentStyles.selectStyle}
										bordered={false}
										placeholder="Severity"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("severity", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="Low">Low</Option>
										<Option value="Medium">Medium</Option>
										<Option value="High">High</Option>

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
										<Option value="Open">Open</Option>
										<Option value="Closed">Closed</Option>

									</Select>





									<Input
										placeholder="Site Name"
										onChange={(val) => this.handleChangeInput("siteName", val)}
										style={componentStyles.filtersInputStyle} />
									<Button
										disabled={!(search.status || search.incidentType || search.severity || search.siteName || search.incidentPeriod)}
										onClick={() => { this.searchInTable() }}
										style={!(search.status || search.incidentType || search.severity || search.siteName || search.incidentPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
										htmlType="submit" block>
										Search
				</Button>
								</div>
							</Card>
						</Col>
						<Col xs={24} sm={24} md={0} lg={0}>
							<Card title="Filters" style={AppStyles.paddingBottom20}>
								<div style={AppStyles.justifyContentCenter}>

									<DatePicker style={componentStyles.datePicker}
										onChange={(val) => this.handleChange("incidentPeriod", val)}
										placeholder="Incident Period"
										// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
										format={'YYYY/MM/DD'} />

									<Select
										showSearch
										style={componentStyles.selectStyleSM}
										bordered={false}
										placeholder="Incident Type"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("incidentType", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="Alarm">Alarm</Option>
										<Option value="Arson">Arson</Option>

									</Select>

									<Select
										showSearch
										style={componentStyles.selectStyleSM}
										bordered={false}
										placeholder="Severity"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("severity", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="Low">Low</Option>
										<Option value="Medium">Medium</Option>
										<Option value="High">High</Option>

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
										<Option value="Open">Open</Option>
										<Option value="Closed">Closed</Option>

									</Select>





									<Input
										placeholder="Site Name"
										onChange={(val) => this.handleChangeInput("siteName", val)}
										style={componentStyles.filtersInputStyle} />
									<Button
										disabled={!(search.status || search.incidentType || search.severity || search.siteName || search.incidentPeriod)}
										onClick={() => { this.searchInTable() }}
										style={!(search.status || search.incidentType || search.severity || search.siteName || search.incidentPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
										htmlType="submit" block>
										Search
				                   </Button>
								</div>
							</Card>
						</Col>

						<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
							<Card className="card" title="Dispatch Calls List" >
								<Table searchable bordered columns={tableColumns} dataSource={dispatchCalls} rowKey='id' scroll={{ x: 2000, y: 300 }} />
							</Card>
						</Col>
					</Row>

					:
					<EditDispatchCall parentCallback={this.callbackFunction} />
				}

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default DispatchCalls



export const filterCombination = (status, incidentType, severity, siteName, incidentPeriod, element) => {
	if (status && incidentType && severity && siteName && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")

	} else if (status && incidentType && severity && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (status && incidentType && siteName && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (incidentType && severity && siteName && incidentPeriod) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (status && severity && siteName && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")

	} else if (status && incidentType && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (status && severity && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (status && siteName && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")

	} else if (incidentType && severity && incidentPeriod) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (incidentType && siteName && incidentPeriod) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (severity && siteName && incidentPeriod) {

		return element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (status && incidentType && severity) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase()

	} else if (status && incidentType && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (incidentType && severity && siteName) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && severity && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()
	} else if (status && incidentPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (incidentType && incidentPeriod) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (severity && incidentPeriod) {

		return element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")


	} else if (siteName && incidentPeriod) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")

	} else if (status && incidentType) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase()

	} else if (status && severity) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase()

	} else if (status && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (incidentType && severity) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.severity.trim().toUpperCase() === severity.trim().toUpperCase()

	} else if (incidentType && siteName) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (severity && siteName) {

		return element.severity.trim().toUpperCase() === severity.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (incidentPeriod) {

		return moment.unix(element.incidentPeriod).format("YYYY/MM/DD") === moment(incidentPeriod).format("YYYY/MM/DD")

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (severity) {

		return element.severity.trim().toUpperCase() === severity.trim().toUpperCase()

	} else if (incidentType) {

		return element.incidentType.trim().toUpperCase() === incidentType.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase()

	}
}
