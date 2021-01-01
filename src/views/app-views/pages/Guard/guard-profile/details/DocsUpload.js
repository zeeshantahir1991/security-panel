import { MailOutlined, MobileOutlined, NumberOutlined, UserOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select, Upload} from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import CompilanceData from '../../compilanceDropDown';
import GuardProfile from '../index';
import { Stepper } from '../../stepper';
import { componentStyles } from "../../styles";
const { Option } = Select;


export class DocsUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }


    render() {
        const { action, record } = this.props;

        return (

            <Form layout="vertical">
                <Row gutter={16} justify={'center'}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <div style={AppStyles.marginBottom40}>
                            <div style={AppStyles.horizontallLineWidth100}>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            name="docType"
                            label="Document Type"
                            // rules={rules.docType}
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
                                <Option value="proofId">Proof of ID (Driving Licence/ Passport/ Travel Document)</Option>
                                <Option value="proofAddress">Proof of Address (Utility Bill, Bank Statement)</Option>
                                <Option value="rightToWork">Right to Work (Visa/BRP if not british citizen)</Option>
                                <Option value="photo">Photo</Option>


                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} style={AppStyles.alignSelfCenter}>
                        <Upload>
                            <Button style={componentStyles.continueButton} htmlType="submit" block>
                                <UploadOutlined /> Browse
                            </Button>
                        </Upload>
                    </Col>
                </Row>
                <Row gutter={16} justify="center">

                    <Col xs={12} sm={12} md={12} lg={12}>

                        <Form.Item>
                            <div style={AppStyles.marginTop40}>
                                <Button style={componentStyles.continueButton} htmlType="submit" block>
                                    Save
                                </Button>

                            </div>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        )

    }
}

export default DocsUpload
