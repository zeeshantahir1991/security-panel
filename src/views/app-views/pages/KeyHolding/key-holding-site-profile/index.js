import { MailOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Form, Input, Menu, Row, Select, Tabs, Typography } from 'antd';
import { AppStyles } from "assets/styles";
import { AppColors } from "assets/styles/colors";
import React, { Component } from 'react';
import { componentStyles } from "../styles";
import Docs from "./docs";
import KeyHoldingSiteInformation from "./key-holding-site-information"
import SiteTimesheets from "./site-timesheets"
import DispatchCalls from "./dispatch-calls"

const { TabPane } = Tabs;
const { Option } = Select;

export class KeyHoldingSiteProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            type: "Key Holding Site Information",
            form: "",
            avatarUrl: '/img/avatars/thumb-6.jpg',
            active: true


        };
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { type, form, avatarUrl, active } = this.state;
        let record = null
        let action = null
        if (this.props.location.state && this.props.location.state.action && this.props.location.state.record) {
            record = this.props.location.state.record
            action = this.props.location.state.action
        }
        if (action && record) {
            return (
                <div style={AppStyles.marginTop50}>


                    <Row
                    // justify="center"

                    >

                        <Col xs={24} sm={24} md={24} lg={24}
                        // style={{backgroundColor:"yellow"}}
                        >


                            <Row >
                                <Col className="card"
                                    xs={24} sm={24} md={4} lg={4}
                                    style={{ backgroundColor: 'white' }}
                                >

                                    <Menu mode="vertical">

                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Key Holding Site Information" })}
                                            style={'Key Holding Site Information' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Key Holding Site Information' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Key Holding Site Information

                                                </span>
                                        </Menu.Item>


                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Site Timesheets" })}
                                            style={'Site Timesheets' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Site Timesheets' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Site Timesheets

                                                </span>
                                        </Menu.Item>

                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Docs" })}
                                            style={'Docs' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Docs' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Docs

                                                </span>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Dispatch Activity Reports" })}
                                            style={'Dispatch Activity Reports' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Dispatch Activity Reports' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Dispatch Activity Reports

                                                </span>
                                        </Menu.Item>



                                    </Menu>

                                </Col>
                                <Col xs={24} sm={24} md={1} lg={1} >
                                </Col>
                                <Col className="card" xs={24} sm={24} md={19} lg={19}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: 10
                                    }}
                                >
                                    <Card style={{ border: 0 }}
                                    >

                                        <Row justify={'start'} style={AppStyles.marginBottom20}>
                                            <Col xs={6} sm={6} md={6} lg={6} style={AppStyles.alignSelfCenter}>
                                                <div style={componentStyles.typeStyle}>
                                                    {type}
                                                </div>
                                            </Col>
                                            <Col xs={14} sm={14} md={14} lg={14} style={AppStyles.alignSelfCenter}>

                                                <Select
                                                    showSearch
                                                    style={componentStyles.dropDownStyleWithWidth200}
                                                    bordered={false}
                                                    placeholder={type ? type : "Select Type"}
                                                    value={type ? type : "Select Type"}

                                                    optionFilterProp="children"
                                                    onChange={(val) => this.handleChange("type", val)}
                                                    // onFocus={onFocus}
                                                    // onBlur={onBlur}
                                                    // onSearch={onSearch}
                                                    filterOption={(input, option) =>
                                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="Key Holding Site Information">Key Holding Site Information</Option>
                                                    <Option value="Docs">Docs</Option>
                                                    <Option value="Site Timesheets">Site Timesheets</Option>
                                                    <Option value="Dispatch Activity Reports">Dispatch Activity Reports</Option>




                                                </Select>
                                            </Col>

                                            <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfCenter}>

                                                <div style={componentStyles.nameStyle}>
                                                    {record.siteName}
                                                </div>

                                            </Col>

                                        </Row>


                                        {
                                            type === "Docs" ?
                                                <Docs action={action} record={record} history={this.props.history} /> :
                                                type === "Key Holding Site Information" ?
                                                    <KeyHoldingSiteInformation action={action} record={record} history={this.props.history} /> :
                                                    type === "Site Timesheets" ?
                                                        <SiteTimesheets action={action} record={record} history={this.props.history} /> :
                                                        type === "Dispatch Activity Reports" ?
                                                            <DispatchCalls action={action} record={record} history={this.props.history} /> :

                                                            null
                                        }

                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                </div>
            )
        }

    }
}

export default KeyHoldingSiteProfile
