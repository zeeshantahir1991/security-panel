import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { Table } from "ant-table-extensions";
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const clientsData = [
	{
		"id": "1",
		"clientName": "John Smith",
		"img": "/img/avatars/thumb-1.jpg",
		"status": "active",
		"securityServices": "DS & MP",
		"purchaseStatus": "Expired",
		"dateCreated": 1583107200,

		"phoneNumber": "0121212",
		"email": "abc@gmail.com",
		"address": "12345",
		"purchaseOrder": "P123",
		"purchaseOrderStartDate": 1583107200,
		"purchaseOrderEndDate": 1583107200,
		"chargeRate": 12,
		"invoiceFrequency": "Monthly"

	},
	{
		"id": "2",
		"clientName": "Terrance Moreno",
		"img": "/img/avatars/thumb-2.jpg",
		"status": "inactive",
		"securityServices": "SG & DS",
		"purchaseStatus": "Valid",
		"dateCreated": 1583107200,

		"phoneNumber": "0121212",
		"email": "abc@gmail.com",
		"address": "12345",
		"purchaseOrder": "P123",
		"purchaseOrderStartDate": 1583107200,
		"purchaseOrderEndDate": 1583107200,
		"chargeRate": 12,
		"invoiceFrequency": "Monthly"


	},
	{
		"id": "3",
		"clientName": "Ron Vargas",
		"img": "/img/avatars/thumb-3.jpg",
		"status": "active",
		"securityServices": "SG",
		"purchaseStatus": "Expired",
		"dateCreated": 1583107200,

		"phoneNumber": "0121212",
		"email": "abc@gmail.com",
		"address": "12345",
		"purchaseOrder": "P123",
		"purchaseOrderStartDate": 1583107200,
		"purchaseOrderEndDate": 1583107200,
		"chargeRate": 12,
		"invoiceFrequency": "Monthly"
	}
]



const { Option } = Select;



export class Clients extends Component {

	state = {
		clients: clientsData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			status: "",
			securityServices: "",
			purchaseStatus: "",
			clientName: "",
			dateCreated: ""
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
		let userList = clientsData
		let status = search.status
		let securityServices = search.securityServices
		let purchaseStatus = search.purchaseStatus
		let clientName = search.clientName
		let dateCreated = search.dateCreated

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(status, securityServices, purchaseStatus, clientName, dateCreated, element)


		});
		this.setState({ clients: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { clients, search } = this.state;

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
				title: 'Phone',
				dataIndex: 'phoneNumber',
				sorter: {
					compare: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
				},
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
				title: 'Purchase Order',
				dataIndex: 'purchaseOrder',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.purchaseOrder}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.purchaseOrder.toLowerCase();
						b = b.purchaseOrder.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'PO Start Date',
				dataIndex: 'purchaseOrderStartDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.purchaseOrderStartDate).unix() - moment(b.purchaseOrderStartDate).unix(),
				width: 200
			},

			{
				title: 'PO End Date',
				dataIndex: 'purchaseOrderEndDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.purchaseOrderEndDate).unix() - moment(b.purchaseOrderEndDate).unix(),
				width: 200
			},

			{
				title: 'PO Status',
				dataIndex: 'purchaseStatus',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.purchaseStatus}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.purchaseStatus.toLowerCase();
						b = b.purchaseStatus.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
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
				title: 'Invoice Frequency',
				dataIndex: 'invoiceFrequency',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.invoiceFrequency}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.invoiceFrequency.toLowerCase();
						b = b.invoiceFrequency.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Screen Status',
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
				title: 'Date Created',
				dataIndex: 'dateCreated',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.dateCreated).unix() - moment(b.dateCreated).unix(),
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

				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={20} lg={20}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>


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
									<Option value="DS & MP">DS & MP</Option>
									<Option value="SG & DS">SG & DS</Option>
									<Option value="SG">SG</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Purchase Order Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("purchaseStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Valid">Valid</Option>
									<Option value="Expired">Expired</Option>
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
									onChange={(val) => this.handleChange("dateCreated", val)}
									placeholder="Create Date Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Client Name"
									onChange={(val) => this.handleChangeInput("clientName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.securityServices || search.purchaseStatus || search.clientName || search.dateCreated)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.securityServices || search.purchaseStatus || search.clientName || search.dateCreated) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									<Option value="DS & MP">DS & MP</Option>
									<Option value="SG & DS">SG & DS</Option>
									<Option value="SG">SG</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Purchase Order Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("purchaseStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Valid">Valid</Option>
									<Option value="Expired">Expired</Option>
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
									onChange={(val) => this.handleChange("dateCreated", val)}
									placeholder="Create Date Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Client Name"
									onChange={(val) => this.handleChangeInput("clientName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.securityServices || search.purchaseStatus || search.clientName || search.dateCreated)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.securityServices || search.purchaseStatus || search.clientName || search.dateCreated) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Client List" >
							<Table searchable bordered columns={tableColumns} dataSource={clients} rowKey='id' scroll={{ x: 2700, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default Clients



export const filterCombination = (status, securityServices, purchaseStatus, clientName, dateCreated, element) => {
	if (status && securityServices && purchaseStatus && clientName && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")

	} else if (status && securityServices && purchaseStatus && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (status && securityServices && clientName && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (securityServices && purchaseStatus && clientName && dateCreated) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (status && purchaseStatus && clientName && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")

	} else if (status && securityServices && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (status && purchaseStatus && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (status && clientName && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")

	} else if (securityServices && purchaseStatus && dateCreated) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (securityServices && clientName && dateCreated) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (purchaseStatus && clientName && dateCreated) {

		return element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (status && securityServices && purchaseStatus) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase()

	} else if (status && securityServices && clientName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (securityServices && purchaseStatus && clientName) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (status && purchaseStatus && clientName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()
	} else if (status && dateCreated) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (securityServices && dateCreated) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (purchaseStatus && dateCreated) {

		return element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")


	} else if (clientName && dateCreated) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")

	} else if (status && securityServices) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase()

	} else if (status && purchaseStatus) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase()

	} else if (status && clientName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (securityServices && purchaseStatus) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase()

	} else if (securityServices && clientName) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (purchaseStatus && clientName) {

		return element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (dateCreated) {

		return moment.unix(element.dateCreated).format("YYYY/MM/DD") === moment(dateCreated).format("YYYY/MM/DD")

	} else if (clientName) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (purchaseStatus) {

		return element.purchaseStatus.trim().toUpperCase() === purchaseStatus.trim().toUpperCase()

	} else if (securityServices) {

		return element.securityServices.trim().toUpperCase() === securityServices.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase()

	}
}
