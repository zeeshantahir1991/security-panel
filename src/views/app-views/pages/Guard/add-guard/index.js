import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, DatePicker, Steps } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import Position from 'views/app-views/components/data-display/carousel/Position';
import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';
import { GuardSidebar } from './../GuardSidebar';
import { Stepper } from './../stepper';
const { SubMenu } = Menu;
const { Step } = Steps;
const { Option } = Select;

const rules = {
	title: [
		{
			// required: true,
			message: 'Please input title'
		}
	],
	email: [
		{
			// required: true,
			message: 'Please input your email address'
		},
		{
			type: 'email',
			message: 'Please enter a validate email!'
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
export class AddGuard extends Component {

	constructor(props) {
		super(props);
		this.state = {

			title: "",
			origin: "",

		};
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		const { search } = this.state;
		this.setState({

			[type]: value

		})

	}
	// async postData(url = '', data = {}) {
	// 	// Default options are marked with *
	// 	const response = await fetch(url, {
	// 		method: 'POST', // *GET, POST, PUT, DELETE, etc.
	// 		mode: 'cors', // no-cors, *cors, same-origin
	// 		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	// 		credentials: 'same-origin', // include, *same-origin, omit
	// 		headers: {
	// 			// 'Content-Type': 'application/json'
	// 			'Content-Type': 'application/x-www-form-urlencoded',
	// 		},
	// 		redirect: 'follow', // manual, *follow, error
	// 		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	// 		body: JSON.stringify(data) // body data type must match "Content-Type" header
	// 	});
	// 	return response.text(); // parses JSON response into native JavaScript objects
	// }
	goToSiaLicence = () => {
		this.props.history.push({
			pathname: '/app/pages/sia-licence',
		})

		// this.postData('https://services.sia.homeoffice.gov.uk/PublicRegister/SearchPublicRegisterByLicence/',{
		// 	"LicenseNo": "1018041021102931"
		// }).then(text => {
		// 		console.log(text); // JSON data parsed by `data.json()` call
		// 	});




	}

	render() {
		const { users, userProfileVisible, selectedUser, search } = this.state;
		const { classes, location: { pathname }, history } = this.props;
		return (
			<div style={AppStyles.marginTop20}>
				<Row justify="center">
					<Col xs={24} sm={24} md={24} lg={24} >
						<Stepper location={this.props.location} />
					</Col>
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Personal Information" style={AppStyles.paddingBottom20}>
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
											{/* <Input type="date" style={componentStyles.borderColor} /> */}
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
												onChange={(val) => this.handleChange("origin", val)}
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

									<Col xs={12} sm={12} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop40}>
												<Button onClick={this.goToSiaLicence} style={componentStyles.continueButton} htmlType="submit" block>
													Continue
													</Button>

											</div>
										</Form.Item>
									</Col>
								</Row>
							</Form>
						</Card>
						{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
					</Col>
				</Row>
			</div>
		)
	}
}

export default AddGuard
