import { CheckCircleOutlined, DeleteOutlined, EyeOutlined, PoundCircleOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Modal, Row, Select, TimePicker, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import { AppColors } from 'assets/styles/colors';
import React, { Component } from 'react';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";

const { Option } = Select;
const format = 'HH:mm';

const rules = {

	shiftType: [
		{
			// required: true,
			message: 'Please input Shift Type'
		}
	],
	clientName: [
		{
			required: true,
			message: 'Please input your client name'
		}
	]
}
export class NewShift extends Component {

	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			shiftType: "",
			clientName: "",
			siteName: "",
			breakk: "",
			position: "",
			guardName: "",
			payRate: null,
			qrScanInterval: "",
			signinRadius: "",
			trackingInterval: "",
			callCheckInterval: "",
			expense: "",
			nextPage: false,
			record: this.props?.location?.state,
			daysWeek: [
				{
					select: false,
					value: 'Monday'
				},
				{
					select: false,
					value: 'Tuesday'
				},
				{
					select: false,
					value: 'Wednesday'
				},
				{
					select: false,
					value: 'Thursday'
				},
				{
					select: false,
					value: 'Friday'
				},
				{
					select: false,
					value: 'Saturday'
				},
				{
					select: false,
					value: 'Sunday'
				},

			],

			checkpointModal: false,
			positionModal: false,
			assignGuard: [],

		};
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		this.setState({

			[type]: value

		})

	}

	handleDays = (index) => {
		var daysWeek = this.state.daysWeek;
		for (var i = 0; i < daysWeek.length; i++) {
			if (i === index) {
				if (daysWeek[i].select === true) {
					daysWeek[i].select = false

				} else {
					daysWeek[i].select = true

				}
			}
		}
		this.setState({
			daysWeek
		});
	}

	showModal = (value) => {
		const { checkpointModal, positionModal } = this.state;
		if (value === "checkpoint") {
			this.setState({
				checkpointModal: !checkpointModal
			})
		} else {
			this.setState({
				positionModal: !positionModal
			})
		}

	};

	handleCancel = (value) => {
		if (value === "checkpoint") {
			this.setState({ checkpointModal: false });

		} else {
			this.setState({ positionModal: false });

		}
	};


	handleInputChange = (type, event) => {
		console.log(`selected ${event}`);
		this.setState({

			[type]: event.target.value

		})

	}

	handleAssignGuard = () => {
		const { position, guardName, payRate, breakk } = this.state;
		let assignGuard = [...this.state.assignGuard];;
		assignGuard.push({ position: position, guardName: guardName, payRate: payRate, breakk: breakk })
		this.setState({
			assignGuard,
			positionModal: false
		})
	}

	componentDidMount() {
		
	}
	


	render() {
		const { daysWeek, checkpointModal, positionModal, position, guardName, payRate, assignGuard, expense, edit, shiftType } = this.state;
		// let { record } = this.props?.location?.state !== undefined && this.props?.location?.state
		const {record} = this.state;
		const tableColumns = [
			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						<a onClick={() => this.setState({ edit: true })}>
							{/* <AvatarStatus src={record.img} name={record.name} /> */}
							{record.guardName}
						</a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},




			{
				title: 'Position',
				dataIndex: 'position',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.position}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.position.toLowerCase();
						b = b.position.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Break',
				dataIndex: 'breakk',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.breakk}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.breakk.toLowerCase();
						b = b.breakk.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Pay Rate',
				dataIndex: 'payRate',
				sorter: {
					compare: (a, b) => a.payRate.length - b.payRate.length,
				},
				width: 200
			},

			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">

						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} size="small" />
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={18} lg={18} >
						<Card className="card" title={record ? "Edit Shift" : "Add New Shift"}
							style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row justify="center" gutter={16}>
									<Col xs={24} sm={24} md={24} lg={24} >
										<div style={AppStyles.marginBottom40}>
											<div style={AppStyles.horizontallLineWidth100}>
											</div>
										</div>
									</Col>
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} justify="center" style={componentStyles.addCheckpointContainer}>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="clientName"
													label="Client Name"
													// rules={rules.clientName}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
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
														<Option value="Client 1">Client 1</Option>
														<Option value="Client 2">Client 2</Option>
														<Option value="Client 3">Client 3</Option>
													</Select>
												</Form.Item>
											</Col>
											
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="chargeRate"
													label="Charge Rate"
													// rules={rules.chargeRate}
													hasFeedback
												>
													<Input style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="shiftType"
													label="Shift Type"
													// rules={rules.shiftType}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Shift Type"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("shiftType", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="SG">SG</Option>
														<Option value="DS">DS</Option>
														<Option value="CCTV">CCTV</Option>
														<Option value="MP">MP</Option>

													</Select>
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={6} lg={6} >
												<Form.Item
													name="siteName"
													label="Master Site Name"
													// rules={rules.siteName}
													hasFeedback
													style={{display: shiftType === "MP" ? 'block' : 'none' }}
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Master Site Name"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("siteName", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Site A">Site A</Option>
														<Option value="Site B">Site B</Option>
														<Option value="Site C">Site C</Option>
													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6} >
												<Form.Item
													name="siteName"
													label="Site Routes"
													// rules={rules.siteName}
													hasFeedback
													style={{display: shiftType === "MP" ? 'block' : 'none' }}
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Site Routes"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("siteName", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Site A">ABC</Option>
														<Option value="Site B">XYZ</Option>
														<Option value="Site C">DEF</Option>
													</Select>
												</Form.Item>
											</Col>
											
											<Col xs={24} sm={24} md={18} lg={18}></Col>
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="startDate"
													label="Start Date"
													// rules={rules.startDate}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker}
														// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="endDate"
													label="End Date"
													// rules={rules.startDate}
													hasFeedback
												>
													<DatePicker style={componentStyles.datePicker}
														// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
														format={'YYYY/MM/DD'} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="startTime"
													label="Start Time"
													// rules={rules.startTime}

													hasFeedback
												>
													<TimePicker
														format={format}
														// defaultValue={moment('12:08', format)}
														style={componentStyles.datePicker}
													// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
													/>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="endTime"
													label="End Time"

													// rules={rules.endTime}
													hasFeedback
												>
													<TimePicker
														format={format}
														// defaultValue={moment('12:08', format)}
														style={componentStyles.datePicker}
													// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
													/>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={24} lg={24}>
												<Form.Item
													name="daysWeek"
													label="Days of the week"
													// rules={rules.shiftType}
													hasFeedback
												>
													<div style={AppStyles.flexDirectionRow}>
														<div onClick={() => this.handleDays(0)} style={{
															backgroundColor: daysWeek[0].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid'
														}}>
															Monday
                                                        </div>
														<div onClick={() => this.handleDays(1)} style={{ backgroundColor: daysWeek[1].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Tuesday
                                                        </div>
														<div onClick={() => this.handleDays(2)} style={{ backgroundColor: daysWeek[2].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Wednesday
                                                        </div>
														<div onClick={() => this.handleDays(3)} style={{ backgroundColor: daysWeek[3].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Thursday
                                                        </div>
														<div onClick={() => this.handleDays(4)} style={{ backgroundColor: daysWeek[4].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Friday
                                                        </div>
														<div onClick={() => this.handleDays(5)} style={{ backgroundColor: daysWeek[5].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Saturday
                                                        </div>
														<div onClick={() => this.handleDays(6)} style={{ backgroundColor: daysWeek[6].select ? AppColors.newGrey : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Sunday
                                                        </div>
													</div>
												</Form.Item>
											</Col>
										</Row>
									</Col>
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} style={componentStyles.addCheckpointContainer}>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="callCheckInterval"
													label="Call Check Interval"
													// rules={rules.shiftType}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Select Interval (Minutes)"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("callCheckInterval", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="10">10</Option>
														<Option value="20">20</Option>
														<Option value="30">30</Option>
														<Option value="40">40</Option>

													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="expense"
													label="Expense"
													// rules={rules.expense}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Select Expense"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("expense", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Yes">Yes</Option>
														<Option value="No">No</Option>

													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6} >
												<Form.Item
													name="expenseRate"
													label="Expense in amount"
													style={{display: expense === "Yes" ? 'block' : 'none' }}
													hasFeedback
												>
													<Input min="0" type="number" style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={24} lg={24}>
												<Form.Item
													name="instructions"
													label="Instructions"
													rules={rules.site}
													hasFeedback
												>
													<Textarea placeholder={'Instructions...'} style={componentStyles.borderColor} />
												</Form.Item>
											</Col>

										</Row>
									</Col>

								</Row>
								<Row gutter={16} justify="center">
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} justify="center" style={componentStyles.addCheckpointContainer}>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="guardName"
													label="Select Guard"
													// rules={rules.guardName}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Select Guard"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("guardName", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="John">John</Option>
														<Option value="John Sm">John Sm</Option>
													</Select>
												</Form.Item>
											</Col>
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="position"
													label="Select Position"
													// rules={rules.position}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Select Position"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("position", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Security">Security</Option>
													</Select>
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="breakk"
													label="Break"
													// rules={rules.breakk}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Break"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("breakk", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="Yes">Yes</Option>
														<Option value="No">No</Option>
													</Select>
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="payRate"
													label="Pay Rate"
													// rules={rules.chargeRate}
													hasFeedback
												>
													<Input onChange={(e) => this.handleInputChange("payRate", e)} style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={12} sm={12} md={6} lg={6}>

												<Form.Item>
													<div style={AppStyles.marginTop40}>
														<Button
															// disabled={!(position && guardName && payRate && breakk)}
															onClick={this.handleAssignGuard}
															style={componentStyles.continueButton} htmlType="submit" block>
															Assign Guard
                                                    </Button>

													</div>
												</Form.Item>
											</Col>



										</Row>
									</Col>
								</Row>

								{assignGuard.length !== 0 && !edit ?
									<Row gutter={16} justify="center">
										<Col xs={20} sm={20} md={22} lg={22}>
											<Row className="card" gutter={16} style={componentStyles.tableContainer}>

												<Col xs={24} sm={24} md={24} lg={24}>


													<Card className="card" title="Assigned Guards">
														<Table searchable bordered columns={tableColumns} dataSource={assignGuard} rowKey='id' scroll={{ x: 600, y: 200 }} />
													</Card>

												</Col>
											</Row>
										</Col>

									</Row>
									: edit ?
										<Form layout="vertical">
											<Row gutter={16} justify="center">
												<Col className="card" xs={20} sm={20} md={22} lg={22}>
													<Row gutter={16} justify="center" style={componentStyles.tableContainer}>

														<Col xs={24} sm={24} md={6} lg={6}>
															<Form.Item
																name="guardName"
																label="Select Guard"
																// rules={rules.guardName}
																hasFeedback
															>
																<Select
																	showSearch
																	style={componentStyles.selectWhiteStyle}
																	bordered={false}
																	placeholder="Select Guard"
																	optionFilterProp="children"
																	onChange={(val) => this.handleChange("guardName", val)}
																	// onFocus={onFocus}
																	// onBlur={onBlur}
																	// onSearch={onSearch}
																	filterOption={(input, option) =>
																		option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																	}
																>
																	<Option value="John">John</Option>
																	<Option value="John Sm">John Sm</Option>
																</Select>
															</Form.Item>
														</Col>
														<Col xs={24} sm={24} md={6} lg={6}>
															<Form.Item
																name="position"
																label="Select Position"
																// rules={rules.position}
																hasFeedback
															>
																<Select
																	showSearch
																	style={componentStyles.selectWhiteStyle}
																	bordered={false}
																	placeholder="Select Position"
																	optionFilterProp="children"
																	onChange={(val) => this.handleChange("position", val)}
																	// onFocus={onFocus}
																	// onBlur={onBlur}
																	// onSearch={onSearch}
																	filterOption={(input, option) =>
																		option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																	}
																>
																	<Option value="Security">Security</Option>
																</Select>
															</Form.Item>
														</Col>

														<Col xs={24} sm={24} md={6} lg={6}>
															<Form.Item
																name="break"
																label="Break"
																// rules={rules.break}
																hasFeedback
															>
																<Select
																	showSearch
																	style={componentStyles.selectWhiteStyle}
																	bordered={false}
																	placeholder="Break"
																	optionFilterProp="children"
																	onChange={(val) => this.handleChange("break", val)}
																	// onFocus={onFocus}
																	// onBlur={onBlur}
																	// onSearch={onSearch}
																	filterOption={(input, option) =>
																		option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
																	}
																>
																	<Option value="Yes">Yes</Option>
																	<Option value="No">No</Option>
																</Select>
															</Form.Item>
														</Col>

														<Col xs={24} sm={24} md={6} lg={6}>
															<Form.Item
																name="payRate"
																label="Pay Rate"
																// rules={rules.chargeRate}
																hasFeedback
															>
																<Input style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
															</Form.Item>
														</Col>

														<Col xs={12} sm={12} md={6} lg={6}>

															<Form.Item>
																<div style={AppStyles.marginTop40}>
																	<Button
																		onClick={() => this.setState({ edit: false })}
																		style={componentStyles.continueButton} htmlType="submit" block>
																		Back
                                                    </Button>

																</div>
															</Form.Item>
														</Col>

														<Col xs={12} sm={12} md={6} lg={6}>

															<Form.Item>
																<div style={AppStyles.marginTop40}>
																	<Button
																		onClick={() => this.setState({ edit: false })}
																		style={componentStyles.continueButton} htmlType="submit" block>
																		Update
                                                    </Button>

																</div>
															</Form.Item>
														</Col>
													</Row>
												</Col>
											</Row>
										</Form> : null
								}
								<Row gutter={16} justify="center">
									<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

										<Form.Item>
											<Button style={componentStyles.continueButton} onClick={() => { this.props.history.push('/app/pages/shift-list') }} block>
												{record ? 'Edit Shift' : 'Create Shift' }
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

export default NewShift
