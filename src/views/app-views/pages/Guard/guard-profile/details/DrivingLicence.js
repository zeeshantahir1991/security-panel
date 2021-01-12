import { BookOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Switch } from 'antd';
import React, { Component } from 'react';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";

const { Option } = Select;

const rules = []
export class DrivingLicence extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }


    render() {

        return (

            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <div style={AppStyles.marginBottom40}>
                            <div style={AppStyles.horizontallLineWidth100}>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            name="drivingLicence"
                            label="Type of driving Licence"
                            rules={rules.drivingLicence}
                            hasFeedback
                        >
                            <Select
                                showSearch
                                style={componentStyles.selectStyle}
                                bordered={false}
                                placeholder="Type of driving Licence"
                                optionFilterProp="children"
                                onChange={(val) => this.handleChange("drivingLicence", val)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="Full">Full</Option>
                                <Option value="Provisional">Provisional</Option>
                                <Option value="None">None</Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item
                            name="licenceNo"
                            label="Licence Number"
                            rules={rules.licenceNo}
                            hasFeedback
                        >
                            <Input type={'text'} style={componentStyles.borderColor} prefix={<BookOutlined />} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Own a Transport?
                   </Col>
                    <Col xs={24} sm={24} md={8} lg={8} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Have you ever been disqualified?
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch> Any motoring offences/convictions?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop20}>
                        <Form.Item
                            name="offenceDesc"
                            label="If yes please provide description of your offence/s"
                            rules={rules.site}
                            hasFeedback
                        >
                            <Textarea placeholder={'Description...'} style={componentStyles.borderColor} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16} justify="center">

                    <Col xs={12} sm={12} md={6} lg={6}>

                        <Form.Item>
                            <div style={AppStyles.marginTop40}>
                                <Button
                                    onClick={() => this.props.history.goBack()}

                                    style={componentStyles.continueButton} htmlType="submit" block>
                                    Back
            </Button>

                            </div>
                        </Form.Item>
                    </Col>

                    <Col xs={12} sm={12} md={6} lg={6}>

                        <Form.Item>
                            <div style={AppStyles.marginTop40}>
                                <Button style={componentStyles.continueButton} htmlType="submit" block>
                                    Continue
            </Button>

                            </div>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

        )

    }
}

export default DrivingLicence
