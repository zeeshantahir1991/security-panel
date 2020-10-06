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
import { AuthHeader } from "../../../auth-views/components/AuthHeader"
import { AuthFooter } from "../../../auth-views/components/AuthFooter"

const { Column } = Table;
const { Header } = Layout;


const { useBreakpoint } = Grid;

class PricingDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pricingData: null
		};
	}


	goToRegister = (data) => {
		console.log("goToRegister", data)
		this.props.history.push({
			pathname: '/auth/register',
			state: { data }
		})
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
			pricingData: this.props.location.state.data
		})
		console.log("jhdjshds", this.props.location.state.data)
	}
	render() {
		// const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
		// const colCount = pricingData.length
		// console.log('isMobile', isMobile)
		const { pricingData } = this.state;
		return (
			<>
				<AuthHeader />


				<Row style={{ justifyContent: 'center', marginTop: 120, marginBottom: 100 }}>

					<Col className="card" xs={0} sm={0} md={10} lg={10} >

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
								<Button onClick={() => this.goToRegister(pricingData)} style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
							</div>
						</div>

					</Col>
					<Col className="card" xs={0} sm={0} md={10} lg={10} >
						<div className="p-3" style={pricingData?.backgroundColor}>
							<div className="mt-4">
								<h1 style={{ color: 'white', fontSize: 40 }} className="text-center font-weight-semibold">{pricingData?.plan}</h1>
							</div>
							{pricingData?.plan.toUpperCase() == "PLATINUM" ?
								<div className="text-center">
									<img className="img-fluid" src={pricingData?.image} alt="" />

									<h2 style={{ color: 'white' }} className="display-4 mt-4">
										<span className="font-size-md d-inline-block mr-1" style={{ visibility: 'hidden' }}>£</span>
										<span style={{ fontSize: 40, overflow: 'hidden' }}>{pricingData?.price}</span>
									</h2>

									<p style={{ color: 'white', fontWeight: 'bold', visibility: 'hidden' }} className="mb-0">{pricingData?.duration}</p>
								</div> :
								<div className="text-center">
									<img className="img-fluid" src={pricingData?.image} alt="" />

									<h2 style={{ color: 'white' }} className="display-4 mt-4">
										<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
										<span style={{ fontSize: 50 }}>{pricingData?.price}</span>
									</h2>

									<p style={{ color: 'white', fontWeight: 'bold' }} className="mb-0">{pricingData?.duration}</p>
								</div>
							}

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
								<Button onClick={() => this.goToRegister(pricingData)} style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">
									{pricingData?.button.text}
								</Button>
							</div>
						</div>

					</Col>

					{/* Mobile View */}


					<Col className="card" xs={11} sm={11} md={0} lg={0}>
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
								<Button onClick={() => this.goToRegister(pricingData)} style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
							</div>
						</div>
					</Col>
					<Col className="card" xs={11} sm={11} md={0} lg={0}>

						<div className="p-3" style={pricingData?.backgroundColor}>
							<div className="mt-4">
								<h1 style={{ color: 'white', fontSize: 20 }} className="text-center font-weight-semibold">{pricingData?.plan}</h1>
							</div>
							{pricingData?.plan.toUpperCase() == "PLATINUM" ?
								<div className="text-center">
									<img className="img-fluid" src={pricingData?.image} alt="" />

									<h2 style={{ color: 'white' }} className="display-4 mt-4">
										<span className="font-size-md d-inline-block mr-1" style={{ visibility: 'hidden' }}>£</span>
										<span style={{ fontSize: 25, overflow: 'hidden' }}>{pricingData?.price}</span>
									</h2>

									<p style={{ color: 'white', fontWeight: 'bold', visibility: 'hidden' }} className="mb-0">{pricingData?.duration}</p>
								</div> :
								<div className="text-center">
									<img className="img-fluid" src={pricingData?.image} alt="" />

									<h2 style={{ color: 'white' }} className="display-4 mt-4">
										<span className="font-size-md d-inline-block mr-1" style={{ transform: 'translate(0px, -17px)' }}>£</span>
										<span style={{ fontSize: 25 }}>{pricingData?.price}</span>
									</h2>

									<p style={{ color: 'white', fontWeight: 'bold' }} className="mb-0">{pricingData?.duration}</p>
								</div>
							}

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
								<Button onClick={() => this.goToRegister(pricingData)} style={{ borderRadius: 20, fontSize: 10, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">
									{pricingData?.button.text}
								</Button>
							</div>
						</div>

					</Col>

				</Row>

				<AuthFooter />

			</>
		)
	}
}

export default PricingDetail

