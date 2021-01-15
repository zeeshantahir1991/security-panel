import { AuditOutlined, MailOutlined, NumberOutlined, UserOutlined, InboxOutlined, CompassOutlined, PhoneOutlined, DeleteOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Tooltip, Card } from 'antd';
import { Table } from "ant-table-extensions";

import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
import moment from 'moment';

const rules = []
const personalRefData = [
    {
        "id": "1",
        "fullName": "Full Name 1",
        "toDate": 1583107200,
        "address1": "Address 1",
        "address2": "Address 2",
        "city": "City 1",
        "postCode": "ABC123",
        "email": 'test@test.com',
        "phone": '12123124',
        "occupation": "Occupation",
        "year": 1583107200,
        "month": 1583107200

    }
]

export class PersonalRef extends Component {

    constructor(props) {
        super(props);
        this.state = {

            personalRefList: personalRefData,
            form: false,
            edit: false

        };
    }


    render() {

        const { personalRefList } = this.state;
        const { form, edit } = this.state;
        const tableColumns = [
            {
                title: 'Full Name',
                dataIndex: 'fullName',
                render: (_, record) => (
                    <div className="d-flex">
                        <a onClick={() => this.setState({ edit: true })}>

                            {record.fullName}
                        </a>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.fullName.toLowerCase();
                        b = b.fullName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'To',
                dataIndex: 'toDate',
                render: date => (
                    <span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.toDate).unix() - moment(b.toDate).unix(),
                width: 200
            },

            {
                title: 'Address Line 1',
                dataIndex: 'address1',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.address1}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.address1.toLowerCase();
                        b = b.address1.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'Address Line 2',
                dataIndex: 'address2',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.address1}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.address2.toLowerCase();
                        b = b.address2.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },


            {
                title: 'Town/City',
                dataIndex: 'city',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.city}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.city.toLowerCase();
                        b = b.city.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'Post Code',
                dataIndex: 'postCode',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.postCode}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.postCode.toLowerCase();
                        b = b.postCode.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },



            {
                title: 'Email',
                dataIndex: 'email',
                render: (_, record) => (
                    <div className="d-flex">
                        <span>{record.email}</span>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.email.toLowerCase();
                        b = b.email.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },


            {
                title: 'Phone',
                dataIndex: 'phone',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.phone}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.phone.toLowerCase();
                        b = b.phone.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },


            {
                title: 'Occupation',
                dataIndex: 'occupation',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.occupation}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.occupation.toLowerCase();
                        b = b.occupation.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },


            {
                title: 'Year',
                dataIndex: 'year',
                render: date => (
                    <span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY")} </span>
                ),
                sorter: (a, b) => moment(a.year).unix() - moment(b.year).unix(),
                width: 200
            },

            {
                title: 'Month',
                dataIndex: 'month',
                render: date => (
                    <span>{date === "TBD" ? "TBD" : moment.unix(date).format("MM")} </span>
                ),
                sorter: (a, b) => moment(a.month).unix() - moment(b.month).unix(),
                width: 200
            },


            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        {/* <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
                        </Tooltip> */}
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
                        </Tooltip>
                    </div>
                )
            }
        ];
        return (
            <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={24} >
                    <div style={AppStyles.marginBottom40}>
                        <div style={AppStyles.horizontallLineWidth100}>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} >
                    {
                        form ?
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
                                            name="toDate"
                                            label="To"
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
                                            <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
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
                                            name="occupation"
                                            label="Occupation"
                                            rules={rules.occupation}
                                            hasFeedback
                                        >
                                            <Input style={componentStyles.borderColor} prefix={<AuditOutlined />} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={8} lg={8}>
                                        <Form.Item
                                            name="date"
                                            label="How long known?"
                                            rules={rules.date}
                                            hasFeedback
                                        >
                                            <div style={AppStyles.flexDirectionRow}>

                                                <Input placeholder={'Year'} min="0" type="number" style={componentStyles.borderColor} prefix={<FieldTimeOutlined />} />
                                                <div style={AppStyles.marginLeft20}>
                                                    <Input placeholder={'Month'} min="0" type="number" style={componentStyles.borderColor} prefix={<FieldTimeOutlined />} />
                                                </div>
                                            </div>
                                        </Form.Item>
                                    </Col>


                                </Row>
                                <Row gutter={16} justify="center">
                                    <Col xs={12} sm={12} md={6} lg={6}>

                                        <Form.Item>
                                            <div style={AppStyles.marginTop40}>
                                                <Button
                                                    onClick={() => this.setState({ form: false })}
                                                    style={componentStyles.continueButton} htmlType="submit" block>
                                                    Back
                                                    </Button>

                                            </div>
                                        </Form.Item>
                                    </Col>

                                    <Col xs={12} sm={12} md={6} lg={6}>

                                        <Form.Item>
                                            <div style={AppStyles.marginTop40}>
                                                <Button
                                                    onClick={() => this.setState({ form: false })}
                                                    style={componentStyles.continueButton} htmlType="submit" block>
                                                    Add
                                                    </Button>

                                            </div>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            :
                            edit ?
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
                                                name="toDate"
                                                label="To"
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
                                                <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
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
                                                name="occupation"
                                                label="Occupation"
                                                rules={rules.occupation}
                                                hasFeedback
                                            >
                                                <Input style={componentStyles.borderColor} prefix={<AuditOutlined />} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={8} lg={8}>
                                            <Form.Item
                                                name="date"
                                                label="How long known?"
                                                rules={rules.date}
                                                hasFeedback
                                            >
                                                <div style={AppStyles.flexDirectionRow}>

                                                    <Input placeholder={'Year'} min="0" type="number" style={componentStyles.borderColor} prefix={<FieldTimeOutlined />} />
                                                    <div style={AppStyles.marginLeft20}>
                                                        <Input placeholder={'Month'} min="0" type="number" style={componentStyles.borderColor} prefix={<FieldTimeOutlined />} />
                                                    </div>
                                                </div>
                                            </Form.Item>
                                        </Col>


                                    </Row>
                                    <Row gutter={16} justify="center">
                                        <Col xs={12} sm={12} md={6} lg={6}>

                                            <Form.Item>
                                                <div style={AppStyles.marginTop40}>
                                                    <Button
                                                        onClick={() => this.setState({ edit: false })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Back
                                                    </Button>

                                                </div>
                                            </Form.Item>
                                        </Col>

                                        <Col xs={12} sm={12} md={6} lg={6}>

                                            <Form.Item>
                                                <div style={AppStyles.marginTop40}>
                                                    <Button
                                                        onClick={() => this.setState({ edit: false })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Update
                                                    </Button>

                                                </div>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                                :
                                <Row>

                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <Card className="card" title="References" extra={
                                            <Row gutter={16}>
                                                <Col xs={24} sm={24} md={24} lg={24}>

                                                    <Button
                                                        onClick={() => this.setState({ form: true })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Add Personal References
                                                    </Button>

                                                </Col>
                                            </Row>
                                        }>
                                            <Table
                                                searchable
                                                bordered columns={tableColumns} dataSource={personalRefList} rowKey='id' scroll={{ x: 2300, y: 200 }} />
                                        </Card>
                                    </Col>
                                </Row>
                    }
                </Col>
            </Row >


        )

    }
}

export default PersonalRef
