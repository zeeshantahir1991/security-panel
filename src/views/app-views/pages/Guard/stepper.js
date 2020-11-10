import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, Steps } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, DeleteOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import { AppStyles } from "./../../../../assets/styles";
import { componentStyles } from "./styles";
import { connect } from "react-redux";

import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';
const { Step } = Steps;

export const Stepper = ({ location: { pathname }, history }) => {

    return (

        <Row justify="center">
            <Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
                <Steps>
                    <Step status="finish" title="Personal Information"

                        style={AppStyles.pointer}
                        onClick={() => history.push({
                            pathname: '/app/pages/add-guard',
                        })}
                        icon={
                            <div style={'/app/pages/add-guard' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>
                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} />
                            </div>
                        } />
                    <Step status="finish" title="SIA Licence"
                        style={AppStyles.pointer}
                        onClick={() => history.push({
                            pathname: '/app/pages/sia-licence',
                        })}
                        icon={
                            <div style={'/app/pages/sia-licence' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/driver-license.png'} alt={`logo`} />
                            </div>
                        } />
                    <Step status="finish" title=" Position & Pay"
                        style={AppStyles.pointer}
                        onClick={() => history.push({
                            pathname: '/app/pages/position-and-pay',
                        })}
                        icon={
                            <div style={'/app/pages/position-and-pay' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/pay.png'} alt={`logo`} />
                            </div>
                        } />
                    <Step status="finish" title="Right to Work"
                        style={AppStyles.pointer}
                        onClick={() => history.push({
                            pathname: '/app/pages/right-to-work',
                        })}
                        icon={
                            <div style={'/app/pages/right-to-work' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/teamwork.png'} alt={`logo`} />
                            </div>
                        } />
                </Steps>
            </Col>

        </Row>

    )

}
