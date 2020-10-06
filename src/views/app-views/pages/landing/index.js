import React from 'react'
import { Row, Col, Card, Grid, Button, Badge, Menu, Layout } from 'antd';
import {
	AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	MenuOutlined,
	PieChartOutlined,
	DesktopOutlined,
	ContainerOutlined,
	MailOutlined,
} from '@ant-design/icons';
import { Link as RouteLink } from 'react-router-dom';
import { pricingData } from './pricingData';
import utils from 'utils';
import { AuthHeader } from "../../../auth-views/components/AuthHeader"
import { AuthFooter } from "../../../auth-views/components/AuthFooter"


const { useBreakpoint } = Grid;

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	priceDetail = (data) => {
		this.props.history.push({
			pathname: data.button.path,
			state: { data }
		})
	}
	render() {
		// const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
		const colCount = pricingData.length
		// console.log('isMobile', isMobile)
		return (
			<div style={{ backgroundColor: 'white' }}>
				<AuthHeader />
				<Row style={{ justifyContent: 'center' }}>
					<Col xs={0} sm={0} md={24} lg={24}>
						<img style={{ width: '100%', height: '100%' }} src={'/img/banner1.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 50, textAlign: 'center' }}>MANAGED SECURITY SERVICES</h1>
						</div>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', marginTop: 50 }}>
					<Col xs={24} sm={24} md={0} lg={0}>
						<img style={{ width: '100%', height: '100%' }} src={'/img/banner1.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>MANAGED SECURITY SERVICES</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col xs={0} sm={0} md={24} lg={24}>
						<div className="text-center" style={{ marginTop: 50, marginBottom: 50 }}>
							<h1 className="font-weight-bold" style={{ color: 'black' }}>OUR FLEXIBLE PLANS</h1>
						</div>
					</Col>
					<Col xs={24} sm={24} md={0} lg={0}>
						<div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
							<h3 className="font-weight-bold" style={{ color: 'black' }}>OUR FLEXIBLE PLANS</h3>
						</div>
					</Col>
				</Row>

				<Row style={{ justifyContent: 'center' }}>
					{
						pricingData.map((elm, i) => {
							return (
								<>

									<div style={{ width: 100 / colCount + '%' }}>
										<Col className="card" xs={0} sm={0} md={24} lg={24}>
											<div className="p-3" style={elm.backgroundColor}>
												<div className="mt-4">
													<h1 style={{ color: 'white', fontSize: 40 }} className="text-center font-weight-semibold">{elm.plan}</h1>
												</div>
												{elm.plan.toUpperCase() == "PLATINUM" ?
													<div className="text-center">
														<img className="img-fluid" src={elm.image} alt="" />

														<h2 style={{ color: 'white' }} className="display-4 mt-4">
															<span className="font-size-md d-inline-block mr-1" style={{ visibility: 'hidden' }}>£</span>
															<span style={{ fontSize: 30, overflow: 'hidden' }}>{elm.price}</span>
														</h2>

														<p style={{ color: 'white', fontWeight: 'bold', visibility: 'hidden' }} className="mb-0">{elm.duration}</p>
													</div> :
													<div className="text-center">
														<img className="img-fluid" src={elm.image} alt="" />

														<h2 style={{ color: 'white' }} className="display-4 mt-4">
															<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
															<span style={{ fontSize: 40 }}>{elm.price}</span>
														</h2>

														<p style={elm.plan.toUpperCase() == "FREE" ? { visibility: 'hidden' } : { color: 'white', fontWeight: 'bold' }} className="mb-0">{elm.duration}</p>
													</div>
												}



												<div className="d-flex text-center justify-content-center mt-3">
													<div>
														{
															elm.features.map((elm, i) => {
																return (
																	<p style={{ color: 'white' }} key={`pricing-feature-${i}`}>

																		<span>{elm}</span>
																	</p>
																)
															})
														}
													</div>
												</div>
												<div className="mt-3 text-center" style={{ marginBottom: 50 }}>
													<Button onClick={() => this.priceDetail(elm)} style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">
														{elm.button.text}
													</Button>
												</div>
											</div>
										</Col>

									</div>

								</>
							)
						})
					}
				</Row>
				<Row>
					{
						pricingData.map((elm, i) => {
							return (
								<>
									<Col className="card" xs={24 / 2} sm={24 / 2} md={0} lg={0} >

										<div className="p-3" style={elm.backgroundColor}>
											<div className="mt-4">
												<h1 style={{ color: 'white', fontSize: 20 }} className="text-center font-weight-semibold">{elm.plan}</h1>
											</div>
											{elm.plan.toUpperCase() == "PLATINUM" ?
												<div className="text-center">
													<img className="img-fluid" src={elm.image} alt="" />

													<h2 style={{ color: 'white' }} className="display-4 mt-4">
														<span className="font-size-md d-inline-block mr-1" style={{ visibility: 'hidden' }}>£</span>
														<span style={{ fontSize: 15 }}>{elm.price}</span>
													</h2>

													<p style={{ visibility: 'hidden' }} className="mb-0">{elm.duration}</p>
												</div> :
												<div className="text-center">
													<img className="img-fluid" src={elm.image} alt="" />

													<h2 style={{ color: 'white' }} className="display-4 mt-4">
														<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
														<span style={{ fontSize: 25 }}>{elm.price}</span>
													</h2>
													<p style={elm.plan.toUpperCase() == "FREE" ? { visibility: 'hidden' } : { color: 'white', fontWeight: 'bold' }} className="mb-0">{elm.duration}</p>
												</div>
											}


											<div className="d-flex text-center justify-content-center mt-3">
												<div>
													{
														elm.features.map((elm, i) => {
															return (
																<p style={{ color: 'white', fontSize: 10 }} key={`pricing-feature-${i}`}>

																	<span>{elm}</span>
																</p>
															)
														})
													}
												</div>
											</div>
											<div className="mt-3 text-center" style={{ marginBottom: 50 }}>
												<Button onClick={() => this.priceDetail(elm)} style={{ borderRadius: 20, fontSize: 10, paddingLeft: 25, paddingRight: 25, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">
													{elm.button.text}
												</Button>
											</div>
										</div>


									</Col>

								</>
							)
						})
					}
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={0} sm={0} md={24} lg={24} style={{ marginTop: 100, marginBottom: 100 }}>
						<h1 className="font-weight-bold" style={{ color: 'black' }}>HOW OUR SOLUTION WORKS</h1>
						<img style={{ marginTop: 50 }} src={'/img/how-solution-works.png'} alt={`how-solution-works`} />
						<h2 style={{ color: 'black', marginLeft: 300, marginRight: 300, marginTop: 50, fontSize: 20 }}>
							GUARDSPUR: THE PREFERRED ALIENVAULT MSSP
					    </h2>
						<h2 style={{ textAlign: 'left', color: 'black', marginLeft: 300, marginRight: 300, marginTop: 50, fontSize: 15 }}>
							At Guard spur, we are committed to provide professional SaaS solutions for security companies. We believe everyone is entitled to feel safe. Our software aids companies who provide security services. Our platform enable companies to effectively manage resources and ensures all things are in order to create a safe environment. With unique option to provision and customize compliance documents, it makes it much easiesr to on-board security personnels and manage resources.
					    </h2>
						<h2 style={{ color: 'black', marginLeft: 300, marginRight: 300, marginTop: 50, fontSize: 20 }}>
							OUR MANAGED SECURITY SERVICES KEY CAPABILITIES
						</h2>
						<h2 style={{ textAlign: 'left', color: 'black', marginLeft: 300, marginRight: 300, marginTop: 50, fontSize: 15 }}>
							GUARDSPUR provides expert services to protect our customers through AlienVault’s key capabilities:
							<ul style={{ textAlign: 'left' }}>
								<li>
									Correctly configuring and deploying the product so that it’s working properly and optimally.
							</li>
								<li>
									Expertly monitoring your system for threats around the clock.
							</li>
								<li>
									Acting as your multi-tiered AlienVault support, able to troubleshoot issues and keep operations running smoothly.
							</li>
								<li>
									Applying AlienVault patches and software updates, keeping your system properly maintained and up-to-date.
							</li>
							</ul>
						</h2>
					</Col>
					<Col xs={24} sm={24} md={0} lg={0} style={{ marginTop: 100 }}>
						<h3 className="font-weight-bold" style={{ color: 'black' }}>HOW OUR SOLUTION WORKS</h3>
						<img style={{ marginTop: 50, width: '100%' }} src={'/img/how-solution-works.png'} alt={`how-solution-works`} />
						<h3 style={{ color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 20 }}>
							GUARDSPUR: THE PREFERRED ALIENVAULT MSSP
					    </h3>
						<h3 style={{ textAlign: 'left', color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 12 }}>
							At Guard spur, we are committed to provide professional SaaS solutions for security companies. We believe everyone is entitled to feel safe. Our software aids companies who provide security services. Our platform enable companies to effectively manage resources and ensures all things are in order to create a safe environment. With unique option to provision and customize compliance documents, it makes it much easiesr to on-board security personnels and manage resources.
					    </h3>
						<h3 style={{ color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 20 }}>
							OUR MANAGED SECURITY SERVICES KEY CAPABILITIES
						</h3>
						<h3 style={{ textAlign: 'left', color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 15 }}>
							GUARDSPUR provides expert services to protect our customers through AlienVault’s key capabilities:
							<ul style={{ textAlign: 'left' }}>
								<li>
									Correctly configuring and deploying the product so that it’s working properly and optimally.
							</li>
								<li>
									Expertly monitoring your system for threats around the clock.
							</li>
								<li>
									Acting as your multi-tiered AlienVault support, able to troubleshoot issues and keep operations running smoothly.
							</li>
								<li>
									Applying AlienVault patches and software updates, keeping your system properly maintained and up-to-date.
							</li>
							</ul>
						</h3>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', paddingBottom: 100 }}>
					<Col xs={0} sm={0} md={24} lg={24}>
						<img style={{ width: '70%', height: '100%' }} src={'/img/cover.jpg'} alt={`banner`} />
						{/* <div className="centered">
							<h1 style={{ color: 'white', fontSize: 100, textAlign: 'center' }}>SOME BLOCK HERE</h1>
						</div> */}
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', paddingBottom: 100 }}>
					<Col xs={24} sm={24} md={0} lg={0}>
						<img style={{ width: '100%', height: '100%' }} src={'/img/cover.jpg'} alt={`banner`} />
						{/* <div className="centered">
							<h1 style={{ color: 'white', fontSize: 100, textAlign: 'center' }}>SOME BLOCK HERE</h1>
						</div> */}
					</Col>
				</Row>
				{/* <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={24} sm={24} md={24} lg={24}>
						<img style={{ width: '100%', height: '100%' }} src={'/img/cover.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 50, textAlign: 'center' }}>SOME BLOCK HERE</h1>
						</div>
					</Col>
				</Row> */}
				<AuthFooter />
			</div>
		)
	}
}

export default Home

