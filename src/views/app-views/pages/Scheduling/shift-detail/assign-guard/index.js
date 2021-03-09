import { PoundCircleOutlined, DeleteOutlined} from '@ant-design/icons';
import { Table} from "ant-table-extensions";
import { Button, Card, Col, Form, Input, Row, Select, Tooltip} from 'antd';
import { AppStyles } from "assets/styles";
import React, { Component } from 'react';
import { componentStyles } from "./../../styles";

const { Option } = Select;

const userData = [
	{
		"id": "1",
		"guardName": "John Sm",
		"position": "Security",
		"break": "Yes",
		"payRate": 25,

	},
	{
		"id": "2",
		"guardName": "Smellet Disk",
		"position": "Detailing",
		"break": "No",
		"payRate": 45,

	}
]



export class AssignGuard extends Component {

	constructor(props) {
		super(props);
		this.state = {

			users: userData,
			selectionType: '',
			form: false,
			edit: false

		};
	}



	render() {
		const { users, selectionType, form, edit } = this.state;
		const { } = this.props;
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
				dataIndex: 'break',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.break}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.break.toLowerCase();
						b = b.break.toLowerCase();
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
			<>
				<Row>
					<Col xs={24} sm={24} md={24} lg={24} >
						<div style={AppStyles.marginBottom40}>
							<div style={AppStyles.horizontallLineWidth100}>
							</div>
						</div>
					</Col>
				</Row>
				<div style={AppStyles.marginTop20}>

					{
						form ?
							<Form layout="vertical">
								<Row gutter={16} justify="center">

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



								</Row>
								<Row gutter={16} justify="center">
									<Col xs={12} sm={12} md={6} lg={6}>

										<Form.Item>
											<div style={AppStyles.marginTop40}>
												<Button
													onClick={() => this.setState({ form: false })}
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
													onClick={() => this.setState({ form: false })}
													style={componentStyles.continueButton} htmlType="submit" block>
													Add
                                                    </Button>

											</div>
										</Form.Item>
									</Col>
								</Row>
							</Form>
							:
							edit ?
								<Form layout="vertical">
									<Row gutter={16} justify="center">

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
								</Form> :

								<Row justify="center">
									<Col xs={24} sm={24} md={24} lg={24} >
										<Card className="card" title="Assign Guard Listing" extra={
											<Row gutter={16}>
												<Col xs={24} sm={24} md={24} lg={24}>

													<Button
														onClick={() => this.setState({ form: true })}
														style={componentStyles.continueButton} htmlType="submit" block>
														Assign New Guard
                                                    </Button>

												</Col>
											</Row>
										}>
											<Table
												searchable
												bordered columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 800, y: 200 }} />
										</Card>
									</Col>
								</Row>
					}
				</div>
			</>
		)
	}
}

export default AssignGuard
