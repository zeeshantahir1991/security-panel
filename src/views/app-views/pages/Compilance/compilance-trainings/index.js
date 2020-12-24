import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Input, Row, Select, Table, Tooltip } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import moment from 'moment';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const trainingData = [
	{
		"id": "1",
		"guardName": "John Smith",
		"img": "/img/avatars/thumb-1.jpg",
		"trainingStatus": "Completed",
		"trainer": "SC user A",
		"auditBy": "SC user B",
		"trainingDate": 1583107200,
		"auditDate": 1583107200,

	},
	{
		"id": "2",
		"guardName": "Terrance Moreno",
		"img": "/img/avatars/thumb-2.jpg",
		"trainingStatus": "Pending Training",
		"trainer": "Empty",
		"auditBy": "SC user A",
		"trainingDate": 1583107200,
		"auditDate": 1583107200,


	},
	{
		"id": "3",
		"guardName": "Ron Vargas",
		"img": "/img/avatars/thumb-3.jpg",
		"trainingStatus": "Pending Training",
		"trainer": "Empty",
		"auditBy": "SC user A",
		"trainingDate": 1583107200,
		"auditDate": 1583107200,
	}
]

const trainingStatisticData = [
	{
		title: 'Training Completed',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Training',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	}
]

const { Option } = Select;



export class CompilanceTraining extends Component {

	state = {
		training: trainingData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			trainingStatus: "",
			trainer: "",
			auditBy: "",
			guardName: "",
			trainingDate: ""
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
		let userList = trainingData
		let trainingStatus = search.trainingStatus
		let trainer = search.trainer
		let auditBy = search.auditBy
		let guardName = search.guardName
		let trainingDate = search.trainingDate

		let filteredArray = []
		filteredArray = userList.filter(element => {

			return filterCombination(trainingStatus, trainer, auditBy, guardName, trainingDate, element)


		});
		this.setState({ training: filteredArray })

	}


	render() {
		const { training, search } = this.state;

		const tableColumns = [
			{
				title: 'Guard Name',
				dataIndex: 'guardName',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.guardName} />
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
				title: 'Training Status',
				dataIndex: 'trainingStatus',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.trainingStatus}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.trainingStatus.toLowerCase();
						b = b.trainingStatus.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},



			{
				title: 'Trainer',
				dataIndex: 'trainer',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.trainer}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.trainer.toLowerCase();
						b = b.trainer.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Training Date',
				dataIndex: 'trainingDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.trainingDate).unix() - moment(b.trainingDate).unix(),
				width: 200
			},
			{
				title: 'Audit By',
				dataIndex: 'auditBy',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.auditBy}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.auditBy.toLowerCase();
						b = b.auditBy.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},

			{
				title: 'Audit Date',
				dataIndex: 'auditDate',
				render: date => (
					<span>{date === "TBD" ? "TBD" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.auditDate).unix() - moment(b.auditDate).unix(),
				width: 200
			},

			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => { this.showUserProfile(elm) }} size="small" />
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id) }} size="small" />
						</Tooltip>
					</div>
				)
			}
		];

		return (
			<>
				<Row gutter={16} justify="center">
					<Col xs={20} sm={20} md={20} lg={20}>

						<Row gutter={16}>
							{
								trainingStatisticData.map((elm, i) => (
									<Col xs={24} sm={24} md={12} lg={12} xl={12} key={i}>
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

					</Col>
				</Row>
				<Row gutter={16} justify="center">
					<Col xs={0} sm={0} md={20} lg={20}>
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Training Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("trainingStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending Training">Pending Training</Option>
									<Option value="Pending Audit Checks">Pending Audit Checks</Option>

								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Trainer"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("trainer", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Audit By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("auditBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("trainingDate", val)}
									placeholder="Training Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.trainingStatus || search.trainer || search.auditBy || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.trainingStatus || search.trainer || search.auditBy || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Training Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("trainingStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending Training">Pending Training</Option>
									<Option value="Pending Audit Checks">Pending Audit Checks</Option>

								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Trainer"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("trainer", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Audit By"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("auditBy", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="SC user A">SC user A </Option>
									<Option value="SC user B">SC user B</Option>
								</Select>

								<DatePicker style={componentStyles.datePicker}
									onChange={(val) => this.handleChange("trainingDate", val)}
									placeholder="Training Period"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.trainingStatus || search.trainer || search.auditBy || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.trainingStatus || search.trainer || search.auditBy || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Training List" >
							<Table bordered columns={tableColumns} dataSource={training} rowKey='id' scroll={{ x: 1400, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default CompilanceTraining



export const filterCombination = (trainingStatus, trainer, auditBy, guardName, trainingDate, element) => {
	if (trainingStatus && trainer && auditBy && guardName && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")

	} else if (trainingStatus && trainer && auditBy && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainingStatus && trainer && guardName && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainer && auditBy && guardName && trainingDate) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainingStatus && auditBy && guardName && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")

	} else if (trainingStatus && trainer && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainingStatus && auditBy && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainingStatus && guardName && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")

	} else if (trainer && auditBy && trainingDate) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainer && guardName && trainingDate) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (auditBy && guardName && trainingDate) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainingStatus && trainer && auditBy) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (trainingStatus && trainer && guardName) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (trainer && auditBy && guardName) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (trainingStatus && auditBy && guardName) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()
	} else if (trainingStatus && trainingDate) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (trainer && trainingDate) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (auditBy && trainingDate) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")


	} else if (guardName && trainingDate) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase() &&
			moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")

	} else if (trainingStatus && trainer) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase()

	} else if (trainingStatus && auditBy) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (trainingStatus && guardName) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (trainer && auditBy) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (trainer && guardName) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (auditBy && guardName) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase() &&
			element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (trainingDate) {

		return moment.unix(element.trainingDate).format("YYYY/MM/DD") === moment(trainingDate).format("YYYY/MM/DD")

	} else if (guardName) {

		return element.guardName.trim().toUpperCase() === guardName.trim().toUpperCase()

	} else if (auditBy) {

		return element.auditBy.trim().toUpperCase() === auditBy.trim().toUpperCase()

	} else if (trainer) {

		return element.trainer.trim().toUpperCase() === trainer.trim().toUpperCase()

	} else if (trainingStatus) {

		return element.trainingStatus.trim().toUpperCase() === trainingStatus.trim().toUpperCase()

	}
}
