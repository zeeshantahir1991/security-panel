import { BuildOutlined, CompassOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";

const { Option } = Select;

const rules = {
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
	password: [
		{
			required: true,
			message: 'Please input your password'
		}
	],
	company: [
		{
			required: true,
			message: 'Please input your company name'
		}
	],
	regno: [
		{
			required: true,
			message: 'Please input your company registration number'
		}
	],
	vatno: [
		{
			required: true,
			message: 'Please input your company VAT number'
		}
	],
	refno: [
		{
			required: true,
			message: 'Please input your ACS reference number'
		}
	],
	expdate: [
		{
			required: true,
			message: 'Please input expiry date of approval'
		}
	],
	firstname: [
		{
			required: true,
			message: 'Please input your first name'
		}
	],
	lastname: [
		{
			required: true,
			message: 'Please input your last name'
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
	mobile: [
		{
			required: true,
			message: 'Please input your mobile number'
		}
	],
	controlroom: [
		{
			required: true,
			message: 'Please input control room phone'
		}
	],
	title: [
		{
			// required: true,
			message: 'Please input title'
		}
	],

	niNumber: [
		{
			// required: true,
			message: 'Please input your NI Number'
		}
	],
	dob: [
		{
			required: true,
			message: 'Please input date of birth'
		}
	],
	origin: [
		{
			// required: true,
			message: 'Please select origin'
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

export class AddSubContractor extends Component {

	constructor(props) {
		super(props);
		this.state = {

			position: "",
			empType: "",
			subcontractor: ""

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
				<Form layout="vertical">
					<Row justify="center">

						<Col xs={24} sm={24} md={20} lg={20} >
							<Card className="card" title="Company Details" style={AppStyles.paddingBottom20}>
								<Row gutter={16} >
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
											name="regno"
											label="Company Registration Number"
											// rules={rules.regno}
											hasFeedback
										>
											<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="vatno"
											label="Company VAT Number"
											// rules={rules.vatno}
											hasFeedback
										>
											<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="refno"
											label="ACS Reference Number"
											// rules={rules.refno}
											hasFeedback
										>
											<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="expdate"
											label="Expiry Date of Approval"
											// rules={rules.expdate}
											hasFeedback
										>
											<DatePicker style={componentStyles.datePicker}
												// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24}>
										<h5>Approved Sectors</h5>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>

										<Checkbox style={componentStyles.borderColor} checked>Security Guarding</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>
										<Checkbox style={componentStyles.borderColor} checked>Door Supervision</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>
										<Checkbox style={componentStyles.borderColor} checked>Close Protection</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>
										<Checkbox style={componentStyles.borderColor} checked>Vehicle Immobolisation</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>
										<Checkbox style={componentStyles.borderColor} checked>Key Holding</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>
										<Checkbox style={componentStyles.borderColor} checked>Cash and Valuables in Transit</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop5}>
										<Checkbox style={componentStyles.borderColor} checked>Public space Surveillance</Checkbox>
									</Col>



								</Row>

							</Card>
							{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
						</Col>
						<Col xs={24} sm={24} md={20} lg={20} >
							<Card className="card" title="Personal Details" style={AppStyles.paddingBottom20}>

								<Row gutter={16} justify="center">
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
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
												// onChange={(val) => this.handleChange("title", val)}
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
											name="firstname"
											label="First Name"
											rules={rules.firstname}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="lastname"
											label="Last Name"
											rules={rules.lastname}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="email"
											label="Email"
											// rules={rules.email}
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
											<Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="phone"
											label="Phone"
											rules={rules.phone}
											hasFeedback
										>
											<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
										</Form.Item>
									</Col>

									
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
				</Form>
			</div>
		)
	}
}

export default AddSubContractor
