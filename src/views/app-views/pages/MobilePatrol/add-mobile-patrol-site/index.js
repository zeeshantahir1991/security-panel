import { BuildOutlined, CompassOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Form, Input, Row, Select, Switch } from 'antd';
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

	origin: [
		{
			// required: true,
			message: 'Please select origin'
		}
	],
	siteName: [
		{
			required: true,
			message: 'Please input your site name'
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
	masterSiteName: [
		{
			required: true,
			message: 'Please input Master Site Name'
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
	region: [
		{
			required: true,
			message: 'Please select Region'
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
export class AddMPMasterSite extends Component {

	constructor(props) {
		super(props);
		this.state = {

			clientName: "",
			mpSiteName: ""
		};
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		this.setState({

			[type]: value

		})

	}


	handleChangeInput = (type, event) => {
		this.setState({
			[type]: event.target.value
		})

	}


	handleSubmit = () => {
		const { mpSiteName, clientName } = this.state;
		console.log("dasdasdasdas", clientName)
		if (!mpSiteName) {
			this.setState({
				mpSiteName: clientName
			})
		}
	}


	render() {
		const { mpSiteName } = this.state;
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Add MP Master Site" style={AppStyles.paddingBottom20}>
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
												<Option value="ABC ltd">ABC ltd</Option>
												<Option value="DEF ltd">DEF ltd</Option>
												<Option value="XYZ ltd">XYZ ltd</Option>
											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											label="Master Site Name"
											rules={rules.mpSiteName}
											hasFeedback
										>
											<Input name="mpSiteName"
												value={mpSiteName} onChange={(e) => this.handleChangeInput("mpSiteName", e)} type="text" style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop40}>

										<Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
	                                        Status
									</Col>
								</Row>
								<Row gutter={16} justify="center">

									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop20}>

										<Form.Item>
											<Button style={componentStyles.continueButton} onClick={() => this.handleSubmit()} htmlType="submit" block>
												Add MP Site
			                                </Button>
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

export default AddMPMasterSite
