import {
	DeleteOutlined,

	DownloadOutlined, EllipsisOutlined, EyeOutlined,
	UploadOutlined
} from '@ant-design/icons';
import { Button, Card, Col, Dropdown, Menu, Row, Table, Tooltip } from 'antd';
import userData from "assets/data/company-list.data.json";
import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";


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
		const {  } = this.props;
		const tableColumns = [
			{
				title: 'Name',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} />
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


			{
				title: 'Issue Number',
				dataIndex: 'issueNumber',
				sorter: {
					compare: (a, b) => a.issueNumber.length - b.issueNumber.length,
				},
				width: 150
			},

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
			},

			{
				title: 'Type',
				dataIndex: 'type',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.type}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.type.toLowerCase();
						b = b.type.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Upload Date & Time',
				dataIndex: 'uploadDate',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.uploadDate).unix() - moment(b.uploadDate).unix(),
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
				<Row justify="center">

					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Company Docs" extra={cardDropdown(latestTransactionOption)}>
							<Table
								rowSelection={{
									type: selectionType,
									...rowSelection,
								}}
								bordered columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 1200, y: 200 }} />
						</Card>
						{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
					</Col>
				</Row>
			</div>
		)
	}
}

export default Docs
