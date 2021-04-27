import { Table } from "ant-table-extensions";
import { Card, Col, Row, Select } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import { COLORS } from 'constants/ChartConstant';
import moment from 'moment';
import React, { Component } from 'react';
import Chart from "react-apexcharts";
import { AppStyles } from "../../../../../assets/styles";
import Simple from './../../../maps/google-map/Simple';
import './index.css';
import InnerAppLayout from 'layouts/inner-app-layout';
import ChatContent from './../../../apps/chat/ChatContent';
import ChatMenu from './../../../apps/chat/ChatMenu';

const { Option } = Select;
const shiftsInProgress = [
	{
		"id": "1",
		"clientName": "Eileen Horton",
		"siteName": "Site A",
		"guardName": "Guard A",
		"signInTime": 1579132800,

	}
]
const lateSignin = [
	{
		"id": "1",
		"clientName": "Eileen Horton",
		"siteName": "Site A",
		"guardName": "Guard A",
		"signInTime": 1579132800,

	}
]
const earlySignoff = [
	{
		"id": "1",
		"clientName": "Eileen Horton",
		"siteName": "Site A",
		"guardName": "Guard A",
		"signInTime": 1579132800,

	}
]
const upcomingShifts = [
	{
		"id": "1",
		"clientName": "Eileen Horton",
		"siteName": "Site A",
		"guardName": "Guard A",
		"startTime": 1579132800,
		"endTime": 1579132800,


	}
]


export class Operations extends Component {

	state = {
		shiftsInProgress: shiftsInProgress,
		upcomingShifts: upcomingShifts,
		lateSignin: lateSignin,
		earlySignoff: earlySignoff,
		userProfileVisible: false,
		selectedUser: null,
		currStatus: "active",
		series: [44, 55, 13, 43, 22],
		options: {
			colors: COLORS,
			labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		}

	}




	render() {
		const { shiftsInProgress, upcomingShifts, lateSignin, earlySignoff } = this.state;
		let { currStatus } = this.state;
		const tableColumnsShiftsInProgress = [

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.clientName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				fixed: 'left'
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.siteName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},

			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.guardName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},


			{
				title: 'Sign In Time',
				dataIndex: 'signInTime',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.signInTime).unix() - moment(b.signInTime).unix(),
				width: 150
			}


		];


		const tableColumnsLateSignin = [

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.clientName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				fixed: 'left'
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.siteName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},

			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.guardName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},


			{
				title: 'Sign In Time',
				dataIndex: 'signInTime',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.signInTime).unix() - moment(b.signInTime).unix(),
				width: 150
			}


		];

		const tableColumnsEarlySignoff = [

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.clientName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				fixed: 'left'
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.siteName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},

			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.guardName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},


			{
				title: 'Sign In Time',
				dataIndex: 'signInTime',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.signInTime).unix() - moment(b.signInTime).unix(),
				width: 150
			}


		];

		const tableColumnsUpcomingShifts = [

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.clientName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.clientName.toLowerCase();
						b = b.clientName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
				fixed: 'left'
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.siteName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.siteName.toLowerCase();
						b = b.siteName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},

			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">

						<span style={AppStyles.alignSelfCenter}>
							{record.guardName}
						</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150,
			},


			{
				title: 'Start Time',
				dataIndex: 'startTime',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.startTime).unix() - moment(b.startTime).unix(),
				width: 150
			},

			{
				title: 'End Time',
				dataIndex: 'endTime',
				render: date => (
					<span>{moment.unix(date).format("MM/DD/YYYY")} </span>
				),
				sorter: (a, b) => moment(a.endTime).unix() - moment(b.endTime).unix(),
				width: 150
			}


		];
		return (
			<>
				<Row gutter={16}>
					{
						shiftData.map((elm, i) => (
							<Col xs={24} sm={24} md={6} lg={6} xl={6} key={i}>
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
				<Row gutter={16}
				// justify="center"
				>

					<Col xs={20} sm={20} md={12} lg={12} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Shifts in Progress">
							<Table searchable bordered columns={tableColumnsShiftsInProgress} dataSource={shiftsInProgress} rowKey='id' scroll={{ x: 750, y: 300 }} />
						</Card>
					</Col>
					<Col xs={20} sm={20} md={12} lg={12} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Upcoming Shifts">
							<Table searchable bordered columns={tableColumnsUpcomingShifts} dataSource={upcomingShifts} rowKey='id' scroll={{ x: 750, y: 300 }} />
						</Card>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col xs={20} sm={20} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Today's shifts">

							<Chart
								options={this.state.options}
								series={this.state.series}
								height={300}
								type="pie"
							/>
						</Card>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col xs={20} sm={20} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Tracker">

							<Simple />

						</Card>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col xs={20} sm={20} md={12} lg={12} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Activity">

							<div className="chat">
								<InnerAppLayout
									sideContent={<ChatMenu {...this.props} />}
									mainContent={null}
									sideContentWidth={800}
									sideContentGutter={false}
									border
								/>
							</div>
						</Card>
					</Col>
					<Col xs={20} sm={20} md={12} lg={12} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Call Check">

							<div className="chat">
								<InnerAppLayout
									sideContent={<ChatMenu {...this.props} />}
									mainContent={null}
									sideContentWidth={800}
									sideContentGutter={false}
									border
								/>
							</div>
						</Card>
					</Col>
				</Row>
				<Row gutter={16}
				// justify="center"
				>

					<Col xs={20} sm={20} md={12} lg={12} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Late Signin">
							<Table searchable bordered columns={tableColumnsLateSignin} dataSource={lateSignin} rowKey='id' scroll={{ x: 750, y: 300 }} />
						</Card>
					</Col>
					<Col xs={20} sm={20} md={12} lg={12} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Early Signoff">
							<Table searchable bordered columns={tableColumnsEarlySignoff} dataSource={earlySignoff} rowKey='id' scroll={{ x: 750, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default Operations

const shiftData = [
	{
		title: 'Shift in Progress',
		value: '20',
		backgroundColor: "#60b0f4"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Upcoming Shifts',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Guards on Site',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 0.7,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Guards Away from Site',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 0.7,
		// subtitle: `Compare to last year (2019)`
	}
]