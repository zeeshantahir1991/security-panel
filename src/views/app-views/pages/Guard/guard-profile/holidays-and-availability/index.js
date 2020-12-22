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

const guardData = [
	{
		"id": "1",
		"fromDate": 1583107200,
		"toDate": 1583107200,
		"holidayPay": "No",
		"status": "Approved"

	},
	{
		"id": "1",
		"fromDate": 1583107200,
		"toDate": 1583107200,
		"holidayPay": "Yes",
		"status": " Pending Approval"

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

export class Holidays extends Component {

	constructor(props) {
		super(props);
		this.state = {

			holidaysAndAvailablity: guardData

		};
	}



	render() {
		const { holidaysAndAvailablity } = this.state;
		const { classes, location: { pathname }, history } = this.props;
		const tableColumns = [
			{
				title: 'From Date & Time',
				dataIndex: 'fromDate',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.fromDate).unix() - moment(b.fromDate).unix(),
				width: 200
			},

			{
				title: 'To Date & Time',
				dataIndex: 'toDate',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.toDate).unix() - moment(b.toDate).unix(),
				width: 200
			},

			{
				title: 'Holiday Pay',
				dataIndex: 'holidayPay',
				render: (_, record) => (
					<div className="d-flex">
						{record.holidayPay}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.holidayPay.toLowerCase();
						b = b.holidayPay.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className="text-capitalize" color={status.toUpperCase() === 'APPROVED' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
				width: 200

			},



		];

		return (
			<div style={AppStyles.marginTop50}>
				<Row justify="center">

					<Col xs={24} sm={24} md={20} lg={20} >
						<Card className="card" title="Holidays" extra={cardDropdown(latestTransactionOption)}>
							<Table

								bordered columns={tableColumns} dataSource={holidaysAndAvailablity} rowKey='id' scroll={{ x: 800, y: 200 }} />
						</Card>

					</Col>

				</Row>
			</div>
		)
	}
}

export default Holidays
