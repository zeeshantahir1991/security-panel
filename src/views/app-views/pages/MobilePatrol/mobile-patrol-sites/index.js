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
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import StatisticWidget from 'components/shared-components/StatisticWidget';

const mobilePatrolData = [
	{
		"id": "1",
		"masterSiteName": "Store 1",
		"status": "Active",
		"createDate": 1583107200,
		"clientName": "Eileen Horton",
		"region": "South West",
		"mpSites": 5

	},

	{
		"id": "2",
		"masterSiteName": "Building 2",
		"status": "Inactive",
		"createDate": 1583107200,
		"clientName": "Terrance Moreno",
		"region": "South East",
		"mpSites": 3

	}
]



const { Option } = Select;


export class MobilePatrolList extends Component {

	state = {
		mobilePatrolList: mobilePatrolData,
		search: {
			status: "",
			createDate: "",
			masterSiteName: "",
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
		const { mobilePatrolList, search } = this.state;
		let List = mobilePatrolData
		let status = search.status
		let createDate = search.createDate
		let masterSiteName = search.masterSiteName

		let filteredArray = []
		filteredArray = List.filter(element => {
			return filterCombination(status, createDate, masterSiteName, element)

		});
		this.setState({ mobilePatrolList: filteredArray })

	}


	render() {
		const { mobilePatrolList, userProfileVisible, selectedUser, search } = this.state;

		const tableColumns = [
			{
				title: 'Master Site Name',
				dataIndex: 'masterSiteName',
				render: (_, record) => (
					<span className="d-flex">
						{record.masterSiteName}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.masterSiteName.toLowerCase();
						b = b.masterSiteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<span className="d-flex">
						{record.clientName}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
			},

			{
				title: 'Region',
				dataIndex: 'region',
				render: (_, record) => (
					<span className="d-flex">
						{record.region}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.region.toLowerCase();
						b = b.region.toLowerCase();
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
				title: 'Create Date',
				dataIndex: 'createDate',
				render: date => (
					<span>{date == "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.createDate).unix() - moment(b.createDate).unix(),
				width: 200
			},

			{
				title: 'MP Sites',
				dataIndex: 'mpSites',
				sorter: {
					compare: (a, b) => a.mpSites.length - b.mpSites.length,
				},
				width: 150

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

		return (
			<div style={AppStyles.marginTop50}>
				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={20} lg={20}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
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
									onChange={(val) => this.handleChange("createDate", val)}
									placeholder="Create Date Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Master Site Name"
									onChange={(val) => this.handleChangeInput("masterSiteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.createDate || search.masterSiteName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.createDate || search.masterSiteName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("status", val)}
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
									onChange={(val) => this.handleChange("createDate", val)}
									placeholder="Create Date Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Master Site Name"
									onChange={(val) => this.handleChangeInput("masterSiteName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.status || search.createDate || search.masterSiteName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.status || search.createDate || search.masterSiteName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="MP Master Sites List" >
							<Table bordered columns={tableColumns} dataSource={mobilePatrolList} rowKey='id' scroll={{ x: 1400, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default MobilePatrolList

export const filterCombination = (status, createDate, masterSiteName, element) => {
	if (status && createDate && masterSiteName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") == moment(createDate).format("YYYY/MM/DD") && element.masterSiteName.trim().toUpperCase() == masterSiteName.trim().toUpperCase()

	} else if (status && createDate) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() && moment.unix(element.createDate).format("YYYY/MM/DD") == moment(createDate).format("YYYY/MM/DD")

	} else if (status && masterSiteName) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase() && element.masterSiteName.trim().toUpperCase() == masterSiteName.trim().toUpperCase()

	} else if (createDate && masterSiteName) {

		return moment.unix(element.createDate).format("YYYY/MM/DD") == moment(createDate).format("YYYY/MM/DD") && element.masterSiteName.trim().toUpperCase() == masterSiteName.trim().toUpperCase()

	} else if (createDate) {

		return moment.unix(element.createDate).format("YYYY/MM/DD") == moment(createDate).format("YYYY/MM/DD")

	} else if (masterSiteName) {

		return element.masterSiteName.trim().toUpperCase() == masterSiteName.trim().toUpperCase()

	} else if (status) {

		return element.status.trim().toUpperCase() == status.trim().toUpperCase()

	}
}
