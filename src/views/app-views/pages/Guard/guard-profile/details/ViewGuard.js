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

            type: "Personal Information"

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
                            <Card className="card" title={type} style={AppStyles.paddingBottom20}
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
                                                <Option value="Personal Information">Personal Information</Option>
                                                <Option value="Emergency Contact">Emergency Contact</Option>
                                                <Option value="Address History">Address History</Option>
                                                <Option value="Driving Licence">Driving Licence</Option>
                                                <Option value="Education">Education</Option>
                                                <Option value="Employment History">Employment History</Option>
                                                <Option value="Personal References">Personal References</Option>
                                                <Option value="Criminal Comvictions">Criminal Comvictions</Option>
                                                <Option value="Health Questionnaire">Health Questionnaire</Option>
                                                <Option value="Bank Details">Bank Details</Option>
                                                <Option value="Documents Upload">Documents Upload</Option>



                                            </Select>
                                        </Col>
                                    </Row>
                                }
                            >
                                {
                                    type === "Personal Information" ?
                                        <PersonalInfo action={action} record={record} history={this.props.history} /> :
                                        type === "Emergency Contact" ?
                                            <EmergencyContact action={action} record={record} history={this.props.history} /> :
                                            type === "Driving Licence" ?
                                                <DrivingLicence action={action} record={record} history={this.props.history} /> :
                                                type === "Education" ?
                                                    <Education action={action} record={record} history={this.props.history} /> :
                                                    type === "Employment History" ?
                                                        <EmploymentHistory action={action} record={record} history={this.props.history} /> :
                                                        type === "Personal References" ?
                                                            <PersonalRef action={action} record={record} history={this.props.history} /> :
                                                            type === "Criminal Comvictions" ?
                                                                <CriminalComvictions action={action} record={record} history={this.props.history} /> :
                                                                type === "Health Questionnaire" ?
                                                                    <HealthQuestionnaire action={action} record={record} history={this.props.history} /> :
                                                                    type === "Bank Details" ?
                                                                        <BankDetails action={action} record={record} history={this.props.history} /> :
                                                                        type === "Documents Upload" ?
                                                                            <DocsUpload action={action} record={record} history={this.props.history} /> :
                                                                            type === "Address History" ?
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
