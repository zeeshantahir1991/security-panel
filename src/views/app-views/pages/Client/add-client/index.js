import { BuildOutlined, CompassOutlined, DollarOutlined, MailOutlined, InboxOutlined, PhoneOutlined, UserOutlined, NumberOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select, Typography, Switch } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const { Option } = Select;

const rules = {

	invoiceFrequency: [
		{
			required: true,

			message: 'Please select Invoice Frequency'
		}
	],

	securityServices: [
		{
			required: true,

			message: 'Please select Security Service'
		}
	],
	title: [
		{
			// required: true,
			message: 'Please input title'
		}
	],
	email: [
		{
			required: true,
			message: 'Please input your email address'
		},
		{
			type: 'email',
			message: 'Please enter a validate email!'
		}
	],

	fullname: [
		{
			required: true,
			message: 'Please input your full name'
		}
	],
	mobile: [
		{
			required: true,
			message: 'Please input your mobile number'
		}
	],
	niNumber: [
		{
			// required: true,
			message: 'Please input your NI Number'
		}
	],
	serviceStartDate: [
		{
			required: true,
			message: 'Please input Service Start Date'
		}
	],
	serviceEndDate: [
		{
			required: true,
			message: 'Please input Service End Date'
		}
	],
	origin: [
		{
			// required: true,
			message: 'Please select origin'
		}
	],
	company: [
		{
			required: true,
			message: 'Please input your company name'
		}
	],
	address1: [
		{
			required: true,
			message: 'Please input address line 1'
		}
	],
	address2: [
		{
			required: true,
			message: 'Please input address line 2'
		}
	],
	city: [
		{
			required: true,
			message: 'Please input town/city'
		}
	],
	chargeRate: [
		{
			required: true,
			message: 'Please input rate'
		}
	],
	postcode: [
		{
			required: true,
			message: 'Please input postal code'
		}
	],
	phone: [
		{
			required: true,
			message: 'Please input your phone number'
		}
	],
	confirm: [
		{
			required: true,
			message: 'Please confirm your password!'
		},
		({ getFieldValue }) => ({
			validator(value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}
export class AddClient extends Component {

	constructor(props) {
		super(props);
		this.state = {

			title: "",
			invoiceFrequency: "",
			securityServices: ""

		};
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		this.setState({

			[type]: value

		})

	}


	render() {
		const { securityServices } = this.state;
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Client Information" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row gutter={16}>
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="company"
											label="Company name"
											rules={rules.company}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<BuildOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={6} lg={6}>
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
									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="fullname"
											label="Contact Person"
											rules={rules.fullname}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="email"
											label="Email"
											rules={rules.email}
											hasFeedback
										>
											<Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
										</Form.Item>
									</Col>


									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="address1"
											label="Address Line 1"
											rules={rules.address1}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="address2"
											label="Address Line 2"
											rules={rules.address2}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="city"
											label="Town / City"
											rules={rules.city}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="postcode"
											label="Post Code"
											rules={rules.postcode}
											hasFeedback
										>
											<Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="phone"
											label="Phone"
											rules={rules.phone}
											hasFeedback
										>
											<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

										<Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
			                                 Status
                                    </Col>
								</Row>
							</Form>
						</Card>
						{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
					</Col>
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Security Service" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row gutter={16} >
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="poNumber"
											label="PO Number"
											// rules={rules.poNumber}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="serviceStartDate"
											label="Service Start Date"
											// rules={rules.serviceStartDate}
											hasFeedback
										>
											<DatePicker

												style={componentStyles.datePicker}
												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="serviceserviceEndDate"
											label="Service End Date"
											// rules={rules.serviceserviceEndDate}
											hasFeedback
										>
											<DatePicker style={componentStyles.datePicker}

												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="invoiceFrequency"
											label="Invoice Frequency"
											// rules={rules.invoiceFrequency}
											hasFeedback
										>
											<Select

												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Invoice Frequency"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("invoiceFrequency", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="1">1</Option>
												<Option value="2">2</Option>
												<Option value="3">3</Option>
												<Option value="4">4</Option>
												<Option value="5">5</Option>
												<Option value="6">6</Option>
												<Option value="7">7</Option>
												<Option value="8">8</Option>
												<Option value="9">9</Option>
												<Option value="10">10</Option>

											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
										<Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: 10 }}>
											<Checkbox>Door Service</Checkbox>
										</Col>
										<Col xs={24} sm={24} md={4} lg={4} >
											<Form.Item name="comments" hasFeedback>
												<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor} />
											</Form.Item>
										</Col>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
										<Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: 10 }}>
											<Checkbox>Security Guard</Checkbox>
										</Col>
										<Col xs={24} sm={24} md={4} lg={4} >
											<Form.Item name="comments" hasFeedback>
												<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor} />
											</Form.Item>
										</Col>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
										<Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: 10 }}>
											<Checkbox>CCTV</Checkbox>
										</Col>
										<Col xs={24} sm={24} md={4} lg={4} >
											<Form.Item name="comments" hasFeedback>
												<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor} />
											</Form.Item>
										</Col>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
										<Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: 10 }}>
											<Checkbox>Mobile Patrol</Checkbox>
										</Col>
										<Col xs={24} sm={24} md={4} lg={4} >
											<Form.Item name="comments" hasFeedback>
												<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor} />
											</Form.Item>
										</Col>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
										<Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: 10 }}>
											<Checkbox onChange={() => { this.setState({ securityServices: !securityServices }) }}>Key Holding</Checkbox>
										</Col>
										<Col xs={24} sm={24} md={4} lg={4} >
											<Form.Item name="comments" hasFeedback>
												<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor} />
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={18} lg={18} style={{ display: 'flex', flexDirection: 'row' }}>
											<Col xs={24} sm={24} md={6} lg={6} style={{ marginTop: 10, display: this.state.securityServices ? 'block' : 'none' }}>
												<Typography.Text>Key Holding Flate Fee/Month</Typography.Text>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6} style={{ display: this.state.securityServices ? 'block' : 'none' }}>
												<Form.Item
													name="flatRate"
													// label="Key Holding Flate Fee/Month"
													rules={rules.chargeRate}
													hasFeedback
												>
													<Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
												</Form.Item>
											</Col>
										</Col>

									</Col>



								</Row>
								<Row gutter={16} justify="center">


									<Col xs={12} sm={12} md={6} lg={6}>

										<Form.Item>
											<div style={AppStyles.marginTop40}>
												<Button
													onClick={() => this.setState({ form: false })}
													style={componentStyles.continueButton} htmlType="submit" block>
													Save
                                                    </Button>

											</div>
										</Form.Item>
									</Col>
								</Row>
							</Form>


						</Card>
					</Col>

				</Row>
			</div>
		)
	}
}

export default AddClient
