import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input } from "antd";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Link as RouteLink, useHistory } from "react-router-dom";
import {
	hideAuthMessage, showAuthMessage, showLoading, signIn,




	signInWithFacebook, signInWithGoogle
} from 'redux/actions/Auth';
import { componentStyles } from '../authentication/login-1/styles';
import { AppStyles } from "./../../../assets/styles/index";

export const LoginForm = props => {
	let history = useHistory();

	const {
		otherSignIn,
		hideAuthMessage,
		showLoading,
		signInWithGoogle,
		signInWithFacebook,
		extra,
		signIn,
		token,
		loading,
		redirect,
		showMessage,
		message,
		allowRedirect
	} = props

	const initialCredential = {
		email: 'user1@themenate.net',
		password: '2005ipo'
	}

	const onLogin = values => {
		showLoading()
		signIn(values);
	};



	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if (showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});

	const renderOtherSignIn = (
		<div>
			{/* <Divider>
				<span className="text-muted font-size-base font-weight-normal">or connect with</span>
			</Divider>
			<div className="d-flex justify-content-center">
				<Button 
					onClick={() => onGoogleLogin()} 
					className="mr-2" 
					disabled={loading} 
					icon={<CustomIcon svg={GoogleSVG}/>}
				>
					Google
				</Button>
				<Button 
					onClick={() => onFacebookLogin()} 
					icon={<CustomIcon svg={FacebookSVG}/>}
					disabled={loading} 
				>
					Facebook
				</Button>
			</div> */}
		</div>
	)

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form
				layout="vertical"
				name="login-form"
				initialValues={initialCredential}
				onFinish={onLogin}
			>
				<Form.Item
					name="email"
					label="Email"
					rules={[
						{
							required: true,
							message: 'Please input your email',
						},
						{
							type: 'email',
							message: 'Please enter a validate email!'
						}
					]}>
					<Input maxLength={30} style={AppStyles.borderColorAlto} prefix={<MailOutlined />} />
				</Form.Item>
				<Form.Item
					name="password"
					label={
						<div className={`${'d-flex justify-content-between w-100 align-items-center'}`}>
							<span>Password</span>
							{/* {
								showForgetPassword &&  */}
							<RouteLink to={'/auth/forgot-password'}>
								<span
									// onClick={() => onForgetPasswordClick} 
									className="cursor-pointer font-size-sm font-weight-normal text-muted"
								>
									Forget Password?
								</span>
							</RouteLink>
							{/* }  */}
						</div>
					}
					rules={[
						{
							required: true,
							message: 'Please input your password',
						}
					]}
				>
					<Input.Password style={AppStyles.borderColorAlto} prefix={<LockOutlined />} />
				</Form.Item>
				<Form.Item>
					<Button style={componentStyles.signInButton} htmlType="submit" block loading={loading}>
						Sign In
					</Button>
				</Form.Item>
				{
					otherSignIn ? renderOtherSignIn : null
				}
				{extra}
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
};

LoginForm.defaultProps = {
	otherSignIn: true,
	showForgetPassword: false
};

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signIn,
	showAuthMessage,
	showLoading,
	hideAuthMessage,
	signInWithGoogle,
	signInWithFacebook
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
