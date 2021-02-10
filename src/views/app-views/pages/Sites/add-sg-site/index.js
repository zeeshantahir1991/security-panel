import { BuildOutlined, CompassOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Card, Switch, Col, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const { Option } = Select;

const rules = {

	clientName: [
		{
			required: true,

			message: 'Please select Client Name'
		}
	],

	securityServices: [
		{
			required: true,

			message: 'Please select Security Service'
		}
	],
	region: [
		{
			required: true,
			message: 'Please select Region'
		}
	],
	title: [
		{
			// required: true,
			message: 'Please input title'
		}
	],
	siteEmail: [
		{
			required: true,
			message: 'Please input your site email address'
		},
		{
			type: 'email',
			message: 'Please enter a validate site email!'
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
	site: [
		{
			required: true,
			message: 'Please input your Site Name'
		}
	],
	siteAddress1: [
		{
			required: true,
			message: 'Please input site address line 1'
		}
	],
	siteAddress2: [
		{
			required: true,
			message: 'Please input site address line 2'
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
export class AddSGSite extends Component {

	constructor(props) {
		super(props);
		this.state = {

			title: "",
			clientName: "",
			securityServices: "",
			region: ""

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
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Add Security Guarding Site" style={AppStyles.paddingBottom20}>
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
											name="clientName"
											label="Client Name"
											rules={rules.clientName}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Client Name"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("clientName", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Client Name A">Client Name A</Option>
												<Option value="Client Name B">Client Name B</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="securityServices"
											label="Site Type"
											// rules={rules.securityServices}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Site Type"
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
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="site"
											label="Site name"
											rules={rules.site}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<BuildOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="siteAddress1"
											label="Site Address Line 1"
											rules={rules.siteAddress1}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="siteAddress2"
											label="Site Address Line 2"
											rules={rules.siteAddress2}
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
											name="siteEmail"
											label="Site Email"
											// rules={rules.siteEmail}
											hasFeedback
										>
											<Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="title"
											label="Title"
											// rules={rules.title}
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
												placeholder="Region"
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


									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

										<Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
	                                        Status
                                    </Col>
									<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

										<Form.Item>
											<Button style={componentStyles.continueButton} htmlType="submit" block>
												Create Site
		                                </Button>
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

export default AddSGSite
