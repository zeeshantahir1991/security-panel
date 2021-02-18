import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";
import { componentStyles } from "./../../styles";

const mobilePatrolData = [
	{
		"id": "1",
		"mpSiteName": "Store 1",
		"status": "Active",
		"createDate": 1583107200,
		"sitePhone": "+12312321",
		"region": "South West",
		"siteEmail": "abc@abc.com",
		"address": "Address 1"

	},

	{
		"id": "2",
		"mpSiteName": "Building 2",
		"status": "Inactive",
		"createDate": 1583107200,
		"sitePhone": "+34234234",
		"region": "South East",
		"siteEmail": "xyz@xyz.com",
		"address": "Address 2"



	}
]



const { Option } = Select;


export class MobilePatrolSites extends Component {

	state = {
		mobilePatrolList: mobilePatrolData,
		search: {
			status: "",
			createDate: "",
			mpSiteName: "",
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
		const { mobilePatrolList, search } = this.state;

		const tableColumns = [
			{
				title: 'Site Name',
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
				fixed: 'left'
			},

			{
				title: 'Site Phone',
				dataIndex: 'sitePhone',
				render: (_, record) => (
					<span className="d-flex">
						{record.sitePhone}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.sitePhone.toLowerCase();
						b = b.sitePhone.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
			},

			{
				title: 'Site Email',
				dataIndex: 'siteEmail',
				render: (_, record) => (
					<span className="d-flex">
						{record.siteEmail}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteEmail.toLowerCase();
						b = b.siteEmail.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
			},

			{
				title: 'Address',
				dataIndex: 'address',
				render: (_, record) => (
					<span className="d-flex">
						{record.address}
					</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.address.toLowerCase();
						b = b.address.toLowerCase();
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
					<span>{date === "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.createDate).unix() - moment(b.createDate).unix(),
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

		return (
			<div style={AppStyles.marginTop50}>
				<Row gutter={16} justify="center">

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Mobile Patrol Sites" >
							<Table searchable bordered columns={tableColumns} dataSource={mobilePatrolList} rowKey='id' scroll={{ x: 1600, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default MobilePatrolSites

