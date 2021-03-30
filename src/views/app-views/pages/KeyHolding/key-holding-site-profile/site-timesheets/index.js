import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import { componentStyles } from "./../../styles";


const { Option } = Select;

const sitesData = [
	{
		"id": "1",
		"guardName": "John Smith",
		"position": "Security Officer",
		"securityServices": "KH",
		"day": "Monday",
		"startTime": 1783107200,
		"endTime": 1983107200,
		"hours": 12,
		"chargeRate": "10 GBP",
		"expenses": "10 GBP",

	},

	{
		"id": "2",
		"guardName": "John Smith",
		"position": "Security Officer",
		"securityServices": "KH",
		"day": "Monday",
		"startTime": 1783107200,
		"endTime": 1983107200,
		"hours": 12,
		"chargeRate": "10 GBP",
		"expenses": "10 GBP",

	}
]

export class SiteTimesheets extends Component {

	state = {
		sites: sitesData,
		search: {
			position: "",
			guardName: "",
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
		let userList = sitesData

		let position = search.position
		let guardName = search.guardName

		let filteredArray = []
		filteredArray = userList.filter(element => {
			return filterCombination(position, guardName, element)

		});
		this.setState({ sites: filteredArray })

	}


	render() {
		const { sites, search } = this.state;

		const tableColumns = [
			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<span className="d-flex">

						{record.guardName}
					</span>
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
				title: 'position',
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
				dataIndex: 'startTime',
				render: date => (
					<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("HH:MM")} </span>
				),
				sorter: (a, b) => moment(a.startTime).unix() - moment(b.startTime).unix(),
				width: 200
			},

			{
				title: 'End Time',
				dataIndex: 'endTime',
				render: date => (
					<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("HH:MM")} </span>
				),
				sorter: (a, b) => moment(a.endTime).unix() - moment(b.endTime).unix(),
				width: 200
			},

			{
				title: 'Hours',
				dataIndex: 'hours',
				sorter: {
					compare: (a, b) => a.hours.length - b.hours.length,
				},
				width: 150
			},

			{
				title: 'Charge Rate',
				dataIndex: 'chargeRate',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.chargeRate}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.chargeRate.toLowerCase();
						b = b.chargeRate.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
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
					<Col xs={0} sm={0} md={24} lg={24}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="position"
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
								</Select>



								<Button
									disabled={!(search.position || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.position || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={0} lg={0}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.justifyContentCenter}>

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="position"
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
								</Select>



								<Button
									disabled={!(search.position || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.position || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Timesheets" >
							<Table searchable bordered columns={tableColumns} dataSource={sites} rowKey='id' scroll={{ x: 1800, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default SiteTimesheets

export const filterCombination = (position, guardName, element) => {
	if (position && guardName) {

		return element.position.trim().toUpperCase() === position.trim().toUpperCase() && element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (position) {

		return element.position.trim().toUpperCase() === position.trim().toUpperCase()

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	}
}