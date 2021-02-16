import { DeleteOutlined, EyeOutlined, BuildOutlined, UserOutlined, MailOutlined, CompassOutlined, NumberOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip, Form, Switch, TimePicker, Typography } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import { componentStyles } from "./../../styles";


const { Option } = Select;
const { RangePicker } = TimePicker;



export class ClientAndSiteInfo extends Component {

    state = {
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        const { search } = this.state;
        this.setState({
            search: {
                ...search,
                [type]: value
            }
        })

    }

    handleChangeInput = (type, event) => {
        console.log(`selected ${event.target.value}`);
        const { search } = this.state;
        this.setState({
            search: {
                ...search,
                [type]: event.target.value
            }
        })

    }



    render() {
        const { sites, search, currStatus, step } = this.state;
        let { record } = this.props;


        return (
            <>

                <Card className="card" title="Client & Site Information" style={AppStyles.paddingBottom20}>
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={24} lg={24} >
                                <div style={AppStyles.marginBottom40}>
                                    <div style={AppStyles.horizontallLineWidth100}>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="clientName"
                                    label="Client Name"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input disabled defaultValue={record.clientName} style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>


                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="address1"
                                    label="Client Address"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <Input disabled defaultValue={record.address} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="clientContactPersonName"
                                    label="Client Contact Person Name"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input disabled defaultValue={record.clientName} style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="phone"
                                    label="Client Phone"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input disabled defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="siteName"
                                    label="Site Name"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input disabled defaultValue={record.clientName} style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>


                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="address1"
                                    label="Site Address"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <Input disabled defaultValue={record.address} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="siteContactPersonName"
                                    label="Site Contact Person Name"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input disabled defaultValue={record.clientName} style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="phone"
                                    label="Site Phone"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input disabled defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                                </Form.Item>
                            </Col>


                        </Row>
                    </Form>
                </Card>
                <Card className="card" title="Times of Duty Coverage" style={AppStyles.paddingBottom20}>
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={24} lg={24} >
                                <div style={AppStyles.marginBottom40}>
                                    <div style={AppStyles.horizontallLineWidth100}>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Days</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Number of Guards</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Day Shift</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Night Shift</Typography>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Monday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Tuesday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Wednesday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Thursday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Friday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Saturday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>
                                        <Typography style={componentStyles.weekdaysStyle}>Sunday</Typography>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <Input defaultValue={record.phoneNumber} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={componentStyles.colBorder}>

                                        <RangePicker style={componentStyles.rangePicker} />
                                    </Col>
                                </Row>
                            </Col>



                        </Row>
                        <Row gutter={16} justify="center">


                            <Col xs={12} sm={12} md={6} lg={6}>

                                <Form.Item>
                                    <div style={AppStyles.marginTop40}>
                                        <Button
                                            onClick={() => this.props.parentCallback("Second")}
                                            style={componentStyles.continueButton} htmlType="submit" block>
                                            Continue
                                        </Button>

                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </>
        )
    }
}

export default ClientAndSiteInfo
