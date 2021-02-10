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

const preferedGuardData = [
	{
		"id": "1",
		"guardName": "John Smith",
		"email": "abc@abc.com",
		"phoneNumber": "00445558596325"

	}
]




export class PreferedGuards extends Component {

	constructor(props) {
		super(props);
		this.state = {

			preferedGuards: preferedGuardData,
		};
	}



	render() {
		const { preferedGuards, selectionType } = this.state;
		const { } = this.props;
		const tableColumns = [
			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						{/* <a onClick={() => this.setState({ edit: true })}> */}
						{/* <AvatarStatus src={record.img} name={record.name} /> */}
						{record.guardName}
						{/* </a> */}
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
				title: 'Email',
				dataIndex: 'email',
				sorter: {
					compare: (a, b) => a.email.length - b.email.length,
				},
				width: 200
			},

			{
				title: 'Phone',
				dataIndex: 'phoneNumber',
				sorter: {
					compare: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
				},
				width: 120
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
							<Card className="card" title="Preferred Guards">
								<Table
									searchable
									bordered columns={tableColumns} dataSource={preferedGuards} rowKey='id' scroll={{ x: 600, y: 200 }} />
							</Card>
						</Col>
					</Row>
				</div>
			</>
		)
	}
}

export default PreferedGuards
