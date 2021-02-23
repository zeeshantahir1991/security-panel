import { DeleteOutlined, EyeOutlined, BuildOutlined, CompassOutlined, InboxOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip, Form, Switch } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import { componentStyles } from "./../../styles";
import EditPatrolRoute from "./EditPatrolRoute"

const mobilePatrolData = [
    {
        "id": "1",
        "mpSiteName": "Branch 1",
        "status": "Active",
        "mpRouteName": "ABC",
        "checkPointName": "Read Wall",
        "description": "Description...."
    },
]



const { Option } = Select;

const rules = []
export class MobilePatrolRoutes extends Component {

    state = {
        mobilePatrolList: mobilePatrolData,
        search: {
            status: "",
            createDate: "",
            mpSiteName: "",
            edit: false,
            form: false,
            selectionType: ""
        }
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
        const { mobilePatrolList, search, edit, form, selectionType } = this.state;

        const tableColumns = [


            {
                title: 'MP Route Name',
                dataIndex: 'mpRouteName',
                render: (_, record) => (
                    <span className="d-flex">
                        <a onClick={() => this.setState({ edit: true })}>

                            {record.mpRouteName}
                        </a>
                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.mpRouteName.toLowerCase();
                        b = b.mpRouteName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
                fixed: 'left'

            },

            {
                title: 'MP Site Name',
                dataIndex: 'mpSiteName',
                render: (_, record) => (
                    <span className="d-flex">

                        {record.mpSiteName}

                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.mpSiteName.toLowerCase();
                        b = b.mpSiteName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Checkpoint Name',
                dataIndex: 'checkPointName',
                render: (_, record) => (
                    <span className="d-flex">
                        {record.checkPointName}
                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.checkPointName.toLowerCase();
                        b = b.checkPointName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Description',
                dataIndex: 'description',
                render: (_, record) => (
                    <span className="d-flex">
                        {record.description}
                    </span>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.description.toLowerCase();
                        b = b.description.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
            },

            {
                title: 'Status',
                dataIndex: 'status',
                render: (_, record) => (
                    <div className="d-flex">
                        <span>{record.status}</span>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.status.toLowerCase();
                        b = b.status.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">

                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
                        </Tooltip>
                    </div>
                )
            }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        return (
            <div style={AppStyles.marginTop50}>
                <Row gutter={16} justify="center">

                    {
                        edit ?
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <EditPatrolRoute />
                            </Col>
                            :
                            form ?
                                <Col xs={24} sm={24} md={24} lg={24} >
                                    <Form layout="vertical">
                                        <Row gutter={16}>
                                            <Col xs={24} sm={24} md={24} lg={24} >
                                                <div style={AppStyles.marginBottom40}>
                                                    <div style={AppStyles.horizontallLineWidth100}>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col xs={24} sm={24} md={8} lg={8}>
                                                <Form.Item
                                                    name="routeName"
                                                    label="Route Name"
                                                    hasFeedback
                                                >
                                                    <Input style={componentStyles.borderColor} />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} sm={24} md={8} lg={8}>
                                                <Form.Item
                                                    name="siteName"
                                                    label="Site Name"
                                                    hasFeedback
                                                >
                                                    <Input style={componentStyles.borderColor} />
                                                </Form.Item>
                                            </Col>


                                            <Col xs={24} sm={24} md={8} lg={8}>
                                                <Form.Item
                                                    name="checkpointName"
                                                    label="Checkpoint Name"
                                                    hasFeedback
                                                >
                                                    <Input style={componentStyles.borderColor} />
                                                </Form.Item>
                                            </Col>

                                            <Col xs={24} sm={24} md={24} lg={24}>
                                                <Form.Item
                                                    name="description"
                                                    label="Description"
                                                    // rules={rules.address1}
                                                    hasFeedback
                                                >
                                                    <Input.TextArea placeholder="Description..." style={componentStyles.borderColor} />
                                                </Form.Item>
                                            </Col>



                                            <Col xs={24} sm={24} md={8} lg={8} style={AppStyles.marginTop20}>


                                                <Switch style={componentStyles.switchStyle} size="small" defaultChecked ></Switch>
	                                        Status
                                            </Col>
                                        </Row>
                                        <Row gutter={16} justify="center">

                                            <Col xs={24} sm={24} md={12} lg={12} style={AppStyles.marginTop20}>

                                                <Form.Item>
                                                    <Button
                                                        onClick={() => this.setState({ form: false })}
                                                        style={componentStyles.continueButton} htmlType="submit" block>
                                                        Add Route
                                            </Button>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Form>

                                    {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                                </Col> :
                                <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
                                    <Card className="card" title="Mobile Patrol Routes" extra={
                                        <Row gutter={16}>
                                            <Col xs={24} sm={24} md={24} lg={24}>

                                                <Button
                                                    onClick={() => this.setState({ form: true })}
                                                    style={componentStyles.continueButton} htmlType="submit" block>
                                                    Add Mobile Patrol Routes
                                        </Button>

                                            </Col>
                                        </Row>
                                    } >
                                        <Table
                                            rowSelection={{
                                                type: selectionType,
                                                ...rowSelection,
                                            }}
                                            searchable bordered columns={tableColumns} dataSource={mobilePatrolList} rowKey='id' scroll={{ x: 1000, y: 300 }} />
                                    </Card>
                                </Col>

                    }

                </Row>

                {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
            </div>
        )
    }
}

export default MobilePatrolRoutes

