import React, { useState } from 'react'
import { Card, Row, Col, Form, Input, Button, message } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { Link as RouteLink } from 'react-router-dom';
import { AuthHeader } from "./../../components/AuthHeader"
import { AuthFooter } from "./../../components/AuthFooter"
import { componentStyles } from '../login-1/styles';
const backgroundStyle = {
	// backgroundImage: 'url(/img/others/img-17.jpg)',
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover'
	// backgroundColor: '#60b0f4'
}

const ForgotPassword = () => {
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
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9}>
						<Card className="card">
							{/* <div className="my-2"> */}
							<div className="text-center">
								<img style={{ height: 70, width: 200 }} className="img-fluid" src="/img/logo1.png" alt="" />
								<h3 className="mt-3 font-weight-bold">Forgot Password?</h3>
								<p className="mb-4">Enter your Email to reset password</p>
							</div>
							<Row justify="center">
								<Col xs={24} sm={24} md={20} lg={20}>
									<Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
										<Form.Item
											name="email"
											rules={
												[
													{
														required: true,
														message: 'Please input your email address'
													},
													{
														type: 'email',
														message: 'Please enter a validate email!'
													}
												]
											}>
											<Input style={componentStyles.borderColor} placeholder="Email Address" prefix={<MailOutlined />} />
										</Form.Item>
										<Form.Item>
											<RouteLink to={'/auth/otp'}>
												<Button loading={loading} style={componentStyles.signInButton} htmlType="submit" block>{loading ? 'Sending' : 'Send'}</Button>
											</RouteLink>
										</Form.Item>
									</Form>
								</Col>
							</Row>
							{/* </div> */}
						</Card>
					</Col>
				</Row>
			</div>
			<AuthFooter />
		</div>
	)
}

export default ForgotPassword

