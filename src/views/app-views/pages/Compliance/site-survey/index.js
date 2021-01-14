import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import StatisticWidget from 'components/shared-components/StatisticWidget';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";


const { Option } = Select;

const siteSurveys = [
	{
		"id": "1",
		"siteName": "Store 1",
		"status": "Completed",
		"surveyor": "Security Officer",
		"surveyDate": 1583107200,
		"siteType": "Security Guarding"


	},
	{
		"id": "2",
		"siteName": "Store 2",
		"status": "Pending",
		"surveyor": "Security Officer",
		"surveyDate": 1583107200,
		"siteType": "CCTV"



	}
]

const staticSitesDataBox = [
	{
		title: 'Completed Site Surveys',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Site Surveys',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	}
]

export class StaticSiteSurveys extends Component {

	state = {
		sites: siteSurveys,
		search: {
			status: "",
			surveyor: "",
			surveyDate: "",
			siteName: "",
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
		let userList = siteSurveys
		let status = search.status
		let surveyor = search.surveyor
		let surveyDate = search.surveyDate
		let siteName = search.siteName

		let filteredArray = []
		filteredArray = userList.filter(element => {
			return filterCombination(status, surveyor, surveyDate, siteName, element)

		});
		this.setState({ sites: filteredArray })

	}


	render() {
		const { sites, search } = this.state;

		const tableColumns = [
			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<span className="d-flex">
						{record.siteName}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Survey Status',
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
				title: 'Surveyor',
				dataIndex: 'surveyor',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.surveyor}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.surveyor.toLowerCase();
						b = b.surveyor.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Survey Date',
				dataIndex: 'surveyDate',
				render: date => (
					<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.surveyDate).unix() - moment(b.surveyDate).unix(),
				width: 200
			},

			{
				title: 'Site Type',
				dataIndex: 'siteType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.siteType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteType.toLowerCase();
						b = b.siteType.toLowerCase();
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
			<div>
				<Row gutter={16} justify="center">
					<Col xs={20} sm={20} md={20} lg={20}>

						<Row gutter={16}>
							{
								staticSitesDataBox.map((elm, i) => (
									<Col xs={24} sm={24} md={12} lg={12} xl={12} key={i}>
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
									placeholder="Survey Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending">Pending</Option>
								</Select>
								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Surveyor"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("surveyor", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Security Officer">Security Officer</Option>
								</Select>



								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("surveyDate", val)}
									placeholder="Survey Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.surveyor || search.surveyDate || search.siteName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.surveyor || search.surveyDate || search.siteName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Survey Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending">Pending</Option>
								</Select>
								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Surveyor"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("surveyor", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Security Officer">Security Officer</Option>
								</Select>



								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("surveyDate", val)}
									placeholder="Survey Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.surveyor || search.surveyDate || search.siteName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.surveyor || search.surveyDate || search.siteName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Static Site Surveys" >
							<Table searchable bordered columns={tableColumns} dataSource={sites} rowKey='id' scroll={{ x: 1100, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default StaticSiteSurveys

export const filterCombination = (status, surveyor, surveyDate, siteName, element) => {
	if (status && surveyor && surveyDate && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase() && moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && surveyor && surveyDate) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase() && moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD")

	} else if (status && surveyor && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase() && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (surveyor && surveyDate && siteName) {

		return element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase() && moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && surveyDate && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && surveyor) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase()

	} else if (status && surveyDate) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD")

	} else if (status && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (surveyor && surveyDate) {

		return element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase() && moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD")

	} else if (surveyor && siteName) {

		return element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase() && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (surveyDate && siteName) {

		return moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase()

	} else if (surveyor) {

		return element.surveyor.trim().toUpperCase() === surveyor.trim().toUpperCase()

	} else if (surveyDate) {

		return moment.unix(element.surveyDate).format("YYYY/MM/DD") === moment(surveyDate).format("YYYY/MM/DD")

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	}
}