import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, Form, Input, message, Button, Row, Col, Dropdown, Select, Menu, DatePicker } from 'antd';
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
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import StatisticWidget from 'components/shared-components/StatisticWidget';

const keyLogRegisterData = [
	{
		"id": "1",
		"siteName": "Store B",
		"clientName": "XYZ Ltd",
		"status": "Received",
		"keyReceiptPeriod": 1583107200,
		"keyReturnPeriod": 1583107200,
		"keyNumber": "P123",
		"keySerialNumber": "Apha Numeric",
		"issuedTo": "Guard Name",
		"returnBy": "Guard",

	},
	{
		"id": "2",
		"siteName": "Store A",
		"clientName": "ABC Ltd",
		"status": "Pending",
		"keyReceiptPeriod": 1583107200,
		"keyReturnPeriod": 1583107200,
		"keyNumber": "P423",
		"keySerialNumber": "Apha Numeric",
		"issuedTo": "Guard Name",
		"returnBy": "Guard",

	}
]


const keyLogRegistersBoxArray = [
	{
		title: 'Keys Released',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Key Returned',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	}
]

const { Option } = Select;



export class KeyLogRegister extends Component {

	state = {
		keyLogRegisters: keyLogRegisterData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			status: "",
			keyReturnPeriod: "",
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
		const { keyLogRegisters, search } = this.state;
		let userList = keyLogRegisterData
		let status = search.status
		let keyReturnPeriod = search.keyReturnPeriod
		let clientName = search.clientName
		let siteName = search.siteName
		let keyReceiptPeriod = search.keyReceiptPeriod

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(status, keyReturnPeriod, clientName, siteName, keyReceiptPeriod, element)


		});
		this.setState({ keyLogRegisters: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { keyLogRegisters, userProfileVisible, selectedUser, search } = this.state;

		const tableColumns = [


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
				title: 'Issued To',
				dataIndex: 'issuedTo',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.issuedTo}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.issuedTo.toLowerCase();
						b = b.issuedTo.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Return By',
				dataIndex: 'returnBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.returnBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.returnBy.toLowerCase();
						b = b.returnBy.toLowerCase();
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
								keyLogRegistersBoxArray.map((elm, i) => (
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
									placeholder="Key Status"
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

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("keyReturnPeriod", val)}
									placeholder="Key Return Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

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
									disabled={!(search.status || search.keyReturnPeriod || search.clientName || search.siteName || search.keyReceiptPeriod)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.keyReturnPeriod || search.clientName || search.siteName || search.keyReceiptPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Key Status"
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

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("keyReturnPeriod", val)}
									placeholder="Key Return Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

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
									disabled={!(search.status || search.keyReturnPeriod || search.clientName || search.siteName || search.keyReceiptPeriod)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.keyReturnPeriod || search.clientName || search.siteName || search.keyReceiptPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Key Log Registers" >
							<Table bordered columns={tableColumns} dataSource={keyLogRegisters} rowKey='id' scroll={{ x: 1300, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default KeyLogRegister



export const filterCombination = (status, keyReturnPeriod, clientName, siteName, keyReceiptPeriod, element) => {
	if (status && keyReturnPeriod && clientName && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (status && keyReturnPeriod && clientName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && keyReturnPeriod && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (keyReturnPeriod && clientName && siteName && keyReceiptPeriod) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && clientName && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (status && keyReturnPeriod && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && clientName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && siteName && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (keyReturnPeriod && clientName && keyReceiptPeriod) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (keyReturnPeriod && siteName && keyReceiptPeriod) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (clientName && siteName && keyReceiptPeriod) {

		return element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (status && keyReturnPeriod && clientName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase()

	} else if (status && keyReturnPeriod && siteName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()

	} else if (keyReturnPeriod && clientName && siteName) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()

	} else if (status && clientName && siteName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()
	} else if (status && keyReceiptPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (keyReturnPeriod && keyReceiptPeriod) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (clientName && keyReceiptPeriod) {

		return element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")


	} else if (siteName && keyReceiptPeriod) {

		return element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase() &&
			moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (status && keyReturnPeriod) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD")

	} else if (status && clientName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase()

	} else if (status && siteName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()

	} else if (keyReturnPeriod && clientName) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase()

	} else if (keyReturnPeriod && siteName) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD") &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()

	} else if (clientName && siteName) {

		return element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()

	} else if (keyReceiptPeriod) {

		return moment.unix(element.keyReceiptPeriod).format("YYYY/MM/DD") == moment(keyReceiptPeriod).format("YYYY/MM/DD")

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() == siteName.trim().toUpperCase()

	} else if (clientName) {

		return element.clientName.trim().toUpperCase() == clientName.trim().toUpperCase()

	} else if (keyReturnPeriod) {

		return moment.unix(element.keyReturnPeriod).format("YYYY/MM/DD") == moment(keyReturnPeriod).format("YYYY/MM/DD")

	} else if (status) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase()

	}
}
