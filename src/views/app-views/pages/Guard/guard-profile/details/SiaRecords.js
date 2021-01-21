import { DeleteOutlined, BookOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Form, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import moment from 'moment';
import { connect } from "react-redux";
import { falseLoading, showLoading } from 'redux/actions/Auth';
import {
    licenseActions
} from 'redux/actions/License';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";



function mapStateToProps(state) {

    return {

        licenseData: state.license.licenseData,
        auth: state.auth

    };
}


function mapDispatchToProps(dispatch) {

    return {
        ongetLicense: (licenseData) => { dispatch(licenseActions.getLicense(licenseData)); },
        onLoading: () => { dispatch(showLoading()) },
        onLoadEnd: () => { dispatch(falseLoading()) }

    }


}

const rules = {

    licenseNo: [
        {
            required: true,
            message: 'Please input Licence Number'
        }
    ]
}
const siaRecordData = [
    {
        "id": "1",
        "guardName": "Eileen Horton",
        "siaLicenceStatus": "Active",
        "img": "/img/avatars/thumb-1.jpg",
        "licenceNumber": 1036373543346688,
        "role": "Front Line",
        "licenceSector": "Door Supervision",
        "siaLicenceExpiryDate": 1583107200,
        "siaLicenceLastChecked": 1583107200,
        "siaLicenceNextCheck": 1583107200

    }
]

const siaRecordStatisticData = [
    {
        title: 'Valid SIA Licence',
        value: '20',
        backgroundColor: "#A6D34E"
        // status: -11.4,
        // subtitle: `Compare to last year (2019)`
    },
    {
        title: 'Exired / Invalid / Not Found SIA Licence',
        value: '20',
        backgroundColor: "#EF4545"
        // status: 8.2,
        // subtitle: `Compare to last year (2019)`
    }
]

const { Option } = Select;


export class SiaRecordList extends Component {

    state = {
        siaRecordList: siaRecordData,
        userProfileVisible: false,
        selectedUser: null,
        search: {
            siaLicenceStatus: "",
            siaLicenceLastChecked: "",
        },
        addLicence: false,
        licenseNo: "",
        errorMessage: "",
        editLicence: false,
        editableData: null
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

    addLicense = async () => {
        const { licenseNo } = this.state;
        this.props.onLoading()
        try {
            let data = {
                "LicenseNo": licenseNo
            }
            const found = this.props?.licenseData?.find(element => element?.licenseNo?.trim() === licenseNo?.trim());
            if (!found) {
                await fetch('http://localhost:3001/getLicenseInfo', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .then((resp) => {
                        if (resp.result) {
                            this.props.onLoadEnd()
                            // localStorage.setItem('GETLICENSE', JSON.stringify(dataArray));
                            this.props.ongetLicense(resp.data);

                            // this.setState({ licenseData: resp.data })
                        } else {
                            this.props.onLoadEnd()
                            this.setState({ errorMessage: "No results found!" })

                            this.timeoutHandler = setTimeout(function () {
                                this.setState({ errorMessage: "" })
                            }.bind(this), 1500);


                        }

                    })
                    .catch(() =>
                        this.setState({ errorMessage: "Please check your internet connection!" }),
                        this.timeoutHandler = setTimeout(function () {
                            this.setState({ errorMessage: "" })
                            this.props.onLoadEnd()
                        }.bind(this), 1500)
                    )
            }
        } catch (error) {
            this.props.onLoadEnd()
            this.setState({ errorMessage: "Please check your internet connection!" })
            this.timeoutHandler = setTimeout(function () {

                this.setState({ errorMessage: "" })
            }.bind(this), 1500);

        }


    }


    searchInTable = () => {
        const { search } = this.state;
        let List = siaRecordData
        let siaLicenceStatus = search.siaLicenceStatus
        let siaLicenceLastChecked = search.siaLicenceLastChecked

        let filteredArray = []
        filteredArray = List.filter(element => {
            return filterCombination(siaLicenceStatus, siaLicenceLastChecked, element)

        });
        this.setState({ siaRecordList: filteredArray })

    }

    editLicence = (record) => {
        this.setState({ editLicence: true, editableData: record })
    }

    render() {
        const { siaRecordList, search, addLicence, licenseNo, errorMessage, editLicence, editableData } = this.state;
        // let licenseData = this.props.auth;

        const tableColumns = [


            {
                title: 'Licence Number',
                dataIndex: 'licenceNumber',
                render: (_, record) => (
                    <div className="d-flex">
                        {/* <a onClick={() => this.editLicence(record)}> */}
                        <span>{record.licenceNumber}</span>
                        {/* </a> */}
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.licenceNumber.toLowerCase();
                        b = b.licenceNumber.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },

            {
                title: 'Licence Status',
                dataIndex: 'siaLicenceStatus',
                render: (_, record) => (
                    <div className="d-flex">
                        <span>{record.siaLicenceStatus}</span>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.siaLicenceStatus.toLowerCase();
                        b = b.siaLicenceStatus.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 150
            },

            {
                title: 'Role',
                dataIndex: 'role',
                render: (_, record) => (
                    <div className="d-flex">
                        <span>{record.role}</span>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.role.toLowerCase();
                        b = b.role.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 100
            },

            {
                title: 'Licence Sector',
                dataIndex: 'licenceSector',
                render: (_, record) => (
                    <div className="d-flex">
                        <span>{record.licenceSector}</span>
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.licenceSector.toLowerCase();
                        b = b.licenceSector.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200
            },
            {
                title: 'Expiry Date',
                dataIndex: 'siaLicenceExpiryDate',
                render: date => (
                    <span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.siaLicenceExpiryDate).unix() - moment(b.siaLicenceExpiryDate).unix(),
                width: 150
            },
            // {
            //     title: 'Last Checked',
            //     dataIndex: 'siaLicenceLastChecked',
            //     render: date => (
            //         <span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
            //     ),
            //     sorter: (a, b) => moment(a.siaLicenceLastChecked).unix() - moment(b.siaLicenceLastChecked).unix(),
            //     width: 200
            // },

            // {
            //     title: 'Next Check',
            //     dataIndex: 'siaLicenceNextCheck',
            //     render: date => (
            //         <span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
            //     ),
            //     sorter: (a, b) => moment(a.siaLicenceNextCheck).unix() - moment(b.siaLicenceNextCheck).unix(),
            //     width: 200
            // },

            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        {/* <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
                        </Tooltip> */}
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
                        </Tooltip>
                    </div>
                )
            }


        ];

        const { action, record } = this.props;

        if (action && record) {
            if (addLicence) {
                return (
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form layout="vertical">
                            <Row gutter={16} justify="center">
                                <Col xs={24} sm={24} md={24} lg={24} >
                                    <div style={AppStyles.marginBottom40}>
                                        <div style={AppStyles.horizontallLineWidth100}>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={24} sm={24} md={6} lg={6}>
                                    <Form.Item
                                        name="licenseNo"
                                        label="Licence Number"
                                        rules={rules.licenseNo}
                                    // hasFeedback
                                    >
                                        <Input
                                            className="remove" type="text"
                                            onChange={(val) => this.handleChange("licenseNo", val)}
                                            style={componentStyles.borderColor}
                                            prefix={<BookOutlined />}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            {errorMessage ?
                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <div style={componentStyles.errorMessage}>
                                        {errorMessage}
                                    </div>
                                </Col> : null
                            }
                            <Row gutter={16} justify="center">

                                <Col xs={12} sm={12} md={6} lg={6}>

                                    <Form.Item>
                                        <div style={AppStyles.marginTop20}>
                                            <Button onClick={() => this.setState({ addLicence: false })} style={componentStyles.continueButton} htmlType="submit" block>
                                                Back
		                                        </Button>

                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6}>

                                    <Form.Item>
                                        <div style={AppStyles.marginTop20}>
                                            <Button
                                                // onClick={this.addLicense}
                                                style={componentStyles.continueButton} htmlType="submit" block
                                            // loading={this.props.auth.loading}
                                            >
                                                Add
												</Button>

                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                    </Col>
                )
            }
            else if (editLicence) {
                return (
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} sm={24} md={24} lg={24} >
                                    <div style={AppStyles.marginBottom40}>
                                        <div style={AppStyles.horizontallLineWidth100}>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={24} sm={24} md={6} lg={6}>
                                    <Form.Item
                                        name="licenseNo"
                                        label="Licence Number"
                                        rules={rules.licenseNo}
                                    // hasFeedback
                                    >
                                        <Input
                                            defaultValue={editableData ? editableData.licenceNumber : null}
                                            className="remove" type="text"
                                            onChange={(val) => this.handleChange("licenseNo", val)}
                                            style={componentStyles.borderColor}
                                            prefix={<BookOutlined />}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6}>
                                    <Form.Item
                                        name="siaLicenceStatus"
                                        label="SIA Licence status"
                                        // rules={rules.title}
                                        hasFeedback
                                    >

                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="SIA Licence status"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("siaLicenceStatus", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            defaultValue={record.siaLicenceStatus ? record.siaLicenceStatus : "Active"}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Active">Active</Option>
                                            <Option value="Inactive">Inactive</Option>
                                        </Select>


                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6}>
                                    <Form.Item
                                        name="role"
                                        label="Role"
                                        // rules={rules.title}
                                        hasFeedback
                                    >

                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="Role"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("role", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            defaultValue={record.role ? record.role : ""}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Front Line">Front Line</Option>
                                        </Select>


                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6}>
                                    <Form.Item
                                        name="licenceSector"
                                        label="Licence Sector"
                                        // rules={rules.title}
                                        hasFeedback
                                    >

                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="Licence Sector"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("licenceSector", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            defaultValue={record.licenceSector ? record.licenceSector : ""}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Door Supervision">Door Supervision</Option>
                                        </Select>


                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6}>
                                    <Form.Item
                                        name="siaLicenceExpiryDate"
                                        label="Expiry Date"
                                        // rules={rules.dob}
                                        hasFeedback
                                    >

                                        <DatePicker style={componentStyles.datePicker}
                                            defaultValue={record.siaLicenceExpiryDate ? moment.unix(record.siaLicenceExpiryDate) : ""}
                                            format={'YYYY/MM/DD'} />


                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16} justify="center">

                                {errorMessage ?
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <div style={componentStyles.errorMessage}>
                                            {errorMessage}
                                        </div>
                                    </Col> : null
                                }

                                <Col xs={12} sm={12} md={6} lg={6}>

                                    <Form.Item>
                                        <div style={AppStyles.marginTop20}>
                                            <Button onClick={() => this.setState({ editLicence: false })} style={componentStyles.continueButton} htmlType="submit" block>
                                                Back
		                                        </Button>

                                        </div>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={6} lg={6}>

                                    <Form.Item>
                                        <div style={AppStyles.marginTop20}>
                                            <Button
                                                // onClick={this.addLicense}
                                                style={componentStyles.continueButton} htmlType="submit" block
                                            // loading={this.props.auth.loading}
                                            >
                                                Update
                                           </Button>

                                        </div>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                        {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                    </Col>
                )
            }
            else {
                return (
                    <div style={AppStyles.marginTop20}>
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <div style={AppStyles.marginBottom40}>
                                <div style={AppStyles.horizontallLineWidth100}>
                                </div>
                            </div>
                        </Col>

                        <Row gutter={16} justify="center" style={AppStyles.marginTop50}>

                            <Col xs={24} sm={24} md={24} lg={24}>

                                <Row gutter={16}>
                                    {
                                        siaRecordStatisticData.map((elm, i) => (
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12} key={i}>
                                                <StatisticWidget
                                                    title={elm.title}
                                                    value={elm.value}
                                                    status={elm.status}
                                                    subtitle={elm.subtitle}
                                                    backgroundColor={elm.backgroundColor}
                                                />
                                            </Col>
                                        ))
                                    }
                                </Row>

                            </Col>
                        </Row>
                        <Row gutter={16} justify="center">
                            <Col xs={0} sm={0} md={24} lg={24}>
                                <Card title="Filters" style={AppStyles.paddingBottom20}>
                                    <div style={AppStyles.flexDirectionRow}>

                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="SIA Licence Status"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("siaLicenceStatus", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Active">Active</Option>
                                            <Option value="Inactive">Inactive</Option>
                                        </Select>


                                        <DatePicker style={componentStyles.datePicker}
                                            onChange={(val) => this.handleChange("siaLicenceLastChecked", val)}
                                            placeholder="Licence Check Period"
                                            // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
                                            format={'YYYY/MM/DD'} />


                                        <Button
                                            disabled={!(search.siaLicenceStatus || search.siaLicenceLastChecked)}
                                            onClick={() => { this.searchInTable() }}
                                            style={!(search.siaLicenceStatus || search.siaLicenceLastChecked) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
                                            htmlType="submit" block>
                                            Search
					            </Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={24} sm={24} md={0} lg={0}>
                                <Card title="Filters" style={AppStyles.paddingBottom20}>
                                    <div style={AppStyles.justifyContentCenter}>

                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyleSM}
                                            bordered={false}
                                            placeholder="SIA Licence Status"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("siaLicenceStatus", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="Active">Active</Option>
                                            <Option value="Inactive">Inactive</Option>
                                        </Select>


                                        <DatePicker style={componentStyles.datePicker}
                                            onChange={(val) => this.handleChange("siaLicenceLastChecked", val)}
                                            placeholder="Licence Check Period"
                                            // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
                                            format={'YYYY/MM/DD'} />


                                        <Button
                                            disabled={!(search.siaLicenceStatus || search.siaLicenceLastChecked)}
                                            onClick={() => { this.searchInTable() }}
                                            style={!(search.siaLicenceStatus || search.siaLicenceLastChecked) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
                                            htmlType="submit" block>
                                            Search
					            </Button>
                                    </div>
                                </Card>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
                                <Card className="card" title="SIA Record List" extra={
                                    <Row gutter={16}>
                                        <Col xs={24} sm={24} md={24} lg={24}>

                                            <Button
                                                onClick={() => this.setState({ addLicence: true })}
                                                style={componentStyles.continueButton} htmlType="submit" block>
                                                Add Licence
                                        </Button>

                                        </Col>
                                    </Row>
                                }>
                                    <Table searchable bordered columns={tableColumns} dataSource={siaRecordList} rowKey='id' scroll={{ x: 1400, y: 300 }} />
                                </Card>
                            </Col>
                        </Row>
                    </div>
                )
            }
        }
    }
}

export default SiaRecordList


export const filterCombination = (siaLicenceStatus, siaLicenceLastChecked, element) => {
    if (siaLicenceStatus && siaLicenceLastChecked) {

        return element.siaLicenceStatus.trim().toUpperCase() === siaLicenceStatus.trim().toUpperCase() && moment.unix(element.siaLicenceLastChecked).format("YYYY/MM/DD") === moment(siaLicenceLastChecked).format("YYYY/MM/DD")

    } else if (siaLicenceLastChecked) {

        return moment.unix(element.siaLicenceLastChecked).format("YYYY/MM/DD") === moment(siaLicenceLastChecked).format("YYYY/MM/DD")

    } else if (siaLicenceStatus) {

        return element.siaLicenceStatus.trim().toUpperCase() === siaLicenceStatus.trim().toUpperCase()

    }
}
