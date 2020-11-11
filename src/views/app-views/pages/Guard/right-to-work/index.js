import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, DatePicker } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import Position from 'views/app-views/components/data-display/carousel/Position';
import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';
import { GuardSidebar } from '../GuardSidebar';
import { Stepper } from './../stepper';

const { Option } = Select;

const rules = {
	nationality: [
		{
			required: true,
			message: 'Please select Nationality'
		}
	],

	passportNo: [
		{
			required: true,
			message: 'Please input your Passport Number'
		}
	],
	placeOfIssue: [
		{
			required: true,
			message: 'Please input place of issue'
		}
	],
	expdate: [
		{
			required: true,
			message: 'Please input expiry date'
		}
	],
	issueDate: [
		{
			required: true,
			message: 'Please input issue date'
		}
	],
	dob: [
		{
			required: true,
			message: 'Please input date of birth'
		}
	],
	placeOfBirth: [
		{
			required: true,
			message: 'Please select place of birth'
		}
	],
	docType: [
		{
			required: true,
			message: 'Please select document type'
		}
	],
	docNo: [
		{
			required: true,
			message: 'Please input your Document Number'
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
export class RightToWork extends Component {

	constructor(props) {
		super(props);
		this.state = {

			nationality: "",
			placeOfBirth: "",
			docType: ""

		};
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		const { search } = this.state;
		this.setState({

			[type]: value

		})

	}


	render() {
		const { users, userProfileVisible, selectedUser, search, nationality } = this.state;
		const { classes, location: { pathname }, history } = this.props;

		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={24} lg={24} >
						<Stepper location={this.props.location} />
					</Col>
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" className="card" title="Right to Work" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row gutter={16}>
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24}>
										<Form.Item
											name="nationality"
											label="Nationality"
											rules={rules.nationality}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder={"Nationality"}
												optionFilterProp="children"
												onChange={(val) => this.handleChange("nationality", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="UnitedKingdom">United Kingdom</Option>
												<Option value="Country B">Country B</Option>
											</Select>
										</Form.Item>
									</Col>
									{nationality == "UnitedKingdom" ?
										<>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="passportNo"
													label="Passport Number"
													rules={rules.passportNo}
													hasFeedback
												>
													<Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="placeOfIssue"
													label="Place of Issue"
													rules={rules.placeOfIssue}
													hasFeedback
												>
													<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="issueDate"
													label="Issue Date"
													rules={rules.issueDate}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker}
														// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="expdate"
													label="Expiry Date"
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
													name="dob"
													label="Date of Birth"
													rules={rules.dob}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker}
														//  defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="placeOfBirth"
													label="Place of Birth"
													rules={rules.placeOfBirth}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectStyle}
														bordered={false}
														placeholder="Place of Birth"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("placeOfBirth", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Country A">Country A</Option>
														<Option value="Country B">Country B</Option>
													</Select>
												</Form.Item>
											</Col>

										</> :
										<>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="docType"
													label="Document Type"
													rules={rules.docType}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectStyle}
														bordered={false}
														placeholder="Document Type"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("docType", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Travel Document">Travel Document</Option>
														<Option value="Visa / BRP">Visa / BRP</Option>
														<Option value="Passport">Passport</Option>

													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="docNo"
													label="Document Number"
													rules={rules.docNo}
													hasFeedback
												>
													<Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="placeOfIssue"
													label="Place of Issue"
													rules={rules.placeOfIssue}
													hasFeedback
												>
													<Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="issueDate"
													label="Issue Date"
													rules={rules.issueDate}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker}
														// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="expdate"
													label="Expiry Date"
													rules={rules.expdate}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker}
														//  defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>

										</>
									}



									<Col xs={12} sm={12} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop40}>
												<Button onClick={() => this.props.history.goBack()} style={componentStyles.continueButton} htmlType="submit" block>
													Back
		                                        </Button>

											</div>
										</Form.Item>
									</Col>
									<Col xs={12} sm={12} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop40}>
												<Button style={componentStyles.continueButton} htmlType="submit" block>
													Create Guard
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

export default RightToWork
