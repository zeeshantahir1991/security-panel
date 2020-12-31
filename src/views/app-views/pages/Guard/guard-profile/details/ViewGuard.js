import { MailOutlined, MobileOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import CompilanceData from '../../compilanceDropDown';
import GuardProfile from '../index';
import { Stepper } from '../../stepper';
import { componentStyles } from "../../styles";
import PersonalInfo from "./PersonalInfo"
import DocsUpload from "./DocsUpload"
import BankDetails from "./BankDetails"
import HealthQuestionnaire from "./HealthQuestionnaire"
import CriminalComvictions from "./CriminalComvictions"
import PersonalRef from "./PersonalRef"
import EmploymentHistory from "./EmploymentHistory"
import Education from "./Education"
import DrivingLicence from "./DrivingLicence"
import EmergencyContact from "./EmergencyContact"
import AddressHistory from "./AddressHistory"


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
export class ViewGuard extends Component {

    constructor(props) {
        super(props);
        this.state = {

            type: "personalInfo"

        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { type } = this.state;
        let record = null
        let action = null
        if (this.props.location.state && this.props.location.state.action && this.props.location.state.record) {
            record = this.props.location.state.record
            action = this.props.location.state.action
        }
        if (action && record) {
            return (
                <div style={AppStyles.marginTop50}>
                    <Row justify="center">
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <Stepper location={this.props.location} history={this.props.history} action={action} record={record} />
                        </Col>

                        <Col xs={24} sm={24} md={20} lg={20} >
                            <Card className="card" title="Personal Information" style={AppStyles.paddingBottom20}
                                extra={
                                    <Row>
                                        <Col xs={24} sm={24} md={24} lg={24}>

                                            <Select
                                                showSearch
                                                style={componentStyles.selectStyle}
                                                bordered={false}
                                                placeholder="Personal Information"
                                                optionFilterProp="children"
                                                onChange={(val) => this.handleChange("type", val)}
                                                // onFocus={onFocus}
                                                // onBlur={onBlur}
                                                // onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="personalInfo">Personal Information</Option>
                                                <Option value="emergencyContact">Emergency Contact</Option>
                                                <Option value="addressHistory">Address History</Option>
                                                <Option value="drivingLicence">Driving Licence</Option>
                                                <Option value="education">Education</Option>
                                                <Option value="employmentHistory">Employment History</Option>
                                                <Option value="personalRef">Personal References</Option>
                                                <Option value="criminal">Criminal Comvictions</Option>
                                                <Option value="health">Health Questionnaire</Option>
                                                <Option value="bankDetails">Bank Details</Option>
                                                <Option value="docsUpload">Documents Upload</Option>



                                            </Select>
                                        </Col>
                                    </Row>
                                }
                            >
                                {
                                    type === "personalInfo" ?
                                        <PersonalInfo action={action} record={record} history={this.props.history} /> :
                                        type === "emergencyContact" ?
                                            <EmergencyContact action={action} record={record} history={this.props.history} /> :
                                            type === "drivingLicence" ?
                                                <DrivingLicence action={action} record={record} history={this.props.history} /> :
                                                type === "education" ?
                                                    <Education action={action} record={record} history={this.props.history} /> :
                                                    type === "employmentHistory" ?
                                                        <EmploymentHistory action={action} record={record} history={this.props.history} /> :
                                                        type === "personalRef" ?
                                                            <PersonalRef action={action} record={record} history={this.props.history} /> :
                                                            type === "criminal" ?
                                                                <CriminalComvictions action={action} record={record} history={this.props.history} /> :
                                                                type === "health" ?
                                                                    <HealthQuestionnaire action={action} record={record} history={this.props.history} /> :
                                                                    type === "bankDetails" ?
                                                                        <BankDetails action={action} record={record} history={this.props.history} /> :
                                                                        type === "docsUpload" ?
                                                                            <DocsUpload action={action} record={record} history={this.props.history} /> :
                                                                            type === "addressHistory" ?
                                                                                <AddressHistory action={action} record={record} history={this.props.history} /> :

                                                                                null
                                }
                            </Card>
                            {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                        </Col>

                    </Row>
                    <div style={AppStyles.marginTop50}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} >
                                <CompilanceData location={this.props.location} history={this.props.history} />
                            </Col>
                        </Row>
                    </div>
                    <GuardProfile location={this.props.location} history={this.props.history} record={record} />
                </div>
            )
        }

    }
}

export default ViewGuard
