import { CompassOutlined, InboxOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { AppStyles } from "assets/styles";
import React, { Component } from 'react';
import { componentStyles } from "./../../styles";




const { Option } = Select;

const rules = []
export class EditPatrolRoute extends Component {

    state = {
        address: ""
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({
            [type]: value

        })

    }



    render() {
        const { address } = this.state;
        return (
            <div>

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
                                name="routeName"
                                label="Route Name"
                                hasFeedback
                            >
                                <Input style={componentStyles.borderColor} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={6} lg={6}>
                            <Form.Item
                                name="siteName"
                                label="Site Name"
                                hasFeedback
                            >
                                <Input style={componentStyles.borderColor} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6}>
                            <Form.Item
                                name="address"
                                label="Address"
                                // rules={rules.storeLocation}
                                hasFeedback
                            >
                                <Select
                                    showSearch
                                    style={componentStyles.selectStyle}
                                    bordered={false}
                                    placeholder="Address"
                                    optionFilterProp="children"
                                    onChange={(val) => this.handleChange("address", val)}
                                    // onFocus={onFocus}
                                    // onBlur={onBlur}
                                    // onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="companyAddress">Company Address</Option>
                                    <Option value="guardAddress">Guard's Home Address</Option>
                                    <Option value="customAddress">Custom Address</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        {address === "customAddress" ?
                            <>
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
                                        rules={rules.address1}
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
                                        <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
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
                            </> : null
                        }


                    </Row>
                </Form>

            </div>
        )
    }
}

export default EditPatrolRoute

