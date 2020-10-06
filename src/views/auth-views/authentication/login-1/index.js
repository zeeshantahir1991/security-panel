import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Card, Row, Col } from "antd";
import { AuthHeader } from "./../../components/AuthHeader"
import { AuthFooter } from "./../../components/AuthFooter"
const backgroundStyle = {
	// backgroundImage: 'url(/img/others/img-17.jpg)',
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover'
	// backgroundColor: '#60b0f4'
}

const LoginOne = props => {
	return (
		<div className="h-100" style={backgroundStyle}>
			<AuthHeader />
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9}>
						<div className="text-center">
							{/* <img style={{ height: 70, width: 200 }} className="img-fluid" src="/img/logo1.png" alt="" /> */}
							<h1 className="text-bold">Login Form</h1>
						</div>
						<Card className="card" style={{ marginBottom: 25, marginTop: 25 }}>
							<Row justify="center">
								<Col xs={24} sm={24} md={20} lg={20}>
									<LoginForm {...props} />
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</div>
			<AuthFooter />
		</div>
	)
}

export default LoginOne
