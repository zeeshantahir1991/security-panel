import { CompassOutlined, NumberOutlined, DeleteOutlined, EyeOutlined, DollarOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Input, Row, Switch, Tag, Tooltip, Card, Select, Typography } from 'antd';
import { Table } from "ant-table-extensions";
import React, { Component } from 'react';
import moment from 'moment';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Label from 'views/app-views/components/data-display/timeline/Label';

const { Option } = Select;

const rules = []
const serviceData = [
    {
        "id": "1",
        "poNumber": "123PO",
        "KHRate": "$ 100",
        "chargeRate": "$ 10",
        "securityServices": "SG",
        "serviceStartDate": 1583107200,
        "serviceEndDate": 1583107200,
        "invoicefrequency": 1

    }
]
export class AddService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currStatus: "active",
            title: '',
            relationship: '',
            serviceList: serviceData,
            securityServices: false,
            form: false,
            edit: false,
            showKH:'false'



        };
    }
    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }

    render() {
        const { serviceList, securityServices } = this.state;
        const { form, edit } = this.state;
        const tableColumns = [
            {
                title: 'PO Number',
                dataIndex: 'poNumber',
                render: (_, record) => (
                    <div className="d-flex">
                        <a onClick={() => this.setState({ edit: true })}>

                            {record.poNumber}
                        </a>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.poNumber.toLowerCase();
                        b = b.poNumber.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },


            {
                title: 'Service Start Date',
                dataIndex: 'serviceStartDate',
                render: date => (
                    <span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.serviceStartDate).unix() - moment(b.serviceStartDate).unix(),
                width: 200
            },

            {
                title: 'Service End Date',
                dataIndex: 'serviceEndDate',
                render: date => (
                    <span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.serviceEndDate).unix() - moment(b.serviceEndDate).unix(),
                width: 200
            },


            {
                title: 'Invoice Frequency',
                dataIndex: 'invoicefrequency',
                render: (_, record) => (
                    <div className="d-flex">

                        {record.invoicefrequency}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => a.invoicefrequency.length - b.invoicefrequency.length,
                },
                width: 160
            },

            {
                title: 'Security Services',
                dataIndex: 'securityServices',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.securityServices}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.securityServices.toLowerCase();
                        b = b.securityServices.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'Charge Rate',
                dataIndex: 'chargeRate',
                render: (_, record) => (
                    <div className="d-flex">
                        { record.chargeRate}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.chargeRate.toLowerCase();
                        b = b.chargeRate.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 100
            },

            {
                title: 'Key Holding Flat Fee/Month',
                dataIndex: 'KHRate',
                render: (_, record) => (
                    <div className="d-flex">
                        {record.securityServices == "KH" ? record.KHRate : 0}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.KHRate.toLowerCase();
                        b = b.KHRate.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

        ];
        return (
            <Row justify="center">

                <Col xs={24} sm={24} md={24} lg={24} >
                    {
                        form ?
                            <Form layout="vertical">
                                <Row gutter={16} >
                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <div style={AppStyles.marginBottom40}>
                                            <div style={AppStyles.horizontallLineWidth100}>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="poNumber"
                                            label="PO Number"
                                            // rules={rules.poNumber}
                                            hasFeedback
                                        >
                                            <Input style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="serviceStartDate"
                                            label="Service Start Date"
                                            // rules={rules.serviceStartDate}
                                            hasFeedback
                                        >
                                            <DatePicker

                                                style={componentStyles.datePicker}
                                                format={'YYYY/MM/DD'} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="serviceserviceEndDate"
                                            label="Service End Date"
                                            // rules={rules.serviceserviceEndDate}
                                            hasFeedback
                                        >
                                            <DatePicker style={componentStyles.datePicker}

                                                format={'YYYY/MM/DD'} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="invoiceFrequency"
                                            label="Invoice Frequency"
                                            // rules={rules.invoiceFrequency}
                                            hasFeedback
                                        >
                                            <Select

                                                showSearch
                                                style={componentStyles.selectStyle}
                                                bordered={false}
                                                placeholder="Invoice Frequency"
                                                optionFilterProp="children"
                                                onChange={(val) => this.handleChange("invoiceFrequency", val)}
                                                // onFocus={onFocus}
                                                // onBlur={onBlur}
                                                // onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="1">1</Option>
                                                <Option value="2">2</Option>
                                                <Option value="3">3</Option>
                                                <Option value="4">4</Option>
                                                <Option value="5">5</Option>
                                                <Option value="6">6</Option>
                                                <Option value="7">7</Option>
                                                <Option value="8">8</Option>
                                                <Option value="9">9</Option>
                                                <Option value="10">10</Option>

                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>DS</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>SG</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>CCTV</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>MP</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox onChange={()=>{this.setState({securityServices: !securityServices})}}>KH</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                                <Col xs={24} sm={24} md={18} lg={18} style={{display:'flex', flexDirection:'row'}}>
                                                <Col xs={24} sm={24} md={6} lg={6} style={{ marginTop:10, display: this.state.securityServices ? 'block' : 'none'}}>
													<Typography.Text>Key Holding Flate Fee/Month</Typography.Text>
												</Col>
                                                <Col xs={24} sm={24} md={6} lg={6} style={{display: this.state.securityServices ? 'block' : 'none'}}>
                                                <Form.Item
                                                    name="flatRate"
                                                    // label="Key Holding Flate Fee/Month"
                                                    rules={rules.chargeRate}
                                                    hasFeedback
                                                >
                                                    <Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
                                                </Form.Item>
                                                </Col>
                                                </Col>
                                                
                                    </Col>

                                    {/* <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="securityServices"
                                            label="Security Services"
                                            rules={rules.securityServices}
                                            hasFeedback
                                        >
                                            <Select
                                                showSearch
                                                style={componentStyles.selectStyle}
                                                bordered={false}
                                                placeholder="Security Services"
                                                optionFilterProp="children"
                                                onChange={(val) => this.handleChange("securityServices", val)}
                                                // onFocus={onFocus}
                                                // onBlur={onBlur}
                                                // onSearch={onSearch}
                                                mode="multiple"
                                                filterOption={(input, option) =>
                                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >
                                                <Option value="DS">DS</Option>
                                                <Option value="SG">SG</Option>
                                                <Option value="CCTV">CCTV</Option>
                                                <Option value="MP">MP</Option>
                                                <Option value="KH">KH</Option>

                                            </Select>
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} sm={24} md={6} lg={6}>
                                        <Form.Item
                                            name="chargeRate"
                                            label="Charge Rate"
                                            rules={rules.chargeRate}
                                            hasFeedback
                                        >
                                            <Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
                                        </Form.Item>
                                    </Col> */}

                                    {/* <Col xs={24} sm={24} md={6} lg={6}>
                                        {
                                            securityServices == "KH" ?
                                                <Form.Item
                                                    name="flatRate"
                                                    label="Key Holding Flate Fee/Month"
                                                    rules={rules.chargeRate}
                                                    hasFeedback
                                                >
                                                    <Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
                                                </Form.Item> : null
                                        }

                                    </Col> */}


                                </Row>
                                <Row gutter={16} justify="center">
                                    <Col xs={12} sm={12} md={6} lg={6}>

                                        <Form.Item>
                                            <div style={AppStyles.marginTop40}>
                                                <Button
                                                    onClick={() => this.setState({ form: false })}
                                                    style={componentStyles.continueButton} htmlType="submit" block>
                                                    Back
                                                    </Button>

                                            </div>
                                        </Form.Item>
                                    </Col>

                                    <Col xs={12} sm={12} md={6} lg={6}>

                                        <Form.Item>
                                            <div style={AppStyles.marginTop40}>
                                                <Button
                                                    onClick={() => this.setState({ form: false })}
                                                    style={componentStyles.continueButton} htmlType="submit" block>
                                                    Add
                                                    </Button>

                                            </div>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            :
                            edit ?
                                <Form layout="vertical">
                                    <Row gutter={16} >
                                        <Col xs={24} sm={24} md={24} lg={24} >
                                            <div style={AppStyles.marginBottom40}>
                                                <div style={AppStyles.horizontallLineWidth100}>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={24} sm={24} md={6} lg={6}>
                                            <Form.Item
                                                name="poNumber"
                                                label="PO Number"
                                                // rules={rules.poNumber}
                                                hasFeedback
                                            >
                                                <Input disabled style={componentStyles.borderColor} prefix={<NumberOutlined />} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={6} lg={6}>
                                            <Form.Item
                                                name="serviceStartDate"
                                                label="Service Start Date"
                                                // rules={rules.serviceStartDate}
                                                hasFeedback
                                            >
                                                <DatePicker

                                                    style={componentStyles.datePicker}
                                                    format={'YYYY/MM/DD'} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={6} lg={6}>
                                            <Form.Item
                                                name="serviceserviceEndDate"
                                                label="Service End Date"
                                                // rules={rules.serviceserviceEndDate}
                                                hasFeedback
                                            >
                                                <DatePicker style={componentStyles.datePicker}

                                                    format={'YYYY/MM/DD'} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={6} lg={6}>
                                            <Form.Item
                                                name="invoiceFrequency"
                                                label="Invoice Frequency"
                                                // rules={rules.invoiceFrequency}
                                                hasFeedback
                                            >
                                                <Select

                                                    showSearch
                                                    style={componentStyles.selectStyle}
                                                    bordered={false}
                                                    placeholder="Invoice Frequency"
                                                    optionFilterProp="children"
                                                    onChange={(val) => this.handleChange("invoiceFrequency", val)}
                                                    // onFocus={onFocus}
                                                    // onBlur={onBlur}
                                                    // onSearch={onSearch}
                                                    filterOption={(input, option) =>
                                                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                    }
                                                >
                                                    <Option value="1">1</Option>
                                                    <Option value="2">2</Option>
                                                    <Option value="3">3</Option>
                                                    <Option value="4">4</Option>
                                                    <Option value="5">5</Option>
                                                    <Option value="6">6</Option>
                                                    <Option value="7">7</Option>
                                                    <Option value="8">8</Option>
                                                    <Option value="9">9</Option>
                                                    <Option value="10">10</Option>
                                                </Select>
                                            </Form.Item>
                                        </Col>


                                        <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>DS</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>SG</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>CCTV</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox>MP</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.testmarginTop10}>
												<Col xs={24} sm={24} md={2} lg={2} style={{ marginTop:10}}>
													<Checkbox onChange={()=>{this.setState({securityServices: !securityServices})}}>KH</Checkbox>													
												</Col>
												<Col xs={24} sm={24} md={4} lg={4} >
													<Form.Item name="comments" hasFeedback>
														<Input type='number' rows={1} placeholder={'Charge Rate/Hour'} style={componentStyles.borderColor}/>
													</Form.Item>
												</Col>
                                                <Col xs={24} sm={24} md={18} lg={18} style={{display:'flex', flexDirection:'row'}}>
                                                <Col xs={24} sm={24} md={6} lg={6} style={{ marginTop:10, display: this.state.securityServices ? 'block' : 'none'}}>
													<Typography.Text>Key Holding Flate Fee/Month</Typography.Text>
												</Col>
                                                <Col xs={24} sm={24} md={6} lg={6} style={{display: this.state.securityServices ? 'block' : 'none'}}>
                                                <Form.Item
                                                    name="flatRate"
                                                    // label="Key Holding Flate Fee/Month"
                                                    rules={rules.chargeRate}
                                                    hasFeedback
                                                >
                                                    <Input min="0" type="number" style={componentStyles.borderColor} prefix={<DollarOutlined />} />
                                                </Form.Item>
                                                </Col>
                                                </Col>
                                                
                                    </Col>


                                    </Row>
                                    <Row gutter={16} justify="center">
                                        <Col xs={12} sm={12} md={6} lg={6}>

                                            <Form.Item>
                                                <div style={AppStyles.marginTop40}>
                                                    <Button
                                                        onClick={() => this.setState({ edit: false })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Back
                                                    </Button>

                                                </div>
                                            </Form.Item>
                                        </Col>

                                        <Col xs={12} sm={12} md={6} lg={6}>

                                            <Form.Item>
                                                <div style={AppStyles.marginTop40}>
                                                    <Button
                                                        onClick={() => this.setState({ edit: false })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Update
                                                    </Button>

                                                </div>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>

                                :
                                <Row>

                                    <Col xs={24} sm={24} md={24} lg={24} >
                                        <Card className="card" title="Services" extra={
                                            <Row gutter={16}>
                                                <Col xs={24} sm={24} md={24} lg={24}>

                                                    <Button
                                                        onClick={() => this.setState({ form: true })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Add New Service
                                                    </Button>

                                                </Col>
                                            </Row>
                                        }>
                                            <Table
                                                searchable
                                                bordered columns={tableColumns} dataSource={serviceList} rowKey='id' scroll={{ x: 1400, y: 200 }} />
                                        </Card>
                                    </Col>
                                </Row>
                    }
                </Col>
            </Row>

        )

    }
}

export default AddService
