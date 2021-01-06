import { Card, Col, Row, Select, Tabs } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import ComplianceData from '../../complianceData';
import { componentStyles } from "../../styles";
import GuardProfile from '../index';
import AddressHistory from "./AddressHistory";
import BankDetails from "./BankDetails";
import CriminalComvictions from "./CriminalComvictions";
import DocsUpload from "./DocsUpload";
import DrivingLicence from "./DrivingLicence";
import Education from "./Education";
import EmergencyContact from "./EmergencyContact";
import EmploymentHistory from "./EmploymentHistory";
import HealthQuestionnaire from "./HealthQuestionnaire";
import PersonalInfo from "./PersonalInfo";
import PersonalRef from "./PersonalRef";
import PositionAndPay from './PositionAndPay';
import RightToWork from './RightToWork';
import SiaRecordList from './SiaRecords';

const { TabPane } = Tabs;
const { Option } = Select;

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

                        <Col xs={24} sm={24} md={20} lg={20} >

                            <div style={componentStyles.typeStyle}>
                                {type}
                            </div>

                            <Card className="card" style={AppStyles.paddingBottom20}
                            // extra={
                            //     <Row>
                            //         <Col xs={24} sm={24} md={24} lg={24}>

                            //             <Select
                            //                 showSearch
                            //                 style={componentStyles.dropDownStyleWithWidth200}
                            //                 bordered={false}
                            //                 placeholder="Personal Information"
                            //                 optionFilterProp="children"
                            //                 onChange={(val) => this.handleChange("type", val)}
                            //                 // onFocus={onFocus}
                            //                 // onBlur={onBlur}
                            //                 // onSearch={onSearch}
                            //                 filterOption={(input, option) =>
                            //                     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            //                 }
                            //             >
                            //                 <Option value="Personal Information">Personal Information</Option>
                            //                 <Option value="SIA Licence">SIA Licence</Option>
                            //                 <Option value="Position & Pay">Position & Pay</Option>
                            //                 <Option value="Right to Work">Right to Work</Option>
                            //                 <Option value="Emergency Contact">Emergency Contact</Option>
                            //                 <Option value="Address History">Address History</Option>
                            //                 <Option value="Driving Licence">Driving Licence</Option>
                            //                 <Option value="Education">Education</Option>
                            //                 <Option value="Employment History">Employment History</Option>
                            //                 <Option value="Personal References">Personal References</Option>
                            //                 <Option value="Criminal Comvictions">Criminal Comvictions</Option>
                            //                 <Option value="Health Questionnaire">Health Questionnaire</Option>
                            //                 <Option value="Bank Details">Bank Details</Option>
                            //                 <Option value="Documents Upload">Documents Upload</Option>



                            //             </Select>
                            //         </Col>
                            //     </Row>
                            // }
                            >
                                <Tabs defaultActiveKey="1" tabPosition={'left'}>
                                    <TabPane tab={`Personal Information`} key={1}>
                                        <PersonalInfo action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`SIA Licence`} key={2} >
                                        <SiaRecordList action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Position & Pay`} key={3} >
                                        <PositionAndPay action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Right to Work`} key={4} >
                                        <RightToWork action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Emergency Contact`} key={5} >
                                        <EmergencyContact action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Address History`} key={6} >
                                        <AddressHistory action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Education`} key={7} >
                                        <Education action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Employment History`} key={8} >
                                        <EmploymentHistory action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Personal References`} key={9} >
                                        <PersonalRef action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Criminal Comvictions`} key={10} >
                                        <CriminalComvictions action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Driving Licence`} key={11} >
                                        <DrivingLicence action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Health Questionnaire`} key={12} >
                                        <HealthQuestionnaire action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Bank Details`} key={13} >
                                        <BankDetails action={action} record={record} history={this.props.history} />
                                    </TabPane>
                                    <TabPane tab={`Documents Upload`} key={14} >
                                        <DocsUpload action={action} record={record} history={this.props.history} />
                                    </TabPane>


                                    {/* {
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
                                                                                    type === "Position & Pay" ?
                                                                                        <PositionAndPay action={action} record={record} history={this.props.history} /> :
                                                                                        type === "SIA Licence" ?
                                                                                            <SiaRecordList action={action} record={record} history={this.props.history} /> :
                                                                                            type === "Right to Work" ?
                                                                                                <RightToWork action={action} record={record} history={this.props.history} /> :

                                                                                                null
                                    } */}
                                </Tabs>

                            </Card>
                            {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                        </Col>

                    </Row>
                    <div style={AppStyles.marginTop50}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={24} >
                                <ComplianceData location={this.props.location} history={this.props.history} />
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
