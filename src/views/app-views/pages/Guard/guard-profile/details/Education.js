import { BankOutlined, CompassOutlined, NumberOutlined, StarOutlined, DeleteOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Select, Tooltip, Card, Table } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
const { Option } = Select;

const rules = []
const eductaionData = [
    {
        "id": "1",
        "instituteType": "Institute Type 1",
        "instituteName": "Institute Name 1",
        "address1": "Address 1",
        "address2": "Address 2",
        "city": "City 1",
        "postCode": "ABC123",
        "fromDate": 1583107200,
        "toDate": 1583107200,
        "grades": "A"

    }
]

export class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instituteType: "",
            eductaionList: eductaionData,
            form: false,
            edit: false

        };
    }
    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    render() {
        const { eductaionList } = this.state;
        const { form, edit } = this.state;
        const tableColumns = [
            {
                title: 'Institute Type',
                dataIndex: 'instituteType',
                render: (_, record) => (
                    <div className="d-flex">
                        <a onClick={() => this.setState({ edit: true })}>

                            {record.instituteType}
                        </a>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.instituteType.toLowerCase();
                        b = b.instituteType.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'Institute Name',
                dataIndex: 'instituteName',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.instituteName}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.instituteName.toLowerCase();
                        b = b.instituteName.toLowerCase();
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
                title: 'Grades',
                dataIndex: 'grades',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.grades}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.grades.toLowerCase();
                        b = b.grades.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            // {
            //     title: '',
            //     dataIndex: 'actions',
            //     render: (_, elm) => (
            //         <div className="text-right">
            //             {/* <Tooltip title="View">
            //                 <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
            //             </Tooltip> */}
            //             <Tooltip title="Delete">
            //                 <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
            //             </Tooltip>
            //         </div>
            //     )
            // }
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
                                        <Card className="card" title="Education Details" extra={
                                            <Row gutter={16}>
                                                <Col xs={24} sm={24} md={24} lg={24}>

                                                    <Button
                                                        onClick={() => this.setState({ form: true })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Add Institute
                                                    </Button>

                                                </Col>
                                            </Row>
                                        }>
                                            <Table

                                                bordered columns={tableColumns} dataSource={eductaionList} rowKey='id' scroll={{ x: 2100, y: 200 }} />
                                        </Card>
                                    </Col>
                                </Row>
                    }
                </Col>
            </Row>

        )

    }
}

export default Education
