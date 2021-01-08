import { DeleteOutlined, BookOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Table, Tooltip } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { falseLoading, showLoading } from 'redux/actions/Auth';
import {
	licenseActions
} from 'redux/actions/License';
import { AppStyles } from "../../../../../assets/styles";
import { Stepper } from './../stepper';
import { componentStyles } from "./../styles";

function mapStateToProps(state) {

	return {

		licenseData: state.license.licenseData,
		auth: state.auth

	};
}


function mapDispatchToProps(dispatch) {

	return {
		ongetLicense: (licenseData) => { dispatch(licenseActions.getLicense(licenseData)); },
		onLoading: () => { dispatch(showLoading()) },
		onLoadEnd: () => { dispatch(falseLoading()) }

	}


}
const rules = {

	licenseNo: [
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
			validator(value) {
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

			licenseNo: "",
			errorMessage: ""
			// licenseData: this.props.licenseData

		};
		this.addLicense = this.addLicense.bind(this);

	}

	goToPositionAndPay = () => {
		// console.log("goToSummary", location.state.data)
		this.props.history.push({
			pathname: '/app/pages/position-and-pay',
			// state: { data: location.state.data }
		})
	}


	async addLicense() {
		const { licenseNo } = this.state;
		this.props.onLoading()
		try {
			let data = {
				"LicenseNo": licenseNo
			}
			const found = this.props?.licenseData?.find(element => element?.licenseNo?.trim() === licenseNo?.trim());
			if (!found) {
				await fetch('http://localhost:3001/getLicenseInfo', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				})
					.then((res) => res.json())
					.then((resp) => {
						if (resp.result) {
							this.props.onLoadEnd()
							// localStorage.setItem('GETLICENSE', JSON.stringify(dataArray));
							this.props.ongetLicense(resp.data);

							// this.setState({ licenseData: resp.data })
						} else {
							this.props.onLoadEnd()
							this.setState({ errorMessage: "No results found!" })

							this.timeoutHandler = setTimeout(function () {
								this.setState({ errorMessage: "" })
							}.bind(this), 1500);


						}

					})
					.catch(() =>
						this.setState({ errorMessage: "Please check your internet connection!" }),
						this.timeoutHandler = setTimeout(function () {
							this.setState({ errorMessage: "" })
							this.props.onLoadEnd()
						}.bind(this), 1500)
					)
			}
		} catch (error) {
			this.props.onLoadEnd()
			this.setState({ errorMessage: "Please check your internet connection!" })
			this.timeoutHandler = setTimeout(function () {

				this.setState({ errorMessage: "" })
			}.bind(this), 1500);

		}


	}


	handleChange = (type, e) => {
		this.setState({

			[type]: e.target.value

		})

	}

	render() {
		const { errorMessage } = this.state;
		let licenseData = this.props.licenseData;
		const { } = this.props;

		const tableColumns = [
			{
				title: 'First Name',
				dataIndex: 'firstName',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.firstName} </span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.firstName.toLowerCase();
						b = b.firstName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				fixed: 'left'
			},
			{
				title: 'Sur Name',
				dataIndex: 'surName',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.surName} </span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.surName.toLowerCase();
						b = b.surName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},
			{
				title: 'License Number',
				dataIndex: 'licenseNo',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.licenseNo} </span>
					</div>
				),
				sorter: {
					compare: (a, b) => a.licenseNo.length - b.licenseNo.length,
				},
				width: 200
			},
			{
				title: 'Role',
				dataIndex: 'role',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.role} </span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.role.toLowerCase();
						b = b.role.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},
			{
				title: 'License Sector',
				dataIndex: 'licenseSector',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.licenseSector} </span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.licenseSector.toLowerCase();
						b = b.licenseSector.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},
			// {
			// 	title: 'Expiry Date',
			// 	dataIndex: 'expiryDate',
			// 	render: date => (
			// 		<span>{moment.unix(date).format("YYYY/MM/DD")} </span>
			// 	),
			// 	sorter: (a, b) => moment(a.expiryDate).unix() - moment(b.expiryDate).unix(),
			// 	width: 150
			// },
			{
				title: 'Expiry Date',
				dataIndex: 'expiryDate',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.expiryDate} </span>
					</div>
				),
				sorter: (a, b) => moment(a.expiryDate).unix() - moment(b.expiryDate).unix(),
				width: 150
			},
			{
				title: 'Status',
				dataIndex: 'status',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.status} </span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.status.toLowerCase();
						b = b.status.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},
			{
				title: '',
				dataIndex: 'status',
				render: (_, elm) => (
					<div className="text-right">

						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />}
								onClick={() => { this.deleteUser(elm.id) }}
								size="small" />
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={24} lg={24} >
						<Stepper location={this.props.location} />
					</Col>
					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="SIA Licence" style={AppStyles.paddingBottom20}>
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
											name="licenseNo"
											label="Licence Number"
											rules={rules.licenseNo}
										// hasFeedback
										>
											<Input
												className="remove" type="text"
												onChange={(val) => this.handleChange("licenseNo", val)}
												style={componentStyles.borderColor}
												prefix={<BookOutlined />}
											/>
										</Form.Item>
									</Col>

									<Col xs={24} sm={24} md={12} lg={12}>

										<Form.Item>
											<div style={AppStyles.marginTop27}>
												<Button onClick={this.addLicense} style={componentStyles.continueButton} htmlType="submit" block
													loading={this.props.auth.loading}
												>
													Add
												</Button>

											</div>
										</Form.Item>
									</Col>
									{errorMessage ?
										<Col xs={24} sm={24} md={24} lg={24}>
											<div style={componentStyles.errorMessage}>
												{errorMessage}
											</div>
										</Col> : null
									}

									{/* {licenseData.length != 0 ?
										licenseData.map((value, index) =>
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
														<div style={componentStyles.licenceDataTitleContainer}> {value.firstName} </div>
													</Col>
													<Col xs={12} sm={12} md={6} lg={6}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.surName} </div>
													</Col>
													<Col xs={12} sm={12} md={6} lg={6}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.licenseNo}</div>
													</Col>
													<Col xs={12} sm={12} md={6} lg={6}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.role}</div>
													</Col>
													<Col xs={12} sm={12} md={6} lg={6}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.licenseSector}</div>
													</Col>
													<Col xs={12} sm={12} md={6} lg={6}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.expiryDate}</div>
													</Col>
													<Col xs={12} sm={12} md={12} lg={12}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.status}</div>
													</Col>
													<Col xs={12} sm={12} md={12} lg={12}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.statusExplaination}</div>
													</Col>
													<Col xs={12} sm={12} md={6} lg={6}>
														<div style={componentStyles.licenceDataTitleContainer}>{value.additionalLicenseCondition}</div>
													</Col>

												</Row>
											</Col>) : null
									} */}
									{licenseData.length !== 0 ?
										<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
											<Card title="License List">
												<Table bordered columns={tableColumns} dataSource={this.props.licenseData} rowKey='id' scroll={{ x: 1200, y: 200 }} />
											</Card>
										</Col> : null
									}

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


export default connect(mapStateToProps, mapDispatchToProps)(SiaLicence)
