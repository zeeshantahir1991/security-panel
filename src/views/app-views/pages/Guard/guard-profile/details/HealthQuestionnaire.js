import { Button, Col, Form, Row, Switch } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";


export class HealthQuestionnaire extends Component {

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
                            {/* <div style={AppStyles.horizontallLineWidth100}>
                            </div> */}
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24}>

                        <div style={componentStyles.healthQuestionnaireTitle}>
                            Have you ever?
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Had an operation?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Been seriously injured?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Receieved in-patient treatment for physical or mental condition?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Been refused or dismissed from employment for health reasons?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Receieved a disability pension?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                          Been made ill due to work?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                          Had a disability?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                          Been refused a driving licence because of ill health?
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={componentStyles.healthQuestionnaireTitle1}>

                        <div>
                            Do you suffer from or have you ever had?
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Diabetes
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           High Blood Pressure
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Frequent Cough
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Rheumatic Fever
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Arthritis
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Epilepsy / Fits
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Swelling of legs/ankles
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Mentruation or prostate problem
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Varicose veins
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Rapture
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Back trouble
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Ear trouble
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Eye trouble
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Skin Rashes / Eczema
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Anemia
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Frequent Headaches
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Heart trouble
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Chest trouble
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Fainting or Dizziness
                   </Col>
                    <Col xs={24} sm={24} md={6} lg={6} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Hay Fever
                   </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.marginTop20}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Do you take medicines regularly?
                   </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Have you ever had a head injury?
                   </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Have you worked in dusty trade?
                   </Col>
                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.alignSelfCenter}>

                        <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
                           Do you suffer from any other ailments?
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

export default HealthQuestionnaire
