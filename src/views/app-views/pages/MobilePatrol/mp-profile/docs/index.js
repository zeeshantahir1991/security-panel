import {
	DeleteOutlined,

	DownloadOutlined, EllipsisOutlined, EyeOutlined,
	UploadOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Menu, Row, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "assets/styles";

const userData = [
	{
		"id": "1",
		"name": "Eileen Horton",
		"issueNumber": "1",
		"img": "/img/avatars/thumb-1.jpg",
		"desc": "xyz",
		"type": "compliance",
		"uploadDate": 1583107200

	}
]


const latestTransactionOption = (
	<Menu>
		<Menu.Item key="0">
			<span>
				<div className="d-flex align-items-center">
					<UploadOutlined />
					<span className="ml-2">Upload</span>
				</div>
			</span>
		</Menu.Item>
		<Menu.Item key="1">
			<span>
				<div className="d-flex align-items-center">
					<DownloadOutlined />
					<span className="ml-2">Download</span>
				</div>
			</span>
		</Menu.Item>
	</Menu>
);

const cardDropdown = (menu) => (
	<Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
		<a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
			<EllipsisOutlined />
		</a>
	</Dropdown>
)

export class Docs extends Component {

	constructor(props) {
		super(props);
		this.state = {

			users: userData,
			selectionType: ''

		};
	}



	render() {
		const { users, selectionType } = this.state;
		const { } = this.props;
		const tableColumns = [
			{
				title: 'Document Name',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<a onClick={() => this.setState({ edit: true })}>
							{/* <AvatarStatus src={record.img} name={record.name} /> */}
							{record.name + "Documents"}
						</a>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},


			// {
			// 	title: 'Issue Number',
			// 	dataIndex: 'issueNumber',
			// 	sorter: {
			// 		compare: (a, b) => a.issueNumber.length - b.issueNumber.length,
			// 	},
			// 	width: 70
			// },

			{
				title: 'Description',
				dataIndex: 'desc',
				sorter: {
					compare: (a, b) => {
						a = a.desc.toLowerCase();
						b = b.desc.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 120
			},

			// {
			// 	title: 'Type',
			// 	dataIndex: 'type',
			// 	render: (_, record) => (
			// 		<div className="d-flex">
			// 			<span>{record.type}</span>
			// 		</div>
			// 	),
			// 	sorter: {
			// 		compare: (a, b) => {
			// 			a = a.type.toLowerCase();
			// 			b = b.type.toLowerCase();
			// 			return a > b ? -1 : b > a ? 1 : 0;
			// 		},
			// 	},
			// 	width: 100
			// },

			{
				title: 'Upload Date & Time',
				dataIndex: 'uploadDate',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.uploadDate).unix() - moment(b.uploadDate).unix(),
				width: 200
			},

			// {
			// 	title: '',
			// 	dataIndex: 'actions',
			// 	render: (_, elm) => (
			// 		<div className="text-right">
			// 			<Tooltip title="View">
			// 				<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
			// 			</Tooltip>
			// 			<Tooltip title="Delete">
			// 				<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
			// 			</Tooltip>
			// 		</div>
			// 	)
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

		return (
			<>
				<Row>
					<Col xs={24} sm={24} md={24} lg={24} >
						<div style={AppStyles.marginBottom40}>
							<div style={AppStyles.horizontallLineWidth100}>
							</div>
						</div>
					</Col>
				</Row>
				<div style={AppStyles.marginTop20}>
					<Row justify="center">
						<Col xs={24} sm={24} md={24} lg={24} >
							<Card className="card" title="Guard's Docs" extra={cardDropdown(latestTransactionOption)}>
								<Table
									searchable
									bordered columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 800, y: 200 }} />
							</Card>
							{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
						</Col>
					</Row>
				</div>
			</>
		)
	}
}

export default Docs
