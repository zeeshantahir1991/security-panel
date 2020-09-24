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
							<div className={'logo'}>
								<img src={'/img/logo.png'} alt={`logo`} />
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
											<span style={{ color: '#3f51b5' }}>
												Login
								</span>
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
								<img src={'/img/logo.png'} alt={`logo`} />
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
						<Col xs={24} sm={24} md={0} lg={0} style={{ backgroundColor: 'white' }}>
							<div className="nav-center" style={{ alignSelf: 'center', marginTop: 70 }}>
								<Menu mode="vertical" style={{ textAlign: 'center'}}>
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
					<Col xs={0} sm={0} md={24} lg={24}>
						<img src={'/img/banner.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 100, textAlign: 'center' }}>MANAGED SECURITY SERVICES</h1>
						</div>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={24} sm={24} md={0} lg={0}>
						<img src={'/img/banner.jpg'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 50, textAlign: 'center' }}>MANAGED SECURITY SERVICES</h1>
						</div>
					</Col>
				</Row>
				<Card>
					<div className="container" style={{ minHeight: '100vh', marginTop: 100 }}>
						<div className="text-center mb-4">
							<h1 className="font-weight-semibold">Security Company Subscription</h1>

						</div>

						<Row style={{ justifyContent: 'center' }}>
							{
								pricingData.map((elm, i) => {
									return (
										<Col key={`price-column-${i}`} xs={48 / colCount} sm={48 / colCount} md={24 / colCount} lg={24 / colCount} className={colCount === (i + 1) ? '' : 'border-right'}>
											{elm.plan.toUpperCase() == "LIMITS" ?
												<div className="p-3">
													<div style={{ visibility: 'hidden' }} className="text-center">
														<img className="img-fluid" src={elm.image} alt="" />
														<h1 className="display-4 mt-4">
															<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
															<span>{elm.price}</span>
														</h1>
														<p className="mb-0">{elm.duration}</p>
													</div>
													<div className="mt-4">
														<h2 className="text-left font-weight-semibold">{elm.plan}</h2>
													</div>

													<div className="d-flex mt-3">
														<div>
															{
																elm.features.map((elm, i) => {
																	return (
																		<p key={`pricing-feature-${i}`}>
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
													<div className="p-3">
														<div className="text-center">
															<img className="img-fluid" src={elm.image} alt="" />
															<h1 className="display-4 mt-4">
																<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
																<span>{elm.price}</span>
															</h1>
															<p className="mb-0">{elm.duration}</p>
														</div>
														<div className="mt-4">
															<h2 className="text-center font-weight-semibold">{elm.plan}</h2>
														</div>

														<div className="d-flex justify-content-center mt-3">
															<div>
																{
																	elm.features.map((elm, i) => {
																		return (
																			<p key={`pricing-feature-${i}`}>
																				<Badge color={'blue'} />
																				<span>{elm}</span>
																			</p>
																		)
																	})
																}
															</div>
														</div>
														<div className="mt-3 text-center">
															<RouteLink to={'/auth/login'}>
																<Button type="default">Get Started</Button>
															</RouteLink>
														</div>
													</div>

											}

										</Col>
									)
								})
							}
						</Row>

					</div>
				</Card>
				<Row style={{ justifyContent: 'center', backgroundColor: '#75CFEB', textAlign: 'center' }}>
					<Col xs={24} sm={24} md={24} lg={24} style={{ marginTop: 100, marginBottom: 100 }}>
						<h1 className="font-weight-bold" style={{ color: 'white' }}>HOW OUR SOLUTION WORKS</h1>
						<h3 style={{ color: 'white', marginLeft: 100, marginRight: 100, marginTop: 50 }}>
							In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
							visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
							before final copy is available, but it may also be used to temporarily replace copy in a process
							called greeking, which allows designers to consider form without the meaning of the text influencing
							the design.
					</h3>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center' }}>
					<Col xs={0} sm={0} md={24} lg={24}>
						<img src={'/img/cover.png'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 100, textAlign: 'center' }}>SOME BLOCK HERE</h1>
						</div>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={24} sm={24} md={0} lg={0}>
						<img src={'/img/cover-sm.png'} alt={`banner`} />
						<div className="centered">
							<h1 style={{ color: 'white', fontSize: 50, textAlign: 'center' }}>SOME BLOCK HERE</h1>
						</div>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center' }}>
					<Col xs={12} sm={12} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50 }}>
						<span>
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

