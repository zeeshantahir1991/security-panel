import { MailOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Form, Input, Menu, Row, Select, Tabs, Typography } from 'antd';
import { AppStyles } from "assets/styles";
import { AppColors } from "assets/styles/colors";
import React, { Component } from 'react';
import { componentStyles } from "../styles";
import MobilePatrolSites from "./mobile-patrol-sites";
import MobilePatrolRoutes from "./mobile-patrol-routes";
import PreferedGuards from "./preferred-guards";
import SiteInformation from "./site-information"
const { TabPane } = Tabs;
const { Option } = Select;

export class SiteProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            type: "Master Site Information ",
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
                                            onClick={() => this.setState({ type: "Master Site Information " })}
                                            style={'Master Site Information ' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Master Site Information ' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Master Site Information 

                                                </span>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Prefered Guards" })}
                                            style={'Prefered Guards' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Prefered Guards' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Prefered Guards

                                                </span>
                                        </Menu.Item>


                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Mobile Patrol Sites" })}
                                            style={'Mobile Patrol Sites' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Mobile Patrol Sites' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Mobile Patrol Sites

                                                </span>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Mobile Patrol Routes" })}
                                            style={'Mobile Patrol Routes' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Mobile Patrol Routes' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Mobile Patrol Routes

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
                                                    <Option value="Master Site Information ">Master Site Information </Option>
                                                    <Option value="Prefered Guards">Prefered Guards</Option>
                                                    <Option value="Mobile Patrol Sites">Mobile Patrol Sites</Option>
                                                    <Option value="Mobile Patrol Routes">Mobile Patrol Routes</Option>



                                                </Select>
                                            </Col>

                                            <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfCenter}>

                                                <div style={componentStyles.nameStyle}>
                                                    {record.siteName}
                                                </div>

                                            </Col>

                                        </Row>


                                        {
                                            type === "Mobile Patrol Sites" ?
                                                <MobilePatrolSites action={action} record={record} history={this.props.history} /> :
                                                type === "Prefered Guards" ?
                                                    <PreferedGuards action={action} record={record} history={this.props.history} /> :
                                                    type === "Master Site Information " ?
                                                        <SiteInformation action={action} record={record} history={this.props.history} /> :
                                                        type === "Mobile Patrol Routes" ?
                                                            <MobilePatrolRoutes /> :


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

export default SiteProfile
