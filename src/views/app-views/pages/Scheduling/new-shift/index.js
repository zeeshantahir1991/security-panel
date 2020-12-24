import { CheckCircleOutlined, DeleteOutlined, EyeOutlined, PoundCircleOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, DatePicker, Form, Input, Modal, Row, Select, Table, TimePicker, Tooltip } from 'antd';
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

			shiftType: "",
			clientName: "",
			siteName: "",
			break: "",
			position: "",
			guardName: "",
			payRate: null,
			qrScanInterval: "",
			signinRadius: "",
			trackingInterval: "",
			callCheckInterval: "",
			expense: "",
			nextPage: false,

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
			assignPosition: [],

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

	assignPosition = () => {
		const { position, guardName, payRate } = this.state;
		let assignPosition = [...this.state.assignPosition];;
		assignPosition.push({ position: position, guardName: guardName, payRate: payRate })
		this.setState({
			assignPosition,
			positionModal: false
		})
	}


	render() {
		const { daysWeek, checkpointModal, positionModal, position, guardName, payRate, assignPosition } = this.state;
		const {  } = this.props;
		const tableColumns = [
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
				width: 150
			},

			{
				title: 'Guard name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.guardName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Pay Rate',
				dataIndex: 'payRate',
				sorter: {
					compare: (a, b) => a.payRate.length - b.payRate.length,
				},
				width: 150
			},

			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<div style={AppStyles.marginTop50}>
				<Modal title="Add Checkpoint"
					onCancel={() => this.handleCancel('checkpoint')}
					visible={checkpointModal}
					footer={[
						<Button
							style={componentStyles.continueButton} htmlType="submit" block>
							Add Checkpoint
					    </Button>
					]}
				>
					<Form layout="vertical">

						<Row gutter={16}>

							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="siteName"
									label="Site Name"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" disabled defaultValue={'Site A'} style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={12} lg={12}>
								<Form.Item
									name="checkpointName"
									label="Checkpoint Name"
									// rules={rules.checkpointName}
									hasFeedback
								>
									<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={24} lg={24}>
								<Form.Item
									name="checkpointDescriptor"
									label="Checkpoint Descriptor"
									// rules={rules.checkpointDescriptor}
									hasFeedback
								>
									<Textarea placeholder={'Description...'} style={componentStyles.borderColor} />
								</Form.Item>
							</Col>

							<Col xs={24} sm={24} md={8} lg={8}>
								<Form.Item
									name="qrScanInterval"
									label="QR Scan Interval Minutes"
									// rules={rules.storeLocation}
									hasFeedback
								>
									<Select
										showSearch
										style={componentStyles.selectWhiteStyle}
										bordered={false}
										placeholder="QR Scan Interval Minutes"
										optionFilterProp="children"
										onChange={(val) => this.handleChange("qrScanInterval", val)}
										// onFocus={onFocus}
										// onBlur={onBlur}
										// onSearch={onSearch}
										filterOption={(input, option) =>
											option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										}
									>
										<Option value="30">30</Option>
										<Option value="60">60</Option>
									</Select>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop5}>

								<Checkbox style={componentStyles.borderColor} checked>Status</Checkbox>
							</Col>
						</Row>
					</Form>

				</Modal>
				<Modal title="Assign Position"
					onCancel={() => this.handleCancel('position')}
					visible={positionModal}
					footer={[
						<Button
							disabled={!(position && guardName && payRate)}
							onClick={this.assignPosition}
							style={componentStyles.continueButton} htmlType="submit" block>
							Assign Position
					    </Button>
					]}
				>
					<Form layout="vertical">

						<Row gutter={16}>

							<Col xs={24} sm={24} md={8} lg={8}>
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
							<Col xs={24} sm={24} md={8} lg={8}>
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
							<Col xs={24} sm={24} md={8} lg={8}>
								<Form.Item
									name="payRate"
									label="Pay Rate"
									// rules={rules.chargeRate}
									hasFeedback
								>
									<Input type="number" onChange={(val) => this.handleInputChange("payRate", val)}
										style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
								</Form.Item>
							</Col>

						</Row>
					</Form>

				</Modal>
				<Row justify="center">
					<Col xs={24} sm={24} md={18} lg={18} >
						<Card className="card" title="New Shift"
							extra={
								<div style={AppStyles.flexDirectionRow}>
									<div style={AppStyles.marginRight20}>
										<Button
											onClick={() => this.showModal('position')}
											style={componentStyles.continueButton} htmlType="submit" block>
											Assign Position
								        </Button>
									</div>
									<div>
										<Button
											onClick={() => this.showModal('checkpoint')}
											style={componentStyles.continueButton} htmlType="submit" block>
											Add Checkpoint
								        </Button>
									</div>
								</div>
							}
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

											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="siteName"
													label="Site Name"
													// rules={rules.siteName}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Site Name"
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
										</Row>
									</Col>
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} style={componentStyles.addCheckpointContainer}>

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
													name="payRate"
													label="Pay Rate"
													// rules={rules.chargeRate}
													hasFeedback
												>
													<Input style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
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
															backgroundColor: daysWeek[0].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid'
														}}>
															Monday
                                                        </div>
														<div onClick={() => this.handleDays(1)} style={{ backgroundColor: daysWeek[1].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Tuesday
                                                        </div>
														<div onClick={() => this.handleDays(2)} style={{ backgroundColor: daysWeek[2].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Wednesday
                                                        </div>
														<div onClick={() => this.handleDays(3)} style={{ backgroundColor: daysWeek[3].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Thursday
                                                        </div>
														<div onClick={() => this.handleDays(4)} style={{ backgroundColor: daysWeek[4].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Friday
                                                        </div>
														<div onClick={() => this.handleDays(5)} style={{ backgroundColor: daysWeek[5].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Saturday
                                                        </div>
														<div onClick={() => this.handleDays(6)} style={{ backgroundColor: daysWeek[6].select ? AppColors.cornFlowerBlue : AppColors.white, padding: 10, width: 100, textAlign: 'center', marginRight: 10, cursor: 'pointer', borderRadius: 10, borderColor: AppColors.alto, borderWidth: 1, borderStyle: 'solid' }}>
															Sunday
                                                        </div>
													</div>
												</Form.Item>
											</Col>
										</Row>
									</Col>

								</Row>
								<Row gutter={16} justify="center">
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} justify="center" style={componentStyles.addCheckpointContainer}>


											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="checkpointName"
													label="Checkpoint Name"
													// rules={rules.checkpointName}
													hasFeedback
												>
													<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="checkpointDescriptor"
													label="Checkpoint Descriptor"
													// rules={rules.checkpointDescriptor}
													hasFeedback
												>
													<Input type="text" style={componentStyles.borderColor} prefix={<CheckCircleOutlined />} />
												</Form.Item>
											</Col>

											<Col xs={24} sm={24} md={8} lg={8}>
												<Form.Item
													name="qrScanInterval"
													label="QR Scan Interval Minutes"
													// rules={rules.storeLocation}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="QR Scan Interval Minutes"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("qrScanInterval", val)}
														// onFocus={onFocus}
														// onBlur={onBlur}
														// onSearch={onSearch}
														filterOption={(input, option) =>
															option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
														}
													>
														<Option value="30">30</Option>
														<Option value="60">60</Option>
													</Select>
												</Form.Item>
											</Col>



										</Row>
									</Col>
								</Row>

								<Row gutter={16} justify="center">
									<Col xs={20} sm={20} md={22} lg={22}>
										<Row className="card" gutter={16} style={componentStyles.addIntervalContainer}>


											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="signinRadius"
													label="Signin Radius"
													// rules={rules.shiftType}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Signin Radius (Miles)"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("signinRadius", val)}
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
													name="trackingInterval"
													label="Tracking Interval"
													// rules={rules.shiftType}
													hasFeedback
												>
													<Select
														showSearch
														style={componentStyles.selectWhiteStyle}
														bordered={false}
														placeholder="Tracking Interval"
														optionFilterProp="children"
														onChange={(val) => this.handleChange("trackingInterval", val)}
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
											<Col xs={24} sm={24} md={6} lg={6}>
												<Form.Item
													name="expenseRate"
													label="Expense in amount"
													// rules={rules.checkpointDescriptor}
													hasFeedback
												>
													<Input type="number" style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
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
								{assignPosition.length !== 0 ?
									<Row gutter={16} justify="center">
										<Col xs={20} sm={20} md={22} lg={22}>
											<Row className="card" gutter={16} style={componentStyles.tableContainer}>

												<Col xs={24} sm={24} md={24} lg={24}>


													<Card className="card" title="Assigned Positions">
														<Table bordered columns={tableColumns} dataSource={assignPosition} rowKey='id' scroll={{ x: 600, y: 200 }} />
													</Card>

												</Col>
											</Row>
										</Col>

									</Row>
									: null
								}
								<Row gutter={16} justify="center">
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
					</Col>

				</Row>
			</div>
		)
	}
}

export default NewShift
