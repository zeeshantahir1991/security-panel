import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, DeleteOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import Position from 'views/app-views/components/data-display/carousel/Position';

const { Option } = Select;

const rules = {

	licenceNo: [
		{
			required: true,
			message: 'Please input Licence Number'
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
export class SiaLicence extends Component {

	constructor(props) {
		super(props);
		this.state = {

			licenceNo: "",

		};
	}

	goToPositionAndPay = () => {
		// console.log("goToSummary", location.state.data)
		this.props.history.push({
			pathname: '/app/pages/position-and-pay',
			// state: { data: location.state.data }
		})
	}

	render() {
		const { users, userProfileVisible, selectedUser, search } = this.state;

		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={15} lg={15} >
						<Card title="SIA Licence" style={AppStyles.paddingBottom20}>
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
											name="licenceNo"
											label="Licence Number"
											rules={rules.licenceNo}
											hasFeedback
										>
											<Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop27}>
												<Button style={componentStyles.continueButton} htmlType="submit" block>
													Add
												</Button>

											</div>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24} lg={24} style={componentStyles.licenceDataContainer}>
										<Row justify="center">

											<Col xs={24} sm={24} md={24} lg={24}>
												<div style={componentStyles.deleteIcon}>
													<Tooltip title="Delete">
														<Button danger icon={<DeleteOutlined />}
															// onClick={() => { this.deleteUser(elm.id) }} 
															size="small" />
													</Tooltip>
												</div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}> First Name </div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>Last Name </div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>SIA Licence Number </div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>Role </div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>Licence Sector</div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>Expiry Date </div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>Status</div>
											</Col>
											<Col xs={12} sm={12} md={6} lg={6}>
												<div style={componentStyles.licenceDataTitleContainer}>Date Checked </div>
											</Col>

										</Row>
									</Col>
									<Col xs={12} sm={12} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop20}>
												<Button onClick={() => this.props.history.goBack()} style={componentStyles.continueButton} htmlType="submit" block>
													Back
		                                        </Button>

											</div>
										</Form.Item>
									</Col>
									<Col xs={12} sm={12} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop20}>
												<Button onClick={this.goToPositionAndPay} style={componentStyles.continueButton} htmlType="submit" block>
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

export default SiaLicence
