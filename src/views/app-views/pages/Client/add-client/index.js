import { BuildOutlined, CompassOutlined, DollarOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
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
		const {  } = this.props;
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Client Information" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row gutter={16} justify="center">
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="company"
											label="Company name"
											rules={rules.company}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<BuildOutlined />} />
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
											label="Contact Person Full Name"
											rules={rules.fullname}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="email"
											label="Email"
											rules={rules.email}
											hasFeedback
										>
											<Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
										</Form.Item>
									</Col>


									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="address1"
											label="Address Line 1"
											rules={rules.address1}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="address2"
											label="Address Line 2"
											rules={rules.address2}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
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
											name="postcode"
											label="Post Code"
											rules={rules.postcode}
											hasFeedback
										>
											<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="phone"
											label="Phone"
											rules={rules.phone}
											hasFeedback
										>
											<Input type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop5}>

										<Checkbox style={componentStyles.borderColor} checked>Status</Checkbox>
									</Col>
								</Row>
							</Form>
						</Card>
						{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
					</Col>
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Security Service Details" style={AppStyles.paddingBottom20}>

							<Row gutter={16} >
								<Col xs={24} sm={24} md={24} lg={24} >
									<div style={AppStyles.marginBottom40}>
										<div style={AppStyles.horizontallLineWidth100}>
										</div>
									</div>
								</Col>
								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="serviceStartDate"
										label="Service Start Date"
										rules={rules.serviceStartDate}
										hasFeedback
									>
										<DatePicker style={componentStyles.datePicker}
											// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
											format={'YYYY/MM/DD'} />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="serviceEndDate"
										label="Service End Date"
										rules={rules.serviceEndDate}
										hasFeedback
									>
										<DatePicker style={componentStyles.datePicker}
											// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
											format={'YYYY/MM/DD'} />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="invoiceFrequency"
										label="Invoice Frequency"
										rules={rules.invoiceFrequency}
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
											<Option value="Monthly">Monthly</Option>
											<Option value="Weekly">Weekly</Option>
											<Option value="Yearly">Yearly</Option>
										</Select>
									</Form.Item>
								</Col>


								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="securityServices"
										label="Security Services"
										rules={rules.securityServices}
										hasFeedback
									>
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
											<Option value="DS">DS</Option>
											<Option value="SG">SG</Option>
											<Option value="CCTV">CCTV</Option>
											<Option value="MP">MP</Option>
											<Option value="KH">KH</Option>

										</Select>
									</Form.Item>
								</Col>

								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="chargeRate"
										label="Charge Rate"
										rules={rules.chargeRate}
										hasFeedback
									>
										<Input type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
									</Form.Item>
								</Col>

								{/* <Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="chargeRate"
										label="Charge Rate"
										rules={rules.chargeRate}
										hasFeedback
									>
										<Input type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
									</Form.Item>
								</Col> */}

							</Row>
							<Row gutter={16} justify="center">

								<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

									<Form.Item>
										<Button style={componentStyles.continueButton} htmlType="submit" block>
											Save
		                                </Button>
									</Form.Item>
								</Col>
							</Row>
						</Card>
					</Col>

				</Row>
			</div>
		)
	}
}

export default AddClient
