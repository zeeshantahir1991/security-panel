import { LockOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, message, Row } from "antd";
import React, { useState } from 'react';
import { componentStyles } from '../login-1/styles';
import { AuthFooter } from "../../headerfooter-components/AuthFooter";
import { AuthHeader } from "../../headerfooter-components/AuthHeader";

const backgroundStyle = {
	// backgroundImage: 'url(/img/others/img-17.jpg)',
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover'
	// backgroundColor: '#60b0f4'
}

const OTP = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	const onSend = () => {
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
								{/* <h3 className="mt-3 font-weight-bold">Reset Password</h3> */}
								<p className="mb-4">Enter your OTP to reset password</p>
							</div>
							<Row justify="center">
								<Col xs={24} sm={24} md={20} lg={20}>
									<Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
										<Form.Item
											name="otp"
											rules={
												[
													{
														required: true,
														message: 'Please input your otp'
													},
													{
														type: 'text',
														message: 'Please enter a valid otp!'
													}
												]
											}>
											<Input style={componentStyles.borderColor} placeholder="OTP" prefix={<LockOutlined />} />
										</Form.Item>
										<Form.Item
											name="password"
											rules={
												[
													{
														required: true,
														message: 'Please input your password'
													},
													{
														type: 'password',
														message: 'Please enter a valid Password!'
													}
												]
											}>
											<Input style={componentStyles.borderColor} placeholder="New Password" prefix={<LockOutlined />} />
										</Form.Item>
										<Form.Item
											name="password"
											rules={
												[
													{
														required: true,
														message: 'Please input your password'
													},
													{
														type: 'password',
														message: 'Please enter a valid Password!'
													}
												]
											}>
											<Input style={componentStyles.borderColor} placeholder="Confirm Password" prefix={<LockOutlined />} />
										</Form.Item>
										<Form.Item>
											<Button loading={loading} style={componentStyles.signInButton} htmlType="submit" block>{loading ? 'Sending' : 'Send'}</Button>
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

export default OTP

