import { BuildOutlined, CompassOutlined, DollarOutlined, MailOutlined, InboxOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Switch, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
import moment from 'moment';

const { Option } = Select;

const rules = {

    invoiceFrequency: [
        {
            required: true,

            message: 'Please select Invoice Frequency'
        }
    ],

    securityServices: [
        {
            required: true,

            message: 'Please select Security Service'
        }
    ],
    title: [
        {
            // required: true,
            message: 'Please input title'
        }
    ],
    email: [
        {
            required: true,
            message: 'Please input your email address'
        },
        {
            type: 'email',
            message: 'Please enter a validate email!'
        }
    ],

    fullname: [
        {
            required: true,
            message: 'Please input your full name'
        }
    ],
    mobile: [
        {
            required: true,
            message: 'Please input your mobile number'
        }
    ],
    niNumber: [
        {
            // required: true,
            message: 'Please input your NI Number'
        }
    ],
    serviceStartDate: [
        {
            required: true,
            message: 'Please input Service Start Date'
        }
    ],
    serviceEndDate: [
        {
            required: true,
            message: 'Please input Service End Date'
        }
    ],
    origin: [
        {
            // required: true,
            message: 'Please select origin'
        }
    ],
    company: [
        {
            required: true,
            message: 'Please input your company name'
        }
    ],
    address1: [
        {
            required: true,
            message: 'Please input address line 1'
        }
    ],
    address2: [
        {
            required: true,
            message: 'Please input address line 2'
        }
    ],
    city: [
        {
            required: true,
            message: 'Please input town/city'
        }
    ],
    chargeRate: [
        {
            required: true,
            message: 'Please input rate'
        }
    ],
    postcode: [
        {
            required: true,
            message: 'Please input postal code'
        }
    ],
    phone: [
        {
            required: true,
            message: 'Please input your phone number'
        }
    ],
    confirm: [
        {
            required: true,
            message: 'Please confirm your password!'
        },
        ({ getFieldValue }) => ({
            validator(value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject('Passwords do not match!');
            },
        })
    ]
}
export class SiteInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {

            title: "",
            invoiceFrequency: "",
            securityServices: ""

        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { action, record } = this.props;
        return (
            <>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <div style={AppStyles.marginBottom40}>
                            <div style={AppStyles.horizontallLineWidth100}>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div style={AppStyles.marginTop20}>
                    <Row justify="center">

                        <Col xs={24} sm={24} md={24} lg={24} >
                                <Form layout="horizontal" >

                                    <Row gutter={16}>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="clientName"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.clientName ? record.clientName : ""}
                                                    style={componentStyles.borderColor} prefix={<UserOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="siteName"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.siteName ? record.siteName : ""}
                                                    style={componentStyles.borderColor} prefix={<UserOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="sitePhone"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.sitePhone ? record.sitePhone : ""}
                                                    style={componentStyles.borderColor} prefix={<NumberOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="siteEmail"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.siteEmail ? record.siteEmail : ""}
                                                    style={componentStyles.borderColor} prefix={<MailOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="siteType"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.siteType ? record.siteType : ""}
                                                    style={componentStyles.borderColor} />

                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                        </Col>


                    </Row>
                </div>
            </>
        )
    }
}

export default SiteInformation
