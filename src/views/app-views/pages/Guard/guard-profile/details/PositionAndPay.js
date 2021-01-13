import { DollarOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Form, Input, Row, Select, Switch } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";

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
			validator(value) {
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
		this.setState({

			[type]: value

		})

	}

	render() {
		const { action, record } = this.props;

		return (
			<div>


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
								<Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
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


						<Col xs={8} sm={8} md={8} lg={8} style={AppStyles.alignSelfCenter}>

							<Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Status
									</Col>

						<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop20}>

							<Checkbox style={componentStyles.borderColor} checked>Allow mobile app access ?</Checkbox>
						</Col>

					</Row>
					<Row gutter={16} justify="center">
						<Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>
							< Form.Item>
								<Button
									onClick={() => this.props.history.goBack()}
									style={componentStyles.continueButton} htmlType="submit" block>
									Back
                                    </Button>
							</Form.Item>


						</Col>
						<Col xs={24} sm={24} md={6} lg={6} style={AppStyles.marginTop20}>

							<Form.Item>
								<Button
									style={componentStyles.continueButton} htmlType="submit" block>
									Update
                                    </Button>
							</Form.Item>
						</Col>
					</Row>
				</Form>

			</div>
		)
	}
}

export default PositionAndPay
