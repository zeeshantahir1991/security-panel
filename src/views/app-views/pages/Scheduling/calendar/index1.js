import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Tooltip, Form, TimePicker } from 'antd';
import { Table } from "ant-table-extensions";

import AvatarStatus from 'components/shared-components/AvatarStatus';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "../styles";


const { Option } = Select;



export class ShiftList extends Component {

	state = {
		noOfCols: [],
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
			startTime: '03:00',

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

		if (search.selectPeriod === "1_Day") {
			let arr = []
			for (var i = 0; i < 25; i++) {
				arr.push(i)
			}
			this.setState({
				noOfCols: arr
			})
		}
		let filteredArray = []
		filteredArray = shiftData.filter(element => {

			return filterCombination(search.selectPeriod, element)


		});
		this.setState({ shiftData: filteredArray })

	}



	render() {
		const { search, shiftData, noOfCols } = this.state;
		let tableColumns = noOfCols.map((e, i) => {
			return {
				title: i == 0 ? "Guard Name" : "0" + i - 1 + ":00",
				dataIndex: i == 0 ? "guardName" : "",
				key: "key" + i,
				render: value => <span>{value}%</span>,
				width: i == 0 ? 200 : 100,

			}
		})


		return (
			<div style={AppStyles.marginTop50}>

				<Row gutter={16} justify="center">
					<Col xs={24} sm={24} md={20} lg={20}>
						<Card title="Filter" style={AppStyles.paddingBottom20}>
							<Form layout="vertical">
								<Row justify="center" gutter={16}>

									<Col xs={24} sm={24} md={6} lg={6}>

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

									<Col xs={24} sm={24} md={6} lg={6}>


										<Button
											disabled={!(search.selectPeriod)}
											onClick={() => { this.searchInTable() }}
											style={!(search.selectPeriod) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
											htmlType="submit" block>
											Search
					                        </Button>
									</Col>
								</Row>
							</Form>
						</Card>
					</Col>
					{/* <Col xs={20} sm={20} md={0} lg={0}>
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

								<Button
									disabled={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime)}
									onClick={() => { this.searchInTable() }}
									style={!(search.guardName || search.shiftType || search.siteName || search.clientName || search.shiftStartTime || search.shiftEndTime) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col> */}
					{
						noOfCols.length != 0 ?
							<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
								<Card className="card" title="Shift Time" >
									<Table searchable bordered columns={tableColumns} dataSource={shiftData} rowKey='id' scroll={{ x: 2600, y: 300 }} />
								</Card>
							</Col> : null
					}

				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default ShiftList



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
