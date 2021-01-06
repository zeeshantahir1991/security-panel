import { BankOutlined, CompassOutlined, NumberOutlined, StarOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
const { Option } = Select;

const rules = []


export class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instituteType: ""

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
                            name="instituteType"
                            label="Type of Institute"
                            rules={rules.drivingLicence}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                style={componentStyles.selectStyle}
                                bordered={false}
                                placeholder="Type of Institute"
                                optionFilterProp="children"
                                onChange={(val) => this.handleChange("instituteType", val)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="High School">High School</Option>
                                <Option value="College">College</Option>
                                <Option value="University">University</Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="instituteName"
                            label="Institute Name"
                            rules={rules.instituteName}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<BankOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="address1"
                            label="Institute Address Line 1"
                            rules={rules.address1}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="address2"
                            label="Institute Address Line 2"
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
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="grades"
                            label="Grades"
                            rules={rules.grades}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<StarOutlined />} />
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

export default Education
