import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip, TimePicker } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
import StatisticWidget from 'components/shared-components/StatisticWidget';

const { RangePicker } = TimePicker
const timeClock = [
	{
		"id": "1",
		"shiftStatus": "Not Started",
		"signInOrSignOffStatus": "Not Signed in",
		"clientName": "John Smith",
		"img": "/img/avatars/thumb-1.jpg",
		"shiftType": "MP",
		"siteName": "Site A",
		"guardName": "John Sm",
		"shiftStartTime": 1583107200,
		"shiftEndTime": 1583107200,
		"shiftDate": 1583107200,
		"day": "Mon",
		"chargeRate": 12,
		"break": "No",
		"position": "Security",
		"signInTime": 1583107200,


	},

]



const { Option } = Select;



export class TimeClock extends Component {

	state = {
		timeClockList: timeClock,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			guardName: "",
			shiftType: "",
			siteName: "",
			clientName: "",
			shiftStartTime: "",
			shiftEndTime: ""
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
		const { search } = this.state;
		let timeClockList = timeClock
		let guardName = search.guardName
		let shiftType = search.shiftType
		let siteName = search.siteName
		let clientName = search.clientName
		let shiftStartTime = search.shiftStartTime
		let shiftEndTime = search.shiftEndTime

		let filteredArray = []
		filteredArray = timeClockList.filter(element => {

			return filterCombination(guardName, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element)


		});
		this.setState({ timeClockList: filteredArray })

	}



	render() {
		const { timeClockList, search } = this.state;

		const tableColumns = [

			{
				title: 'Shift Actions',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<Tooltip title="Edit Shift">
							<Button type="primary" size="small" >Edit Shift</Button>
						</Tooltip>

					</div>
				),
				width: 150,
				fixed: 'left'
			},

			{
				title: 'Shift Status',
				dataIndex: 'actions',
				render: (_, record) => (
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<Tooltip title="">
							{
								record.shiftStatus.toLowerCase() == "not started" ?
									<Button danger type="primary" size="small" >{record.shiftStatus}</Button> :
									record.shiftStatus.toLowerCase() == "in progress" ?
										<Button  type="info" size="small" >{record.shiftStatus}</Button> :
										record.shiftStatus.toLowerCase() == "completed" ?
											<Button  type="success" size="small" >{record.shiftStatus}</Button> :

											null
							}
						</Tooltip>

					</div>
				),
				width: 150,
			},

			{
				title: 'Signin / Signoff Status',
				dataIndex: 'actions',
				render: (_, record) => (
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
						<Tooltip title="">
							{
								record.signInOrSignOffStatus.toLowerCase() == "not signed in" ?
									<Button  type="primary" size="small" >{record.signInOrSignOffStatus}</Button> :
									record.signInOrSignOffStatus.toLowerCase() == "on time" ?
										<Button  type="success" size="small" >{record.signInOrSignOffStatus}</Button> :
										<Button danger type="warning" size="small" >{record.signInOrSignOffStatus}</Button>
							}
						</Tooltip>

					</div>
				),
				width: 200,
			},

			
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
			},

			{
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						{/* <a onClick={() => this.viewItem("viewItem", record)}> */}

						<span>{record.siteName}</span>
						{/* </a> */}

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
				// fixed: 'left'

			},


			{
				title: 'Shift Type',
				dataIndex: 'shiftType',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.shiftType}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.shiftType.toLowerCase();
						b = b.shiftType.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Shift Date',
				dataIndex: 'shiftDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftDate).unix() - moment(b.shiftDate).unix(),
				width: 150
			},

			{
				title: 'Day',
				dataIndex: 'day',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.day}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.day.toLowerCase();
						b = b.day.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Start Time',
				dataIndex: 'shiftStartTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftStartTime).unix() - moment(b.shiftStartTime).unix(),
				width: 150
			},

			{
				title: 'Signin Time',
				dataIndex: 'signInTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.signInTime).unix() - moment(b.signInTime).unix(),
				width: 150
			},

			{
				title: 'End Time',
				dataIndex: 'shiftEndTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftEndTime).unix() - moment(b.shiftEndTime).unix(),
				width: 150
			},

			{
				title: 'Charge Rate',
				dataIndex: 'chargeRate',
				sorter: {
					compare: (a, b) => a.chargeRate.length - b.chargeRate.length,
				},
				width: 150

			},

			{
				title: 'Break',
				dataIndex: 'break',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.break}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.break.toLowerCase();
						b = b.break.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Position',
				dataIndex: 'position',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.position}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.position.toLowerCase();
						b = b.position.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.guardName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.guardName.toLowerCase();
						b = b.guardName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 150
			},

			


			// {
			// 	title: '',
			// 	dataIndex: 'actions',
			// 	render: (_, elm) => (
			// 		<div className="text-right">

			// 			<Tooltip title="Cancel Shift">
			// 				<Button danger onClick={() => this.cancelledShift("cancelledShift", elm)} size="small" >Cancel Shift</Button>
			// 			</Tooltip>
			// 		</div>
			// 	)
			// }
		];

		return (
			<div style={AppStyles.marginTop50}>
				<Row gutter={16}>
					{
						timeClockData.map((elm, i) => (
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
				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={24} lg={24}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>


								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Shift Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("shiftType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="DS">DS</Option>
									<Option value="MP">MP</Option>

								</Select>

								<Input
									placeholder="Client Name"
									onChange={(val) => this.handleChangeInput("clientName", val)}
									style={componentStyles.filtersInputStyle} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />



								<RangePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftStartTime", val)}
								// placeholder="Shift Start Time"
								// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
								// format={'YYYY/MM/DD'} 

								/>

								<DatePicker.RangePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftEndTime", val)}
								// placeholder="Shift End Time"
								// // defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
								// format={'YYYY/MM/DD'} 										
								/>

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Shift Type"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("shiftType", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="DS">DS</Option>
									<Option value="MP">MP</Option>

								</Select>

								<Input
									placeholder="Client Name"
									onChange={(val) => this.handleChangeInput("clientName", val)}
									style={componentStyles.filtersInputStyle} />

								<Input
									placeholder="Site Name"
									onChange={(val) => this.handleChangeInput("siteName", val)}
									style={componentStyles.filtersInputStyle} />



								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftStartTime", val)}
									placeholder="Shift Start Time"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("shiftEndTime", val)}
									placeholder="Shift End Time"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Time Clock List" >
							<Table searchable bordered columns={tableColumns} dataSource={timeClockList} rowKey='id' scroll={{ x: 2400, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default TimeClock


const timeClockData = [
	{
		title: 'Not Signed in',
		value: '20',
		backgroundColor: "#60b0f4"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Late Signin',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'OnTime',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 0.7,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Early Signoff',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 0.7,
		// subtitle: `Compare to last year (2019)`
	}
]


export const filterCombination = (guardName, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element) => {
	if (guardName && shiftType && siteName && clientName && shiftStartTime, shiftEndTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD") &&
			moment.unix(element.shiftEndTime).format("YYYY/MM/DD") === moment(shiftEndTime).format("YYYY/MM/DD")


	}
	if (guardName && shiftType && siteName && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (guardName && shiftType && siteName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && shiftType && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && siteName && clientName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && siteName && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (guardName && shiftType && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && siteName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && clientName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (shiftType && siteName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && clientName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (siteName && clientName && shiftStartTime) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (guardName && shiftType && siteName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (guardName && shiftType && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftType && siteName && clientName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (guardName && siteName && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()
	} else if (guardName && shiftStartTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (siteName && shiftStartTime) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (clientName && shiftStartTime) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (guardName && shiftType) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase()

	} else if (guardName && siteName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (guardName && clientName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftType && siteName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (shiftType && clientName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (siteName && clientName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftStartTime) {

		return moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (shiftEndTime) {

		return moment.unix(element.shiftEndTime).format("YYYY/MM/DD") === moment(shiftEndTime).format("YYYY/MM/DD")

	} else if (clientName) {

		return element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (siteName) {

		return element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (shiftType) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase()

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	}
}
