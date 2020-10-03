import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Card, Row, Col } from "antd";

const backgroundStyle = {
	// backgroundImage: 'url(/img/others/img-17.jpg)',
	// backgroundRepeat: 'no-repeat',
	// backgroundSize: 'cover'
	// backgroundColor: '#60b0f4'
}

const LoginOne = props => {
	return (
		<div className="h-100" style={backgroundStyle}>
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9}>
						<Card className="card">
							{/* <div className="my-4"> */}
								<div className="text-center">
									<img style={{ height: 70, width: 200 }} className="img-fluid" src="/img/logo1.png" alt="" />
									{/* <p>Don't have an account yet? <a href="/auth/register-1">Sign Up</a></p> */}
								</div>
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										<LoginForm {...props} />
									</Col>
								</Row>
							{/* </div> */}
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default LoginOne
