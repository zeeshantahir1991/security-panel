import { Col, Row, Steps } from 'antd';
import React from 'react';
import { AppStyles } from "./../../../../assets/styles";

const { Step } = Steps;

export const Stepper = ({ location: { pathname }, history, action, record }) => {
    if (history) {
        return (

            <Row justify="center">
                <Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
                    <Steps>
                        <Step status="finish" title="Personal Information"

                            style={AppStyles.pointer}
                            onClick={() => history.push({
                                pathname: '/app/pages/guard-view',
                                state: { action, record }
                            })}
                            icon={
                                <div style={'/app/pages/guard-view' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>
                                    <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} />
                                </div>
                            } />
                        <Step status="finish" title="SIA Records"
                            style={AppStyles.pointer}
                            onClick={() => history.push({
                                pathname: '/app/pages/guard-sia-record',
                                state: { action, record }
                            })}
                            icon={
                                <div style={'/app/pages/guard-sia-record' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                    <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/driver-license.png'} alt={`logo`} />
                                </div>
                            } />
                        <Step status="finish" title=" Position & Pay"
                            style={AppStyles.pointer}
                            onClick={() => history.push({
                                pathname: '/app/pages/guard-position-pay',
                                state: { action, record }
                            })}
                            icon={
                                <div style={'/app/pages/guard-position-pay' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                    <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/pay.png'} alt={`logo`} />
                                </div>
                            } />
                        <Step status="finish" title="Right to Work"
                            style={AppStyles.pointer}
                            onClick={() => history.push({
                                pathname: '/app/pages/guard-right-work',
                                state: { action, record }
                            })}
                            icon={
                                <div style={'/app/pages/guard-right-work' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                    <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/teamwork.png'} alt={`logo`} />
                                </div>
                            } />
                    </Steps>
                </Col>

            </Row>

        )
    }

    return (

        <Row justify="center">
            <Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
                <Steps>
                    <Step status="finish" title="Personal Information"
                        icon={
                            <div style={'/app/pages/add-guard' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>
                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} />
                            </div>
                        } />
                    <Step status="finish" title="SIA Licence"

                        icon={
                            <div style={'/app/pages/sia-licence' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/driver-license.png'} alt={`logo`} />
                            </div>
                        } />
                    <Step status="finish" title=" Position & Pay"

                        icon={
                            <div style={'/app/pages/position-and-pay' === pathname ? AppStyles.staffSideBarIconSelectedContainer : null}>

                                <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/pay.png'} alt={`logo`} />
                            </div>
                        } />
                    <Step status="finish" title="Right to Work"

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
