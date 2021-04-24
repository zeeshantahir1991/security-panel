import { UploadOutlined, UserOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography, Upload, Avatar } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import OrderSummary from './OrderSummary/index';
import { componentStyles } from "./../styles";
import { Card } from 'antd';
import { AppColors } from 'assets/styles/colors';
const { Text } = Typography;
const { TextArea } = Input;


export class letterHeadSettings extends Component {

	constructor(props) {
		super(props);
		this.state = {

			name: "Hello",
			desc: "Noooooooo",
			header: "Pigsy",
			footer: "Ficcccka"

		};
	}

	handleChange = (type, event) => {
		console.log(`selected ${event}`);
		this.setState({

			[type]: event.target.value

		})

	}


	render() {
		const { name, header, desc, footer } = this.state;

		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={12} lg={12} style={AppStyles.textAlignCenter}>
						<OrderSummary />
					</Col>
					<Col xs={24} sm={24} md={9} lg={9}        
						style={{backgroundColor: AppColors.white, height: '62vh', borderRadius:10}}
					>
						<div style={{justifyContent:'center', alignItems:'center', display:'flex', marginTop:20}}>
						<h3> Existing Cards </h3>
						</div>
						<Card style={{ width: 450, marginTop: 16, marginLeft:20, backgroundColor:AppColors.newLightGrey }}>
							<Card.Meta
								avatar={
									<>
									<CreditCardOutlined style={{fontSize:'24px'}}/>
									</>
								}
								title="Visa"
								description="**** **** **** 4242"
							/>
						</Card>
						<Card style={{ width: 450, marginTop: 16, marginLeft:20, backgroundColor:AppColors.newLightGrey }}>
							<Card.Meta
								avatar={
									<>
									<CreditCardOutlined style={{fontSize:'24px'}}/>
									</>
								}
								title="MasterCard"
								description="**** **** **** 5525"
							/>
						</Card>
						<Card style={{ width: 450, marginTop: 16, marginLeft:20, backgroundColor:AppColors.newLightGrey }}>
							<Card.Meta
								avatar={
									<>
									<CreditCardOutlined style={{fontSize:'24px'}}/>
									</>
								}
								title="Union Pay"
								description="**** **** **** 3223"
							/>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default letterHeadSettings



// export const LetterHeadPreview = ({ name, header, desc, footer }) => {

// 	if (name || header || desc || footer) {
// 		return (
// 			<div style={AppStyles.padding20}>
// 				<Row justify="center">

// 					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'right' }}>
// 						<Text style={{ fontSize: 20 }}>{name}</Text>
// 					</Col>
// 					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'right', marginTop: 20 }}>
// 						<Text style={{ fontSize: 15 }}>{header}</Text>
// 					</Col>
// 					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'left', marginTop: 100 }}>
// 						<Text style={{ fontSize: 10 }}>{desc}</Text>
// 					</Col>
// 					<Col xs={24} sm={24} md={24} lg={24} style={{ textAlign: 'left', marginTop: 100 }}>
// 						<Text style={{ fontSize: 20 }}>{footer}</Text>
// 					</Col>
// 					<Col xs={12} sm={12} md={12} lg={12} style={AppStyles.marginTop20}>

// 						<Form.Item>
// 							<Button style={componentStyles.continueButton} htmlType="submit" block>
// 								Save
// 					        </Button>
// 						</Form.Item>
// 					</Col>

// 				</Row>
// 			</div>
// 		)
// 	} else {
// 		return (
// 			<Row justify="center">
// 				<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.textAlignCenter}>
// 					<div style={AppStyles.marginTop100}>
// 						<Text style={componentStyles.noDataText}>No data to preview</Text>
// 					</div>
// 				</Col>
// 			</Row>
// 		)
// 	}

// }