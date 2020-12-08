import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, DatePicker, Steps, Checkbox, TimePicker } from 'antd';
import { BuildOutlined, CalendarOutlined, CheckCircleOutlined, PoundCircleOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import Position from 'views/app-views/components/data-display/carousel/Position';
import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';

const { SubMenu } = Menu;
const { Step } = Steps;
const { Option } = Select;

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
			daysWeek: "",
			clientName: "",
			siteName: "",
			break: "",
			position: "",
			guardName: "",
			qrScanInterval: "",
			signinRadius: "",
			trackingInterval: "",
			callCheckInterval: "",
			expense: "",
			nextPage: false

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
		const { users, userProfileVisible, selectedUser, search, nextPage } = this.state;
		const { classes, location: { pathname }, history } = this.props;
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					{!nextPage ?
						<Col xs={24} sm={24} md={20} lg={20} >
							<Card className="card" title="New Shift" style={AppStyles.paddingBottom20}>
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
												name="shiftType"
												label="Shift Type"
												// rules={rules.shiftType}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="clientName"
												label="Client Name"
												// rules={rules.clientName}
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
													<Option value="Client 1">Client 1</Option>
													<Option value="Client 2">Client 2</Option>
													<Option value="Client 3">Client 3</Option>
												</Select>
											</Form.Item>
										</Col>

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="siteName"
												label="Site Name"
												// rules={rules.siteName}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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

										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="chargeRate"
												label="Charge Rate"
												// rules={rules.chargeRate}
												hasFeedback
											>
												<Input style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
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
										<Col xs={24} sm={24} md={8} lg={8}>
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
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="daysWeek"
												label="Days of the week"
												// rules={rules.shiftType}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
													bordered={false}
													placeholder="Days of the week"
													optionFilterProp="children"
													mode="multiple"
													onChange={(val) => this.handleChange("daysWeek", val)}
													// onFocus={onFocus}
													// onBlur={onBlur}
													// onSearch={onSearch}
													filterOption={(input, option) =>
														option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
													}
												>
													<Option value="Monday">Monday</Option>
													<Option value="Tuesday">Tuesday</Option>
													<Option value="Wednesday">Wednesday</Option>
													<Option value="Thursday">Thursday</Option>
													<Option value="Friday">Friday</Option>
													<Option value="Saturday">Saturday</Option>
													<Option value="Sunday">Sunday</Option>

												</Select>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="startTime"
												label="Start Time"
												// rules={rules.startTime}
												hasFeedback
											>
												<TimePicker style={componentStyles.datePicker}
												// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
												/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="endTime"
												label="End Time"
												// rules={rules.endTime}
												hasFeedback
											>
												<TimePicker style={componentStyles.datePicker}
												// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
												/>
											</Form.Item>
										</Col>
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="break"
												label="Break"
												// rules={rules.break}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="position"
												label="Select Position"
												// rules={rules.position}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
													style={componentStyles.selectStyle}
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
												<Input style={componentStyles.borderColor} prefix={<PoundCircleOutlined />} />
											</Form.Item>
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


												<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

													<Form.Item>
														<Button style={componentStyles.continueButton} htmlType="submit" block>
															Add Checkpoint
								</Button>
													</Form.Item>
												</Col>

											</Row>
										</Col>
									</Row>
									<Row gutter={16} justify="center">

										<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

											<Form.Item>
												<Button onClick={() => this.setState({ nextPage: true })} style={componentStyles.continueButton} htmlType="submit" block>
													Add Position
					</Button>
											</Form.Item>
										</Col>
									</Row>
								</Form>
							</Card>
							{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
						</Col> :
						<Col xs={24} sm={24} md={20} lg={20} >
							<Card className="card" title="New Shift" style={AppStyles.paddingBottom20}>
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
												name="signinRadius"
												label="Signin Radius"
												// rules={rules.shiftType}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="trackingInterval"
												label="Tracking Interval"
												// rules={rules.shiftType}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="callCheckInterval"
												label="Call Check Interval"
												// rules={rules.shiftType}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
										<Col xs={24} sm={24} md={8} lg={8}>
											<Form.Item
												name="expense"
												label="Expense"
												// rules={rules.expense}
												hasFeedback
											>
												<Select
													showSearch
													style={componentStyles.selectStyle}
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
										<Col xs={24} sm={24} md={8} lg={8}>
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


					}



				</Row>
			</div>
		)
	}
}

export default NewShift
