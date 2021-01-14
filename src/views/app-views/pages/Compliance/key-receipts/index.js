import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import StatisticWidget from 'components/shared-components/StatisticWidget';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";

const keyReceiptsData = [
	{
		"id": "1",
		"keyReceipt": "P1234",
		"siteName": "SITE A",
		"status": "Received",
		"keyReceivedBy": "System User",
		"clientName": "XYZ Ltd",
		"keyType": "Alpha Numeric",
		"keyNumber": "Apha Numeric",
		"keySerialNumber": "Apha Numeric",
		"keyReceiptPeriod": 1583107200,
		"receivedFrom": "John Smith",

	},
	{
		"id": "2",
		"keyReceipt": "P12346",
		"siteName": "SITE B",
		"status": "Pending",
		"keyReceivedBy": "System User",
		"clientName": "ABC Ltd",
		"keyType": "Alpha Numeric",
		"keyNumber": "Apha Numeric",
		"keySerialNumber": "Apha Numeric",
		"keyReceiptPeriod": 1583107200,
		"receivedFrom": "John SM",



	}
]


const keyReceiptsBoxArray = [
	{
		title: 'Keys Received',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Key Receipts',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	}
]

const { Option } = Select;



export class KeyReceipts extends Component {

	state = {
		keyReceipts: keyReceiptsData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			status: "",
			keyReceivedBy: "",
			clientName: "",
			siteName: "",
			keyReceiptPeriod: ""
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
		let userList = keyReceiptsData
		let status = search.status
		let keyReceivedBy = search.keyReceivedBy
		let clientName = search.clientName
		let siteName = search.siteName
		let keyReceiptPeriod = search.keyReceiptPeriod

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(status, keyReceivedBy, clientName, siteName, keyReceiptPeriod, element)


		});
		this.setState({ keyReceipts: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { keyReceipts, search } = this.state;

		const tableColumns = [
			{
				title: 'Key Receipt',
				dataIndex: 'keyReceipt',
				render: (_, record) => (
					<div className="d-flex">
						<a >{record.keyReceipt} </a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.keyReceipt.toLowerCase();
						b = b.keyReceipt.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'KH Site',
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
				width: 200
			},

			{
				title: 'Key Type',
				dataIndex: 'keyType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.keyType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.keyType.toLowerCase();
						b = b.keyType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Key Number',
				dataIndex: 'keyNumber',
				sorter: {
					compare: (a, b) => a.keyNumber.length - b.keyNumber.length,
				},
				width: 150
			},
			{
				title: 'Key Number',
				dataIndex: 'keyNumber',
				sorter: {
					compare: (a, b) => a.keyNumber.length - b.keyNumber.length,
				},
				width: 150
			},

			{
				title: 'Key Received By',
				dataIndex: 'keyReceivedBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.keyReceivedBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.keyReceivedBy.toLowerCase();
						b = b.keyReceivedBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Key Received From',
				dataIndex: 'receivedFrom',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.receivedFrom}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.receivedFrom.toLowerCase();
						b = b.receivedFrom.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Received Date',
				dataIndex: 'keyReceiptPeriod',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.keyReceiptPeriod).unix() - moment(b.keyReceiptPeriod).unix(),
				width: 200
			},




			{
				title: 'Key Receipt Status',
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
			<div>
				<Row gutter={16} justify="center">
					<Col xs={20} sm={20} md={20} lg={20}>

						<Row gutter={16}>
							{
								keyReceiptsBoxArray.map((elm, i) => (
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
									placeholder="Key Receipt Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Pending">Pending</Option>
									<Option value="Received">Received</Option>

								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("keyReceiptPeriod", val)}
									placeholder="Key Receipt Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Key Received By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("keyReceivedBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="System User">System User</Option>
									<Option value="System User">System User</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Client"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("clientName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="ABC Ltd">ABC Ltd</Option>
									<Option value="XYZ Ltd">XYZ Ltd</Option>

								</Select>







								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.keyReceivedBy || search.clientName || search.siteName || search.keyReceiptPeriod)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.keyReceivedBy || search.clientName || search.siteName || search.keyReceiptPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Key Receipt Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Pending">Pending</Option>
									<Option value="Received">Received</Option>

								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("keyReceiptPeriod", val)}
									placeholder="Key Receipt Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Key Received By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("keyReceivedBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="System User">System User</Option>
									<Option value="System User">System User</Option>

								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Client"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("clientName", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="ABC Ltd">ABC Ltd</Option>
									<Option value="XYZ Ltd">XYZ Ltd</Option>

								</Select>







								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.keyReceivedBy || search.clientName || search.siteName || search.keyReceiptPeriod)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.keyReceivedBy || search.clientName || search.siteName || search.keyReceiptPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Key Receipts" >
							<Table searchable bordered columns={tableColumns} dataSource={keyReceipts} rowKey='id' scroll={{ x: 2100, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default KeyReceipts



export const filterCombination = (status, keyReceivedBy, clientName, siteName, keyReceiptPeriod, element) => {
	if (status && keyReceivedBy && clientName && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (status && keyReceivedBy && clientName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && keyReceivedBy && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (keyReceivedBy && clientName && siteName && keyReceiptPeriod) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && clientName && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (status && keyReceivedBy && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && clientName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (keyReceivedBy && clientName && keyReceiptPeriod) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (keyReceivedBy && siteName && keyReceiptPeriod) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (clientName && siteName && keyReceiptPeriod) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && keyReceivedBy && clientName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (status && keyReceivedBy && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (keyReceivedBy && clientName && siteName) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (status && clientName && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()
	} else if (status && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (keyReceivedBy && keyReceiptPeriod) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (clientName && keyReceiptPeriod) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (siteName && keyReceiptPeriod) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (status && keyReceivedBy) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase()

	} else if (status && clientName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (status && siteName) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (keyReceivedBy && clientName) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (keyReceivedBy && siteName) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (clientName && siteName) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (keyReceiptPeriod) {

		return moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") === moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (clientName) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (keyReceivedBy) {

		return element.keyReceivedBy.trim().toUpperCase() === keyReceivedBy.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() === status.trim().toUpperCase()

	}
}
