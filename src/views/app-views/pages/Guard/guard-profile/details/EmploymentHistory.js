import { CompassOutlined, DollarOutlined, MailOutlined, NumberOutlined, PhoneOutlined, UserOutlined, DeleteOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select, Tooltip, Card, Table } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';

import { AppStyles } from "../../../../../../assets/styles";
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { componentStyles } from "../../styles";

const { Option } = Select;

const rules = []
const empHistoryData = [
    {
        "id": "1",
        "empType": "Employment Type 1",
        "fromDate": 1583107200,
        "toDate": 1583107200,
        "empName": "Employment Name 1",
        "address1": "Address 1",
        "address2": "Address 2",
        "city": "City 1",
        "postCode": "ABC123",
        "phone": '12123124',
        "email": 'test@test.com',
        "position": "Position 1",
        "managerName": "Manager Name 1",
        "salary": 2000


    }
]
export class EmploymentHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employmentType: "",
            empHistoryList: empHistoryData,


        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    render() {
        const { empHistoryList } = this.state;
        const { form } = this.props;
        const tableColumns = [
            {
                title: 'Employment Type',
                dataIndex: 'empType',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.empType}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.empType.toLowerCase();
                        b = b.empType.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'From',
                dataIndex: 'fromDate',
                render: date => (
                    <span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.fromDate).unix() - moment(b.fromDate).unix(),
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
                title: 'Employer Name',
                dataIndex: 'empName',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.empName}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.empName.toLowerCase();
                        b = b.empName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
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
                title: 'Position',
                dataIndex: 'position',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.position}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.position.toLowerCase();
                        b = b.position.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'Manager Name',
                dataIndex: 'managerName',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.managerName}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.managerName.toLowerCase();
                        b = b.managerName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
				title: 'Salary',
				dataIndex: 'salary',
				sorter: {
					compare: (a, b) => a.salary.length - b.salary.length,
				},
				width: 150
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
                        form == "Employment History" ?
                            <Form layout="vertical">
                                <Row gutter={16}>

                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="employmentType"
                                            label="Employment Type"
                                            rules={rules.drivingLicence}
                                            hasFeedback
                                        >
                                            <Select
                                                showSearch
                                                style={componentStyles.selectStyle}
                                                bordered={false}
                                                placeholder="Employment Type"
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
                                            label="From"
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
                            </Form> :
                            <Row>

                                <Col xs={24} sm={24} md={24} lg={24} >
                                    <Card className="card" title="Education List">
                                        <Table

                                            bordered columns={tableColumns} dataSource={empHistoryList} rowKey='id' scroll={{ x: 2700, y: 200 }} />
                                    </Card>
                                </Col>
                            </Row>
                    }
                </Col>
            </Row>
        )

    }
}

export default EmploymentHistory
