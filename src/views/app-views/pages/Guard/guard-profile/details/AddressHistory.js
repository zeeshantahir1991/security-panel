import { CompassOutlined, NumberOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Switch } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";

const rules = []
export class AddressHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {

            title: '',
            relationship: ''


        };
    }
    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    render() {

        return (

            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <div style={AppStyles.marginBottom40}>
                            {/* <div style={AppStyles.horizontallLineWidth100}>
                            </div> */}
                        </div>

                    </Col>


                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="address1"
                            label="Address Line 1"
                            rules={rules.address1}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="address2"
                            label="Address Line 2"
                            rules={rules.address2}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="city"
                            label="Town / City"
                            rules={rules.city}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="postcode"
                            label="Post Code"
                            rules={rules.postcode}
                            hasFeedback
                        >
                            <Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="fromDate"
                            label="From (Date)"
                            rules={rules.fromDate}
                            hasFeedback
                        >
                            <DatePicker style={componentStyles.datePicker}
                                // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                format={'YYYY/MM/DD'} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="toDate"
                            label="To (Date)"
                            rules={rules.fromDate}
                            hasFeedback
                        >
                            <DatePicker style={componentStyles.datePicker}
                                // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                format={'YYYY/MM/DD'} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Current Address
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

export default AddressHistory
