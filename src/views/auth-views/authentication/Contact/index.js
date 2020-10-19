import React, { useState } from 'react'
import { Card, Row, Col, Form, Input, Button, message, Checkbox } from "antd";
import { BuildOutlined, LockOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import { AuthHeader } from "./../../components/AuthHeader"
import { AuthFooter } from "./../../components/AuthFooter"
import { componentStyles } from '../login-1/styles';
const backgroundStyle = {
	// backgroundImage: 'url(/img/others/img-17.jpg)',
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover'
	// backgroundColor: '#60b0f4'
}

const Contact = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const onSend = values => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
			message.success('New password has send to your email!');
		}, 1500);
	};

	return (
		<div className="h-100" style={backgroundStyle}>
			<AuthHeader />
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center" style={{ paddingTop: 100, paddingBottom: 100 }}>
					<Col xs={20} sm={20} md={20} lg={12}>
						<Col xs={24} sm={24} md={24} lg={24}>
							<h1 style={{ textAlign: 'center' }}>Contact Form</h1>
							{/* <div style={{ marginTop: 20, marginBottom: 40, width: '100%', height: 0.5, backgroundColor: '#b4a19d' }}></div> */}
						</Col>
						<Form style={{ marginTop: 25 }} form={form} layout="vertical" name="forget-password" onFinish={onSend}>
							<Row className="card" gutter={16} style={{ borderRadius: 10, padding: 20, backgroundColor: 'white' }}>

								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="name"
										label="Your Name"
										// rules={rules.firstname}
										hasFeedback
									>
										<Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
									</Form.Item>
								</Col>

								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="email"
										label="Email"
										// rules={rules.email}
										hasFeedback
									>
										<Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
									</Form.Item>
								</Col>

								<Col xs={24} sm={24} md={8} lg={8}>
									<Form.Item
										name="number"
										label="Contact Number"
										// rules={rules.lastname}
										hasFeedback
									>
										<Input type="number" style={componentStyles.borderColor} prefix={<MobileOutlined />} />
									</Form.Item>
								</Col>
								{/* <Col xs={24} sm={24} md={24} lg={24}>
									<Form.Item
								
										hasFeedback
									>
										<Checkbox style={componentStyles.borderColor} checked>List of Subscription Packages</Checkbox>
									</Form.Item>
								</Col> */}
								<Col xs={24} sm={24} md={24} lg={24}>
									<Form.Item
										name="message"
										label="Message"
										// rules={rules.address1}
										hasFeedback
									>
										<Input.TextArea placeholder="Message" style={componentStyles.borderColor} />
									</Form.Item>
								</Col>
							

								<Col xs={24} sm={24} md={24} lg={24}>

									<Form.Item>
										<Button loading={loading} style={componentStyles.signInButton} htmlType="submit" block>{loading ? 'Submiting' : 'Submit'}</Button>
									</Form.Item>
								</Col>

							</Row>


						</Form>

						{/* </div> */}

					</Col>
				</Row>
			</div>
			<AuthFooter />
		</div>
	)
}

export default Contact

