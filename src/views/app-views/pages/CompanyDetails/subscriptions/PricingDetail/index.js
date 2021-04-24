import { Button, Col, Popover, Row } from 'antd';
import React from 'react';
import { pricingData } from './pricingData';
import history from './../../../../../../history';



class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			subscribed:'Basic'
		};
	}

	priceDetail = (data) => {
		this.setState({
			subscribed: data.plan
		})
		// this.props.history.push({
		// 	pathname: data.button.path,
		// 	state: { data }
		// })
		window.location.href = data.button.path+'?name='+data.plan
	}
	content = () => (
		<div>
			<p>Package Data</p>
			<p>lorem ipsum shekem fructum dolorium strein min kamf</p>
		</div>
	)
	render() {
		const colCount = pricingData.length
		return (
			<div style={{ backgroundColor: 'white' }}>
				<Row style={{ justifyContent: 'center' }}>
					{
						pricingData.map((elm) => {
							return (
								<>

									<div style={{ width: 100 / colCount + '%' }}>
										<Col className="card" xs={0} sm={0} md={24} lg={24}>
											<div className="p-3" style={elm.backgroundColor}>
												<div className="mt-4">
													<Popover content={this.content} title="Package Details" style={{display: elm.plan == 'Limits' ? 'none' : 'block'}} trigger="hover">
														{/* <Button type="primary">Hover me</Button> */}
														<h1 style={{ color: 'white', fontSize: 20 }} className="text-center font-weight-semibold">{elm.plan}</h1>
													</Popover>
												</div>
												{elm.plan.toUpperCase() === "PLATINUM" ?
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

														<p style={elm.plan.toUpperCase() === "FREE" ? { visibility: 'hidden' } : { color: 'white', fontWeight: 'bold' }} className="mb-0">{elm.duration}</p>
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
													<Button onClick={() => this.priceDetail(elm)} style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50, color: elm.plan == this.state.subscribed ? '#7CFC00':'#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: elm.plan == this.state.subscribed ? '#7CFC00':'#60b0f4' }} type="default">
														{elm.plan == this.state.subscribed ? 'Subscribed' : elm?.button?.text}
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
						pricingData.map((elm) => {
							return (
								<>
									<Col className="card" xs={24 / 2} sm={24 / 2} md={0} lg={0} >

										<div className="p-3" style={elm.backgroundColor}>
											<div className="mt-4">
												<Popover content={this.content} title="Title" trigger="hover">
													<Button type="primary">Hover me</Button>
													<h1 style={{ color: 'white', fontSize: 20 }} className="text-center font-weight-semibold">{elm.plan}</h1>
												</Popover>
											</div>
											{elm.plan.toUpperCase() === "PLATINUM" ?
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
													<p style={elm.plan.toUpperCase() === "FREE" ? { visibility: 'hidden' } : { color: 'white', fontWeight: 'bold' }} className="mb-0">{elm.duration}</p>
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
												<Button onClick={() => this.priceDetail(elm)} style={{ borderRadius: 20, fontSize: 10, paddingLeft: 25, paddingRight: 25, color: elm.plan == this.state.subscribed ? '#7CFC00':'#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">
													{elm?.button?.text}
												</Button>
											</div>
										</div>


									</Col>

								</>
							)
						})
					}
				</Row>
			</div>
		)
	}
}

export default Home

