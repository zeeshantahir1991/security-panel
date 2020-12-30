import { CodepenOutlined, DollarOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, DatePicker, Form, Input, Row, Select, Switch } from 'antd';
import Flex from 'components/shared-components/Flex';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";
import DocumentAndSitePreferences from './DocumentAndSitePreferences';
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
export class GuardProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            role: "",
            avatarUrl: '/img/avatars/thumb-6.jpg',


        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    render() {
        const { avatarUrl } = this.state
        const { record } = this.props;

        return (

            <div style={AppStyles.marginTop50}>
                {/* <Row justify={'center'}>

                    <Col xs={24} sm={24} md={20} lg={20} >
                        <Card className="card" title="Guard Profile" style={AppStyles.paddingBottom20}>
                            <Form layout="vertical">
                                <Row justify={'center'} gutter={16}>
                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <div style={AppStyles.marginBottom40}>
                                            <div style={AppStyles.horizontallLineWidth100}>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row justify={'center'} gutter={16}>
                                    <Flex alignItems="center" mobileFlex={false} className="text-center">
                                        <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
                                        <div>
                                            <div style={componentStyles.guardNameText}>{record.name}</div>
                                            <Button type="primary">Active</Button>
                                        </div>
                                    </Flex>
                                </Row>
                                <Row gutter={16} style={AppStyles.marginTop50}>
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
                                            name="licenseNo"
                                            label="SIA Licence Number"
                                            rules={rules.licenseNo}
                                        // hasFeedback
                                        >
                                            <Input
                                                min="0" className="remove" type="number"
                                                // onChange={(val) => this.handleChange("licenseNo", val)}
                                                style={componentStyles.borderColor} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="role"
                                            label="Role"
                                            rules={rules.role}
                                            hasFeedback
                                        >
                                            <Select
                                                showSearch
                                                style={componentStyles.selectStyle}
                                                bordered={false}
                                                placeholder="Role"
                                                optionFilterProp="children"
                                                onChange={(val) => this.handleChange("role", val)}
                                                // onFocus={onFocus}
                                                // onBlur={onBlur}
                                                // onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="Security Office">Security Office</Option>
                                                <Option value="Supervisor">Supervisor</Option>
                                                <Option value="Mobile Patrol">Mobile Patrol</Option>
                                                <Option value="CCTV">CCTV</Option>

                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={rules.email}
                                            hasFeedback
                                        >
                                            <Input disabled defaultValue={record.email} maxLength={30} style={componentStyles.borderColor} prefix={<MailOutlined />} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="licenseExpDate"
                                            label="SIA License Expiry"
                                            rules={rules.licenseExpDate}
                                            hasFeedback
                                        >
                                            <DatePicker style={componentStyles.datePicker}
                                                // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                                format={'YYYY/MM/DD'} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="payRate"
                                            label="Pay Rate"
                                            rules={rules.payRate}
                                            hasFeedback
                                        >
                                            <Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="licenseSector"
                                            label="License Sector"
                                            rules={rules.licenseSector}
                                            hasFeedback
                                        >
                                            <Input maxLength={30} style={componentStyles.borderColor} prefix={<CodepenOutlined />} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Status
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="lastMobileAccessTime"
                                            label="Last Mobile Access Date & Time"
                                            rules={rules.lastMobileAccessTime}
                                            hasFeedback
                                        >
                                            <DatePicker style={componentStyles.datePicker}
                                                disabled
                                                defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                                format={'YYYY/MM/DD'} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="dateChecked"
                                            label="Date Checked"
                                            rules={rules.dateChecked}
                                            hasFeedback
                                        >
                                            <DatePicker style={componentStyles.datePicker}
                                                disabled
                                                defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                                format={'YYYY/MM/DD'} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="lastDateChecked"
                                            label="Last Date Checked"
                                            rules={rules.lastDateChecked}
                                            hasFeedback
                                        >
                                            <DatePicker style={componentStyles.datePicker}
                                                disabled
                                                defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                                format={'YYYY/MM/DD'} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                 */}
                <DocumentAndSitePreferences location={this.props.location} history={this.props.history} record={record} />

            </div>

        )

    }
}

export default GuardProfile
