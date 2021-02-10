import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";


const { Option } = Select;

const sitesData = [
	{
		"id": "1",
		"siteName": "Store 1",
		"status": "Active",
		"siteType": "SG",
		"createDate": 1583107200,
		"sitePhone": "1212323",
		"siteEmail": "abc@abc.com",
		"address": "12345",
		"clientName": "ABC Ltd",
		"region": "South East"

	},
	{
		"id": "2",
		"siteName": "Building 2",
		"status": "Inactive",
		"siteType": "DS",
		"createDate": 1583107200,
		"sitePhone": "4353453",
		"siteEmail": "abc@abc.com",
		"address": "12345",
		"clientName": "ABC Ltd",
		"region": "South West"

	}
]

export class StaticSites extends Component {

	state = {
		sites: sitesData,
		currStatus: "active",

		search: {
			status: "",
			siteType: "",
			createDate: "",
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
		let userList = sitesData
		let status = search.status
		let siteType = search.siteType
		let createDate = search.createDate
		let siteName = search.siteName

		let filteredArray = []
		filteredArray = userList.filter(element => {
			return filterCombination(status, siteType, createDate, siteName, element)

		});
		this.setState({ sites: filteredArray })

	}

	viewItem = (action, record) => {
		this.props.history.push({
			pathname: '/app/pages/site-detail',
			state: { action, record }
		})
	}
	render() {
		const { sites, search, currStatus } = this.state;

		const tableColumns = [
			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<span className="d-flex">
						<a onClick={() => this.viewItem("viewItem", record)}>
							{record.siteName}
						</a>
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
				title: 'Site Phone',
				dataIndex: 'sitePhone',
				sorter: {
					compare: (a, b) => a.sitePhone.length - b.sitePhone.length,
				},
				width: 200
			},

			{
				title: 'Site Email',
				dataIndex: 'siteEmail',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.siteEmail}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteEmail.toLowerCase();
						b = b.siteEmail.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Address',
				dataIndex: 'address',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.address}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.address.toLowerCase();
						b = b.address.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
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
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.clientName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Region',
				dataIndex: 'region',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.region}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.region.toLowerCase();
						b = b.region.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},


			{
				title: 'Create Date',
				dataIndex: 'createDate',
				render: date => (
					<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.createDate).unix() - moment(b.createDate).unix(),
				width: 200
			},

			{
				title: 'Status',
				dataIndex: 'status',
				render: () => {
					return (
						<Button onClick={() => {
							if (currStatus == "active") {
								this.setState({ currStatus: "inactive" })
							}
							else if (currStatus == "inactive") {
								this.setState({ currStatus: "active" })
							}
						}}
							style={{ color: currStatus === 'active' ? 'lightgreen' : 'red', borderColor: currStatus === 'active' ? 'lightgreen' : 'red' }} className="text-capitalize" color={currStatus === 'active' ? 'cyan' : 'red'}>{currStatus}</Button>
					)
				},
				sorter: {
					compare: (a, b) => {
						a = a.status.toLowerCase();
						b = b.status.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

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
									placeholder="Site Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("siteType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SG">SG</Option>
									<Option value="DS">DS</Option>
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
									<Option value="Active">Active</Option>
									<Option value="Inactive">Inactive</Option>
								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("createDate", val)}
									placeholder="Create Date Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.siteType || search.createDate || search.siteName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.siteType || search.createDate || search.siteName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Site Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("siteType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SG">SG</Option>
									<Option value="DS">DS</Option>
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
									<Option value="Active">Active</Option>
									<Option value="Inactive">Inactive</Option>
								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("createDate", val)}
									placeholder="Create Date Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.siteType || search.createDate || search.siteName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.siteType || search.createDate || search.siteName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Static Sites List" >
							<Table searchable bordered columns={tableColumns} dataSource={sites} rowKey='id' scroll={{ x: 1600, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default StaticSites

export const filterCombination = (status, siteType, createDate, siteName, element) => {
	if (status && siteType && createDate && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && siteType && createDate) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD")

	} else if (status && siteType && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase() && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (siteType && createDate && siteName) {

		return element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && createDate && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && siteType) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase()

	} else if (status && createDate) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD")

	} else if (status && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (siteType && createDate) {

		return element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD")

	} else if (siteType && siteName) {

		return element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase() && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (createDate && siteName) {

		return moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD") && element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase()

	} else if (siteType) {

		return element.siteType.trim().toUpperCase() === siteType.trim().toUpperCase()

	} else if (createDate) {

		return moment.unix(element.createDate).format("YYYY/MM/DD") === moment(createDate).format("YYYY/MM/DD")

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	}
}