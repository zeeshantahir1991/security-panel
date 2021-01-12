import { CompassOutlined, MailOutlined, MobileOutlined, NumberOutlined, PhoneOutlined, UserOutlined, DeleteOutlined, EyeOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Tooltip, Card, Table } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
const { Option } = Select;

const rules = []
const emergencyData = [
    {
        "id": "1",
        "title": "Mr",
        "fullName": "Full Name 1",
        "realtionship": "Son",
        "phone": "1123213",
        "mobile": "345345",
        "email": "test@tes.com",
        "address1": "Address 1",
        "address2": "Address 2",
        "city": "City 1",
        "postCode": "ABC123"

    }
]
export class EmergencyContact extends Component {

    constructor(props) {
        super(props);
        this.state = {

            title: '',
            relationship: '',
            emergencyList: emergencyData,
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

        const { emergencyList } = this.state;
        const { form, edit } = this.state;
        const tableColumns = [
            {
                title: 'Title',
                dataIndex: 'title',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.title}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.title.toLowerCase();
                        b = b.title.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

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
                title: 'Relationship to kin',
                dataIndex: 'realtionship',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.realtionship}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.realtionship.toLowerCase();
                        b = b.realtionship.toLowerCase();
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
                title: 'Mobile',
                dataIndex: 'mobile',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.mobile}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.mobile.toLowerCase();
                        b = b.mobile.toLowerCase();
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
                                            <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
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
                                                <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
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
                                        <Card className="card" title="Contact Details" extra={
                                            <Row gutter={16}>
                                                <Col xs={24} sm={24} md={24} lg={24}>

                                                    <Button
                                                        onClick={() => this.setState({ form: true })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Add Contact
                                                    </Button>

                                                </Col>
                                            </Row>
                                        }>
                                            <Table

                                                bordered columns={tableColumns} dataSource={emergencyList} rowKey='id' scroll={{ x: 2200, y: 200 }} />
                                        </Card>
                                    </Col>
                                </Row>
                    }
                </Col>
            </Row>

        )

    }
}

export default EmergencyContact
