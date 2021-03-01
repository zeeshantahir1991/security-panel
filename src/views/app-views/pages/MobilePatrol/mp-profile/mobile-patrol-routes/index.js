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
        currStatus: 'active',
        search: {
            status: "",
            createDate: "",
            mpSiteName: "",
            edit: false,
            form: false,
            address: '',
            selectionType: ""
        }
    }

    handleChange = (type, value) => {
        // console.log(`selected ${value}`, type);
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
        const { mobilePatrolList, edit, form, currStatus } = this.state;
        const {address} = this.state.search

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
                render: () => {
                    return (
                        <Button onClick={() => {
                            if (currStatus == "active") {
                                this.setState({ currStatus: "inactive" })
                            }
                            else if (currStatus == "inactive") {
                                this.setState({ currStatus: "active" })
                            }
                        }}
                            style={{ color: currStatus === 'active' ? 'lightgreen' : 'red', borderColor: currStatus === 'active' ? 'lightgreen' : 'red' }} className="text-capitalize" color={currStatus === 'active' ? 'cyan' : 'red'}>{currStatus}</Button>
                    )
                },
                sorter: {
                    compare: (a, b) => a.status.length - b.status.length,
                },
                width: 120
            },

            // {
            //     title: '',
            //     dataIndex: 'actions',
            //     render: (_, elm) => (
            //         <div className="text-right">

            //             <Tooltip title="Delete">
            //                 <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
            //             </Tooltip>
            //         </div>
            //     )
            // }
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
        console.log(address)
        return (
            <div style={AppStyles.marginTop50}>
                <Row gutter={16} justify="center">

                    {
                        edit ?
                            <Col xs={24} sm={24} md={24} lg={24} >

                                <EditPatrolRoute onSaveRoute={()=>{this.setState({edit: false})}}/>
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
                                            <Col xs={24} sm={24} md={6} lg={6}>
                                                <Form.Item
                                                    name="address"
                                                    label="Mobile Patrol Start From"
                                                    // rules={rules.storeLocation}
                                                    hasFeedback
                                                >
                                                    <Select
                                                        showSearch
                                                        style={componentStyles.selectStyle}
                                                        bordered={false}
                                                        placeholder="Address"
                                                        optionFilterProp="children"
                                                        onChange={(val) => this.handleChange("address", val)}
                                                        // onFocus={onFocus}
                                                        // onBlur={onBlur}
                                                        // onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        <Option value="companyAddress">Company Address</Option>
                                                        <Option value="guardAddress">Guard's Home Address</Option>
                                                        <Option value="customAddress">Custom Address</Option>
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            {address === "customAddress" ?
                                                <>
                                            {console.log("address =======>", address)}
                                                    <Col xs={24} sm={24} md={6} lg={6}>
                                                        <Form.Item
                                                            name="address1"
                                                            label="Address Line 1"
                                                            rules={rules.address1}
                                                            hasFeedback
                                                        >
                                                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={6} lg={6}>
                                                        <Form.Item
                                                            name="address2"
                                                            label="Address Line 2"
                                                            rules={rules.address1}
                                                            hasFeedback
                                                        >
                                                            <Input style={componentStyles.borderColor} prefix={<CompassOutlined />} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={6} lg={6}>
                                                        <Form.Item
                                                            name="postcode"
                                                            label="Post Code"
                                                            rules={rules.postcode}
                                                            hasFeedback
                                                        >
                                                            <Input type="text" style={componentStyles.borderColor} prefix={<InboxOutlined />} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={6} lg={6}>
                                                        <Form.Item
                                                            name="phone"
                                                            label="Phone"
                                                            rules={rules.phone}
                                                            hasFeedback
                                                        >
                                                            <Input min="0" className="remove" type="number" style={componentStyles.borderColor} prefix={<PhoneOutlined />} />
                                                        </Form.Item>
                                                    </Col>
                                                </> : null
                                            }
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
                                            // rowSelection={{
                                            //     type: selectionType,
                                            //     ...rowSelection,
                                            // }}
                                            searchable bordered columns={tableColumns} dataSource={mobilePatrolList} scroll={{ x: 1000, y: 300 }} />
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

