import { BankOutlined, CreditCardOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";


export class BankDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }


    render() {

        return (

            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <div style={AppStyles.marginBottom40}>
                            <div style={AppStyles.horizontallLineWidth100}>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} >

                        <Form.Item
                            label="Bank Name"
                            name="bankName"
                            rules={
                                [
                                    {
                                        require: true,
                                        message: 'Please enter bank name!'
                                    }
                                ]
                            }
                        >
                            <Input style={componentStyles.borderColor} suffix={<BankOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            label="Sort code"
                            name="sortCode"
                            rules={
                                [
                                    {
                                        pattern: /^[0-9]{3,4}$/,
                                        message: 'Please enter a sort code format!'
                                    }
                                ]
                            }
                        >
                            <Input
                                style={componentStyles.borderColor}
                                suffix={<NumberOutlined />}
                            />
                        </Form.Item>

                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} >

                        <Form.Item
                            label="Account Holder Name"
                            name="accountHolderName"
                            rules={
                                [
                                    {
                                        require: true,
                                        message: 'Please enter account holder name!'
                                    }
                                ]
                            }
                        >
                            <Input style={componentStyles.borderColor} suffix={<UserOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} >

                        <Form.Item
                            label="Account Number"
                            name="accountNumber"
                            hasFeedback
                            rules={
                                [
                                    {
                                        pattern: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
                                        message: 'Please enter a valid account number!'
                                    }
                                ]
                            }
                        >
                            <Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="0000 0000 0000 00" />
                        </Form.Item>
                    </Col>



                </Row>
                <Row gutter={16} justify="center">

                    <Col xs={12} sm={12} md={12} lg={12}>

                        <Form.Item>
                            <div style={AppStyles.marginTop40}>
                                <Button style={componentStyles.continueButton} htmlType="submit" block>
                                    Continue
                                </Button>

                            </div>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        )

    }
}

export default BankDetails
