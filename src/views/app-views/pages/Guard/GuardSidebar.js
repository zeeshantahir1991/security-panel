import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, DeleteOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import { AppStyles } from "./../../../../assets/styles";
import { componentStyles } from "./styles";
import { connect } from "react-redux";

import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';

export const GuardSidebar = ({ location: { pathname } }) => {

    return (

        <Row justify="center">
            <Col md={24} lg={24}>
                <Menu mode="vertical">

                    <Menu.Item
                        className="menuHover"
                        style={'/app/pages/add-guard' === pathname ? componentStyles.staffMenuItemSelected : null
                        }
                    >
                        <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} />

                        <RouteLink
                            style={{
                                color: '/app/pages/add-guard' === pathname ? AppColors.pictonBlue : null
                            }}
                            to={'/app/pages/add-guard'}>
                            <span>
                                Personal Information

									</span>
                        </RouteLink>
                    </Menu.Item>


                    <Menu.Item
                        className="menuHover"
                        style={'/app/pages/sia-licence' === pathname ? componentStyles.staffMenuItemSelected : null
                        }
                    >
                        <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/driver-license.png'} alt={`logo`} />

                        <RouteLink
                            style={{
                                color: '/app/pages/sia-licence' === pathname ? AppColors.pictonBlue : null
                            }}
                            to={'/app/pages/sia-licence'}>
                            <span>
                                SIA Licence
								    </span>
                        </RouteLink>
                    </Menu.Item>
                    <Menu.Item
                        className="menuHover"
                        style={'/app/pages/position-and-pay' === pathname ? componentStyles.staffMenuItemSelected : null
                        }
                    >
                        <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/pay.png'} alt={`logo`} />

                        <RouteLink
                            style={{
                                color: '/app/pages/position-and-pay' === pathname ? AppColors.pictonBlue : null
                            }}
                            to={'/app/pages/position-and-pay'}>
                            <span>
                                Position & Pay
								    </span>
                        </RouteLink>
                    </Menu.Item>
                    <Menu.Item
                        className="menuHover"
                        style={'/app/pages/right-to-work' === pathname ? componentStyles.staffMenuItemSelected : null
                        }
                    >
                        <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/teamwork.png'} alt={`logo`} />

                        <RouteLink
                            style={{
                                color: '/app/pages/right-to-work' === pathname ? AppColors.pictonBlue : null
                            }}
                            to={'/app/pages/right-to-work'}>
                            <span>
                                Right to Work
								    </span>
                        </RouteLink>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>

    )

}
