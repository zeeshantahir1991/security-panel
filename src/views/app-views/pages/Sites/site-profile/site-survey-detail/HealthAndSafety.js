import { ClockCircleOutlined, CompassOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { AppStyles } from "assets/styles";
import React, { Component } from 'react';
import { componentStyles } from "./../../styles";



const { Option } = Select;



export class HealthAndSafety extends Component {

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

                <Card className="card" title="Health & Safety" style={AppStyles.paddingBottom20}>
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={24} lg={24} >
                                <div style={AppStyles.marginBottom40}>
                                    <div style={AppStyles.horizontallLineWidth100}>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Form.Item
                                    name="firstAiderName"
                                    label="First Aider Full Name"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>


                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Form.Item
                                    name="phone"
                                    label="Phone"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Form.Item
                                    name="location"
                                    label="Location of First Aid Equipment"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>




                        </Row>
                    </Form>
                </Card>
                <Card className="card" title="Assignment Instructions" style={AppStyles.paddingBottom20}>
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
                                    name="patrolCheck"
                                    label="Patrol checks required?"
                                    // rules={rules.title}
                                    hasFeedback
                                >
                                    <Select
                                        showSearch
                                        style={componentStyles.selectStyle}
                                        bordered={false}
                                        placeholder="Patrol checks required?"
                                        optionFilterProp="children"
                                        onChange={(val) => this.handleChange("patrolCheck", val)}
                                        // onFocus={onFocus}
                                        // onBlur={onBlur}
                                        // onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>
                            </Col>



                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="patrolClockCheckPoint"
                                    label="Patrol Clock CheckPoint"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <Input style={componentStyles.borderColor} prefix={<ClockCircleOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="specialInstructions"
                                    label="Special Instructions"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>


                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="specialDuties"
                                    label="Special Duties"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>


                        </Row>
                        <Row gutter={16} justify="center">


                            <Col xs={12} sm={12} md={6} lg={6}>

                                <Form.Item>
                                    <div style={AppStyles.marginTop40}>
                                        <Button
                                            onClick={() => this.props.parentCallback(false)}
                                            style={componentStyles.continueButton} htmlType="submit" block>
                                            Save
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

export default HealthAndSafety
