import { MailOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Form, Input, Menu, Row, Select, Tabs, Typography } from 'antd';
import { AppStyles } from "assets/styles";
import { AppColors } from "assets/styles/colors";
import React, { Component } from 'react';
import { componentStyles } from "./../../../styles";
import Docs from "./docs";
import DSSite from "./ds-site";
import FootPatrol from "./foot-patrol";
import PreferedGuards from "./preferred-guards";
import SGSite from "./sg-site";

const { TabPane } = Tabs;
const { Option } = Select;

export class SiteProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            type: "Prefered Guards",
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
                            style={AppStyles.marginBottom50}
                        >
                            <Card style={AppStyles.paddingBottom20}>
                                <Row justify="center">
                                    <Col xs={20} sm={20} md={24} lg={24}
                                    >
                                        <div style={AppStyles.flexDirectionWithItemsCenter}>
                                            <Avatar size={100} src={avatarUrl} icon={<UserOutlined />} />
                                            <div>
                                                <Typography style={AppStyles.nameWithAvatarStyle}>
                                                    {record.siteName}
                                                </Typography>
                                                <Button
                                                    onClick={() => this.setState({ active: !active })}
                                                    style={active ? AppStyles.avatarActiveButton : AppStyles.avatarInactiveButton} htmlType="submit" block>
                                                    {active ? "Active" : "Inactive"}
                                                </Button>

                                            </div>
                                        </div>

                                    </Col>

                                </Row>
                                <Form layout="horizontal" style={AppStyles.marginTop50}>

                                    <Row gutter={16}>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="clientName"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.clientName ? record.clientName : ""}
                                                    style={componentStyles.borderColor} prefix={<UserOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="siteName"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.siteName ? record.siteName : ""}
                                                    style={componentStyles.borderColor} prefix={<UserOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="sitePhone"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.sitePhone ? record.sitePhone : ""}
                                                    style={componentStyles.borderColor} prefix={<NumberOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="siteEmail"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.siteEmail ? record.siteEmail : ""}
                                                    style={componentStyles.borderColor} prefix={<MailOutlined />} />

                                            </Form.Item>
                                        </Col>
                                        <Col xs={20} sm={20} md={6} lg={6}
                                        >
                                            <Form.Item
                                                name="siteType"
                                                // label="Phone Number"
                                                hasFeedback
                                            >
                                                <Input
                                                    disabled
                                                    defaultValue={record.siteType ? record.siteType : ""}
                                                    style={componentStyles.borderColor} />

                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>

                            </Card>

                        </Col>

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
                                            onClick={() => this.setState({ type: "DS Site" })}
                                            style={'DS Site' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'DS Site' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                DS Site

                                                </span>
                                        </Menu.Item>

                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "SG Site" })}
                                            style={'SG Site' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'SG Site' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                SG Site

                                                </span>
                                        </Menu.Item>

                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Foot Patrol" })}
                                            style={'Foot Patrol' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Foot Patrol' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Foot Patrol

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

                                                    <Option value="Prefered Guards">Prefered Guards</Option>
                                                    <Option value="DS Site">DS Site</Option>
                                                    <Option value="SG Site">SG Site</Option>
                                                    <Option value="Foot Patrol">Foot Patrol</Option>
                                                    <Option value="Docs">Docs</Option>



                                                </Select>
                                            </Col>

                                            <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfCenter}>

                                                <div style={componentStyles.nameStyle}>
                                                    {record.name}
                                                </div>

                                            </Col>

                                        </Row>


                                        {
                                            type === "Docs" ?
                                                <Docs action={action} record={record} history={this.props.history} /> :
                                                type === "Prefered Guards" ?
                                                    <PreferedGuards action={action} record={record} history={this.props.history} /> :
                                                    type === "DS Site" ?
                                                        <DSSite action={action} record={record} history={this.props.history} /> :
                                                        type === "SG Site" ?
                                                            <SGSite action={action} record={record} history={this.props.history} /> :
                                                            type === "Foot Patrol" ?
                                                                <FootPatrol action={action} record={record} history={this.props.history} /> :

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
