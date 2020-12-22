import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button, Row, Col, Dropdown, Select, Menu, Form, Input, Checkbox, Switch } from 'antd';
import {
	DollarOutlined, BuildOutlined, CalendarOutlined,
	LockOutlined, NumberOutlined, MailOutlined, BorderOutlined,
	UserOutlined, PhoneOutlined, MobileOutlined, CompassOutlined,
	HomeOutlined, EllipsisOutlined, EyeOutlined, DeleteOutlined,
	ReloadOutlined, PrinterOutlined, FileExcelOutlined, UploadOutlined,
	DownloadOutlined
} from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../../assets/styles";
import { componentStyles } from "../../styles";
import Position from 'views/app-views/components/data-display/carousel/Position';
import { Link as RouteLink } from 'react-router-dom';
import { AppColors } from 'assets/styles/colors';

const preferredData = [
	{
		"id": "1",
		"siteName": "Site A",
		"clientName": "A"

	},
	{
		"id": "2",
		"siteName": "Site B",
		"clientName": "B"

	}
]

const bannedData = [
	{
		"id": "1",
		"siteName": "Site A",
		"clientName": "A",
		"reason": "Any Reason"

	},
	{
		"id": "2",
		"siteName": "Site B",
		"clientName": "B",
		"reason": "Any Reason"


	}
]
const { Option } = Select;

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

export class SitePreferrences extends Component {

	constructor(props) {
		super(props);
		this.state = {

			preferred: preferredData,
			banned: bannedData

		};
	}



	render() {
		const { preferred, banned, userProfileVisible, selectedUser, search, selectionType } = this.state;
		const { classes, location: { pathname }, history } = this.props;
		const tableColumnsPreferred = [
			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						{record.siteName}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">
						{record.clientName}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},



		];

		const tableColumnsBanned = [
			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						{record.siteName}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">
						{record.clientName}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Reason',
				dataIndex: 'reason',
				render: (_, record) => (
					<div className="d-flex">
						{record.reason}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.reason.toLowerCase();
						b = b.reason.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},



		];


		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Preferred Sites" extra={cardDropdown(latestTransactionOption)}>
							<Table

								bordered columns={tableColumnsPreferred} dataSource={preferred} rowKey='id' scroll={{ x: 400, y: 200 }} />
						</Card>
						{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
						<Card className="card" title="Banned Sites" extra={cardDropdown(latestTransactionOption)}>
							<Table

								bordered columns={tableColumnsBanned} dataSource={banned} rowKey='id' scroll={{ x: 600, y: 200 }} />
						</Card>
					</Col>

				</Row>
			</div>
		)
	}
}

export default SitePreferrences
