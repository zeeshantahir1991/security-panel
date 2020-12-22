import React, { Component } from 'react'
import { Card, Table, Tag, Avatar, message, Upload, Button, Row, Col, Dropdown, Select, Menu, Form, Input, DatePicker, Steps } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, NumberOutlined, MailOutlined, CodepenOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Flex from 'components/shared-components/Flex'
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import Position from 'views/app-views/components/data-display/carousel/Position';
import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';
const { SubMenu } = Menu;
const { Step } = Steps;
const { Option } = Select;

const rules = {
    title: [
        {
            // required: true,
            message: 'Please input title'
        }
    ],
    email: [
        {
            // required: true,
            message: 'Please input your email address'
        },
        {
            type: 'email',
            message: 'Please enter a validate email!'
        }
    ],

    firstname: [
        {
            required: true,
            message: 'Please input your first name'
        }
    ],
    lastname: [
        {
            required: true,
            message: 'Please input your last name'
        }
    ],
    mobile: [
        {
            required: true,
            message: 'Please input your mobile number'
        }
    ],
    niNumber: [
        {
            // required: true,
            message: 'Please input your NI Number'
        }
    ],
    dob: [
        {
            required: true,
            message: 'Please input date of birth'
        }
    ],
    origin: [
        {
            // required: true,
            message: 'Please select origin'
        }
    ],
    confirm: [
        {
            required: true,
            message: 'Please confirm your password!'
        },
        ({ getFieldValue }) => ({
            validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject('Passwords do not match!');
            },
        })
    ]
}
export class DocumentAndSitePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        const { search } = this.state;
        this.setState({

            [type]: value

        })

    }

    goTo = (value) => {

        if (value == "docs") {
            this.props.history.push({
                pathname: '/app/pages/guard-docs'
            })
        } else if (value == "site-preferrences") {
            this.props.history.push({
                pathname: '/app/pages/site-preferrences'
            })
        } else if (value == "holidays") {

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
