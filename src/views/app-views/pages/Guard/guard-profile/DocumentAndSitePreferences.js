import { Card, Col, Form, Row } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";

export class DocumentAndSitePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    goTo = (value) => {

        if (value === "docs") {
            this.props.history.push({
                pathname: '/app/pages/guard-docs'
            })
        } else if (value === "site-preferrences") {
            this.props.history.push({
                pathname: '/app/pages/site-preferrences'
            })
        } else if (value === "holidays") {

            this.props.history.push({
                pathname: '/app/pages/holidays-and-availability'
            })
        }

    }

    render() {

        return (

            <div style={AppStyles.marginTop50}>
                <Row justify={'center'}>

                    <Col xs={24} sm={24} md={20} lg={20} >
                        <Card className="card" title="Documents & Site Preferences" style={AppStyles.paddingBottom20}>
                            <Form layout="vertical">
                                <Row justify={'center'} gutter={16}>
                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <div style={AppStyles.marginBottom40}>
                                            <div style={AppStyles.horizontallLineWidth100}>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} >
                                        <div onClick={() => this.goTo('site-preferrences')} style={componentStyles.documentAndSitePreferencesLinkStyle}>
                                            Site Preferrences
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} >
                                        <div onClick={() => this.goTo('holidays')} style={componentStyles.documentAndSitePreferencesLinkStyle}>
                                            Holidays & Availability
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6} >
                                        <div onClick={() => this.goTo('docs')} style={componentStyles.documentAndSitePreferencesLinkStyle}>
                                            Docs
                                        </div>
                                    </Col>
                                </Row>

                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        )

    }
}

export default DocumentAndSitePreferences
