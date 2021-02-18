import {
	DownloadOutlined,
	EyeOutlined,
	PrinterOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Menu, Row, Tooltip, Modal, Checkbox, Form, Input, Select } from 'antd';
import userData from "assets/data/company-list.data.json";
import { Table } from "ant-table-extensions";
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
// import complianceData from "assets/data/compliance-interviews-list.data";
import { componentStyles } from "./../../styles";
import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import SiteSurveyDetail from "./../site-survey-detail"

const { Option } = Select;

const siteSurveyData = [
	{
		"id": "1",
		"siteType": "Security Guarding",
		"surveyor": "Completed",
		"siteName": "Store 1 Survey",
		"surveyStatus": "Completed",
		"surveyDate": 1583107200

	}
	// {
	// 	"id": "2",
	// 	"checkpointName": "Stairs",
	// 	"checkpointDescriptor": "asdsad",
	// }
]

export class SiteSurvey extends Component {

	constructor(props) {
		super(props);
		this.state = {

			siteSurvey: siteSurveyData,
			open: false,
			selectionType: '',
			form: false,
			record: null,
			edit: false
		};
	}

	viewItem = (action, record) => {
		this.props.history.push({
			pathname: '/app/pages/site-survey-detail',
			state: { action, record }
		})
	}

	
	callbackFunction = (form) => {
	
		this.setState({ form: form, edit: form})
	}

	render() {
		const { siteSurvey, open, selectionType, form, record, edit} = this.state;
		const tableColumns = [
			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						<a onClick={() => this.setState({ edit: true, record: record })}>

							<span>{record.siteName}</span>
						</a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Survey Status',
				dataIndex: 'surveyStatus',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.surveyStatus}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.surveyStatus.toLowerCase();
						b = b.surveyStatus.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Surveyor',
				dataIndex: 'surveyor',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.surveyor}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.surveyor.toLowerCase();
						b = b.surveyor.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},




			{
				title: 'Survey Date',
				dataIndex: 'surveyDate',
				render: date => (
					<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.surveyDate).unix() - moment(b.surveyDate).unix(),
				width: 200
			},


			{
				title: 'Site Type',
				dataIndex: 'siteType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.siteType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteType.toLowerCase();
						b = b.siteType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},


			// {
			// 	title: '',
			// 	dataIndex: '',
			// 	render: date => (
			// 		<div style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
			// 			<Button type="primary" shape="round" icon={<DownloadOutlined />} style={{ alignSelf: "center" }} />
			// 		</div>
					
			// 	),
			// 	// sorter: (a, b) => moment(a.surveyDate).unix() - moment(b.surveyDate).unix(),
			// 	width: 200,
			// },



			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />}/>
						</Tooltip>
						<Tooltip title="Download">
						<Button type="primary" className="mr-2" icon={<DownloadOutlined />} />
						</Tooltip>
					</div>
				)
			}
		];



		return (
			<>
				{/* <Modal title="Add Checkpoint"
					onCancel={() => this.setState({ open: false })}
					visible={open}
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
				 */}
				<Row>
					<Col xs={24} sm={24} md={24} lg={24} >
						<div style={AppStyles.marginBottom40}>
							<div style={AppStyles.horizontallLineWidth100}>
							</div>
						</div>
					</Col>
				</Row>
				<Row justify="center">

					<Col xs={24} sm={24} md={24} lg={24} >

						{
							(form || edit) ?
								<SiteSurveyDetail record={edit ? record : null} parentCallback={this.callbackFunction}/> :
								<Card className="card" title="Site Survey"
								extra={
									<Button
										onClick={() => this.setState({ form: true })}
										style={componentStyles.continueButton} htmlType="submit" block>
										Add Site Survey
									        </Button>

								}
								>
									<Table
										bordered columns={tableColumns} dataSource={siteSurvey} rowKey='id' scroll={{ x: 600, y: 200 }} />
								</Card>
						}
					</Col>
				</Row>
			</>
		)
	}
}

export default SiteSurvey
