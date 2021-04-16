import { CalendarOutlined, CreditCardOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Table, Tooltip } from 'antd';
import { AppStyles } from 'assets/styles';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import React from 'react';
import NumberFormat from 'react-number-format';
import { Link as RouteLink } from 'react-router-dom';
import swal from 'sweetalert2';
import { AuthFooter } from "../../../../../auth-views/components/AuthFooter";
import { AuthHeader } from "../../../../../auth-views/components/AuthHeader";
import { limits } from './limits';
import { componentStyles } from './styles';


const { Column } = Table;


class OrderSummary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			invoiceData: [{
				key: "1",
				package: "",
				cycle: "",
				price: null
			}],
			pricingData: null,
			billing: true,
			promoCode: "",
			promoApplied: false
		};
	}

	total() {
		const { invoiceData } = this.state;
		let total = 0;
		invoiceData.forEach((elm) => {
			total += elm.price;
		})
		return total
	}

	handleChange = (type, e) => {
		this.setState({

			[type]: e.target.value

		})

	}

	applyCode = () => {
		const { promoApplied, promoCode } = this.state;
		if (promoCode) {
			this.setState({ promoApplied: true })

		}
	}

	componentDidMount() {
		let dataArray = []
		dataArray.push({
			key: "1",
			// package: this.props.location.state.data.plan,
			cycle: "Monthly",
			// price: this.props.location.state.data.price
		})
		this.setState({
			invoiceData: dataArray,
			// pricingData: this.props.location.state.data
		})
		// console.log("jhdjshds", this.props.location.state.data)
	}
	render() {
		// const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg')
		// const colCount = pricingData.length
		// console.log('isMobile', isMobile)
		const { invoiceData, pricingData, billing, promoApplied } = this.state;
		return (
			<>

				{/* <AuthHeader /> */}

				<Row style={{ justifyContent: 'center', marginTop: 120, marginBottom: 100 }}>
					{/* Desktop View */}

					<Col className="card" xs={0} sm={0} md={10} lg={10} >
						{billing ?
							<Card title="Add Card" style={AppStyles.paddingBottom20}>
								<Col xs={0} sm={0} md={24} lg={24} >
									<div style={AppStyles.marginBottom40}>
										<div style={AppStyles.horizontallLineWidth100}>
										</div>
									</div>
								</Col>
								<Form
									name="addCardForm"
									layout="vertical"
									style={AppStyles.padding20}
								>
									<Form.Item
										label="Card holder name"
										name="cardHolderName"
										rules={
											[
												{
													require: true,
													message: 'Please enter card holder name!'
												}
											]
										}
									>
										<Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="Card holder name" />
									</Form.Item>
									<Form.Item
										label="Card number"
										name="cardNumber"
										hasFeedback
										rules={
											[
												{
													pattern: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
													message: 'Please enter a valid credit card number!'
												}
											]
										}
									>
										<Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="0000 0000 0000 00" />
									</Form.Item>
									<Row gutter={ROW_GUTTER}>
										<Col xs={0} sm={0} md={12} lg={12}>
											<Form.Item
												label="Expiry date"
												name="exp"
												rules={
													[
														{
															pattern: /^(0[1-9]|1[0-2])[- /.]\d{2}/,
															message: 'Please enter a valid date format!'
														}
													]
												}
											>
												<Input style={componentStyles.borderColor} suffix={<CalendarOutlined />} placeholder="MM/YY" />
											</Form.Item>
										</Col>
										<Col xs={0} sm={0} md={12} lg={12}>
											<Form.Item
												label="CVV code"
												name="cvv"
												rules={
													[
														{
															pattern: /^[0-9]{3,4}$/,
															message: 'Please enter a CVV code format!'
														}
													]
												}
											>
												<Input
													style={componentStyles.borderColor}
													suffix={
														<Tooltip title="The last three digits printed on the back of the card">
															<QuestionCircleOutlined className="cursor-pointer" />
														</Tooltip>
													}
													placeholder="000"
												/>
											</Form.Item>

										</Col>
										<Col xs={0} sm={0} md={12} lg={12} style={AppStyles.marginTop50}>
											<Form.Item>
												<Button
													onClick={() => this.setState({ billing: false })}
													style={componentStyles.cancelButton}
													htmlType="submit" block>
													Cancel
                                                </Button>
											</Form.Item>
										</Col>
										<Col xs={0} sm={0} md={12} lg={12} style={AppStyles.marginTop50}>
											<Form.Item>
												<Button
													style={componentStyles.continueButton}
													onClick={() => {
														swal.fire({
															title: 'Success!',
															text: 'Payment Completed Successfully',
															icon: 'success'
														})
													}}
													htmlType="submit" block>
													Pay Now
                                                </Button>
											</Form.Item>
										</Col>
									</Row>
								</Form>
							</Card>

							:
							<div style={AppStyles.flexDirectionRow}>
								<Col className="card" xs={0} sm={0} md={12} lg={12} >
									<div 
									// className="p-3" 
									className="pb-4" 
									style={{ backgroundColor: 'white' }}>
										<div 
										// className="mt-1"
										>
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
									</div>
								</Col>
								<Col className="card" xs={0} sm={0} md={12} lg={12}>
									<div 
									className="pb-4" 
									style={pricingData?.backgroundColor}>
										<div>
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
									</div>
								</Col>
							</div>

						}


					</Col>


					{/* Order Summary */}
					<Col xs={0} sm={0} md={2} lg={2} style={{ alignSelf: 'center' }}></Col>
					{/* <Col xs={0} sm={0} md={10} lg={10} style={{ alignSelf: 'center' }}>
						<Card className="card" style={{ paddingTop: 25, paddingBottom: 25 }}>
							<div className="text-center">
								<h1 className="mb-1 font-weight-semibold">Order Summary</h1>

							</div>
							<div className="d-md-flex justify-content-md-between">
								<div>
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
							</div>
							<div className="mt-4">
								<Table searchable dataSource={invoiceData} pagination={false} className="mb-5">
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
								</Table>
								<Row style={AppStyles.flexDirectionRow}>
									<Row style={AppStyles.flexDirectionRow}>
										<Col xs={12} sm={12} md={12} lg={12} style={{ alignSelf: 'center', display: !billing ? 'block' : 'none' }}>
											<Form layout="vertical">
												<Form.Item
													name="promoCode"
													label="Promo Code"
													hasFeedback
												>
													<Input
														onChange={(val) => this.handleChange("promoCode", val)}
														style={componentStyles.borderColor} />
												</Form.Item>
											</Form>
										</Col>
										<Col xs={12} sm={12} md={12} lg={12} style={{ alignSelf: 'center', display: !billing ? 'block' : 'none' }}>
											<Button onClick={this.applyCode} style={componentStyles.applyCode} htmlType="submit" block>
												Apply Code
										    </Button>
										</Col>


									</Row>

									<div style={{ flex: 1 }} className="d-flex justify-content-end">
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
											</div>
											<h2 className="font-weight-semibold mt-3">
												<span className="mr-1">Grand Total: </span>
												<NumberFormat
													displayType={'text'}
													value={((Math.round((this.total()) * 100) / 100))}
													prefix={'$'}
													thousandSeparator={true}
												/>
											</h2>
										</div>
									</div>

								</Row>
								{promoApplied && !billing ? <div style={componentStyles.promoAppliedDesc}>Promo Applied!</div> : null}

							</div>
							<div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
								<Button onClick={() => this.setState({ billing: true })}
									style={{ borderRadius: 12, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">
								Proceed to Payment
							</Button>
							</div>
						</Card>
					</Col> */}

					{/* Mobile View */}

					<Col className="card" xs={24} sm={24} md={0} lg={0}>
						{billing ?
							<Card title="Add Card" style={AppStyles.paddingBottom20}>
								<Col xs={24} sm={24} md={0} lg={0} >
									<div style={AppStyles.marginBottom40}>
										<div style={AppStyles.horizontallLineWidth100}>
										</div>
									</div>
								</Col>
								<Form
									name="addCardForm"
									layout="vertical"
									style={AppStyles.padding20}
								>
									<Form.Item
										label="Card holder name"
										name="cardHolderName"
										rules={
											[
												{
													require: true,
													message: 'Please enter card holder name!'
												}
											]
										}
									>
										<Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="Card holder name" />
									</Form.Item>
									<Form.Item
										label="Card number"
										name="cardNumber"
										hasFeedback
										rules={
											[
												{
													pattern: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
													message: 'Please enter a valid credit card number!'
												}
											]
										}
									>
										<Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="0000 0000 0000 00" />
									</Form.Item>
									<Row gutter={ROW_GUTTER}>
										<Col xs={12} sm={12} md={0} lg={0}>
											<Form.Item
												label="Expiry date"
												name="exp"
												rules={
													[
														{
															pattern: /^(0[1-9]|1[0-2])[- /.]\d{2}/,
															message: 'Please enter a valid date format!'
														}
													]
												}
											>
												<Input style={componentStyles.borderColor} suffix={<CalendarOutlined />} placeholder="MM/YY" />
											</Form.Item>
										</Col>
										<Col xs={12} sm={12} md={0} lg={0}>
											<Form.Item
												label="CVV code"
												name="cvv"
												rules={
													[
														{
															pattern: /^[0-9]{3,4}$/,
															message: 'Please enter a CVV code format!'
														}
													]
												}
											>
												<Input
													style={componentStyles.borderColor}
													suffix={
														<Tooltip title="The last three digits printed on the back of the card">
															<QuestionCircleOutlined className="cursor-pointer" />
														</Tooltip>
													}
													placeholder="000"
												/>
											</Form.Item>

										</Col>
										<Col xs={12} sm={12} md={0} lg={0} style={AppStyles.marginTop50}>
											<Form.Item>
												<Button
													onClick={() => this.setState({ billing: false })}
													style={componentStyles.cancelButton}
													htmlType="submit" block>
													Cancel
                                                </Button>
											</Form.Item>
										</Col>
										<Col xs={12} sm={12} md={0} lg={0} style={AppStyles.marginTop50}>
											<Form.Item>
												<Button
													style={componentStyles.continueButton}
													htmlType="submit" block>
													Add Card
                                                </Button>
											</Form.Item>
										</Col>
									</Row>
								</Form>
							</Card>

							: <div style={AppStyles.flexDirectionRow}>

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
											{/* <RouteLink to={'/auth/register'}> */}
											<Button onClick={() => this.setState({ billing: true })} style={{ borderRadius: 20, fontSize: 10, paddingLeft: 50, paddingRight: 50, color: '#60b0f4', borderWidth: 1, borderStyle: 'solid', borderColor: '#60b0f4' }} type="default">Get Started</Button>
											{/* </RouteLink> */}
										</div>
									</div>
								</Col>
							</div>
						}
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

								</Table>
								<Row style={AppStyles.flexDirectionRow}>
									<Row style={AppStyles.flexDirectionRow}>
										<Col xs={12} sm={12} md={12} lg={12} style={{ alignSelf: 'center' }}>
											<Form layout="vertical">
												<Form.Item
													name="promoCode"
													label="Promo Code"
													// rules={rules.promoCode}
													hasFeedback
												>
													<Input
														onChange={(val) => this.handleChange("promoCode", val)}
														style={componentStyles.borderColor} />
												</Form.Item>
											</Form>
										</Col>
										<Col xs={12} sm={12} md={12} lg={12} style={{ alignSelf: 'center' }}>
											<Button onClick={this.applyCode} style={componentStyles.applyCode} htmlType="submit" block>
												Apply Code
										    </Button>
										</Col>


									</Row>
									<div style={{ flex: 1 }} className="d-flex justify-content-end">
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
								</Row>
								{promoApplied ? <div style={componentStyles.promoAppliedDesc}>Promo Applied!</div> : null}

							</div>

						</Card>
					</Col>


				</Row>

				{/* <AuthFooter /> */}
			</>
		)
	}
}

export default OrderSummary

