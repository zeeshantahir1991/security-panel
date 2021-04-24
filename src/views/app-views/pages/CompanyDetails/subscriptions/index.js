import { UploadOutlined, UserOutlined, CreditCardOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography, Upload, Avatar } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import { Card } from 'antd';
import { AppColors } from 'assets/styles/colors';
import PricingDetail from './PricingDetail/index';
const { Text } = Typography;
const { TextArea } = Input;


export class subscriptions extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleChange = (type, event) => {
		console.log(`selected ${event}`);
		this.setState({
			[type]: event.target.value
		})

	}


	render() {
		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">
					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.textAlignCenter}>
						<PricingDetail/>
					</Col>
					
				</Row>
			</div>
		)
	}
}

export default subscriptions