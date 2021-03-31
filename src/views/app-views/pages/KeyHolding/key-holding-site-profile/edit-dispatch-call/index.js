import { NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { AppStyles } from "assets/styles";
import { componentStyles } from "../../styles";

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
export class EditDispatchCall extends Component {

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
		const { } = this.props;
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={24} lg={24} >
						<Card className="card" title="Edit Dispatch Call" style={AppStyles.paddingBottom20}>
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

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="dateTime"
											label="Date & Time Call Received"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<DatePicker style={componentStyles.datePicker1}
												// onChange={(val) => this.handleChange("incidentPeriod", val)}
												placeholder="Select Date"
												// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="notifiedB"
											label="Notified By"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Notified By"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("notifiedB", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Police">Police</Option>
												<Option value="Help Desk">Help Desk</Option>
												<Option value="Other">Other</Option>

											</Select>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="fullname"
											label="Full Name"
											// rules={rules.keyNumber}
											hasFeedback
										>
											<Input type="text" style={componentStyles.borderColor} prefix={<UserOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="incidentType"
											label="Incident"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Incident"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("incidentType", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Alarm">Alarm</Option>
												<Option value="Arson">Arson</Option>

											</Select>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="incidentDateTime"
											label="Incident Date & Time"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<DatePicker style={componentStyles.datePicker1}
												// onChange={(val) => this.handleChange("incidentPeriod", val)}
												placeholder="Select Date"
												// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
												format={'YYYY/MM/DD'} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="severity"
											label="Severity"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Severity"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("severity", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Low">Low</Option>
												<Option value="Medium">Medium</Option>
												<Option value="High">High</Option>


											</Select>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="assignToGuard"
											label="Assign To Guard"
											// rules={rules.keyHoldingSite}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Assign To Guard"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("assignToGuard", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Guard A">Guard A</Option>
												<Option value="Guard B">Guard B</Option>
												<Option value="Guard C">Guard C</Option>


											</Select>
										</Form.Item>
									</Col>

									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} style={componentStyles.addKeyContainer}>

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keyIssueDate"
													label="Key Issue Date & Time"
													// rules={rules.keyHoldingSite}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker1}
														// onChange={(val) => this.handleChange("incidentPeriod", val)}
														placeholder="Select Date"
														// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keyNumber"
													label="Key Number"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keySerialNumber"
													label="Key Serial Number (Alphanumeric)"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>


											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="keyIssuedTo"
													label="Key Issued To"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input type="text" style={componentStyles.borderColor} prefix={<UserOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={24} lg={24}>

												<Row justify='center'>
													<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

														<Form.Item>
															<Button style={componentStyles.continueButton} htmlType="submit" block>
																Add Key
	                                                </Button>
														</Form.Item>
													</Col>
												</Row>
											</Col>


										</Row>

									</Col>
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} style={componentStyles.addKeyNotes}>

											<Col xs={24} sm={24} md={24} lg={24}>
												<Form.Item
													name="internalNotes"
													label="Internal Notes"
													rules={rules.site}
													hasFeedback
												>
													<Textarea placeholder={'Internal Notes...'} style={componentStyles.borderColor} />
												</Form.Item>
											</Col>


											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="addedBy"
													label="Added By (Username)"
													// rules={rules.keyNumber}
													hasFeedback
												>
													<Input type="text" style={componentStyles.borderColor} prefix={<UserOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="dateTime"
													label="Date & Time"
													// rules={rules.keyHoldingSite}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker1}
														// onChange={(val) => this.handleChange("incidentPeriod", val)}
														placeholder="Select Date"
														// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={24} lg={24}>

												<Row justify='center'>
													<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

														<Form.Item>
															<Button style={componentStyles.continueButton} htmlType="submit" block>
																Add Notes
	                                                </Button>
														</Form.Item>
													</Col>
												</Row>
											</Col>


										</Row>

									</Col>



									<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

										<Form.Item>
											<Button onClick={() => this.props.parentCallback(false)}
												style={componentStyles.continueButton} htmlType="submit" block>
												Dispatch
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

export default EditDispatchCall
