import { CompassOutlined, PhoneOutlined, NumberOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Select, TimePicker, Typography } from 'antd';
import { AppStyles } from "assets/styles";
import React, { Component } from 'react';
import Textarea from 'views/app-views/components/data-entry/input/Textarea';
import { componentStyles } from "./../../styles";


const { Option } = Select;
const { RangePicker } = TimePicker;



export class SiteInformation extends Component {

    state = {
    }

    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        const { search } = this.state;
        this.setState({
            search: {
                ...search,
                [type]: value
            }
        })

    }

    handleChangeInput = (type, event) => {
        console.log(`selected ${event.target.value}`);
        const { search } = this.state;
        this.setState({
            search: {
                ...search,
                [type]: event.target.value
            }
        })

    }



    render() {
        const { sites, search, currStatus, step } = this.state;
        let { record } = this.props;


        return (
            <>
                <Card className="card" title="Site Information" style={AppStyles.paddingBottom20}>
                    <Form layout="vertical">
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={24} lg={24} >
                                <div style={AppStyles.marginBottom40}>
                                    <div style={AppStyles.horizontallLineWidth100}>
                                    </div>
                                </div>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    name="description"
                                    label="General Description of assignment"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Textarea placeholder={'Description...'} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Form.Item
                                    name="numberOfStaff"
                                    label="Approx Number of Staff"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input defaultValue={record.numberOfStaff} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                </Form.Item>
                            </Col>


                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Form.Item
                                    name="workingHours"
                                    label="Working Hours"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <RangePicker style={componentStyles.rangePicker} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={8} lg={8}>
                                <Form.Item
                                    name="outOfHours"
                                    label="Out of Hours"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <RangePicker style={componentStyles.rangePicker} />
                                </Form.Item>
                            </Col>


                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    name="reception"
                                    label="At Reception"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Textarea placeholder={'At Reception...'} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="lifts"
                                    label="Are there any lifts?"
                                    // rules={rules.title}
                                    hasFeedback
                                >
                                    <Select
                                        showSearch
                                        style={componentStyles.selectStyle}
                                        bordered={false}
                                        placeholder="Are there any lifts?"
                                        optionFilterProp="children"
                                        onChange={(val) => this.handleChange("lifts", val)}
                                        // onFocus={onFocus}
                                        // onBlur={onBlur}
                                        // onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="noOfLifts"
                                    label="Number of Lifts"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input defaultValue={record.noOfLifts} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="noOfFloors"
                                    label="Number Floors Served"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input defaultValue={record.noOfFloors} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="locationOfLifts"
                                    label="Location of Lifts"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.locationOfLifts} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="locationOfMotorRooms"
                                    label="Location of Motor Rooms"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.locationOfMotorRooms} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="action"
                                    label="Action to be taken if people are trapped in lifts"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.action} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="Doors"
                                    label="Access / Doors / Gates"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.action} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="fireDoors"
                                    label="Fire Doors and Escapes"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.action} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="staircases"
                                    label="Are there any stair cases?"
                                    // rules={rules.title}
                                    hasFeedback
                                >
                                    <Select
                                        showSearch
                                        style={componentStyles.selectStyle}
                                        bordered={false}
                                        placeholder="Are there any stair cases?"
                                        optionFilterProp="children"
                                        onChange={(val) => this.handleChange("staircases", val)}
                                        // onFocus={onFocus}
                                        // onBlur={onBlur}
                                        // onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="location"
                                    label="Location"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.locationOfMotorRooms} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="noOfFloorsStaircases"
                                    label="Number Floors Served"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input defaultValue={record.noOfFloors} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="carParking"
                                    label="Is there a car parking?"
                                    // rules={rules.title}
                                    hasFeedback
                                >
                                    <Select
                                        showSearch
                                        style={componentStyles.selectStyle}
                                        bordered={false}
                                        placeholder="Is there a car parking?"
                                        optionFilterProp="children"
                                        onChange={(val) => this.handleChange("carParking", val)}
                                        // onFocus={onFocus}
                                        // onBlur={onBlur}
                                        // onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="Yes">Yes</Option>
                                        <Option value="No">No</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="location"
                                    label="Location"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.locationOfMotorRooms} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16} className="card" style={componentStyles.equipmentContainer}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Typography style={componentStyles.insideCardTitleStyle}>Client Equipment</Typography>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="cctv"
                                    label="CCTV"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.cctv} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="computer"
                                    label="Computer / Fax"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.computer} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="vehicleBarriers"
                                    label="Vehicle Barriers"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.vehicleBarriers} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="patrolMonitoring"
                                    label="Patrol Monitoring Devices"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.patrolMonitoring} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="alarmSystems"
                                    label="Alarm Systems"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.alarmSystems} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>

                        </Row>


                        <Row gutter={16} className="card" style={componentStyles.equipmentContainer}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Typography style={componentStyles.insideCardTitleStyle}>Cleaning and Contractors</Typography>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="contractorName"
                                    label="Name of Contractor"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.contractorName} style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="noOfStaff"
                                    label="Number of Staff"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input defaultValue={record.noOfStaff} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="identification"
                                    label="Means of Identification"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.identification} style={componentStyles.borderColor} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="timeOnSite"
                                    label="Time on Site"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <RangePicker style={componentStyles.rangePicker} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="timeOffSite"
                                    label="Time off Site"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <RangePicker style={componentStyles.rangePicker} />
                                </Form.Item>
                            </Col>


                        </Row>
                        <Row gutter={16} className="card" style={componentStyles.equipmentContainer}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Typography style={componentStyles.insideCardTitleStyle}>Delivery and Postal Services</Typography>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="normalHours"
                                    label="Normal Hours"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <RangePicker style={componentStyles.rangePicker} />
                                </Form.Item>
                            </Col>

                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="outOfhours"
                                    label="Out of Hours"
                                    // rules={rules.address1}
                                    hasFeedback
                                >
                                    <RangePicker style={componentStyles.rangePicker} />
                                </Form.Item>
                            </Col>


                        </Row>
                        <Row gutter={16} className="card" style={componentStyles.equipmentContainer}>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Typography style={componentStyles.insideCardTitleStyle}>Emergency</Typography>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="location"
                                    label="Location of main services"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.locationOfMotorRooms} style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="emergencyName"
                                    label="Full Name"
                                    // rules={rules.fullname}
                                    hasFeedback

                                >
                                    <Input defaultValue={record.emergencyName} style={componentStyles.borderColor} prefix={<UserOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={6} lg={6}>
                                <Form.Item
                                    name="phone"
                                    label="Phone"
                                    // rules={rules.phone}
                                    hasFeedback
                                >
                                    <Input defaultValue={record.phone} min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                                </Form.Item>
                            </Col>


                        </Row>
                        <Row gutter={16} justify="center">


                            <Col xs={12} sm={12} md={6} lg={6}>

                                <Form.Item>
                                    <div style={AppStyles.marginTop40}>
                                        <Button
                                            onClick={() => this.props.parentCallback("Last")}
                                            style={componentStyles.continueButton} htmlType="submit" block>
                                            Continue
                                        </Button>

                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </>
        )
    }
}

export default SiteInformation
