import { CodepenOutlined, DollarOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, DatePicker, Form, Input, Row, Select, Switch } from 'antd';
import Flex from 'components/shared-components/Flex';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";
import DocumentAndSitePreferences from './DocumentAndSitePreferences';
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
            validator(value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject('Passwords do not match!');
            },
        })
    ]
}
export class GuardProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            role: "",
            avatarUrl: '/img/avatars/thumb-6.jpg',


        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    render() {
        const { avatarUrl } = this.state
        const { record } = this.props;

        return (

            <DocumentAndSitePreferences location={this.props.location} history={this.props.history} record={record} />


        )

    }
}

export default GuardProfile
