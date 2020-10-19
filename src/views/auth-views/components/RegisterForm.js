import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BuildOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import { Select, Button, Form, Input, Alert, Avatar, DatePicker } from "antd";
import moment from 'moment';
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { Card, Row, Col, Upload, message } from "antd";
import { componentStyles } from "./../authentication/register/styles"
import { AppStyles } from './../../../assets/styles/index';
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
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('Passwords do not match!');
			},
		})
	]
}

export const RegisterForm = (props) => {
	const companyAvatarUrl = "/img/avatars/company-logo.jpeg"
	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect, location } = props
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = () => {
		form.validateFields().then(values => {
			showLoading()
			signUp(values)
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	const goToSummary = () => {
		console.log("goToSummary", location.state.data)
		props.history.push({
			pathname: '/auth/ordersummary',
			state: { data: location.state.data }
		})
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if (showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>

			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>

				<Row className="card" gutter={16} style={componentStyles.companyInfoContainer}>
					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.flexDirectionRow}>
						<Avatar size={50} src={companyAvatarUrl} icon={<UserOutlined />} />
						<div style={AppStyles.alignSelfCenter}>
							<div style={AppStyles.marginLeft30}>
								<h2>Company Info</h2>

							</div>
						</div>

					</Col>
					<Col xs={24} sm={24} md={24} lg={24} >
						<div style={AppStyles.marginTop20Bottom40}>
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
							rules={rules.regno}
							hasFeedback
						>
							<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="vatno"
							label="Company VAT Number"
							rules={rules.vatno}
							hasFeedback
						>
							<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="refno"
							label="ACS Reference Number"
							rules={rules.refno}
							hasFeedback
						>
							<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="expdate"
							label="Expiry Date of Approval"
							rules={rules.expdate}
							hasFeedback
						>
							<DatePicker style={componentStyles.datePicker}
								// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
								format={'YYYY/MM/DD'} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="controlroom"
							label="Control Room Phone"
							rules={rules.controlroom}
							hasFeedback
						>
							<Input type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
						</Form.Item>
					</Col>
				</Row>
				<Row className="card" gutter={16} style={componentStyles.personalInfoContainer}>
					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.flexDirectionRow}>
						<Avatar size={50} icon={<UserOutlined />} />
						<div style={AppStyles.alignSelfCenter}>
							<div style={AppStyles.marginLeft30}>
								<h2>Personal Info</h2>

							</div>
						</div>

					</Col>
					<Col xs={24} sm={24} md={24} lg={24} >
						<div style={AppStyles.marginTop20Bottom40}>
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
							rules={rules.email}
							hasFeedback
						>
							<Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
						</Form.Item>
					</Col>


					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="dob"
							label="DOB"
							rules={rules.dob}
							hasFeedback
						>
							<DatePicker style={componentStyles.datePicker}
								// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
								format={'YYYY/MM/DD'} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="mobile"
							label="Mobile"
							rules={rules.mobile}
							hasFeedback
						>
							<Input type="number" style={componentStyles.borderColor} prefix={<MobileOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12}>
						<Form.Item
							name="niNumber"
							label="Ni Number"
							rules={rules.niNumber}
							hasFeedback
						>
							<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12}>
						<Form.Item
							name="origin"
							label="Ethinic Origin"
							rules={rules.origin}
							hasFeedback
						>
							<Select
								showSearch
								style={componentStyles.selectStyle}
								bordered={false}
								placeholder="Origin"
								optionFilterProp="children"
								// onChange={(val) => this.handleChange("origin", val)}
								// onFocus={onFocus}
								// onBlur={onBlur}
								// onSearch={onSearch}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="British">British</Option>
								<Option value="African">African</Option>
								<Option value="Carebian">Carebian</Option>
								<Option value="Asian">Asian</Option>
							</Select>
						</Form.Item>
					</Col>

				</Row>

				{/* <Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confirm" 
					label="ConfirmPassword" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item> */}
				<Row gutter={16} style={{ paddingTop: 50 }}>
					<Col xs={12} sm={12} md={12} lg={12}>

						<Form.Item>
							<Button style={componentStyles.signUpButton} htmlType="submit" block loading={loading}>
								Cancel
					        </Button>
						</Form.Item>

					</Col>
					<Col xs={12} sm={12} md={12} lg={12}>

						<Form.Item>
							<Button onClick={goToSummary} style={componentStyles.signUpButton} htmlType="submit" block loading={loading}>
								Sign Up
					        </Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
