import { Button, Col, Form, Row, Switch } from 'antd';
import React, { Component } from 'react';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";

const rules = []
export class CriminalComvictions extends Component {

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

                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                        Have you, ever been fined, cautioned, sentenced to imprisonment or placed on probation for a criminal act (subject to the Rehabilitation of Offenders Act)?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                        Are there any alleged offences outstanding against you?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                        Have you, ever been made bankrupt or have any Court judgement against you, whether satisfied or not, within the last 6 years?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                       Has any order been made against you by a Civil or Military Court or Public Authority?
                   </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop20}>

                        <Form.Item
                            name="details"
                            label="Details"
                            rules={rules.details}
                            hasFeedback
                        >
                            <Textarea placeholder={'Details...'} style={componentStyles.borderColor} />
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
            </Form>

        )

    }
}

export default CriminalComvictions
