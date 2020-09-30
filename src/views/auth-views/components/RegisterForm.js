import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BuildOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert, Avatar } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { Card, Row, Col, Upload, message } from "antd";


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

	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect } = props
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
			
				<Row gutter={16}>

					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="company"
							label="Company name"
							rules={rules.company}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<BuildOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="regno"
							label="Company Registration Number"
							rules={rules.regno}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="vatno"
							label="Company VAT Number"
							rules={rules.vatno}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12}>
						<Form.Item
							name="refno"
							label="ACS Reference Number"
							rules={rules.refno}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<NumberOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={12} lg={12}>
						<Form.Item
							name="expdate"
							label="Expiry Date of Approval"
							rules={rules.expdate}
							hasFeedback
						>
							<Input type="date" style={{ borderColor: '#222222' }} />
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 50, marginBottom: 25 }}>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="firstname"
							label="First Name"
							rules={rules.firstname}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<UserOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="lastname"
							label="Last Name"
							rules={rules.lastname}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<UserOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="email"
							label="Email"
							rules={rules.email}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<MailOutlined />} />
						</Form.Item>
					</Col>

					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="address1"
							label="Address Line 1"
							rules={rules.address1}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<HomeOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="address2"
							label="Address Line 2"
							rules={rules.address2}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<HomeOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="city"
							label="Town/City"
							rules={rules.city}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<CompassOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="postcode"
							label="Post Code"
							rules={rules.postcode}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<CompassOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="phone"
							label="Phone"
							rules={rules.phone}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<PhoneOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="mobile"
							label="Mobile"
							rules={rules.mobile}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<MobileOutlined />} />
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={8} lg={8}>
						<Form.Item
							name="controlroom"
							label="Control Room Phone"
							rules={rules.controlroom}
							hasFeedback
						>
							<Input style={{ borderColor: '#222222' }} prefix={<PhoneOutlined />} />
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
				<Form.Item>
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
				</Form.Item>
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
