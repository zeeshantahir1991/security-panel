import { BankOutlined, CreditCardOutlined, NumberOutlined, UserOutlined, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Card, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
const bankData = [
    {
        "id": "1",
        "bankName": "Allied",
        "sortCode": 123,
        "accountHolderName": "Eileen Horton",
        "accountNumber": "1583107200"

    }
]

export class BankDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bankList: bankData,
            form: false,
            edit: false
        };
    }


    render() {
        const { bankList } = this.state;
        const { form, edit } = this.state;

        const tableColumns = [


            {
                title: 'Account Holder Name',
                dataIndex: 'accountHolderName',
                render: (_, record) => (
                    <div className="d-flex">
                        <a onClick={() => this.setState({ edit: true })}>
                            {record.accountHolderName}
                        </a>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.accountHolderName.toLowerCase();
                        b = b.accountHolderName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Sort Code',
                dataIndex: 'sortCode',
                sorter: {
                    compare: (a, b) => a.sortCode.length - b.sortCode.length,
                },
                width: 150
            },



            {
                title: 'Account Number ',
                dataIndex: 'accountNumber',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.accountNumber}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.accountNumber.toLowerCase();
                        b = b.accountNumber.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
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
                                <Row gutter={16} justify="center">

                                    {/* <Col xs={24} sm={24} md={6} lg={6} >

                                        <Form.Item
                                            label="Bank Name"
                                            name="bankName"
                                            rules={
                                                [
                                                    {
                                                        require: true,
                                                        message: 'Please enter bank name!'
                                                    }
                                                ]
                                            }
                                        >
                                            <Input style={componentStyles.borderColor} suffix={<BankOutlined />} />
                                        </Form.Item>
                                    </Col> */}

                                    <Col xs={24} sm={24} md={6} lg={6} >

                                        <Form.Item
                                            label="Account Holder Name"
                                            name="accountHolderName"
                                            rules={
                                                [
                                                    {
                                                        require: true,
                                                        message: 'Please enter account holder name!'
                                                    }
                                                ]
                                            }
                                        >
                                            <Input style={componentStyles.borderColor} suffix={<UserOutlined />} />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            label="Sort code"
                                            name="sortCode"
                                            rules={
                                                [
                                                    {
                                                        pattern: /^[0-9]{3,4}$/,
                                                        message: 'Please enter a sort code format!'
                                                    }
                                                ]
                                            }
                                        >
                                            <Input
                                                style={componentStyles.borderColor}
                                                suffix={<NumberOutlined />}
                                            />
                                        </Form.Item>

                                    </Col>

                                    <Col xs={24} sm={24} md={6} lg={6} >

                                        <Form.Item
                                            label="Account Number"
                                            name="accountNumber"
                                            hasFeedback
                                            rules={
                                                [
                                                    {
                                                        pattern: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
                                                        message: 'Please enter a valid account number!'
                                                    }
                                                ]
                                            }
                                        >
                                            <Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="0000 0000 0000 00" />
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
                                    <Row gutter={16} justify="center">

                                        {/* <Col xs={24} sm={24} md={6} lg={6} >

                                    <Form.Item
                                        label="Bank Name"
                                        name="bankName"
                                        rules={
                                            [
                                                {
                                                    require: true,
                                                    message: 'Please enter bank name!'
                                                }
                                            ]
                                        }
                                    >
                                        <Input style={componentStyles.borderColor} suffix={<BankOutlined />} />
                                    </Form.Item>
                                </Col> */}

                                        <Col xs={24} sm={24} md={6} lg={6} >

                                            <Form.Item
                                                label="Account Holder Name"
                                                name="accountHolderName"
                                                rules={
                                                    [
                                                        {
                                                            require: true,
                                                            message: 'Please enter account holder name!'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input style={componentStyles.borderColor} suffix={<UserOutlined />} />
                                            </Form.Item>
                                        </Col>

                                        <Col xs={24} sm={24} md={6} lg={6}>
                                            <Form.Item
                                                label="Sort code"
                                                name="sortCode"
                                                rules={
                                                    [
                                                        {
                                                            pattern: /^[0-9]{3,4}$/,
                                                            message: 'Please enter a sort code format!'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input
                                                    style={componentStyles.borderColor}
                                                    suffix={<NumberOutlined />}
                                                />
                                            </Form.Item>

                                        </Col>

                                        <Col xs={24} sm={24} md={6} lg={6} >

                                            <Form.Item
                                                label="Account Number"
                                                name="accountNumber"
                                                hasFeedback
                                                rules={
                                                    [
                                                        {
                                                            pattern: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/g,
                                                            message: 'Please enter a valid account number!'
                                                        }
                                                    ]
                                                }
                                            >
                                                <Input style={componentStyles.borderColor} suffix={<CreditCardOutlined />} placeholder="0000 0000 0000 00" />
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
                                </Form> :

                                <Row>

                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <Card className="card" title="Account Details" extra={
                                            <Row gutter={16}>
                                                <Col xs={24} sm={24} md={24} lg={24}>

                                                    <Button
                                                        onClick={() => this.setState({ form: true })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Add Bank Details
                                                    </Button>

                                                </Col>
                                            </Row>
                                        }>
                                            <Table
                                                searchable
                                                bordered columns={tableColumns} dataSource={bankList} rowKey='id' scroll={{ x: 750, y: 200 }} />
                                        </Card>
                                    </Col>
                                </Row>


                    }
                </Col>
            </Row>
        )

    }
}

export default BankDetails
