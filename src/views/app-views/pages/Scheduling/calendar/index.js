import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip, Form, TimePicker } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";
import { AppColors } from 'assets/styles/colors';


const { Option } = Select;



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
				endTime: '23:00'
			}

		],
		search: {
			selectPeriod: '',

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
		const { search, shiftData } = this.state;
		// Moment to time
		// let startTime = moment(search.startTime).format('HH:mm')

		// Time to moment
		// let startTime = moment(search.startTime, 'HH:mm')


	}



	render() {
		const { search, shiftData, noOfCols } = this.state;
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
					<div style={{ backgroundColor: record.shiftType == "DS" ? AppColors.skyBlue : record.shiftType == "MP" ? AppColors.flamingo : AppColors.white }}>
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
					<div  style={{ backgroundColor: record.shiftType == "DS" ? AppColors.skyBlue : record.shiftType == "MP" ? AppColors.flamingo : AppColors.white }}>
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

									<Col xs={24} sm={24} md={8} lg={8}>

										<Select
											showSearch
											style={componentStyles.selectStyle}
											bordered={false}
											placeholder="Select Period"
											optionFilterProp="children"
											onChange={(val) => this.handleChange("selectPeriod", val)}
											// onFocus={onFocus}
											// onBlur={onBlur}
											// onSearch={onSearch}
											filterOption={(input, option) =>
												option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
											}
										>
											<Option value="1_Day">1 Day</Option>
											<Option value="1_Week">1 Week</Option>

										</Select>
									</Col>
									{/* 
									<Col xs={24} sm={24} md={6} lg={6}>


										<Button
											disabled={!(search.selectPeriod)}
											onClick={() => { this.searchInTable() }}
											style={!(search.selectPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
											htmlType="submit" block>
											Search
					                        </Button>
									</Col> */}
								</Row>
							</Form>
						</Card>
					</Col>

					{
						search.selectPeriod == "1_Day" ?
							<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
								<Card className="card" title="Shift Time" >
									<Table searchable bordered columns={tableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 1200, y: 300 }} />
								</Card>
							</Col> : null
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
