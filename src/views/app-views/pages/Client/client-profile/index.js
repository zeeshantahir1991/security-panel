import { Card, Col, Row, Select, Tabs, Menu, Avatar, Typography, Button, Form, Input } from 'antd';
import { UserOutlined, NumberOutlined, MailOutlined, DollarOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { AppColors } from "../../../../../assets/styles/colors"
import { componentStyles } from "./../styles";
import StaticSites from "./sites";
import Docs from "./docs"
import EditClient from "./details"
import AddService from "./add-service"


const { TabPane } = Tabs;
const { Option } = Select;

export class ClientProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            type: "Client Information",
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
                <div style={AppStyles.marginTop20}>


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
                                            onClick={() => this.setState({ type: "Client Information" })}
                                            style={'Client Information' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Client Information' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Client Information

                                                </span>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Sites" })}
                                            style={'Sites' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Sites' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Sites

                                                </span>
                                        </Menu.Item>
                                        <Menu.Item
                                            className="menuHover"
                                            onClick={() => this.setState({ type: "Services" })}
                                            style={'Services' === type ? componentStyles.staffMenuItemSelected : null
                                            }
                                        >
                                            {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                            <span
                                                style={{
                                                    color: 'Services' === type ? AppColors.pictonBlue : null
                                                }}

                                            >
                                                Services

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

                                                    <Option value="Client Information">Client Information</Option>
                                                    <Option value="Sites">Sites</Option>
                                                    <Option value="Services">Services</Option>
                                                    <Option value="Docs">Docs</Option>



                                                </Select>
                                            </Col>

                                            <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfCenter}>

                                                <div style={componentStyles.nameStyle}>
                                                    {record.clientName}
                                                </div>

                                            </Col>

                                        </Row>


                                        {
                                            type === "Client Information" ?
                                                <EditClient action={action} record={record} history={this.props.history} /> :
                                                type === "Sites" ?
                                                    <StaticSites action={action} record={record} history={this.props.history} /> :
                                                    type === "Docs" ?
                                                        <Docs action={action} record={record} history={this.props.history} /> :
                                                        type === "Services" ?

                                                            <AddService action={action} record={record} history={this.props.history} /> :

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

export default ClientProfile
