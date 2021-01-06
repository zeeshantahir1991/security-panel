import { CompassOutlined, DollarOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { componentStyles } from "../../styles";

const { Option } = Select;

const rules = []
export class EmploymentHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employmentType: ""

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
                            name="employmentType"
                            label="Employment"
                            rules={rules.drivingLicence}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                style={componentStyles.selectStyle}
                                bordered={false}
                                placeholder="Employment"
                                optionFilterProp="children"
                                onChange={(val) => this.handleChange("employmentType", val)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="Employed">Employed</Option>
                                <Option value="Self Employed">Self Employed</Option>
                                <Option value="Unemployed">Unemployed</Option>
                                <Option value="Student">Student</Option>


                            </Select>
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
                            name="employerName"
                            label="Employer Name"
                            rules={rules.employerName}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="address1"
                            label="Employer Address Line 1"
                            rules={rules.address1}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="address2"
                            label="Employer Address Line 2"
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
                            name="phone"
                            label="Phone"
                            rules={rules.phone}
                            hasFeedback
                        >
                            <Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={rules.email}
                            hasFeedback
                        >
                            <Input maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="position"
                            label="Position"
                            rules={rules.position}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="managerName"
                            label="Manager Name"
                            rules={rules.managerName}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="salary"
                            label="Salary"
                            rules={rules.salary}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<DollarOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop20}>
                        <Form.Item
                            name="reason"
                            label="Reason for leaving"
                            rules={rules.site}
                            hasFeedback
                        >
                            <Textarea placeholder={'Reason...'} style={componentStyles.borderColor} />
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

export default EmploymentHistory
