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

const { Header } = Layout;
const menuItem = [
	{
		title: "About Us",
		path: "/"
	},

	{
		title: "Solutions",
		path: "/"
	},
	{
		title: "Contact Us",
		path: "/"
	},
	{
		title: "FAQ's",
		path: "/"
	}
]

const { useBreakpoint } = Grid;

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	render() {
		// const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
		const colCount = pricingData.length
		// console.log('isMobile', isMobile)
		return (
			<>
				<Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={0} sm={0} md={24} lg={24}>
						<Header className={`app-header `} >
							<div className="nav-left logo">
								<img style={{ height: 70, width: 200 }} src={'/img/logo1.png'} alt={`logo`} />
							</div>
							<div className="nav-right">
								<Menu mode="horizontal">
									{menuItem.map((el, i) => {
										return (
											<Menu.Item>
												<RouteLink to={el.path}>
													<span>
														{el.title}
													</span>
												</RouteLink>
											</Menu.Item>
										);
									})}
									<Menu.Item>
										<RouteLink to={'/auth/login'}>
											<Button style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50 }} type="primary">
												Login
								            </Button>
										</RouteLink>
									</Menu.Item>
								</Menu>
							</div>
						</Header>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={24} sm={24} md={0} lg={0}>
						<Header className={`app-header `} >
							<div className={'logo'}>
								<img style={{ height: 50, width: 150 }} src={'/img/logo1.png'} alt={`logo`} />
							</div>
							<div className="nav-right" style={{ alignSelf: 'center' }}>
								<Button type="secondary" onClick={this.toggleCollapsed}>
									{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
								</Button>
							</div>

						</Header>
					</Col>
				</Row>
				{this.state.collapsed ?
					<Row>
						<Col xs={24} sm={24} md={0} lg={0} style={{ backgroundColor: 'white', position: 'fixed', zIndex: 1, width: '100%' }}>
							<div className="nav-center" style={{ alignSelf: 'center', marginTop: 70 }}>
								<Menu mode="vertical" style={{ textAlign: 'center' }}>
									{menuItem.map((el, i) => {
										return (
											<Menu.Item>
												<RouteLink to={el.path}>
													<span>
														{el.title}
													</span>
												</RouteLink>
											</Menu.Item>
										);
									})}
									<Menu.Item>
										<RouteLink to={'/auth/login'}>
											<span style={{ color: '#3f51b5' }}>
												Login
										    </span>
										</RouteLink>
									</Menu.Item>
								</Menu>
							</div>

						</Col>
					</Row>
					: null
				}
				<Row style={{ justifyContent: 'center' }}>
					<Col xs={0} sm={0} md={24} lg={24} style={{ height: 700 }}>
						<img style={{ width: '100%' }} src={'/img/banner.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 70, textAlign: 'center' }}>MANAGED SECURITY SERVICES</h1>
						</div>
					</Col>
				</Row>
				<Row style={this.state.collapsed ? { justifyContent: 'center', textAlign: 'center' } : { justifyContent: 'center', textAlign: 'center', marginTop: 50 }}>
					<Col xs={24} sm={24} md={0} lg={0}>
						<img style={{ width: '100%' }} src={'/img/banner.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 35, textAlign: 'center' }}>MANAGED SECURITY SERVICES</h1>
						</div>
					</Col>
				</Row>

				{/* <div className="text-center mb-4" style={{ marginTop: 100, marginBottom: 100 }}>
					<h1 className="font-weight-semibold">Security Company Subscription</h1>

				</div> */}

				<Row style={{ justifyContent: 'center' }}>
					{
						pricingData.map((elm, i) => {
							return (
								<Col key={`price-column-${i}`} xs={48 / colCount} sm={48 / colCount} md={24 / colCount} lg={24 / colCount} >
									{elm.plan.toUpperCase() == "LIMITS" ?
										<div className="p-3" style={elm.backgroundColor}>
											<div className="mt-4">
												<h1 style={{ color: 'white', fontSize: 40 }} className="text-left font-weight-semibold">{elm.plan}</h1>
											</div>
											<div style={{ visibility: 'hidden' }} className="text-center">
												<img className="img-fluid" src={elm.image} alt="" />
												<h2 className="display-4 mt-4">
													<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
													<span style={{ fontSize: 30 }}>{elm.price}</span>
												</h2>
												<p style={{ color: 'white', fontWeight: 'bold' }} className="mb-0">{elm.duration}</p>
											</div>


											<div className="d-flex mt-3">
												<div>
													{
														elm.features.map((elm, i) => {
															return (
																<p key={`pricing-feature-${i}`} style={{ color: 'white' }}>
																	{/* <Badge color={'blue'} /> */}
																	<span >{elm}</span>
																</p>
															)
														})
													}
												</div>
											</div>
										</div>
										:
										elm.plan.toUpperCase() == "" ? null :
											<div className="p-3" style={elm.backgroundColor}>
												<div className="mt-4">
													<h1 style={{ color: 'white', fontSize: 40 }} className="text-center font-weight-semibold">{elm.plan}</h1>
												</div>
												<div className="text-center">
													<img className="img-fluid" src={elm.image} alt="" />
													{elm.plan.toUpperCase() == "PLATINUM" ?
														<h2 style={{ color: 'white' }} className="display-4 mt-4">
															<span style={{ fontSize: 30 }}>{elm.price}</span>
														</h2> :
														<h2 style={{ color: 'white' }} className="display-4 mt-4">
															<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
															<span style={{ fontSize: 50 }}>{elm.price}</span>
														</h2>
													}
													<p style={elm.plan.toUpperCase() == "PLATINUM" ? { visibility: 'hidden' } : { color: 'white', fontWeight: 'bold' }} className="mb-0">{elm.duration}</p>
												</div>


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
													<RouteLink to={'/auth/login'}>
														<Button style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50 }} type="default">Get Started</Button>
													</RouteLink>
												</div>
											</div>

									}

								</Col>
							)
						})
					}
				</Row>
				<Row style={{ justifyContent: 'center', backgroundColor: 'white', textAlign: 'center' }}>
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
						<h1 className="font-weight-bold" style={{ color: 'black' }}>HOW OUR SOLUTION WORKS</h1>
						<img style={{ marginTop: 50, width: '100%' }} src={'/img/how-solution-works.png'} alt={`how-solution-works`} />
						<h2 style={{ color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 20 }}>
							GUARDSPUR: THE PREFERRED ALIENVAULT MSSP
					    </h2>
						<h2 style={{ textAlign: 'left', color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 12 }}>
							At Guard spur, we are committed to provide professional SaaS solutions for security companies. We believe everyone is entitled to feel safe. Our software aids companies who provide security services. Our platform enable companies to effectively manage resources and ensures all things are in order to create a safe environment. With unique option to provision and customize compliance documents, it makes it much easiesr to on-board security personnels and manage resources.
					    </h2>
						<h2 style={{ color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 20 }}>
							OUR MANAGED SECURITY SERVICES KEY CAPABILITIES
						</h2>
						<h2 style={{ textAlign: 'left', color: 'black', marginLeft: 50, marginRight: 50, marginTop: 50, fontSize: 15 }}>
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
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', paddingBottom: 100, backgroundColor: 'white' }}>
					<Col xs={0} sm={0} md={24} lg={24}>
						<img style={{ width: '70%', height: '100%' }} src={'/img/cover.jpg'} alt={`banner`} />
						{/* <div className="centered">
							<h1 style={{ color: 'white', fontSize: 100, textAlign: 'center' }}>SOME BLOCK HERE</h1>
						</div> */}
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', paddingBottom: 100, backgroundColor: 'white' }}>
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
				<Row style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#737373' }}>
					<Col xs={12} sm={12} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50 }}>
						<span style={{ color: 'white' }}>
							Email : sales@guardspur.com <br />
						Tel  : +344 2935 9363 <br />
						WhatsApp: +34333911347 <br /> <br />
						© Guardspur 2020 All Rights Reserved
					</span>
					</Col>
					<Col xs={12} sm={12} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50, alignSelf: 'center' }}>
						<img style={{ width: 50, height: 50 }} src={'/img/facebook.png'} alt={`facebook`} />
						<img style={{ width: 50, height: 50, marginLeft: 50 }} src={'/img/linkedin.png'} alt={`linkedin`} />
					</Col>
				</Row>
			</>
		)
	}
}

export default Home

