import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import GuardsView from './GuardsView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";

export class GuardsList extends Component {

	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null
	}

	// deleteUser = userId => {
	// 	this.setState({
	// 		users: this.state.users.filter(item => item.id !== userId),
	// 	})
	// 	message.success({ content: `Deleted user ${userId}`, duration: 2 });
	// }

	// showUserProfile = userInfo => {
	// 	this.setState({
	// 		userProfileVisible: true,
	// 		selectedUser: userInfo
	// 	});
	// };

	// closeUserProfile = () => {
	// 	this.setState({
	// 		userProfileVisible: false,
	// 		selectedUser: null
	// });
	// }

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'Guard Name',
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
				width: 150,
				fixed: 'left'
			},
			{
				title: 'Date of Birth',
				dataIndex: 'birthday',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.birthday).unix() - moment(b.birthday).unix(),
				width: 150
			},
			{
				title: 'Email',
				dataIndex: 'email',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.email}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.email.toLowerCase();
						b = b.email.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Phone',
				dataIndex: 'phoneNumber',
				sorter: {
					compare: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
				},
				width: 150
			},
			{
				title: 'SIA License',
				dataIndex: 'siaLicence',
				sorter: {
					compare: (a, b) => a.siaLicence.length - b.siaLicence.length,
				},
			},
			{
				title: 'SIA Licence Expiry',
				dataIndex: 'siaLicenceExpiry',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.siaLicenceExpiry).unix() - moment(b.siaLicenceExpiry).unix(),
				width: 200
			},

			{
				title: 'Position',
				dataIndex: 'position',
				sorter: {
					compare: (a, b) => {
						a = a.position.toLowerCase();
						b = b.position.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Pay Rate',
				dataIndex: 'payRate',
				sorter: {
					compare: (a, b) => a.payRate.length - b.payRate.length,
				},
			},
			{
				title: 'Employment Type',
				dataIndex: 'empType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.empType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.empType.toLowerCase();
						b = b.empType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Subcontract Name',
				dataIndex: 'subcontractName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.subcontractName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.subcontractName.toLowerCase();
						b = b.subcontractName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Status',
				dataIndex: 'status',				
				render: status => (
					<Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
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
			<>
				<Table columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 2000, y: 300 }}/>
				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default GuardsList
