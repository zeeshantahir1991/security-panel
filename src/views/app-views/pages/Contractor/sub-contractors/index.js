import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Row, Select, Tag, Tooltip } from 'antd';
import { Table } from "ant-table-extensions";

import userData from "assets/data/contractor-list.data.json";
import AvatarStatus from 'components/shared-components/AvatarStatus';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";
import { componentStyles } from "./../styles";

const { Option } = Select;


export class ContractorList extends Component {

	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null,
		search: {
			securityServices: "",
			subcontractName: ""
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
		let userList = userData
		let securityServices = search.securityServices
		let subcontractName = search.subcontractName
		let filteredArray = userList.filter((el, idx) => {
			if (securityServices && subcontractName) {
		       return userList[idx][securityServices].toUpperCase() === "YES" && el.companyName.toUpperCase() === subcontractName.toUpperCase()
		    } else {
				return userList
			}
		});

		console.log("asdsadasd",filteredArray);

		// let filteredArray = []
		// filteredArray = userList.filter(element => {
		// 	if (securityServices && subcontractName) {

		// 		return element.securityServices === securityServices && element.companyName.toUpperCase() === subcontractName.toUpperCase()
			
		// 	} 

		// });
		this.setState({ users: filteredArray })

	}

	goToAddSubContractor=()=> {
		this.props.history.push({
		  pathname: '/app/pages/add-sub-contractor',
		})
	  }

	render() {
		const { users } = this.state;

		const tableColumns = [
			{
				title: 'Company Name',
				dataIndex: 'companyName',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.companyName} />
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.companyName.toLowerCase();
						b = b.companyName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200,
				fixed: 'left'
			},
			
			{
				title: 'Email',
				dataIndex: 'email',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.email}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.email.toLowerCase();
						b = b.email.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 200
			},
			{
				title: 'Phone',
				dataIndex: 'phoneNumber',
				sorter: {
					compare: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
				},
				width: 150
			},
		
			{
				title: 'ACS reference Number',
				dataIndex: 'acsRefNumber',
				sorter: {
					compare: (a, b) => {
						a = a.acsRefNumber.toLowerCase();
						b = b.acsRefNumber.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Status',
				dataIndex: 'status',
				render: status => (
					<Tag className="text-capitalize" color={status === 'active' ? 'cyan' : 'red'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: 'CP',
				dataIndex: 'cp',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.cp}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.cp.toLowerCase();
						b = b.cp.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},

			{
				title: 'SG',
				dataIndex: 'sg',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.sg}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.sg.toLowerCase();
						b = b.sg.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},

			{
				title: 'CCTV',
				dataIndex: 'cctv',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.cctv}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.cctv.toLowerCase();
						b = b.cctv.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},

			{
				title: 'DS',
				dataIndex: 'ds',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.ds}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.ds.toLowerCase();
						b = b.ds.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},

			{
				title: 'VI',
				dataIndex: 'vi',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.vi}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.vi.toLowerCase();
						b = b.vi.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},

			{
				title: 'KH',
				dataIndex: 'kh',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.kh}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.kh.toLowerCase();
						b = b.kh.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
			},

			{
				title: 'CVIT',
				dataIndex: 'cvit',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.cvit}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.cvit.toLowerCase();
						b = b.cvit.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 100
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
					<Col xs={0} sm={0} md={20} lg={20}>
					{/* <Row gutter={16} justify="end">

                         <Col xs={20} sm={20} md={6} lg={6} xl={6} style={AppStyles.marginBottom20}>
                             <Button onClick={this.goToAddSubContractor} style={componentStyles.searchButton} htmlType="submit" block>
	                              Add Sub-Contractor
	                         </Button>
                         </Col>

                    </Row> */}
						<Card title="Filters" style={AppStyles.paddingBottom20}>
							<div style={AppStyles.flexDirectionRow}>

								<Select
									showSearch
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Security Services"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("securityServices", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="cp">CP</Option>
									<Option value="sg">SG</Option>
									<Option value="cctv">CCTV</Option>
									<Option value="ds">DS</Option>
									<Option value="vi">VI</Option>
									<Option value="kh">KH</Option>
									<Option value="cvit">CVIT</Option>
									<Option value="">None</Option>
								</Select>

							
									<Input
									 placeholder="Sub Contractor Name"
									 onChange={(val) => this.handleChangeInput("subcontractName", val)}
									 style={componentStyles.subcontractNameStyle}  />
						        
								
								<Button
									// disabled={!(search.securityServices && search.subcontractName)}
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
									style={componentStyles.selectStyle}
									bordered={false}
									placeholder="Security Services"
									optionFilterProp="children"
									onChange={(val) => this.handleChange("securityServices", val)}
									// onFocus={onFocus}
									// onBlur={onBlur}
									// onSearch={onSearch}
									filterOption={(input, option) =>
										option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
									}
								>
									<Option value="cp">CP</Option>
									<Option value="sg">SG</Option>
									<Option value="cctv">CCTV</Option>
									<Option value="ds">DS</Option>
									<Option value="vi">VI</Option>
									<Option value="kh">KH</Option>
									<Option value="cvit">CVIT</Option>
									<Option value="">None</Option>
								</Select>

								<div style={AppStyles.marginTop20}>
									<Input
									 placeholder="Sub Contractor Name"
									 onChange={(val) => this.handleChangeInput("subcontractName", val)}
									 style={componentStyles.borderColor}  />
								</div>
								
								<div style={AppStyles.marginTop20}>
									<Button
										// disabled={!(search.securityServices && search.subcontractName)}
										onClick={() => { this.searchInTable() }}
										style={componentStyles.searchEnabledButton}
										htmlType="submit"
										block>
										Search
										
					                </Button>
								</div>
							</div>
						</Card>
					</Col>

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Sub-Contractors List" >
							<Table searchable bordered columns={tableColumns} dataSource={users} rowKey='id' scroll={{ x: 1800, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</>
		)
	}
}

export default ContractorList
