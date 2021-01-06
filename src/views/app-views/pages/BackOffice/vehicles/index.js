import { Button, Card, Col, Input, Row, Select, Table, Tag } from 'antd';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const { Option } = Select;

const vehiclesData = [
	{
		"id": "1",
		"carRegNo": "KS64OPY",
		"motStatus": "Valid",
		"currentMotExpiryDate": 1583107200,
		"previousMotExpiryDate": 1583107200,
		"currentMileage": 13000,
		"previousMileage": 12900

	},
	{
		"id": "2",
		"carRegNo": "KS64OPZ",
		"motStatus": "Expired",
		"currentMotExpiryDate": 1583107200,
		"previousMotExpiryDate": 1583107200,
		"currentMileage": 51000,
		"previousMileage": 50800

	}
]

export class VehiclesList extends Component {

	state = {
		vehicles: vehiclesData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			motStatus: "",
			carRegNo: ""
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
		let vehiclesList = vehiclesData
		let motStatus = search.motStatus
		let carRegNo = search.carRegNo


		let filteredArray = []
		filteredArray = vehiclesList.filter(element => {
			if (motStatus && carRegNo) {

				return element.motStatus.toUpperCase() === motStatus.toUpperCase() && element.carRegNo.toUpperCase() === carRegNo.toUpperCase()

			} else if (motStatus) {

				return element.motStatus.toUpperCase() === motStatus.toUpperCase()

			} else if (carRegNo) {

				return element.carRegNo.toUpperCase() === carRegNo.toUpperCase()

			}

		});
		this.setState({ vehicles: filteredArray })

	}

	viewItem = (record) => {
		this.props.history.push({
			pathname: '/app/pages/add-vehicle',
			state: { record }
		})
	}


	render() {
		const { vehicles } = this.state;

		const tableColumns = [
			{
				title: 'Car Registration Number',
				dataIndex: 'carRegNo',
				render: (_, record) => (
					<div className="d-flex">
						<span style={AppStyles.alignSelfCenter}>
							<a onClick={() => this.viewItem(record)}>
								{record.carRegNo}
							</a>
						</span>
					</div >
				),
				sorter: {
					compare: (a, b) => {
						a = a.carRegNo.toLowerCase();
						b = b.carRegNo.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},

			{
				title: 'Current MOT Expiry Date',
				dataIndex: 'currentMotExpiryDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.currentMotExpiryDate).unix() - moment(b.currentMotExpiryDate).unix(),
				width: 200
			},

			{
				title: 'Previous MOT Expiry Date',
				dataIndex: 'previousMotExpiryDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.previousMotExpiryDate).unix() - moment(b.previousMotExpiryDate).unix(),
				width: 200
			},

			{
				title: 'Current Mileage (miles)',
				dataIndex: 'currentMileage',
				sorter: {
					compare: (a, b) => a.currentMileage.length - b.currentMileage.length,
				},
				width: 150

			},

			{
				title: 'Previous Mileage (miles)',
				dataIndex: 'previousMileage',
				sorter: {
					compare: (a, b) => a.previousMileage.length - b.previousMileage.length,
				},
				width: 150

			},

			{
				title: 'MOT Status',
				dataIndex: 'motStatus',
				render: status => (
					<Tag className="text-capitalize" color={status.toUpperCase() === 'VALID' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.motStatus.length - b.motStatus.length,
				},
			},

		];

		return (
			<div style={AppStyles.marginTop20}>
				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={20} lg={20}>

						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="MOT Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("motStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Valid">Valid</Option>
									<Option value="Expired">Expired</Option>
								</Select>


								<Input
									placeholder="Car Registration Number"
									onChange={(val) => this.handleChangeInput("carRegNo", val)}
									style={componentStyles.carRegNoStyle} />


								<Button
									// disabled={!(search.motStatus && search.carRegNo)}
									onClick={() => { this.searchInTable() }}
									style={componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>
					<Col xs={24} sm={24} md={0} lg={0}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.justifyContentCenter}>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="MOT Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("motStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Valid">Valid</Option>
									<Option value="Expired">Expired</Option>
								</Select>


								<Input
									placeholder="Car Registration Number"
									onChange={(val) => this.handleChangeInput("carRegNo", val)}
									style={componentStyles.carRegNoStyle} />


								<Button
									// disabled={!(search.motStatus && search.carRegNo)}
									onClick={() => { this.searchInTable() }}
									style={componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Vehicles List" >
							<Table bordered columns={tableColumns} dataSource={vehicles} rowKey='id' scroll={{ x: 1100, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default VehiclesList
