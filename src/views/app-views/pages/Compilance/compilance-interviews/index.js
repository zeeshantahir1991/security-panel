import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, Form, Input, message, Button, Row, Col, Dropdown, Select, Menu, DatePicker } from 'antd';
import {
	EyeOutlined, DeleteOutlined,
	UserAddOutlined,
	FileExcelOutlined,
	PrinterOutlined,
	PlusOutlined,
	EllipsisOutlined,
	StopOutlined,
	ReloadOutlined
} from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";
import SearchInput from "../../../../../components/layout-components/NavSearch/SearchInput.js"
import compilanceData from "assets/data/compilance-interviews-list.data";
import StatisticWidget from 'components/shared-components/StatisticWidget';

const interviewStatisticData = [
	{
		title: 'Interview Completed',
		value: '20',
		backgroundColor: "#A6D34E"
		// status: -11.4,
		// subtitle: `Compare to last year (2019)`
	},
	{
		title: 'Pending Interview',
		value: '20',
		backgroundColor: "#EF4545"
		// status: 8.2,
		// subtitle: `Compare to last year (2019)`
	}
]

const { Option } = Select;

const rules = {

	interviewer: [
		{
			required: true,
			message: 'Please input your interviewer name'
		}
	]

}

export class CompilanceInterviews extends Component {

	state = {
		compilance: compilanceData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			interviewStatus: "",
			interviewer: "",
			interviewDate: "",
			guardName: "",
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
		const { compilance, search } = this.state;
		let userList = compilanceData
		let interviewStatus = search.interviewStatus
		let interviewer = search.interviewer
		let interviewDate = search.interviewDate
		let guardName = search.guardName

		let filteredArray = []
		filteredArray = userList.filter(element => {
			if (interviewStatus && interviewer && interviewDate && guardName) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase() && moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD") && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewStatus && interviewer && interviewDate) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase() && moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD")

			} else if (interviewStatus && interviewer && guardName) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase() && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewer && interviewDate && guardName) {

				return element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase() && moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD") && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewStatus && interviewDate && guardName) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD") && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewStatus && interviewer) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase()

			} else if (interviewStatus && interviewDate) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD")

			} else if (interviewStatus && guardName) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase() && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewer && interviewDate) {

				return element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase() && moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD")

			} else if (interviewer && guardName) {

				return element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase() && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewDate && guardName) {

				return moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD") && element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			} else if (interviewStatus) {

				return element.interviewStatus.trim().toUpperCase() == interviewStatus.trim().toUpperCase()

			} else if (interviewer) {

				return element.interviewer.trim().toUpperCase() == interviewer.trim().toUpperCase()

			} else if (interviewDate) {

				return moment.unix(element.interviewDate).format("YYYY/MM/DD") == moment(interviewDate).format("YYYY/MM/DD")

			} else if (guardName) {

				return element.guardName.trim().toUpperCase() == guardName.trim().toUpperCase()

			}

		});
		this.setState({ compilance: filteredArray })

	}

	goToAddSubContractor = () => {
		this.props.history.push({
			pathname: '/app/pages/add-sub-contractor',
		})
	}

	render() {
		const { compilance, userProfileVisible, selectedUser, search } = this.state;

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
				title: 'Interview Status',
				dataIndex: 'interviewStatus',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.interviewStatus}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.interviewStatus.toLowerCase();
						b = b.interviewStatus.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
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
				title: 'Interviewer',
				dataIndex: 'interviewer',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.interviewer}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.interviewer.toLowerCase();
						b = b.interviewer.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},
			{
				title: 'Interview Date',
				dataIndex: 'interviewDate',
				render: date => (
					<span>{date == "EMPTY" ? "EMPTY" : moment.unix(date).format("YYYY/MM/DD")} </span>
				),
				sorter: (a, b) => moment(a.interviewDate).unix() - moment(b.interviewDate).unix(),
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
								interviewStatisticData.map((elm, i) => (
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
									placeholder="Interview Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("interviewStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending">Pending</Option>
								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Interviewer"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("interviewer", val)}
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
									onChange={(val) => this.handleChange("interviewDate", val)}
									placeholder="Interview Date"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.interviewStatus || search.interviewer || search.interviewDate || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.interviewStatus || search.interviewer || search.interviewDate || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
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
									placeholder="Interview Status"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("interviewStatus", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="Completed">Completed</Option>
									<Option value="Pending">Pending</Option>
								</Select>


								<Select
									showSearch
									style={componentStyles.selectStyleSM}
									bordered={false}
									placeholder="Interviewer"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("interviewer", val)}
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
									onChange={(val) => this.handleChange("interviewDate", val)}
									placeholder="Interview Date"
									// defaultValue={moment('2015/01/01', 'YYYY/MM/DD')} 
									format={'YYYY/MM/DD'} />

								<Input
									placeholder="Guard Name"
									onChange={(val) => this.handleChangeInput("guardName", val)}
									style={componentStyles.filtersInputStyle} />
								<Button
									disabled={!(search.interviewStatus || search.interviewer || search.interviewDate || search.guardName)}
									onClick={() => { this.searchInTable() }}
									style={!(search.interviewStatus || search.interviewer || search.interviewDate || search.guardName) ? componentStyles.searchButton : componentStyles.searchEnabledButton}
									htmlType="submit" block>
									Search
					            </Button>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Compilance Interview List" >
							<Table bordered columns={tableColumns} dataSource={compilance} rowKey='id' scroll={{ x: 1100, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default CompilanceInterviews
