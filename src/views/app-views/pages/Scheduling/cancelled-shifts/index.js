import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";

const shiftData = [
	{
		"id": "1",
		"cancelledBy": "System User A",
		"dateCancelled": 1583107200,
		"reason": "Booking",
		"clientName": "John",
		"shiftType": "MP",
		"siteName": "Site A",
		"shiftStartTime": 1583107200,
		"shiftEndTime": 1583107200,
		"shiftDate": 1583107200,
		"day": "Mon",
		"position": "Security",
		"guardName": "John Smith"

	},
	{
		"id": "2",
		"cancelledBy": "System User B",
		"dateCancelled": 1583107200,
		"reason": "Shift Moved",
		"clientName": "Smith",
		"shiftType": "DS",
		"siteName": "Site B",
		"shiftStartTime": 1583107200,
		"shiftEndTime": 1583107200,
		"shiftDate": 1583107200,
		"day": "Tue",
		"position": "Security",
		"guardName": "John"


	}
]



const { Option } = Select;



export class CancelledShiftList extends Component {

	state = {
		cancelledShiftList: shiftData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			cancelledBy: "",
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
		let userList = shiftData
		let cancelledBy = search.cancelledBy
		let shiftType = search.shiftType
		let siteName = search.siteName
		let clientName = search.clientName
		let shiftStartTime = search.shiftStartTime
		let shiftEndTime = search.shiftEndTime

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(cancelledBy, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element)


		});
		this.setState({ cancelledShiftList: filteredArray })

	}

	render() {
		const { cancelledShiftList, search } = this.state;

		const tableColumns = [
			{
				title: 'Cancelled By',
				dataIndex: 'cancelledBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.cancelledBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.cancelledBy.toLowerCase();
						b = b.cancelledBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'

			},

			{
				title: 'Date Cancelled',
				dataIndex: 'dateCancelled',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.dateCancelled).unix() - moment(b.dateCancelled).unix(),
				width: 200
			},

			{
				title: 'Reason',
				dataIndex: 'reason',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.reason}</span>
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

			{
				title: 'Client Name',
				dataIndex: 'clientName',
				render: (_, record) => (
					<div className="d-flex">
						<span >{record.clientName}</span>
					</div>
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
				title: 'Site Name',
				dataIndex: 'siteName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.siteName}</span>
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
				width: 200
			},

			{
				title: 'Shift Date',
				dataIndex: 'shiftDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftDate).unix() - moment(b.shiftDate).unix(),
				width: 200
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
				width: 200
			},

			{
				title: 'Start Time',
				dataIndex: 'shiftStartTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftStartTime).unix() - moment(b.shiftStartTime).unix(),
				width: 200
			},



			{
				title: 'End Time',
				dataIndex: 'shiftEndTime',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.shiftEndTime).unix() - moment(b.shiftEndTime).unix(),
				width: 200
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
				width: 200
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
				width: 200
			},


			// {
			// 	title: '',
			// 	dataIndex: 'actions',
			// 	render: (_, elm) => (
			// 		<div className="text-right">

			// 			<Tooltip title="Delete">
			// 				<Button danger icon={<DeleteOutlined />}
			// 					// onClick={() => { this.deleteUser(elm.id) }}
			// 					size="small" />
			// 			</Tooltip>
			// 		</div>
			// 	)
			// }
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
									placeholder="Cancelled By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("cancelledBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="System User A">System User A</Option>
									<Option value="System User B">System User B</Option>
									<Option value="System User C">System User C</Option>
									<Option value="System User D">System User D</Option>

								</Select>

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


								<Button
									disabled={!(search.cancelledBy || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.cancelledBy || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Cancelled By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("cancelledBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="System User A">System User A</Option>
									<Option value="System User B">System User B</Option>
									<Option value="System User C">System User C</Option>
									<Option value="System User D">System User D</Option>

								</Select>

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



								<Button
									disabled={!(search.cancelledBy || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.cancelledBy || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Cancelled Shift List" >
							<Table searchable bordered columns={tableColumns} dataSource={cancelledShiftList} rowKey='id' scroll={{ x: 2600, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default CancelledShiftList



export const filterCombination = (cancelledBy, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element) => {
	if (cancelledBy && shiftType && siteName && clientName && shiftStartTime, shiftEndTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD") &&
			moment.unix(element.shiftEndTime).format("YYYY/MM/DD") === moment(shiftEndTime).format("YYYY/MM/DD")


	}
	if (cancelledBy && shiftType && siteName && clientName && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (cancelledBy && shiftType && siteName && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (cancelledBy && shiftType && clientName && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (shiftType && siteName && clientName && shiftStartTime) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (cancelledBy && siteName && clientName && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")

	} else if (cancelledBy && shiftType && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (cancelledBy && siteName && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD")


	} else if (cancelledBy && clientName && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
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


	} else if (cancelledBy && shiftType && siteName) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (cancelledBy && shiftType && clientName) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (shiftType && siteName && clientName) {

		return element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()

	} else if (cancelledBy && siteName && clientName) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase()
	} else if (cancelledBy && shiftStartTime) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
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

	} else if (cancelledBy && shiftType) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase()

	} else if (cancelledBy && siteName) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase()

	} else if (cancelledBy && clientName) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase() &&
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

	} else if (cancelledBy) {

		return element.cancelledBy.trim().toUpperCase() === cancelledBy.trim().toUpperCase()

	}
}
