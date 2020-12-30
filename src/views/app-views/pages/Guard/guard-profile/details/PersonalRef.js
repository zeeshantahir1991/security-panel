import { MailOutlined, MobileOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import CompilanceData from '../../compilanceDropDown';
import GuardProfile from '../index';
import { Stepper } from '../../stepper';
import { componentStyles } from "../../styles";
const { Option } = Select;


export class PersonalRef extends Component {

    constructor(props) {
        super(props);
        this.state = {


        };
    }


    render() {
        const { action, record } = this.props;

        return (

            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <div style={AppStyles.marginBottom40}>
                            <div style={AppStyles.horizontallLineWidth100}>
                            </div>
                        </div>
                        <div>Personal References</div>
                    </Col>

                </Row>
            </Form>

        )

    }
}

export default PersonalRef
