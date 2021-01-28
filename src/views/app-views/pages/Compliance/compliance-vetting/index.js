import { DeleteOutlined, UserOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Collapse, Form, Checkbox } from 'antd';
import { Table } from "ant-table-extensions";
import Textarea from 'views/app-views/components/data-entry/input/Textarea';

import AvatarStatus from 'components/shared-components/AvatarStatus';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
const { Panel } = Collapse;

const vettingData = [
	{
		"id": "1",
		"guardName": "John Smith",
		"img": "/img/avatars/thumb-1.jpg",
		"screenStatus": "Completed",
		"auditBy": "SC user A",
		"vettedBy": "SC user B",
		"vettingCompletedOn": 1583107200,
		"vettingStartDate": 1583107200,
		"auditDate": 1583107200,

	}
]

const vettingStatisticData = [
	{
		title: 'Vetting Completed',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Vetting',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Audit Checks',
		value: '20',
		backgroundColor: "#60b0f4"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	},
]

const { Option } = Select;


function callback(key) {
	console.log(key);
}
export class ComplianceVetting extends Component {

	state = {
		vetting: vettingData,
		userProfileVisible: false,
		selectedUser: null,
		edit: false,
		search: {
			screenStatus: "",
			auditBy: "",
			vettedBy: "",
			guardName: "",
			vettingPeriod: ""
		}
	}

	handleChange = (type, value) => {
		console.log(`selected ${value}`);
		const { search } = this.state;
		this.setState({
			search: {
				...search,
				[type]: value
			}
		})

	}

	handleChangeInput = (type, event) => {
		console.log(`selected ${event.target.value}`);
		const { search } = this.state;
		this.setState({
			search: {
				...search,
				[type]: event.target.value
			}
		})

	}

	searchInTable = () => {
		const { search } = this.state;
		let userList = vettingData
		let screenStatus = search.screenStatus
		let auditBy = search.auditBy
		let vettedBy = search.vettedBy
		let guardName = search.guardName
		let vettingCompletedOn = search.vettingPeriod

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(screenStatus, auditBy, vettedBy, guardName, vettingCompletedOn, element)


		});
		this.setState({ vetting: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { vetting, search, edit } = this.state;

		const tableColumns = [

			{
				title: 'Screen Status',
				dataIndex: 'screenStatus',
				render: (_, record) => (
					<div className="d-flex">
						<a onClick={() => this.setState({ edit: true })}>

							<span>{record.screenStatus}</span>
						</a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.screenStatus.toLowerCase();
						b = b.screenStatus.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},



			{
				title: 'Audit By',
				dataIndex: 'auditBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.auditBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.auditBy.toLowerCase();
						b = b.auditBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Vetted By',
				dataIndex: 'vettedBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.vettedBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.vettedBy.toLowerCase();
						b = b.vettedBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Vetting Completed On',
				dataIndex: 'vettingCompletedOn',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.vettingCompletedOn).unix() - moment(b.vettingCompletedOn).unix(),
				width: 200
			},

			{
				title: 'Vetting Start Date',
				dataIndex: 'vettingStartDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.vettingStartDate).unix() - moment(b.vettingStartDate).unix(),
				width: 200
			},
			{
				title: 'Audit Date',
				dataIndex: 'auditDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.auditDate).unix() - moment(b.auditDate).unix(),
				width: 200
			},

			// {
			// 	title: '',
			// 	dataIndex: 'actions',
			// 	render: (_, elm) => (
			// 		<div className="text-right">
			// 			{/* <Tooltip title="View">
			// 				<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
			// 			</Tooltip> */}
			// 			{/* <Tooltip title="Delete">
			// 				<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
			// 			</Tooltip> */}
			// 		</div>
			// 	)
			// }
			{
				title: '',
				dataIndex: 'interviewDate',
				render: date => (
					<div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
						<Button type="primary" shape="round" icon={<DownloadOutlined />} style={{ alignSelf: "center" }} />
					</div>
				),
				// sorter: (a, b) => moment(a.interviewDate).unix() - moment(b.interviewDate).unix(),
				width: 200,
			},
		];

		return (
			<>
				<Row gutter={16} justify="center">
					<Col xs={24} sm={24} md={24} lg={24}>

						<Row gutter={16}>
							{
								vettingStatisticData.map((elm, i) => (
									<Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}>
										<StatisticWidget
											title={elm.title}
											value={elm.value}
											status={elm.status}
											subtitle={elm.subtitle}
											backgroundColor={elm.backgroundColor}
										/>
									</Col>
								))
							}
						</Row>

					</Col>
				</Row>
				<Row gutter={16} justify="center">
			

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						{edit ?
							<Card className="card" title="Edit Vetting">
								<Collapse defaultActiveKey={['1']} onChange={callback}>
									<Panel header="Click here to complete Vetting" key="1">
										<Form layout="vertical">
										<div><h3>Personal References</h3></div>
											<Row gutter={16} justify="center" style={componentStyles.subCard}>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="refreeName"
														label="Personal Refree Full Name"
														// rules={rules.chargeRate}
														hasFeedback
													>
														<Input
															disabled
															defaultValue="Personal Refree Full Name"
															style={componentStyles.borderColor} prefix={<UserOutlined />} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestSentDate"
														label="Request Sent Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestReceievedDate"
														label="Request Receieved Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24}>
													<Form.Item
														name="comments"
														label="Comments"
														// rules={rules.site}
														hasFeedback
													>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>

											</Row>
											<div><h3>Employment References</h3></div>
											<Row gutter={16} justify="center" style={componentStyles.subCard}>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employerName"
														label="Employer Name"
														// rules={rules.chargeRate}
														hasFeedback
													>
														<Input
															disabled
															defaultValue="Employer Name"
															style={componentStyles.borderColor} prefix={<UserOutlined />} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employedFrom"
														label="Employed From"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employedTo"
														label="Employed To"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestSentDate"
														label="Request Sent Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employmentFrom"
														label="Employment Confirmed From"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employmentTo"
														label="Employment Confirmed To"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24}>
													<Form.Item
														name="comments"
														label="Comments"
														// rules={rules.site}
														hasFeedback
													>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>

											</Row>
									
											<Row className="card" gutter={16} justify="center" style={componentStyles.subCard}>

												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked>Valid passport</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked>Work Permit / Visa if applied</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked>SIA Licence</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked>Proof of Address</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked>Driving Licence if applicable</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked>National Insurance</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												{/* <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
													<Checkbox style={componentStyles.borderColor} checked>Work Permit / Visa if applied</Checkbox>
													<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
													<Checkbox style={componentStyles.borderColor} checked>SIA Licence</Checkbox>
													<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
													<Checkbox style={componentStyles.borderColor} checked>Proof of Address</Checkbox>
													<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
													<Checkbox style={componentStyles.borderColor} checked>Driving Licence if applicable</Checkbox>
													<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
													<Checkbox style={componentStyles.borderColor} checked>National Insurance</Checkbox>
													<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>
												</Col> */}

												<Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
													<Form.Item
														name="vettedBy"
														label="Vetted By"
														// rules={rules.trainer}
														hasFeedback
													>
														<Select
															showSearch
															style={componentStyles.selectWhiteStyle}
															bordered={false}
															placeholder="Vetted By"
															optionFilterProp="children"
															onChange={(val) => this.handleChange("vettedBy", val)}
															// onFocus={onFocus}
															// onBlur={onBlur}
															// onSearch={onSearch}
															filterOption={(input, option) =>
																option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
															}
														>
															<Option value="SC User B">SC User B</Option>

														</Select>
													</Form.Item>
												</Col>

												<Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
													<Form.Item
														name="completedOn"
														label="Vetting Completed On Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>

												{/* <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
													<Form.Item
														name="auditBy"
														label="Audit By"
														// rules={rules.trainer}
														hasFeedback
													>
														<Select
															showSearch
															style={componentStyles.selectWhiteStyle}
															bordered={false}
															placeholder="Audit By"
															optionFilterProp="children"
															onChange={(val) => this.handleChange("auditBy", val)}
															// onFocus={onFocus}
															// onBlur={onBlur}
															// onSearch={onSearch}
															filterOption={(input, option) =>
																option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
															}
														>
															<Option value="SC User A">SC User A</Option>

														</Select>
													</Form.Item>
												</Col> */}




												{/* <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
													<Form.Item
														name="auditDate"
														label="Audit Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col> */}

											</Row>
											{/* <Row className="card" gutter={16} justify="center" style={componentStyles.subCard}>

												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop10}>

													<Checkbox style={componentStyles.borderColor} checked disabled>Audit Verified Peronal References</Checkbox>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop10}>

													<Checkbox style={componentStyles.borderColor} checked disabled>Audit Verified Employment References</Checkbox>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop10}>

													<Checkbox style={componentStyles.borderColor} checked disabled>Audit Verified Documents</Checkbox>
												</Col>


											</Row> */}
											<Row gutter={16} justify="center">
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
										</Form>
									</Panel>
									<Panel header="Click here to complete Audit" key="2">
										<Form layout="vertical">
										<div><h3>Personal References</h3></div>
											<Row  gutter={16} justify="center" style={componentStyles.subCard}>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="refreeName"
														label="Personal Refree Full Name"
														// rules={rules.chargeRate}
														hasFeedback
													>
														<Input
															disabled
															defaultValue="Personal Refree Full Name"
															style={componentStyles.borderColor} prefix={<UserOutlined />} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestSentDate"
														label="Request Sent Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestReceievedDate"
														label="Request Receieved Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24}>
													<Form.Item
														name="comments"
														label="Comments"
														// rules={rules.site}
														hasFeedback
													>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>

											</Row>
											<div><h3>Employment References</h3></div>
											<Row  gutter={16} justify="center" style={componentStyles.subCard}>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employerName"
														label="Employer Name"
														// rules={rules.chargeRate}
														hasFeedback
													>
														<Input
															disabled
															defaultValue="Employer Name"
															style={componentStyles.borderColor} prefix={<UserOutlined />} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employedFrom"
														label="Employed From"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employedTo"
														label="Employed To"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestSentDate"
														label="Request Sent Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employmentFrom"
														label="Employment Confirmed From"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employmentTo"
														label="Employment Confirmed To"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24}>
													<Form.Item
														name="comments"
														label="Comments"
														// rules={rules.site}
														hasFeedback
													>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>

											</Row>
											{/* <Row className="card" gutter={16} justify="center" style={componentStyles.subCard}>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employerName"
														label="Employer Name"
														// rules={rules.chargeRate}
														hasFeedback
													>
														<Input
															disabled
															defaultValue="Employer Name"
															style={componentStyles.borderColor} prefix={<UserOutlined />} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employedFrom"
														label="Employed From"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employedTo"
														label="Employed To"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="requestSentDate"
														label="Request Sent Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employmentFrom"
														label="Employment Confirmed From"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={8} lg={8}>
													<Form.Item
														name="employmentTo"
														label="Employment Confirmed To"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker
															disabled
															style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24}>
													<Form.Item
														name="comments"
														label="Comments"
														// rules={rules.site}
														hasFeedback
													>
														<Textarea placeholder={'Comments...'} style={componentStyles.borderColor} />
													</Form.Item>
												</Col>

											</Row> */}
											<Row className="card" gutter={16} justify="center" style={componentStyles.subCard}>

											<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked disabled>Valid passport</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} disabled/>
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked disabled>Work Permit / Visa if applied</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} disabled/>
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked disabled>SIA Licence</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} disabled/>
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle} disabled>
													<Checkbox style={componentStyles.checkboxStyle} checked disabled>Proof of Address</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} disabled />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked disabled>Driving Licence if applicable</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} disabled />
													</Form.Item>
												</Col>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={4} lg={4} style={AppStyles.testStyle}>
													<Checkbox style={componentStyles.checkboxStyle} checked disabled>National Insurance</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={20} lg={20} >
													<Form.Item name="comments" hasFeedback>
														<Input rows={1} placeholder={'Comments...'} style={componentStyles.borderColor} disabled />
													</Form.Item>
												</Col>
												</Col>



												<Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
													<Form.Item
														name="completedOn"
														label="Vetting Completed On Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>



												<Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
													<Form.Item
														name="auditDate"
														label="Audit Date"
														// rules={rules.trainingDate}
														hasFeedback
													>
														<DatePicker style={componentStyles.datePicker}
															// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
															format={'YYYY/MM/DD'} />
													</Form.Item>
												</Col>

											</Row>
											<Row className="card" gutter={16} justify="center" style={componentStyles.subCard}>

												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop10}>

													<Checkbox style={componentStyles.borderColor} checked >Audit Verified Peronal References</Checkbox>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop10}>

													<Checkbox style={componentStyles.borderColor} checked >Audit Verified Employment References</Checkbox>
												</Col>
												<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop10}>

													<Checkbox style={componentStyles.borderColor} checked >Audit Verified Documents</Checkbox>
												</Col>


											</Row>
											<Row gutter={16} justify="center">
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
										</Form>
									</Panel>
								</Collapse>
							</Card> :
							<Card className="card" title="Vetting List" >
								<Table bordered columns={tableColumns} dataSource={vetting} rowKey='id' scroll={{ x: 1400, y: 300 }} />
							</Card>
						}
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default ComplianceVetting



export const filterCombination = (screenStatus, auditBy, vettedBy, guardName, vettingCompletedOn, element) => {
	if (screenStatus && auditBy && vettedBy && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (screenStatus && auditBy && vettedBy && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && auditBy && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (auditBy && vettedBy && guardName && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && vettedBy && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (screenStatus && auditBy && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && vettedBy && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && guardName && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (auditBy && vettedBy && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (auditBy && guardName && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (vettedBy && guardName && vettingCompletedOn) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (screenStatus && auditBy && vettedBy) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (screenStatus && auditBy && guardName) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (auditBy && vettedBy && guardName) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (screenStatus && vettedBy && guardName) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()
	} else if (screenStatus && vettingCompletedOn) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (auditBy && vettingCompletedOn) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (vettedBy && vettingCompletedOn) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")


	} else if (guardName && vettingCompletedOn) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (screenStatus && auditBy) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (screenStatus && vettedBy) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (screenStatus && guardName) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (auditBy && vettedBy) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (auditBy && guardName) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (vettedBy && guardName) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (vettingCompletedOn) {

		return moment.unix(element.vettingCompletedOn).format("YYYY/MM/DD") === moment(vettingCompletedOn).format("YYYY/MM/DD")

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (vettedBy) {

		return element.vettedBy.trim().toUpperCase() === vettedBy.trim().toUpperCase()

	} else if (auditBy) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (screenStatus) {

		return element.screenStatus.trim().toUpperCase() === screenStatus.trim().toUpperCase()

	}
}

