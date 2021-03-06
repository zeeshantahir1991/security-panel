import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography, Upload } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
const { Text } = Typography;
const { TextArea } = Input;


export class letterHeadSettings extends Component {

	constructor(props) {
		super(props);
		this.state = {

			name: "",
			desc: "",
			header: "",
			footer: ""

		};
	}

	handleChange = (type, event) => {
		console.log(`selected ${event}`);
		this.setState({

			[type]: event.target.value

		})

	}


	render() {
		const { name, header, desc, footer } = this.state;

		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={8} lg={8} className="card" style={{ borderRadius: 10, backgroundColor: 'white' }}>
						<Form layout="vertical">
							<Row justify="center" style={AppStyles.padding20}>
								<Col xs={24} sm={24} md={24} lg={24}>
									<Form.Item
										name="name"
										// label="Name"
										// rules={rules.firstname}
										hasFeedback
									>
										<Input
											onChange={(val) => this.handleChange("name", val)}
											placeholder="Name"
											style={componentStyles.borderColor}
											prefix={<UserOutlined />}
										/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24}>
									<Form.Item
										name="header"
										// label="Header Content"
										// rules={rules.lastname}
										hasFeedback
									>
										<TextArea
											onChange={(val) => this.handleChange("header", val)}
											placeholder="Header Content" style={componentStyles.borderColor} />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24}>
									<Form.Item
										name="desc"
										// label="Description"
										// rules={rules.lastname}
										hasFeedback
									>
										<TextArea
											onChange={(val) => this.handleChange("desc", val)}
											placeholder="Description" style={componentStyles.borderColor} prefix={<UserOutlined />} />
									</Form.Item>
								</Col>

								<Col xs={24} sm={24} md={24} lg={24}>
									<Form.Item
										name="footer"
										// label="Header Content"
										// rules={rules.lastname}
										hasFeedback
									>
										<TextArea
											onChange={(val) => this.handleChange("footer", val)}

											placeholder="Footer Content" style={componentStyles.borderColor} />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.textAlignCenter}>
									<h3 >OR</h3>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.textAlignCenter}>
									<Upload>
										<Button style={componentStyles.continueButton} htmlType="submit" block>
											<UploadOutlined /> Browse
                                        </Button>
									</Upload>
								</Col>
							</Row>
						</Form>

					</Col>
					<Col xs={24} sm={24} md={1} lg={1}></Col>
					<Col xs={24} sm={24} md={15} lg={15}
						style={componentStyles.letterHeadPreviewContainer}
					>
						<LetterHeadPreview name={name} header={header} desc={desc} footer={footer} />
					</Col>
				</Row>
			</div>
		)
	}
}

export default letterHeadSettings



export const LetterHeadPreview = ({ name, header, desc, footer }) => {

	if (name || header || desc || footer) {
		return (
			<div style={AppStyles.padding20}>
				<Row justify="center">

					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'right' }}>
						<Text style={{ fontSize: 20 }}>{name}</Text>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'right', marginTop: 20 }}>
						<Text style={{ fontSize: 15 }}>{header}</Text>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'left', marginTop: 100 }}>
						<Text style={{ fontSize: 10 }}>{desc}</Text>
					</Col>
					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'left', marginTop: 100 }}>
						<Text style={{ fontSize: 20 }}>{footer}</Text>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

						<Form.Item>
							<Button style={componentStyles.continueButton} htmlType="submit" block>
								Save
					        </Button>
						</Form.Item>
					</Col>

				</Row>
			</div>
		)
	} else {
		return (
			<Row justify="center">
				<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.textAlignCenter}>
					<div style={AppStyles.marginTop100}>
						<Text style={componentStyles.noDataText}>No data to preview</Text>
					</div>
				</Col>
			</Row>
		)
	}

}