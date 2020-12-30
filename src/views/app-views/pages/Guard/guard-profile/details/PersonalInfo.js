import { MailOutlined, MobileOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import CompilanceData from '../../compilanceDropDown';
import GuardProfile from '../index';
import { Stepper } from '../../stepper';
import { componentStyles } from "../../styles";
const { Option } = Select;

const rules = {
    title: [
        {
            // required: true,
            message: 'Please input title'
        }
    ],
    email: [
        {
            // required: true,
            message: 'Please input your email address'
        },
        {
            type: 'email',
            message: 'Please enter a validate email!'
        }
    ],

    firstname: [
        {
            required: true,
            message: 'Please input your first name'
        }
    ],
    lastname: [
        {
            required: true,
            message: 'Please input your last name'
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
    dob: [
        {
            required: true,
            message: 'Please input date of birth'
        }
    ],
    origin: [
        {
            // required: true,
            message: 'Please select origin'
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
export class PersonalInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {

            title: "",
            origin: "",

        };
    }


    render() {
        const {action, record} = this.props;
   
        if (action && record) {
            return (

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
                                name="title"
                                label="Title"
                                rules={action === "viewItem" ? null : rules.title}
                                hasFeedback
                            >
                                {action === "viewItem" ?
                                    record.title
                                    :
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
                                        defaultValue={record.title ? record.title : "Mr"}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Mr">Mr</Option>
                                        <Option value="Miss">Miss</Option>
                                        <Option value="Mrs">Mrs</Option>
                                    </Select>
                                }

                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8}>
                            <Form.Item
                                name="firstname"
                                label="Full Name"
                                rules={action === "viewItem" ? null : rules.firstname}
                                hasFeedback
                            >
                                {action === "viewItem" ?
                                    record.name :
                                    <Input
                                        defaultValue={record.name ? record.name : ""}
                                        style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                }
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={8} lg={8}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={action === "viewItem" ? null : rules.email}
                                hasFeedback
                            >
                                {action === "viewItem" ?
                                    record.email :
                                    <Input
                                        defaultValue={record.email ? record.email : ""}
                                        maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
                                }
                            </Form.Item>
                        </Col>


                        <Col xs={24} sm={24} md={8} lg={8}>
                            <Form.Item
                                name="dob"
                                label="DOB"
                                rules={action === "viewItem" ? null : rules.dob}
                                hasFeedback
                            >
                                {action === "viewItem" ?

                                    moment.unix(record.birthday).format("YYYY/MM/DD")
                                    :
                                    <DatePicker style={componentStyles.datePicker}
                                        defaultValue={record.birthday ? moment.unix(record.birthday) : ""}
                                        format={'YYYY/MM/DD'} />
                                }

                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8}>
                            <Form.Item
                                name="mobile"
                                label="Mobile"
                                rules={action === "viewItem" ? null : rules.phoneNumber}
                                hasFeedback
                            >
                                {action === "viewItem" ?
                                    record.phoneNumber :
                                    <Input
                                        defaultValue={record.phoneNumber ? parseInt(record.phoneNumber) : ""}
                                        className="remove" min="0" type="number" style={componentStyles.borderColor} prefix={<MobileOutlined />} />
                                }
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8}>
                            <Form.Item
                                name="niNumber"
                                label="Ni Number"
                                rules={action === "viewItem" ? null : rules.niNumber}
                                hasFeedback
                            >
                                {action === "viewItem" ?
                                    record.niNumber :
                                    <Input
                                        defaultValue={record.niNumber ? record.niNumber : ""}
                                        className="remove" min="0" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />

                                }
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={8} lg={8}>
                            <Form.Item
                                name="origin"
                                label="Ethinic Origin"
                                rules={action === "viewItem" ? null : rules.origin}
                                hasFeedback
                            >
                                {action === "viewItem" ?
                                    record.origin
                                    :
                                    <Select
                                        showSearch
                                        style={componentStyles.selectStyle}
                                        bordered={false}
                                        placeholder="Origin"
                                        optionFilterProp="children"
                                        onChange={(val) => this.handleChange("origin", val)}
                                        // onFocus={onFocus}
                                        // onBlur={onBlur}
                                        // onSearch={onSearch}
                                        defaultValue={record.origin ? record.origin : ""}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="British">British</Option>
                                        <Option value="African">African</Option>
                                        <Option value="Carebian">Carebian</Option>
                                        <Option value="Asian">Asian</Option>
                                    </Select>
                                }
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16} justify="center">

                        <Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop20}>
                            {action === "viewItem" ?
                                <Form.Item>
                                    <Button
                                        onClick={() => this.props.history.goBack()}
                                        style={componentStyles.continueButton} htmlType="submit" block>
                                        Back
                                                    </Button>
                                </Form.Item> :
                                <Form.Item>
                                    <Button
                                        style={componentStyles.continueButton} htmlType="submit" block>
                                        Update
                                                </Button>
                                </Form.Item>
                            }
                        </Col>
                    </Row>
                </Form>

            )
        }

    }
}

export default PersonalInfo
