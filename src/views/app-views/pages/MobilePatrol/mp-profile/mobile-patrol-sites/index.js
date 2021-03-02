import { DeleteOutlined, PrinterOutlined, BuildOutlined, CompassOutlined, InboxOutlined, MailOutlined, PhoneOutlined, UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Modal, Checkbox, Input, Row, Select, Tooltip, Form, Switch } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import { componentStyles } from "./../../styles";
import Textarea from 'views/app-views/components/data-entry/input/Textarea';

const mobilePatrolData = [
	{
		"id": "1",
		"mpSiteName": "Store 1",
		"status": "Active",
		"createDate": 1583107200,
		"sitePhone": "+12312321",
		"region": "South West",
		"siteEmail": "abc@abc.com",
		"address": "Address 1"

	},

	{
		"id": "2",
		"mpSiteName": "Building 2",
		"status": "Inactive",
		"createDate": 1583107200,
		"sitePhone": "+34234234",
		"region": "South East",
		"siteEmail": "xyz@xyz.com",
		"address": "Address 2"



	}
]

const footPatrolData = [
	{
		"id": "1",
		"checkpointName": "Front Door",
		"checkpointDescriptor": "cxvcxv",

	},
	{
		"id": "2",
		"checkpointName": "Stairs",
		"checkpointDescriptor": "asdsad",
	}
]





const { Option } = Select;

const rules = []
export class MobilePatrolSites extends Component {

	state = {
		mobilePatrolList: mobilePatrolData,
		footPatrol: footPatrolData, 
		// tableColumnsCheckPoint,
		open: false,
		currStatus: 'active',
		search: {
			status: "",
			createDate: "",
			mpSiteName: "",
			edit: false,
			form: false,
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

	displayAddCheckpointModal = () => {
		const { open } = this.state
		console.log(open);
		return (
			<>
				<Modal title="Add Checkpoint"
					onCancel={() => this.setState({ open: false })}
					visible={this.state.open}
					footer={[
						<Button
							onClick={() => this.setState({ open: false })}
							style={componentStyles.continueButton} htmlType="submit" block>
							Add Checkpoint
					    </Button>
					]}
				>
					<Form layout="vertical">

						<Row gutter={16}>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="mobilepatrolsiteName"
									label="Mobile Patrol Site Name"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" disabled defaultValue={'Site A'} style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="checkpointName"
									label="Checkpoint Name"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={24} lg={24}>
								<Form.Item
									name="checkpointDescriptor"
									label="Checkpoint Descriptor"
									// rules={rules.checkpointDescriptor}
									hasFeedback
								>
									<Textarea placeholder={'Description...'} style={componentStyles.borderColor} />
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={8} lg={8}>
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
							</Col>
							<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop5}>

								<Checkbox style={componentStyles.borderColor} checked>Status</Checkbox>
							</Col>
						</Row>
					</Form>

				</Modal>
			</>
		)
	}


	render() {
		const { mobilePatrolList, currStatus, edit, form, open, footPatrol } = this.state;

		const tableColumnsCheckPoint = [

			{
				title: 'Checkpoint Name',
				dataIndex: 'checkpointName',
				render: (_, record) => (
					<div className="d-flex">
						<span>
						<a onClick={()=>{this.setState({open: true})}}>							
						{record.checkpointName}
						</a>
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.checkpointName.toLowerCase();
						b = b.checkpointName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
		
			{
				title: 'Checkpoint Descriptor',
				dataIndex: 'checkpointDescriptor',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.checkpointDescriptor}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.checkpointDescriptor.toLowerCase();
						b = b.checkpointDescriptor.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 750
			},
		
		
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
		
						<Tooltip title="Print">
							<Button icon={<PrinterOutlined />} size="small" />
						</Tooltip>
					</div>
				),
				// width: 100
			},
		
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
		
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} size="small" />
						</Tooltip>
					</div>
				)
			}
		];

		const tableColumns = [
			{
				title: 'Site Name',
				dataIndex: 'mpSiteName',
				render: (_, record) => (
					<span className="d-flex">
						<a onClick={() => this.setState({ edit: true })}>

							{record.mpSiteName}
						</a>

					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.mpSiteName.toLowerCase();
						b = b.mpSiteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Site Phone',
				dataIndex: 'sitePhone',
				render: (_, record) => (
					<span className="d-flex">
						{record.sitePhone}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.sitePhone.toLowerCase();
						b = b.sitePhone.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
			},

			{
				title: 'Site Email',
				dataIndex: 'siteEmail',
				render: (_, record) => (
					<span className="d-flex">
						{record.siteEmail}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteEmail.toLowerCase();
						b = b.siteEmail.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
			},

			{
				title: 'Address',
				dataIndex: 'address',
				render: (_, record) => (
					<span className="d-flex">
						{record.address}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.address.toLowerCase();
						b = b.address.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
			},

			{
				title: 'Region',
				dataIndex: 'region',
				render: (_, record) => (
					<span className="d-flex">
						{record.region}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.region.toLowerCase();
						b = b.region.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
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
					compare: (a, b) => a.status.length - b.status.length,
				},
				width: 120
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button
								onClick={() => {this.setState({open: true})}}
								style={componentStyles.continueButton} htmlType="submit" block>
								Add Checkpoint</Button>
						</Tooltip>
					</div>
				)
			}
		];

		return (
			<div style={AppStyles.marginTop50}>
				{open ? this.displayAddCheckpointModal() : null}
				<Row gutter={16} justify="center">
					{edit || form ?
						<Col xs={24} sm={24} md={24} lg={24} >
							<Card className="card" title="MP Site Information" style={AppStyles.paddingBottom20}>
								<Form layout="vertical">
									<Row gutter={16}>
										<Col xs={24} sm={24} md={24} lg={24} >
											<div style={AppStyles.marginBottom40}>
												<div style={AppStyles.horizontallLineWidth100}>
												</div>
											</div>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="siteName"
												label="Site Name"
												rules={rules.siteName}
												hasFeedback
											>
												<Input style={componentStyles.borderColor} prefix={<BuildOutlined />} />
											</Form.Item>
										</Col>


										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="address1"
												label="Site Address Line 1"
												rules={rules.address1}
												hasFeedback
											>
												<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="address2"
												label="Site Address Line 2"
												rules={rules.address2}
												hasFeedback
											>
												<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="postcode"
												label="Post Code"
												rules={rules.postcode}
												hasFeedback
											>
												<Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="city"
												label="Town / City"
												rules={rules.city}
												hasFeedback
											>
												<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="phone"
												label="Site Phone"
												// rules={rules.phone}
												hasFeedback
											>
												<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="email"
												label="Site Email"
												// rules={rules.email}
												hasFeedback
											>
												<Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="title"
												label="Title"
												rules={rules.title}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
													bordered={false}
													placeholder="Title"
													optionFilterProp="children"
													onChange={(val) => this.handleChange("title", val)}
													// onFocus={onFocus}
													// onBlur={onBlur}
													// onSearch={onSearch}
													filterOption={(input, option) =>
														option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
													}
												>
													<Option value="Mr">Mr</Option>
													<Option value="Miss">Miss</Option>
													<Option value="Mrs">Mrs</Option>
												</Select>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="fullname"
												label="Site Contact Full Name"
												// rules={rules.fullname}
												hasFeedback
											>
												<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="region"
												label="Region"
												rules={rules.region}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
													bordered={false}
													placeholder="Site Region"
													optionFilterProp="children"
													onChange={(val) => this.handleChange("region", val)}
													// onFocus={onFocus}
													// onBlur={onBlur}
													// onSearch={onSearch}
													filterOption={(input, option) =>
														option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
													}
												>
													<Option value="South East">South East</Option>
													<Option value="South West">South West</Option>
												</Select>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop40}>


											<Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
	                                        Status										</Col>
									</Row>
									<Row justify="center">

										<Col xs={24} sm={24} md={24} lg={24} >
											<Card className="card" title="Mobile Patrol"
												extra={
													<Button
														onClick={() => this.setState({ open: true })}
														style={componentStyles.continueButton} htmlType="submit" block>
														Add Checkpoint
								        </Button>

												}
											>
												<Table
													searchable
													// rowSelection={{
													// 	type: selectionType,
													// 	...rowSelection,
													// }}
													bordered columns={tableColumnsCheckPoint} dataSource={footPatrol} scroll={{ x: 600, y: 200 }} />
											</Card>
											{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
										</Col>
									</Row>
									<Row gutter={16} justify="center">

										<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop20}>

											<Form.Item>
												<Button
													onClick={() => this.setState({ form: false, edit: false })}
													style={componentStyles.continueButton} htmlType="submit" block>
													{form ? "Add Mobile Patrol Site" : "Save"}
												</Button>
											</Form.Item>
										</Col>
									</Row>
								</Form>
							</Card>

							{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
						</Col>
						:
						<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
							<Card className="card" title="Mobile Patrol Sites" extra={
								<Row gutter={16}>
									<Col xs={24} sm={24} md={24} lg={24}>

										<Button
											onClick={() => this.setState({ form: true })}
											style={componentStyles.continueButton} htmlType="submit" block>
											Add Mobile Patrol Site
                                                    </Button>

									</Col>
								</Row>
							} >
								<Table searchable bordered columns={tableColumns} dataSource={mobilePatrolList} rowKey='id' scroll={{ x: 1600, y: 300 }} />
							</Card>
						</Col>

					}

				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default MobilePatrolSites

