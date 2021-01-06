import { CompassOutlined, NumberOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";

const { Option } = Select;

const rules = {
    nationality: [
        {
            required: true,
            message: 'Please select Nationality'
        }
    ],

    passportNo: [
        {
            required: true,
            message: 'Please input your Passport Number'
        }
    ],
    placeOfIssue: [
        {
            required: true,
            message: 'Please input place of issue'
        }
    ],
    expdate: [
        {
            required: true,
            message: 'Please input expiry date'
        }
    ],
    issueDate: [
        {
            required: true,
            message: 'Please input issue date'
        }
    ],
    dob: [
        {
            required: true,
            message: 'Please input date of birth'
        }
    ],
    placeOfBirth: [
        {
            required: true,
            message: 'Please select place of birth'
        }
    ],
    docType: [
        {
            required: true,
            message: 'Please select document type'
        }
    ],
    docNo: [
        {
            required: true,
            message: 'Please input your Document Number'
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
export class RightToWork extends Component {

    constructor(props) {
        super(props);
        this.state = {

            nationality: "",
            placeOfBirth: "",
            docType: ""

        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { nationality } = this.state;
        const { action, record } = this.props;

        return (
                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <div style={AppStyles.marginBottom40}>
                                <div style={AppStyles.horizontallLineWidth100}>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                name="nationality"
                                label="Nationality"
                                rules={rules.nationality}
                                hasFeedback
                            >
                                <Select
                                    showSearch
                                    style={componentStyles.selectStyle}
                                    bordered={false}
                                    placeholder={"Nationality"}
                                    optionFilterProp="children"
                                    onChange={(val) => this.handleChange("nationality", val)}
                                    // onFocus={onFocus}
                                    // onBlur={onBlur}
                                    // onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="UnitedKingdom">United Kingdom</Option>
                                    <Option value="Country B">Country B</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        {nationality === "UnitedKingdom" ?
                            <>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="passportNo"
                                        label="Passport Number"
                                        rules={rules.passportNo}
                                        hasFeedback
                                    >
                                        <Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="placeOfIssue"
                                        label="Place of Issue"
                                        rules={rules.placeOfIssue}
                                        hasFeedback
                                    >
                                        <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="issueDate"
                                        label="Issue Date"
                                        rules={rules.issueDate}
                                        hasFeedback
                                    >
                                        <DatePicker style={componentStyles.datePicker}
                                            // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                            format={'YYYY/MM/DD'} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="expdate"
                                        label="Expiry Date"
                                        rules={rules.expdate}
                                        hasFeedback
                                    >
                                        <DatePicker style={componentStyles.datePicker}
                                            // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                            format={'YYYY/MM/DD'} />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="dob"
                                        label="Date of Birth"
                                        rules={rules.dob}
                                        hasFeedback
                                    >
                                        <DatePicker style={componentStyles.datePicker}
                                            //  defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                            format={'YYYY/MM/DD'} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="placeOfBirth"
                                        label="Place of Birth"
                                        rules={rules.placeOfBirth}
                                        hasFeedback
                                    >
                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="Place of Birth"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("placeOfBirth", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Country A">Country A</Option>
                                            <Option value="Country B">Country B</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                            </> :
                            <>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="docType"
                                        label="Document Type"
                                        rules={rules.docType}
                                        hasFeedback
                                    >
                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="Document Type"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("docType", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Travel Document">Travel Document</Option>
                                            <Option value="Visa / BRP">Visa / BRP</Option>
                                            <Option value="Passport">Passport</Option>

                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="docNo"
                                        label="Document Number"
                                        rules={rules.docNo}
                                        hasFeedback
                                    >
                                        <Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="placeOfIssue"
                                        label="Place of Issue"
                                        rules={rules.placeOfIssue}
                                        hasFeedback
                                    >
                                        <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="issueDate"
                                        label="Issue Date"
                                        rules={rules.issueDate}
                                        hasFeedback
                                    >
                                        <DatePicker style={componentStyles.datePicker}
                                            // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')}
                                            format={'YYYY/MM/DD'} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={8} lg={8}>
                                    <Form.Item
                                        name="expdate"
                                        label="Expiry Date"
                                        rules={rules.expdate}
                                        hasFeedback
                                    >
                                        <DatePicker style={componentStyles.datePicker}
                                            //  defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
                                            format={'YYYY/MM/DD'} />
                                    </Form.Item>
                                </Col>

                            </>
                        }




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

export default RightToWork
