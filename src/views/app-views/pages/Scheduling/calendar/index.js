import { CalendarOutlined, CloseOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Collapse, Form, TimePicker, Typography } from 'antd';
import { Table } from "ant-table-extensions";
import WeekRange from './weekRange';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
import { AppColors } from 'assets/styles/colors';
import { TimelineGrouping } from 'views/app-views/components/scheduler/TimelineGrouping';
const { Panel } = Collapse;

const { Option } = Select;

const weekTableColumnsTableData = [


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
		width: 100,
		fixed: 'left'

	},

	{
		title: 'Mon',
		dataIndex: 'siteName',
		render: (_, record) => (
			<>
			<div style={{ backgroundColor: record.shiftType == "DS" ? AppColors.skyBlue : record.shiftType == "CCTV" ? AppColors.orange : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "MP" ? 'none' : 'block' }}> SITE A  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "MP" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},
	{
		title: 'Tue',
		dataIndex: 'siteName',
		render: (_, record) => (			
			<><div style={{ backgroundColor: record.shiftType == "DS" ? AppColors.skyBlue : record.shiftType == "CCTV" ? AppColors.orange : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "MP" ? 'none' : 'block' }}>SITE B  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "MP" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},
	{
		title: 'Wed',
		dataIndex: 'siteName',
		render: (_, record) => (
			<><div style={{ backgroundColor: record.shiftType == "MP" ? AppColors.flamingo : record.shiftType == "CCTV" ? AppColors.orange : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "DS" ? 'none' : 'block' }}>SITE G  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "DS" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},
	{
		title: 'Thu',
		dataIndex: 'siteName',
		render: (_, record) => (
			<><div style={{ backgroundColor: record.shiftType == "MP" ? AppColors.flamingo : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "CCTV" || record.shiftType == "DS" ? 'none' : 'block' }}>SITE C  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "CCTV" || record.shiftType == "DS" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},
	{
		title: 'Fri',
		dataIndex: 'siteName',
		render: (_, record) => (
			<><div style={{ backgroundColor: record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "CCTV" || record.shiftType == "DS" || record.shiftType == "MP" ? 'none' : 'block'}}>SITE D  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "CCTV" || record.shiftType == "DS" || record.shiftType == "MP" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},
	{
		title: 'Sat',
		dataIndex: 'siteName',
		render: (_, record) => (
			<><div style={{ backgroundColor: record.shiftType == "CCTV" ? AppColors.orange : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "DS" || record.shiftType == "MP" ? 'none' : 'block' }}>SITE E  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "DS" || record.shiftType == "MP" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},
	{
		title: 'Sun',
		dataIndex: 'siteName',
		render: (_, record) => (
			<><div style={{ backgroundColor: record.shiftType == "MP" ? AppColors.flamingo : record.shiftType == "CCTV" ? AppColors.orange : AppColors.white }}>
				<span style={{ color: record.shiftType ? AppColors.white : AppColors.black, display: record.shiftType == "DS" || record.shiftType == "SG" ? 'none' : 'block' }}>SITE F  Reading <CloseOutlined style={{marginLeft: 10}} /> Road <br/> {record.startTime}   -- {record.endTime} </span>
			</div>
			<div style={{position:'relative', justifyContent:'center', alignItems:'center', display: record.shiftType == "DS" || record.shiftType == "SG" ? 'block':'none', marginLeft:20 }}><Typography>Add Shift</Typography> <PlusCircleOutlined style={{fontSize:20}} /></div> 
			</>
		),
		sorter: {
			compare: (a, b) => {
				a = a.siteName.toLowerCase();
				b = b.siteName.toLowerCase();
				return a > b ? -1 : b > a ? 1 : 0;
			},
		},
		width: 140,
	},

];

export class Calendar extends Component {

	state = {
		shiftData: [
			{
				guardName: "John Smith",
				siteName: 'Site A',
				address: '50 reading road',
				shiftType: 'DS',
				startTime: '00:00',
				endTime: '03:00'
			},
			{
				guardName: "Peter Knight",
				siteName: 'Site B',
				address: '50 reading road',
				shiftType: 'MP',
				startTime: '03:00',
				endTime: '06:00'
			},
			{
				guardName: "David Warner",
				siteName: 'Site B',
				address: '50 reading road',
				shiftType: 'CCTV',
				startTime: '06:00',
				endTime: '08:00'
			},
			{
				guardName: "Mahatama Budh",
				siteName: 'Site B',
				address: '50 reading road',
				shiftType: 'SG',
				startTime: '08:00',
				endTime: '01:00'
			}

		],
		weeklyShiftData: [
			{
				guardName: "John Smith",
				siteName: 'Site A',
				address: '50 reading road',
				shiftType: 'DS',
				startTime: '00:00',
				endTime: '03:00'
			},
			{
				guardName: "Peter Knight",
				siteName: 'Site B',
				address: '50 reading road',
				shiftType: 'MP',
				startTime: '03:00',
				endTime: '06:00'
			},
			{
				guardName: "David Warner",
				siteName: 'Site B',
				address: '50 reading road',
				shiftType: 'CCTV',
				startTime: '06:00',
				endTime: '08:00'
			},
			{
				guardName: "Mahatama Budh",
				siteName: 'Site B',
				address: '50 reading road',
				shiftType: 'SG',
				startTime: '08:00',
				endTime: '01:00'
			}

		],
		search: {
			selectPeriod: '',

		},
		selectedDate: '',
		weekTableColumns: weekTableColumnsTableData
	}

	handleChange = (type, value) => {
		const { search } = this.state;
		this.setState({
			search: {
				...search,
				[type]: value
			}
		})

	}
	handleDateChange = (type, value) => {
		this.setState({
			[type]: value
		})

	}

	searchInTable = () => {
		const { search, shiftData } = this.state;
		// Moment to time
		// let startTime = moment(search.startTime).format('HH:mm')

		// Time to moment
		// let startTime = moment(search.startTime, 'HH:mm')


	}

	displayFilter = () => {
		const { search, shiftData, noOfCols } = this.state;
		return (
			<Col xs={20} sm={20} md={20} lg={20}>
				<Card title="Filters" style={AppStyles.paddingBottom20}>
					<div
						style={{ display: 'flex', flexDirection: 'row' }}
					>
						<Col md={6} lg={6}>
							<Select
								showSearch
								style={{
									borderWidth: 1,
									borderColor: AppColors.alto,
									borderStyle: 'solid',
									borderRadius: 10,
									display: 'flex'
								}}
								bordered={false}
								placeholder="Shift Type"
								optionFilterProp="children"
								onChange={(val) => this.handleChange("shiftType", val)}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="Door Supervision">Door Supervision</Option>
								<Option value="Mobile Patrol">Mobile Patrol</Option>
								<Option value="Security Guarding">Security Guarding</Option>
								<Option value="CCTV">CCTV</Option>
							</Select>
						</Col>
						<Col md={6} lg={6}>
							<Select
								showSearch
								style={{
									borderWidth: 1,
									borderColor: AppColors.alto,
									borderStyle: 'solid',
									borderRadius: 10,
									display: 'flex'
								}}
								bordered={false}
								placeholder="Client Name"
								optionFilterProp="children"
								onChange={(val) => this.handleChange("clientName", val)}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="Client A">Client A</Option>
								<Option value="Client B">Client B</Option>
							</Select>
						</Col>
						<Col md={6} lg={6}>
							<Select
								showSearch
								style={{
									borderWidth: 1,
									borderColor: AppColors.alto,
									borderStyle: 'solid',
									borderRadius: 10,
									display: 'flex'
								}}
								bordered={false}
								placeholder="Site Name"
								optionFilterProp="children"
								onChange={(val) => this.handleChange("siteName", val)}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="Site A">Site A</Option>
								<Option value="Site B">Site B</Option>
							</Select>
						</Col>
						<Col md={6} lg={6}>
							<Button
								disabled={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
								onClick={() => { this.searchInTable() }}
								style={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
								htmlType="submit" block>
								Search
					    </Button>
						</Col>
					</div>
				</Card>
			</Col>
		)
	}

	onDaySelected = () => {
		const { selectedDate } = this.state;
		return (
			<>
				<Col xs={24} sm={24} md={3} lg={3} style={{ marginTop: 1 }}>
					<DatePicker onChange={(e) => {
						if (e) { this.handleDateChange("selectedDate", e?.format('MMMM Do YYYY')) }
					}} />
				</Col>
				<Col xs={24} sm={24} md={8} lg={8} style={{ marginTop: 10 }}>
					<h4>{selectedDate}</h4>
				</Col>
			</>)
	}
	onWeekSelected = () => {
		const { selectedDate } = this.state;
		return (
			<>
				<Col xs={24} sm={24} md={5} lg={5} style={{ marginTop: 1 }}>
					<WeekRange getDateList={this.updateDates} />
				</Col>
				<Col xs={24} sm={24} md={8} lg={8} style={{ marginTop: 10 }}>
					<h4>{selectedDate}</h4>
				</Col>
			</>)
	}

	updateDates = (datesList) => {
		const snippedList = datesList.map((item, index) => {
			const splittedDate = item.split('-')
			return splittedDate[2]
		})
		const { weekTableColumns } = this.state
		const firstColumn = weekTableColumns[0]
		const initialTitleRemovedColumns = weekTableColumns?.slice(1)
		const updatedWeekTableColumns = initialTitleRemovedColumns?.length ? initialTitleRemovedColumns.map((item, index, array) => {
			const newTitle = item.title + ',' + snippedList[index]
			return { ...item, title: newTitle }
		}) : null

		// console.log('halo',firstColumn);
		updatedWeekTableColumns.splice(0, 0, firstColumn)
		this.setState({
			weekTableColumns: updatedWeekTableColumns
		})
	}




	render() {
		const { search, shiftData, weekTableColumns } = this.state;
		const tableColumns = [


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
				width: 200,
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
				width: 200,
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
				title: 'Start Time',
				dataIndex: 'startTime',
				render: (_, record) => (
					<div style={{ backgroundColor: record.shiftType == "DS" ? AppColors.skyBlue : record.shiftType == "MP" ? AppColors.flamingo : record.shiftType == "CCTV" ? AppColors.orange : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
						<span style={{ color: record.shiftType ? AppColors.white : AppColors.black }}>{record.startTime}</span>
					</div>
				),
				// sorter: (a, b) => moment(a.startTime).unix() - moment(b.startTime).unix(),
				width: 200
			},



			{
				title: 'End Time',
				dataIndex: 'endTime',
				render: (_, record) => (
					<div style={{ backgroundColor: record.shiftType == "DS" ? AppColors.skyBlue : record.shiftType == "MP" ? AppColors.flamingo : record.shiftType == "CCTV" ? AppColors.orange : record.shiftType == "SG" ? AppColors.brightSun : AppColors.white }}>
						<span style={{ color: record.shiftType ? AppColors.white : AppColors.black }}>{record.endTime}</span>
					</div>
				),
				// sorter: (a, b) => moment(a.endTime).unix() - moment(b.endTime).unix(),
				width: 200
			},


			{
				title: 'Address',
				dataIndex: 'address',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.address}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.address.toLowerCase();
						b = b.address.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},


		];

		return (
			<div style={AppStyles.marginTop50}>

				<Row gutter={16} justify="center">
					<Col xs={24} sm={24} md={20} lg={20}>
						<Card title="Select Period" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row justify="center" gutter={16}>
									<Col xs={24} sm={24} md={4} lg={4}>

										<Select
											showSearch
											style={componentStyles.selectStyle}
											bordered={false}
											placeholder="Select Period"
											optionFilterProp="children"
											onChange={(val) => this.handleChange("selectPeriod", val)}
											filterOption={(input, option) =>
												option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
											}
										>
											<Option value="1_Day">1 Day</Option>
											<Option value="1_Week">1 Week</Option>
											<Option value="2_Weeks">2 Weeks</Option>
											<Option value="4_Weeks">4 Weeks</Option>

										</Select>
									</Col>
									{search.selectPeriod == "1_Day" ? this.onDaySelected() : null}
									{search.selectPeriod == "1_Week" ? this.onWeekSelected() : null}
									{search.selectPeriod == "2_Weeks" ? this.onWeekSelected() : null}
									{search.selectPeriod == "4_Weeks" ? this.onWeekSelected() : null}
								</Row>
							</Form>
						</Card>
					</Col>

					{/* {this.displayFilter()} */}
					{
						search.selectPeriod == "1_Day" ?
							<>
								{/* <Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
									<Card className="card" title="Shift Time" >
										<Table searchable searchableProps={{
											inputProps: {
												placeholder: "Guard Name...",
												prefix: <SearchOutlined />,
											},
										}} bordered columns={tableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
									</Card>
								</Col> */}
								<Col xs={24} sm={24} md={20} lg={20}>
								<TimelineGrouping/>
								</Col>
							</>
							: null
					}
					{search.selectPeriod == "1_Week" ?
						<>
							<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
								<Card className="card" title="Shift Time" >
									<Table searchable searchableProps={{
										inputProps: {
											placeholder: "Guard Name...",
											prefix: <SearchOutlined />,
										},
									}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
								</Card>
							</Col>
						</>
						: null
					}
					{search.selectPeriod == "2_Weeks" ?
						<Col xs={24} sm={24} md={20} lg={20}>
						<Card className="card" title="2 Weeks Shifts Schedule">
							<Collapse accordion defaultActiveKey={['1']} bordered={false}>
								<Panel header="Week 1 Shifts" key="1">
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
										<Card className="card" title="Shift Time" >
											<Table searchable searchableProps={{
												inputProps: {
													placeholder: "Guard Name...",
													prefix: <SearchOutlined />,
												},
											}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
										</Card>
									</Col>
								</Panel>
								<Panel header="Week 2 Shifts" key="2">
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
										<Card className="card" title="Shift Time" >
											<Table searchable searchableProps={{
												inputProps: {
													placeholder: "Guard Name...",
													prefix: <SearchOutlined />,
												},
											}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
										</Card>
									</Col>
								</Panel>
							</Collapse>
							</Card>							
						</Col>
						: null
					}
					{search.selectPeriod == "4_Weeks" ?
						<Col xs={24} sm={24} md={20} lg={20}>
						<Card className="card" title="4 Weeks Shifts Schedule">
							<Collapse accordion  defaultActiveKey={['1']} bordered={false}>
								<Panel header="Week 1 Shifts" key="1">
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
										<Card className="card" title="Shift Time" >
											<Table searchable searchableProps={{
												inputProps: {
													placeholder: "Guard Name...",
													prefix: <SearchOutlined />,
												},
											}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
										</Card>
									</Col>
								</Panel>
								<Panel header="Week 2 Shifts" key="2">
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
										<Card className="card" title="Shift Time" >
											<Table searchable searchableProps={{
												inputProps: {
													placeholder: "Guard Name...",
													prefix: <SearchOutlined />,
												},
											}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
										</Card>
									</Col>
								</Panel>
								<Panel header="Week 3 Shifts" key="3">
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
										<Card className="card" title="Shift Time" >
											<Table searchable searchableProps={{
												inputProps: {
													placeholder: "Guard Name...",
													prefix: <SearchOutlined />,
												},
											}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
										</Card>
									</Col>
								</Panel>
								<Panel header="Week 4 Shifts" key="4">
									<Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
										<Card className="card" title="Shift Time" >
											<Table searchable searchableProps={{
												inputProps: {
													placeholder: "Guard Name...",
													prefix: <SearchOutlined />,
												},
											}} bordered columns={weekTableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
										</Card>
									</Col>
								</Panel>
							</Collapse>
							</Card>							
						</Col>
						: null
					}

				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default Calendar



export const filterCombination = (guardName, shiftType, siteName, clientName, shiftStartTime, shiftEndTime, element) => {
	if (guardName && shiftType && siteName && clientName && shiftStartTime, shiftEndTime) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			element.shiftType.trim().toUpperCase() === shiftType.trim().toUpperCase() &&
			element.siteName.trim().toUpperCase() === siteName.trim().toUpperCase() &&
			element.clientName.trim().toUpperCase() === clientName.trim().toUpperCase() &&
			moment.unix(element.shiftStartTime).format("YYYY/MM/DD") === moment(shiftStartTime).format("YYYY/MM/DD") &&
			moment.unix(element.shiftEndTime).format("YYYY/MM/DD") === moment(shiftEndTime).format("YYYY/MM/DD")


	}

}
