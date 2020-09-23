import React from 'react'
import { Row, Col, Card, Grid, Button, Badge } from 'antd';
import { Link as RouteLink } from 'react-router-dom';
import { pricingData } from './pricingData';
import utils from 'utils'

const { useBreakpoint } = Grid;

const Pricing = () => {
	const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
	const colCount = pricingData.length
	console.log('isMobile', isMobile)
	return (
		<Card>
			<div className="container" style={{ minHeight: '100vh' }}>
				<div className="text-center mb-4">
					<h1 className="font-weight-semibold">Security Company Subscription</h1>

				</div>
				<Row style={{ justifyContent: 'center' }}>
					{
						pricingData.map((elm, i) => {
							return (
								<Col key={`price-column-${i}`} xs={24} sm={24} md={24 / colCount} lg={24 / colCount} className={colCount === (i + 1) || isMobile ? '' : 'border-right'}>
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
				{/* <div className="mt-5 pt-lg-4">
					<h1 className="text-center font-weight-light">Frequently Asked Questions</h1>
				</div>
				<Row gutter={60} className="mt-5">
					<Col sm={24} md={12} lg={12}>
						<div className="mb-5">
							<h3 className="font-weight-semibold">Is it expensive?</h3>
							<p>
								Twitch tail in permanent irritation poop on grasses, drink water out of the faucet,
								plays league of legends have my breakfast spaghetti yarn. 
								Taco cat backwards spells taco cat stick butt in face.
							</p>
						</div>
						<div className="mb-5">
							<h3 className="font-weight-semibold">Is it secure?</h3>
							<p>
								Splice the main brace Jolly Roger me hogshead prow red ensign ye swing the lead log ho. Handsomely spanker
								dance the hempen jig pinnace overhaul crimp tack booty rigging lateen sail.
								Sea Legs boatswain hempen halter provost bilge rat ballast maroon man-of-war bowsprit Chain Shot.
							</p>
						</div>
					</Col>
					<Col sm={24} md={12} lg={12}>
						<div className="mb-5">
							<h3 className="font-weight-semibold">How to start?</h3>
							<p>
								Purr like an angel nap all day, for poop on grasses for chase after silly colored fish toys
								around the house stares at human while pushing stuff off a table or i heard this rumor where
								the humans are our owners.
							</p>
						</div>
						<div className="mb-5">
							<h3 className="font-weight-semibold">Is there any discount?</h3>
							<p>
								Cry louder at reflection. More napping, more napping all the napping is exhausting toilet
								paper attack claws fluff everywhere meow miao french ciao litterbox.
							</p>
						</div>
					</Col>
				</Row>
			 */}
			</div>
		</Card>
	)
}

export default Pricing

