import React from 'react'
import { Row, Col, Card, Grid, Button, Badge, Menu, Layout, Table } from 'antd';
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
import { limits, data } from './limits';
import utils from 'utils';
import NumberFormat from 'react-number-format';

const { Column } = Table;
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

class OrderSummary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			invoiceData: [{
				key: "1",
				package: "",
				cycle: "",
				price: null
			}],
			pricingData: null
		};
	}
	toggleCollapsed = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	total() {
		const { invoiceData } = this.state;
		let total = 0;
		invoiceData.forEach((elm) => {
			total += elm.price;
		})
		return total
	}
	componentDidMount() {
		let dataArray = []
		dataArray.push({
			key: "1",
			package: this.props.location.state.data.plan,
			cycle: "Monthly",
			price: this.props.location.state.data.price
		})
		this.setState({
			invoiceData: dataArray,
			pricingData: this.props.location.state.data
		})
		console.log("jhdjshds", this.props.location.state.data)
	}
	render() {
		// const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
		// const colCount = pricingData.length
		// console.log('isMobile', isMobile)
		const { invoiceData, pricingData } = this.state;
		return (
			<>
				<Row style={{ justifyContent: 'center' }}>
					<Col xs={0} sm={0} md={24} lg={24}>
						<Header className={`app-header `} >
							<div className="nav-left logo">
								<RouteLink to={'/'}>
									<img style={{ height: 70, width: 200 }} src={'/img/logo1.png'} alt={`logo`} />
								</RouteLink>
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
								<RouteLink to={'/'}>

									<img style={{ height: 50, width: 150 }} src={'/img/logo1.png'} alt={`logo`} />
								</RouteLink>
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

				<Row style={{ justifyContent: 'center', marginTop: 120, marginBottom: 100 }}>

					<Col className="card" xs={0} sm={0} md={4} lg={4} >

						<div className="p-3" style={{ backgroundColor: 'white' }}>
							<div className="mt-4">
								<h1 style={{ fontSize: 40 }} className="text-center font-weight-semibold">{limits.plan}</h1>
							</div>
							<div style={{ visibility: 'hidden' }} className="text-center">
								<img className="img-fluid" src={limits.image} alt="" />
								<h2 className="display-4 mt-4">
									<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
									<span style={{ fontSize: 30 }}>{limits.price}</span>
								</h2>
								<p style={{ fontWeight: 'bold' }} className="mb-0">{limits.duration}</p>
							</div>


							<div className="d-flex text-center justify-content-center mt-3">
								<div>
									{
										limits.features.map((elm, i) => {
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
							<div style={{ visibility: 'hidden', marginBottom: 50 }} className="mt-3 text-center" >
								<RouteLink to={'/auth/register'}>
									<Button style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
								</RouteLink>
							</div>
						</div>

					</Col>
					<Col className="card" xs={0} sm={0} md={6} lg={6} >
						<div className="p-3" style={pricingData?.backgroundColor}>
							<div className="mt-4">
								<h1 style={{ color: 'white', fontSize: 40 }} className="text-center font-weight-semibold">{pricingData?.plan}</h1>
							</div>
							<div className="text-center">
								<img className="img-fluid" src={pricingData?.image} alt="" />

								<h2 style={{ color: 'white' }} className="display-4 mt-4">
									<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
									<span style={{ fontSize: 50 }}>{pricingData?.price}</span>
								</h2>

								<p style={{ color: 'white', fontWeight: 'bold' }} className="mb-0">{pricingData?.duration}</p>
							</div>


							<div className="d-flex text-center justify-content-center mt-3">
								<div>
									{
										pricingData?.features.map((elm, i) => {
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
								<RouteLink to={'/auth/register'}>
									<Button style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
								</RouteLink>
							</div>
						</div>

					</Col>
					<Col xs={0} sm={0} md={2} lg={2} style={{ alignSelf: 'center' }}></Col>
					<Col xs={0} sm={0} md={10} lg={10} style={{ alignSelf: 'center' }}>
						{/* <Card style={{ marginTop: 100, marginLeft: 100, marginRight: 100 }}> */}
						<Card className="card" style={{ paddingTop: 25, paddingBottom: 25 }}>
							<div className="text-center">
								<h1 className="mb-1 font-weight-semibold">Order Summary</h1>

							</div>
							<div className="d-md-flex justify-content-md-between">
								<div>
									{/* <img src="/img/logo.png" alt="" /> */}
									<address>
										<p>
											<span className="font-weight-semibold text-dark font-size-md">Guardspur, Inc.</span><br />
											<span>9498 Harvard Street</span><br />
											<span>Fairfield, Chicago Town 06824</span><br />
											<abbr className="text-dark" title="Phone">Phone:</abbr>
											<span>(123) 456-7890</span>
										</p>
									</address>
								</div>
								{/* <div className="mt-3 text-right">
									<h2 className="mb-1 font-weight-semibold">Invoice #9972</h2>

									<address>
										<p>
											<span className="font-weight-semibold text-dark font-size-md">Genting Holdings.</span><br />
											<span>8626 Maiden Dr. </span><br />
											<span>Niagara Falls, New York 14304</span>
										</p>
									</address>
								</div> */}
							</div>
							<div className="mt-4">
								<Table dataSource={invoiceData} pagination={false} className="mb-5">
									<Column title="No." dataIndex="key" key="key" />
									<Column title="Package" dataIndex="package" key="package" />
									<Column title="Billing Cycle" dataIndex="cycle" key="cycle" />
									<Column title="Sub Total"
										render={(text) => (
											<NumberFormat
												displayType={'text'}
												value={(Math.round(text.price * 100) / 100).toFixed(2)}
												prefix={'$'}
												thousandSeparator={true}
											/>
										)}
										key="price"
									/>
									{/* <Column
										title="Total"
										render={(text) => (
											<NumberFormat
												displayType={'text'}
												value={(Math.round((text.price * text.quantity) * 100) / 100).toFixed(2)}
												prefix={'$'}
												thousandSeparator={true}
											/>
										)}
										key="total"
									/> */}
								</Table>
								<div className="d-flex justify-content-end">
									<div className="text-right ">
										<div className="border-bottom">
											<p className="mb-2">
												<span>Sub - Total amount: </span>
												<NumberFormat
													displayType={'text'}
													value={(Math.round((this.total()) * 100) / 100).toFixed(2)}
													prefix={'$'}
													thousandSeparator={true}
												/>
											</p>
											{/* <p>vat (10%) : {(Math.round(((this.total() / 100) * 10) * 100) / 100).toFixed(2)}</p> */}
										</div>
										<h2 className="font-weight-semibold mt-3">
											<span className="mr-1">Grand Total: </span>
											<NumberFormat
												displayType={'text'}
												// value={((Math.round((this.total()) * 100) / 100) - (this.total() / 100) * 10).toFixed(2)}
												value={((Math.round((this.total()) * 100) / 100))}
												prefix={'$'}
												thousandSeparator={true}
											/>
										</h2>
									</div>
								</div>

							</div>

						</Card>
					</Col>

					{/* Mobile View */}


					<Col className="card" xs={12} sm={12} md={0} lg={0}>
						<div className="p-3" style={{ backgroundColor: 'white' }}>
							<div className="mt-4">
								<h1 style={{ fontSize: 20 }} className="text-center font-weight-semibold">{limits.plan}</h1>
							</div>
							<div style={{ visibility: 'hidden' }} className="text-center">
								<img className="img-fluid" src={limits.image} alt="" />
								<h2 className="display-4 mt-4">
									<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
									<span style={{ fontSize: 15 }}>{limits.price}</span>
								</h2>
								<p style={{ fontWeight: 'bold' }} className="mb-0">{limits.duration}</p>
							</div>


							<div className="d-flex text-center justify-content-center mt-3">
								<div>
									{
										limits.features.map((elm, i) => {
											return (
												<p key={`pricing-feature-${i}`} style={{ fontSize: 10 }}>
													{/* <Badge color={'blue'} /> */}
													<span >{elm}</span>
												</p>
											)
										})
									}
								</div>
							</div>
							<div style={{ visibility: 'hidden', marginBottom: 50 }} className="mt-3 text-center" >
								<RouteLink to={'/auth/register'}>
									<Button style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
								</RouteLink>
							</div>
						</div>
					</Col>
					<Col className="card" xs={12} sm={12} md={0} lg={0}>

						<div className="p-3" style={pricingData?.backgroundColor}>
							<div className="mt-4">
								<h1 style={{ color: 'white', fontSize: 20 }} className="text-center font-weight-semibold">{pricingData?.plan}</h1>
							</div>
							<div className="text-center">
								<img className="img-fluid" src={pricingData?.image} alt="" />

								<h2 style={{ color: 'white' }} className="display-4 mt-4">
									<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
									<span style={{ fontSize: 25 }}>{pricingData?.price}</span>
								</h2>

								<p style={{ color: 'white', fontWeight: 'bold' }} className="mb-0">{pricingData?.duration}</p>
							</div>


							<div className="d-flex text-center justify-content-center mt-3">
								<div>
									{
										pricingData?.features.map((elm, i) => {
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
								<RouteLink to={'/auth/register'}>
									<Button style={{ borderRadius: 20, fontSize: 10, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
								</RouteLink>
							</div>
						</div>

					</Col>
					<Col xs={20} sm={20} md={0} lg={0} style={{ alignSelf: 'center' }}>
						{/* <Card style={{ marginTop: 100, marginLeft: 100, marginRight: 100 }}> */}
						<Card className="card" style={{ marginTop: 100, paddingTop: 25, paddingBottom: 25 }}>
							<div className="text-center" style={{ marginBottom: 25 }}>
								<h2 className="mb-1 font-weight-semibold">Order Summary</h2>

							</div>
							<div className="d-md-flex justify-content-md-between">
								<div>
									{/* <img src="/img/logo.png" alt="" /> */}
									<address>
										<p>
											<span className="font-weight-semibold text-dark font-size-md">Guardspur, Inc.</span><br />
											<span>9498 Harvard Street</span><br />
											<span>Fairfield, Chicago Town 06824</span><br />
											<abbr className="text-dark" title="Phone">Phone:</abbr>
											<span>(123) 456-7890</span>
										</p>
									</address>
								</div>
								{/* <div className="mt-3 text-right">
									<h2 className="mb-1 font-weight-semibold">Invoice #9972</h2>

									<address>
										<p>
											<span className="font-weight-semibold text-dark font-size-md">Genting Holdings.</span><br />
											<span>8626 Maiden Dr. </span><br />
											<span>Niagara Falls, New York 14304</span>
										</p>
									</address>
								</div> */}
							</div>
							<div className="mt-4">
								<Table dataSource={invoiceData} pagination={false} className="mb-5">
									<Column title="No." dataIndex="key" key="key" />
									<Column title="Package" dataIndex="package" key="package" />
									<Column title="Billing Cycle" dataIndex="cycle" key="cycle" />
									<Column title="Sub Total"
										render={(text) => (
											<NumberFormat
												displayType={'text'}
												value={(Math.round(text.price * 100) / 100).toFixed(2)}
												prefix={'$'}
												thousandSeparator={true}
											/>
										)}
										key="price"
									/>
									{/* <Column
										title="Total"
										render={(text) => (
											<NumberFormat
												displayType={'text'}
												value={(Math.round((text.price * text.quantity) * 100) / 100).toFixed(2)}
												prefix={'$'}
												thousandSeparator={true}
											/>
										)}
										key="total"
									/> */}
								</Table>
								<div className="d-flex justify-content-end">
									<div className="text-right ">
										<div className="border-bottom">
											<p className="mb-2">
												<span>Sub - Total amount: </span>
												<NumberFormat
													displayType={'text'}
													value={(Math.round((this.total()) * 100) / 100).toFixed(2)}
													prefix={'$'}
													thousandSeparator={true}
												/>
											</p>
											{/* <p>vat (10%) : {(Math.round(((this.total() / 100) * 10) * 100) / 100).toFixed(2)}</p> */}
										</div>
										<h4 className="font-weight-semibold mt-3">
											<span className="mr-1">Grand Total: </span>
											<NumberFormat
												displayType={'text'}
												// value={((Math.round((this.total()) * 100) / 100) - (this.total() / 100) * 10).toFixed(2)}
												value={((Math.round((this.total()) * 100) / 100))}
												prefix={'$'}
												thousandSeparator={true}
											/>
										</h4>
									</div>
								</div>

							</div>

						</Card>
					</Col>


				</Row>

				<Row style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#737373' }}>
					<Col xs={0} sm={0} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50 }}>
						<span style={{ color: 'white' }}>
							Email : sales@guardspur.com <br />
						Tel  : +344 2935 9363 <br />
						WhatsApp: +34333911347 <br /> <br />
						© Guardspur 2020 All Rights Reserved
					</span>
					</Col>
					<Col xs={0} sm={0} md={12} lg={12} style={{ marginTop: 50, marginBottom: 50, alignSelf: 'center' }}>
						<img style={{ width: 50, height: 50 }} src={'/img/facebook.png'} alt={`facebook`} />
						<img style={{ width: 50, height: 50, marginLeft: 50 }} src={'/img/linkedin.png'} alt={`linkedin`} />
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: '#737373' }}>
					<Col xs={10} sm={10} md={0} lg={0} style={{ marginTop: 50, marginBottom: 50 }}>
						<span style={{ color: 'white', fontSize: 10 }}>
							Email : sales@guardspur.com <br />
						Tel  : +344 2935 9363 <br />
						WhatsApp: +34333911347 <br /> <br />
						© Guardspur 2020 All Rights Reserved
					</span>
					</Col>
					<Col xs={10} sm={10} md={0} lg={0} style={{ marginTop: 50, marginBottom: 50, alignSelf: 'center' }}>
						<img style={{ width: 25, height: 25 }} src={'/img/facebook.png'} alt={`facebook`} />
						<img style={{ width: 25, height: 25, marginLeft: 25 }} src={'/img/linkedin.png'} alt={`linkedin`} />
					</Col>
				</Row>
			</>
		)
	}
}

export default OrderSummary

