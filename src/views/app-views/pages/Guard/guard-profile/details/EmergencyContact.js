import { CompassOutlined, MailOutlined, MobileOutlined, NumberOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
const { Option } = Select;

const rules = []
export class EmergencyContact extends Component {

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
                            <div style={AppStyles.horizontallLineWidth100}>
                            </div>
                        </div>

                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="title"
                            label="Title"
                            rules={rules.title}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                style={componentStyles.selectStyle}
                                bordered={false}
                                placeholder="Title"
                                optionFilterProp="children"
                                onChange={(val) => this.handleChange("title", val)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="Mr">Mr</Option>
                                <Option value="Miss">Miss</Option>
                                <Option value="Mrs">Mrs</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="fullName"
                            label="Full Name"
                            rules={rules.fullName}
                            hasFeedback
                        >
                            <Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6}>
                        <Form.Item
                            name="relationship"
                            label="Relationship to next to kin"
                            rules={rules.relationship}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                style={componentStyles.selectStyle}
                                bordered={false}
                                placeholder="Relationship to next to kin"
                                optionFilterProp="children"
                                onChange={(val) => this.handleChange("relationship", val)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="Spouse">Spouse</Option>
                                <Option value="Partner">Partner</Option>
                                <Option value="Son">Son</Option>
                                <Option value="Daughter">Daughter</Option>
                                <Option value="Relative">Relative</Option>
                                <Option value="Friend">Friend</Option>


                            </Select>
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
                            name="mobile"
                            label="Mobile"
                            rules={rules.mobile}
                            hasFeedback
                        >
                            <Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<MobileOutlined />} />
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

export default EmergencyContact
