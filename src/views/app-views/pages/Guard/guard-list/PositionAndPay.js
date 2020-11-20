import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, Checkbox, Switch } from 'antd';
import { DollarOutlined, BuildOutlined, CalendarOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
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
import CompilanceData from './../compilanceStepper'

const { Option } = Select;

const rules = {

	payRate: [
		{
			required: true,
			message: 'Please input Pay rate'
		}
	],
	position: [
		{
			required: true,
			message: 'Please select position'
		}
	],
	empType: [
		{
			required: true,
			message: 'Please select Employee Type'
		}
	],
	subcontractor: [
		{
			required: true,
			message: 'Please select Sub Contractor'
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
export class PositionAndPay extends Component {

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
		const { search } = this.state;
		this.setState({

			[type]: value

		})

	}

	goToRightToWork = () => {
		this.props.history.push({
			pathname: '/app/pages/right-to-work',
		})



	}

	render() {
		const { users, userProfileVisible, selectedUser, search } = this.state;
		const { classes, location: { pathname }, history } = this.props;
		let record = null
		let action = null
		if (this.props.location.state && this.props.location.state.action && this.props.location.state.record) {
			record = this.props.location.state.record
			action = this.props.location.state.action
		}
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={24} lg={24} >
						<Stepper location={this.props.location} history={this.props.history} action={action} record={record} />
					</Col>
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Position & Pay" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row gutter={16} >
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="payRate"
											label="Pay Rate"
											rules={rules.payRate}
											hasFeedback
										>
											<Input type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="position"
											label="Position"
											rules={rules.position}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Position"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("position", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Security Office">Security Office</Option>
												<Option value="Supervisor">Supervisor</Option>
												<Option value="Mobile Patrol">Mobile Patrol</Option>
												<Option value="CCTV">CCTV</Option>

											</Select>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={8} lg={8}>
										<Form.Item
											name="empType"
											label="Employee Type"
											rules={rules.empType}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Employee Type"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("empType", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Permanent">Permanent</Option>
												<Option value="Temporary">Temporary</Option>
												<Option value="Seasonal">Seasonal</Option>


											</Select>
										</Form.Item>
									</Col>

									<Col xs={8} sm={8} md={8} lg={8}>

										<Form.Item
											name="subcontractor"
											label="Sub Contractor"
											rules={rules.subcontractor}
											hasFeedback
										>
											<Select
												showSearch
												style={componentStyles.selectStyle}
												bordered={false}
												placeholder="Sub Contractor"
												optionFilterProp="children"
												onChange={(val) => this.handleChange("subcontractor", val)}
												// onFocus={onFocus}
												// onBlur={onBlur}
												// onSearch={onSearch}
												filterOption={(input, option) =>
													option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
												}
											>
												<Option value="Subcontractor A">Subcontractor A</Option>
												<Option value="Subcontractor B">Subcontractor B</Option>


											</Select>
										</Form.Item>
									</Col>
									<Col xs={8} sm={8} md={8} lg={8} style={AppStyles.alignSelfCenter}>

										<Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Status
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

										<Checkbox style={componentStyles.borderColor} checked>Sub Contractor's Guard ?</Checkbox>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop20}>

										<Checkbox style={componentStyles.borderColor} checked>Allow mobile app access ?</Checkbox>
									</Col>

								</Row>
								<Row gutter={16} justify="center">
									<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop30}>
										{action == "viewItem" ?
											<Form.Item>
												<Button
													onClick={() => this.props.history.goBack()}
													style={componentStyles.continueButton} htmlType="submit" block>
													Back
                                                    </Button>
											</Form.Item> :
											<Form.Item>
												<Button
													style={componentStyles.continueButton} htmlType="submit" block>
													Update
                                                </Button>
											</Form.Item>
										}
									</Col>
								</Row>
							</Form>
						</Card>
						{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
					</Col>
				</Row>
				<div style={AppStyles.marginTop50}>
					<Row>
						<Col xs={24} sm={24} md={24} lg={24} >
							<CompilanceData location={this.props.location} history={this.props.history} />
						</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default PositionAndPay
