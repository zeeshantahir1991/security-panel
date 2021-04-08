import {
	DeleteOutlined,
	CheckCircleOutlined,
	PrinterOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Menu, Row, Tooltip, Modal, Checkbox, Form, Input, Select, DatePicker, TimePicker } from 'antd';
import userData from "assets/data/company-list.data.json";
import { Table } from "ant-table-extensions";
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { componentStyles } from "./../../styles";
import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";


const { Option } = Select;

const sitesData = [
	{
		"id": "1",
		"guardName": "XYZ",
		"position": "Security Key",
		"securityServices": "123",
		"day": "000",
		"startTime": 1783107200,
		"endTime": 1983107200,
		"hours": "Johny",
		"chargeRate": "Johny Bravo",
		"expenses": "12/12/2021",

	},

	{
		"id": "2",
		"guardName": "ABC",
		"position": "Entry Key",
		"securityServices": "456",
		"day": "000",
		"startTime": 1783107200,
		"endTime": 1983107200,
		"hours": "Tom",
		"chargeRate": "Tom Cruise",
		"expenses": "11/11/2021",

	}
]

export class SiteTimesheets extends Component {

	state = {
		sites: sitesData,
		open: false,
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
		const { sites, search, open } = this.state;

		const tableColumns = [
			{
				title: 'Store Location',
				dataIndex: 'storeLocation',
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
				title: 'Key Type',
				dataIndex: 'keyType',
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
				title: 'Key Number',
				dataIndex: 'keyNumber',
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
				title: 'Key Number',
				dataIndex: 'keyNumber',
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
				title: 'Secure Box Number ',
				dataIndex: 'secureBoxNumber ',
				// render: date => (
				// 	<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("HH:MM")} </span>
				// ),
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.startTime}</span>
					</div>
				),
				sorter: (a, b) => moment(a.startTime).unix() - moment(b.startTime).unix(),
				width: 200
			},

			{
				title: 'PIN',
				dataIndex: 'pin',
				// render: date => (
				// 	<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("HH:MM")} </span>
				// ),
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.endTime}</span>
					</div>
				),
				sorter: (a, b) => moment(a.endTime).unix() - moment(b.endTime).unix(),
				width: 200
			},

			{
				title: 'Received By',
				dataIndex: 'receivedBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.hours}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => a.hours.length - b.hours.length,
				},
				width: 150
			},

			{
				title: 'Received From ( Full Name)',
				dataIndex: 'receivedFrom',
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
				title: 'Receipt Date',
				dataIndex: 'receiptDate',
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



			// {
			// 	title: '',
			// 	dataIndex: 'actions',
			// 	render: (_, elm) => (
			// 		<div className="text-right">
			// 			<Tooltip title="View">
			// 				<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
			// 			</Tooltip>
			// 			<Tooltip title="Delete">
			// 				<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
			// 			</Tooltip>
			// 		</div>
			// 	)
			// }
		];

		return (
			<div style={AppStyles.marginTop50}>
			<Col xs={24} sm={24} md={12} lg={12}>
				<Modal title="Add Site Key"
					onCancel={() => this.setState({ open: false })}
					visible={open}
					// bodyStyle={{height:500}}
					width={900}
					footer={[
						<Button
							style={componentStyles.continueButton} htmlType="submit" onClick={()=>{this.setState({open: false})}} block>
							Add New Key
					    </Button>
					]}
				>
					<Form layout="vertical">

						<Row gutter={16}>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="siteName"
									label="Site Name"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" disabled defaultValue={'Seronto Miami'} style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="keyHolding"
									label="Key Holding Site"
									// rules={rules.storeLocation}
									hasFeedback
								>
									<Select
										showSearch
										style={componentStyles.selectWhiteStyle}
										bordered={false}
										placeholder="Key Holding Site"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("qrScanInterval", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="sitea">Site A</Option>
										<Option value="siteb">SITE B</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24}>
								<Form.Item
									name="keyDescription"
									label="Key Description"
									// rules={rules.checkpointDescriptor}
									hasFeedback
								>
									<Textarea rows={2} placeholder={'Description...'} style={componentStyles.borderColor}  />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={8} lg={8}>
								<Form.Item
									name="keytype"
									label="Key Type"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={8} lg={8}>
								<Form.Item
									name="keyNumber"
									label="Key Number "
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={8} lg={8}>
								<Form.Item
									name="keySerialNumber(Alphanumeric)"
									label="Key Serial Number  (Alphanumeric)"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={6} lg={6}>
								<Form.Item
									name="storeLocation"
									label="Store Location"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>

							{/* <Col xs={24} sm={24} md={8} lg={8}>
								<Form.Item
									name="qrScanInterval"
									label="QR Scan Interval Minutes"
									// rules={rules.storeLocation}
									hasFeedback
								>
									<Select
										showSearch
										style={componentStyles.selectWhiteStyle}
										bordered={false}
										placeholder="QR Scan Interval Minutes"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("qrScanInterval", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="30">30</Option>
										<Option value="60">60</Option>
									</Select>
								</Form.Item>
							</Col> */}
							<Col xs={24} sm={24} md={6} lg={6}>
								<Form.Item
									name="secureboxnumber"
									label="Secure Box Number"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={6} lg={6}>
								<Form.Item
									name="pin"
									label="PIN"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={6} lg={6} style={{marginTop:35}}>

								<Checkbox style={componentStyles.borderColor} checked>Secure Shortage?</Checkbox>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="receivedby"
									label="Received By"
									// rules={rules.storeLocation}
									hasFeedback
								>
									<Select
										showSearch
										style={componentStyles.selectWhiteStyle}
										bordered={false}
										placeholder="System Users List"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("qrScanInterval", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="System Users List">System Users List</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="receivedfrom"
									label="Received From (Full Name)"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={6} lg={6}>
								<Form.Item
									name="receiptdate"
									label="Receipt Date"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<DatePicker type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={6} lg={6}>
								<Form.Item
									name="receipttime"
									label="Receipt Time"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<TimePicker type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
						</Row>
					</Form>

				</Modal>	
				</Col>
				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={24} lg={24}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Input
									placeholder="Store location"
									onChange={(val) => this.handleChangeInput("storeLocation", val)}
									style={componentStyles.filtersInputStyle} />

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Key Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("keyType", val)}
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
						<Card className="card" title="Site Keys List" extra={
								<Button
									onClick={() => this.setState({ open: true })}
									style={componentStyles.continueButton} htmlType="submit" block>
									Add Key
								        </Button>

							}>
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