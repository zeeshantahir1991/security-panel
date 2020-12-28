import { LockOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
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

	keyHoldingSite: [
		{
			required: true,

			message: 'Please select Key Holding Site'
		}
	],
	storeLocation: [
		{
			required: true,
			message: 'Please select Store Location'
		}
	],
	recievedBy: [
		{
			// required: true,
			message: 'Please input recievedBy'
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
	keyDesc: [
		{
			required: true,
			message: 'Please input your key description'
		}
	],

	keyType: [
		{
			required: true,
			message: 'Please input your key type'
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
export class AddKeyHoldingSite extends Component {

	constructor(props) {
		super(props);
		this.state = {

			recievedBy: "",
			clientName: "",
			keyHoldingSite: "",
			storeLocation: "",
			keyType: ""

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
						<Card className="card" title="New Key Receipt" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row gutter={16} justify="center">
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={24} sm={24} md={12} lg={12}>
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
									<Col xs={24} sm={24} md={12} lg={12}>
										<Form.Item
											name="keyHoldingSite"
											label="Key Holding Site"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Key Holding Site"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("keyHoldingSite", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Store 1">Store 1</Option>
												<Option value="Building 2">Building 2</Option>
											</Select>
										</Form.Item>
									</Col>

									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} justify="center" style={componentStyles.addKeyContainer}>
											<Col xs={24} sm={24} md={24} lg={24}>
												<Form.Item
													name="keyDesc"
													label="Key Description"
													rules={rules.site}
													hasFeedback
												>
													<Textarea placeholder={'Key Description...'} style={componentStyles.borderColor} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keyType"
													label="Key Type"
													// rules={rules.keyHoldingSite}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Key Type"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("KeyType", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="A">A</Option>
														<Option value="B">B</Option>
													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keyNumber"
													label="Key Number"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keySerialNumber"
													label="Key Serial Number (Alphanumeric)"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="storeLocation"
													label="Store Location"
													// rules={rules.storeLocation}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Store Location"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("storeLocation", val)}
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

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="secureBoxNumber"
													label="Secure Box Number"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="pin"
													label="PIN"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input type="number" style={componentStyles.borderColor} prefix={<LockOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

												<Form.Item>
													<Button style={componentStyles.continueButton} htmlType="submit" block>
														Add Key
		                                            </Button>
												</Form.Item>
											</Col>

										</Row>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop20}>
										<Form.Item
											name="recievedBy"
											label="Recieved By"
											// rules={rules.recievedBy}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Recieved By"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("recievedBy", val)}
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

									<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop20}>
										<Form.Item
											name="recievedFrom"
											label="Recieved From (Full Name)"
											// rules={rules.fullname}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop20}>
										<Form.Item
											name="receiptDate"
											label="Receipt Date"
											rules={rules.receiptDate}
											hasFeedback
										>
											<DatePicker style={componentStyles.datePicker}
												//  defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>


									<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

										<Form.Item>
											<Button style={componentStyles.continueButton} htmlType="submit" block>
												Create
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

export default AddKeyHoldingSite
