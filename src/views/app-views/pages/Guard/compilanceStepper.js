import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, Steps } from 'antd';
import { BuildOutlined, CalendarOutlined, LockOutlined, DeleteOutlined, NumberOutlined, MailOutlined, BorderOutlined, UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined, HomeOutlined } from '@ant-design/icons';
import { AppStyles } from "./../../../../assets/styles";
import { componentStyles } from "./styles";
import { connect } from "react-redux";
import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';

import CompilanceInterviews from './../Compilance/compilance-interviews'
import CompilanceVetting from './../Compilance/compilance-vetting'
import CompilanceTraining from './../Compilance/compilance-trainings'

const { Step } = Steps;



export class CompilanceData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepValue: 'interviews'
        };
    }



    render() {
        const { stepValue } = this.state;
        const { location: { pathname }, history } = this.props;
        return (
            <Row justify="center">
                <Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
                    <Steps>
                        <Step status="finish" title="Interviews"

                            style={AppStyles.pointer}
                            onClick={() => this.setState({ stepValue: 'interviews' })}
                            icon={
                                <div
                                    style={'interviews' === stepValue ? AppStyles.staffSideBarIconSelectedContainer : null}
                                >
                                    <img style={AppStyles.staffSideBarIcon} src={'/img/stepper/meeting.png'} alt={`logo`} />
                                </div>
                            } />
                        <Step status="finish" title="Vetting"
                            style={AppStyles.pointer}
                            onClick={() => this.setState({ stepValue: 'vetting' })}

                            icon={
                                <div
                                    style={'vetting' === stepValue ? AppStyles.staffSideBarIconSelectedContainer : null}
                                >

                                    <img style={AppStyles.staffSideBarIcon} src={'/img/stepper/checklist.png'} alt={`logo`} />
                                </div>
                            } />
                        <Step status="finish" title="Trainings"
                            style={AppStyles.pointer}
                            onClick={() => this.setState({ stepValue: 'trainings' })}

                            icon={
                                <div
                                    style={'trainings' === stepValue ? AppStyles.staffSideBarIconSelectedContainer : null}
                                >

                                    <img style={AppStyles.staffSideBarIcon} src={'/img/stepper/training.png'} alt={`logo`} />
                                </div>
                            } />

                    </Steps>

                </Col>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <div style={AppStyles.marginTop20}>
                        {'interviews' === stepValue ?
                            < CompilanceInterviews /> :
                            'vetting' === stepValue ?
                                < CompilanceVetting /> :
                                'trainings' === stepValue ?
                                    < CompilanceTraining /> : null
                        }
                    </div>
                </Col>



            </Row>
        )

    }
}

export default CompilanceData
