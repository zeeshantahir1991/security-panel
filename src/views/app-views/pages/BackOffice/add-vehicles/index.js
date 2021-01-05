import { BuildOutlined, CompassOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
import moment from 'moment';

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

export class AddVehicles extends Component {

	constructor(props) {
		super(props);
		this.state = {

			motStatus: "",

		};
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		this.setState({

			[type]: value

		})

	}


	render() {
		const { } = this.props;
		let record = null
		if (this.props.location.state && this.props.location.state.record) {
			record = this.props.location.state.record
		}
		return (
			<div style={AppStyles.marginTop50}>
				<Form layout="vertical">
					<Row justify="center">


						<Col xs={24} sm={24} md={20} lg={20} >
							<Card className="card" title={record ? "View/Edit Vehicle" :"Add Vehicle"} style={AppStyles.paddingBottom20}>

								<Row gutter={16} justify="center">
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="carRegNo"
											label="Car Registration Number"
											// rules={rules.city}
											hasFeedback
										>
											<Input defaultValue={record && record.carRegNo ? record.carRegNo : ""} style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="currentMotExpiryDate"
											label="Current MOT Expiry Date"
											// rules={rules.serviceStartDate}
											hasFeedback
										>
											<DatePicker style={componentStyles.datePicker}
												defaultValue={record && record.currentMotExpiryDate ? moment.unix(record.currentMotExpiryDate) : ""}
												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>


									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="currentMileage"
											label="Current Mileage (miles)"
											rules={rules.payRate}
											hasFeedback
										>
											<Input min="0" defaultValue={record && record.currentMileage ? record.currentMileage : ""} type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={6} lg={6}>
										<Form.Item
											name="motStatus"
											label="MOT Status"
											rules={rules.title}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="MOT Status"
												optionFilterProp="children"
												defaultValue={record && record.motStatus ? record.motStatus : ""}
												onChange={(val) => this.handleChange("motStatus", val)}
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

export default AddVehicles
