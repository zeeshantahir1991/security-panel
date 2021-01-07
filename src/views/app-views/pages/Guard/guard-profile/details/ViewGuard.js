import { Card, Col, Row, Select, Tabs, Menu, Form, Button } from "antd";
import React, { Component } from "react";
import { AppStyles } from "../../../../../../assets/styles";
import { AppColors } from "../../../../../../assets/styles/colors";
import ComplianceData from "../../complianceData";
import { componentStyles } from "../../styles";
import GuardProfile from "../index";
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
import PositionAndPay from "./PositionAndPay";
import RightToWork from "./RightToWork";
import SiaRecordList from "./SiaRecords";

const { TabPane } = Tabs;
const { Option } = Select;

export class ViewGuard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Personal Information",
      form: false,
    };
  }

  handleChange = (type, value) => {
    console.log(`selected ${value}`);
    this.setState({
      [type]: value,
    });
  };

  render() {
    const { type, form } = this.state;
    let record = null;
    let action = null;
    if (
      this.props.location.state &&
      this.props.location.state.action &&
      this.props.location.state.record
    ) {
      record = this.props.location.state.record;
      action = this.props.location.state.action;
    }
    if (action && record) {
      return (
        <div style={AppStyles.marginTop50}>
          <Row justify="center">
            <Col xs={24} sm={24} md={20} lg={20}>
              {/* <div style={componentStyles.typeStyle}>{type}</div> */}
              <Row>
                <Col
                  className="card"
                  xs={24}
                  sm={24}
                  md={4}
                  lg={4}
                  style={{ backgroundColor: "white" }}
                >
                  <Menu mode="vertical">
                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Personal Information" })
                      }
                      style={
                        "Personal Information" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                      <span
                        style={{
                          color:
                            "Personal Information" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Personal Information
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "SIA Licence" })}
                      style={
                        "SIA Licence" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "SIA Licence" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        SIA Licence
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "Position & Pay" })}
                      style={
                        "Position & Pay" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Position & Pay" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Position & Pay
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "Right to Work" })}
                      style={
                        "Right to Work" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Right to Work" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Right to Work
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Emergency Contact" })
                      }
                      style={
                        "Emergency Contact" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Emergency Contact" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Emergency Contact
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "Address History" })}
                      style={
                        "Address History" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Address History" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Address History
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "Driving Licence" })}
                      style={
                        "Driving Licence" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Driving Licence" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Driving Licence
                      </span>
                    </Menu.Item>

                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "Education" })}
                      style={
                        "Education" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Education" === type ? AppColors.pictonBlue : null,
                        }}
                      >
                        Education
                      </span>
                    </Menu.Item>
                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Employment History" })
                      }
                      style={
                        "Employment History" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Employment History" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Employment History
                      </span>
                    </Menu.Item>
                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Personal References" })
                      }
                      style={
                        "Personal References" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Personal References" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Personal References
                      </span>
                    </Menu.Item>
                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Criminal Comvictions" })
                      }
                      style={
                        "Criminal Comvictions" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Criminal Comvictions" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Criminal Comvictions
                      </span>
                    </Menu.Item>
                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Health Questionnaire" })
                      }
                      style={
                        "Health Questionnaire" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Health Questionnaire" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Health Questionnaire
                      </span>
                    </Menu.Item>
                    <Menu.Item
                      className="menuHover"
                      onClick={() => this.setState({ type: "Bank Details" })}
                      style={
                        "Bank Details" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Bank Details" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Bank Details
                      </span>
                    </Menu.Item>
                    <Menu.Item
                      className="menuHover"
                      onClick={() =>
                        this.setState({ type: "Documents Upload" })
                      }
                      style={
                        "Documents Upload" === type
                          ? componentStyles.staffMenuItemSelected
                          : null
                      }
                    >
                      <span
                        style={{
                          color:
                            "Documents Upload" === type
                              ? AppColors.pictonBlue
                              : null,
                        }}
                      >
                        Documents Upload
                      </span>
                    </Menu.Item>
                  </Menu>
                </Col>
                <Col xs={24} sm={24} md={2} lg={2}></Col>
                <Col
                  className="card"
                  xs={24}
                  sm={24}
                  md={18}
                  lg={18}
                  style={{ backgroundColor: "white", borderRadius: 10 }}
                >
                  <Card style={{ border: 0 }}>
                    {/* <Tabs defaultActiveKey="1" tabBarGutter={16} tabPosition={'left'} style={{ backgroundColor: 'red' }} tabBarStyle={{ backgroundColor: 'white' }}>
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
                                </TabPane> */}
                    <Row justify={"start"} style={AppStyles.marginBottom20}>
                      {/* {type} */}
                      <Col xs={24} sm={24} md={16} lg={16} style={{display:"flex", flexDirection:"row"}}>
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            // marginBottom: 20,
                            marginTop: 10,
                            marginRight: 20,
                          }}
                        >
                          {type}
                        </div>
                        <Select
                          showSearch
                          style={componentStyles.dropDownStyleWithWidth200}
                          bordered={false}
                          placeholder={type ? type : "Select Type"}
                          optionFilterProp="children"
                          onChange={(val) => this.handleChange("type", val)}
                          // onFocus={onFocus}
                          // onBlur={onBlur}
                          // onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.props.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="Personal Information">
                            Personal Information
                          </Option>
                          <Option value="SIA Licence">SIA Licence</Option>
                          <Option value="Position & Pay">Position & Pay</Option>
                          <Option value="Right to Work">Right to Work</Option>
                          <Option value="Emergency Contact">
                            Emergency Contact
                          </Option>
                          <Option value="Address History">
                            Address History
                          </Option>
                          <Option value="Driving Licence">
                            Driving Licence
                          </Option>
                          <Option value="Education">Education</Option>
                          <Option value="Employment History">
                            Employment History
                          </Option>
                          <Option value="Personal References">
                            Personal References
                          </Option>
                          <Option value="Criminal Comvictions">
                            Criminal Comvictions
                          </Option>
                          <Option value="Health Questionnaire">
                            Health Questionnaire
                          </Option>
                          <Option value="Bank Details">Bank Details</Option>
                          <Option value="Documents Upload">
                            Documents Upload
                          </Option>
                        </Select>
                      </Col>
                      {type == "Bank Details" ? (
                        <>
                          <Col xs={12} sm={12} md={4} lg={4}>
                            <Button
                              onClick={() => this.setState({ form: true })}
                              style={componentStyles.continueButton}
                              htmlType="submit"
                              block
                            >
                              Add
                            </Button>
                          </Col>
                          <Col xs={12} sm={12} md={4} lg={4}>
                            <div style={AppStyles.marginLeft30}>
                              <Button
                                onClick={() => this.setState({ form: false })}
                                style={componentStyles.cancelButton}
                                htmlType="submit"
                                block
                              >
                                Remove
                              </Button>
                            </div>
                          </Col>
                        </>
                      ) : null}
                    </Row>

                    {type === "Personal Information" ? (
                      <PersonalInfo
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Emergency Contact" ? (
                      <EmergencyContact
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Driving Licence" ? (
                      <DrivingLicence
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Education" ? (
                      <Education
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Employment History" ? (
                      <EmploymentHistory
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Personal References" ? (
                      <PersonalRef
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Criminal Comvictions" ? (
                      <CriminalComvictions
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Health Questionnaire" ? (
                      <HealthQuestionnaire
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Bank Details" ? (
                      <BankDetails
                        form={form}
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Documents Upload" ? (
                      <DocsUpload
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Address History" ? (
                      <AddressHistory
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Position & Pay" ? (
                      <PositionAndPay
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "SIA Licence" ? (
                      <SiaRecordList
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : type === "Right to Work" ? (
                      <RightToWork
                        action={action}
                        record={record}
                        history={this.props.history}
                      />
                    ) : null}
                    {/* </Tabs> */}
                  </Card>
                </Col>
              </Row>
              {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
            </Col>
          </Row>
          <div style={AppStyles.marginTop50}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={24}>
                <ComplianceData
                  location={this.props.location}
                  history={this.props.history}
                />
              </Col>
            </Row>
          </div>
          <GuardProfile
            location={this.props.location}
            history={this.props.history}
            record={record}
          />
        </div>
      );
    }
  }
}

export default ViewGuard;
