import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, Form, Input, message, Button, Row, Col, Dropdown, Select, Menu, DatePicker } from 'antd';
import {
    EyeOutlined, DeleteOutlined,
    UserAddOutlined,
    FileExcelOutlined,
    PrinterOutlined,
    PlusOutlined,
    EllipsisOutlined,
    StopOutlined,
    ReloadOutlined
} from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import StatisticWidget from 'components/shared-components/StatisticWidget';
import { Stepper } from './../stepper';

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

    },

    {
        "id": "2",
        "guardName": "Terrance Moreno",
        "siaLicenceStatus": "Inactive",
        "img": "/img/avatars/thumb-2.jpg",
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
            guardName: "",
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

    searchInTable = () => {
        const { siaRecordList, search } = this.state;
        let List = siaRecordData
        let siaLicenceStatus = search.siaLicenceStatus
        let siaLicenceLastChecked = search.siaLicenceLastChecked
        let guardName = search.guardName

        let filteredArray = []
        filteredArray = List.filter(element => {
            return filterCombination(siaLicenceStatus, siaLicenceLastChecked, guardName, element)

        });
        this.setState({ siaRecordList: filteredArray })

    }


    render() {
        const { siaRecordList, userProfileVisible, selectedUser, search } = this.state;

        const tableColumns = [
            {
                title: 'Guard Name',
                dataIndex: 'guardName',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus src={record.img} name={record.guardName} />
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.guardName.toLowerCase();
                        b = b.guardName.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
                width: 200,
                fixed: 'left'
            },

            {
                title: 'Licence Number',
                dataIndex: 'licenceNumber',
                sorter: {
                    compare: (a, b) => a.licenceNumber.length - b.licenceNumber.length,
                },
                width: 200

            },

            {
                title: 'SIA Licence Status',
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
                width: 200
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
                width: 200
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
                    <span>{date == "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.siaLicenceExpiryDate).unix() - moment(b.siaLicenceExpiryDate).unix(),
                width: 200
            },
            {
                title: 'Last Checked',
                dataIndex: 'siaLicenceLastChecked',
                render: date => (
                    <span>{date == "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.siaLicenceLastChecked).unix() - moment(b.siaLicenceLastChecked).unix(),
                width: 200
            },

            {
                title: 'Next Check',
                dataIndex: 'siaLicenceNextCheck',
                render: date => (
                    <span>{date == "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
                ),
                sorter: (a, b) => moment(a.siaLicenceNextCheck).unix() - moment(b.siaLicenceNextCheck).unix(),
                width: 200
            },

            {
                title: '',
                dataIndex: 'actions',
                render: (_, elm) => (
                    <div className="text-right">
                        <Tooltip title="View">
                            <Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
                        </Tooltip>
                    </div>
                )
            }
        ];

        let record = null
        let action = null
        if (this.props.location.state && this.props.location.state.action && this.props.location.state.record) {
            record = this.props.location.state.record
            action = this.props.location.state.action
        }
        if (action && record) {
            return (
                <div style={AppStyles.marginTop20}>
                    <Row gutter={16} justify="center">
                        <Col xs={24} sm={24} md={24} lg={24} >
                            <Stepper location={this.props.location} history={this.props.history} action={action} record={record} />
                        </Col>
                        <Col xs={20} sm={20} md={20} lg={20}>

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
                        <Col xs={0} sm={0} md={20} lg={20}>
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

                                    <Input
                                        placeholder="Guard Name"
                                        onChange={(val) => this.handleChangeInput("guardName", val)}
                                        style={componentStyles.filtersInputStyle} />
                                    <Button
                                        disabled={!(search.siaLicenceStatus || search.siaLicenceLastChecked || search.guardName)}
                                        onClick={() => { this.searchInTable() }}
                                        style={!(search.siaLicenceStatus || search.siaLicenceLastChecked || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
                                        htmlType="submit" block>
                                        Search
					            </Button>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={20} sm={20} md={0} lg={0}>
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

                                    <Input
                                        placeholder="Guard Name"
                                        onChange={(val) => this.handleChangeInput("guardName", val)}
                                        style={componentStyles.filtersInputStyle} />
                                    <Button
                                        disabled={!(search.siaLicenceStatus || search.siaLicenceLastChecked || search.guardName)}
                                        onClick={() => { this.searchInTable() }}
                                        style={!(search.siaLicenceStatus || search.siaLicenceLastChecked || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
                                        htmlType="submit" block>
                                        Search
					            </Button>
                                </div>
                            </Card>
                        </Col>

                        <Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
                            <Card className="card" title="SIA Record List" >
                                <Table bordered columns={tableColumns} dataSource={siaRecordList} rowKey='id' scroll={{ x: 1800, y: 300 }} />
                            </Card>
                        </Col>
                    </Row>

                    {/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
                </div>
            )
        }
    }
}

export default SiaRecordList

export const filterCombination = (siaLicenceStatus, siaLicenceLastChecked, guardName, element) => {
    if (siaLicenceStatus && siaLicenceLastChecked && guardName) {

        return element.siaLicenceStatus.trim().toUpperCase() == siaLicenceStatus.trim().toUpperCase() && moment.unix(element.siaLicenceLastChecked).format("YYYY/MM/DD") == moment(siaLicenceLastChecked).format("YYYY/MM/DD") && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

    } else if (siaLicenceStatus && siaLicenceLastChecked) {

        return element.siaLicenceStatus.trim().toUpperCase() == siaLicenceStatus.trim().toUpperCase() && moment.unix(element.siaLicenceLastChecked).format("YYYY/MM/DD") == moment(siaLicenceLastChecked).format("YYYY/MM/DD")

    } else if (siaLicenceStatus && guardName) {

        return element.siaLicenceStatus.trim().toUpperCase() == siaLicenceStatus.trim().toUpperCase() && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

    } else if (siaLicenceLastChecked && guardName) {

        return moment.unix(element.siaLicenceLastChecked).format("YYYY/MM/DD") == moment(siaLicenceLastChecked).format("YYYY/MM/DD") && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

    } else if (siaLicenceLastChecked) {

        return moment.unix(element.siaLicenceLastChecked).format("YYYY/MM/DD") == moment(siaLicenceLastChecked).format("YYYY/MM/DD")

    } else if (guardName) {

        return element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

    } else if (siaLicenceStatus) {

        return element.siaLicenceStatus.trim().toUpperCase() == siaLicenceStatus.trim().toUpperCase()

    }
}
