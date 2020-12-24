import { Card, Col, Row, Table } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../../assets/styles";

const compilanceTemplatesData = [
	{
		"id": "1",
		"templateName": "Candidate Application Template",
		"pdfDocumentName": "Candidate Application",
		"pdfDocumentIssueNumber": 1

	},
	{
		"id": "2",
		"templateName": "Interview Template",
		"pdfDocumentName": "Interview Record",
		"pdfDocumentIssueNumber": 3

	},
	{
		"id": "3",
		"templateName": "Vetting Template",
		"pdfDocumentName": "Vetting Record",
		"pdfDocumentIssueNumber": 1

	},
	{
		"id": "4",
		"templateName": "Training Template",
		"pdfDocumentName": "Training Record",
		"pdfDocumentIssueNumber": 4

	}
]



export class CompilanceTemplates extends Component {

	state = {
		compilanceTemplates: compilanceTemplatesData,

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



	render() {
		const { compilanceTemplates } = this.state;

		const tableColumns = [
			{
				title: 'Templates',
				dataIndex: 'templateName',
				render: (_, record) => (
					<a className="d-flex">
						{record.templateName}
					</a>
				),
				sorter: {
					compare: (a, b) => {
						a = a.templateName.toLowerCase();
						b = b.templateName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 250,
				fixed: 'left'
			},

			{
				title: 'PDF Document Name',
				dataIndex: 'pdfDocumentName',
				render: (_, record) => (
					<div className="d-flex">
						<span>{record.pdfDocumentName}</span>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.pdfDocumentName.toLowerCase();
						b = b.pdfDocumentName.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
				width: 250
			},

			{
				title: 'PDF Document Issue Number',
				dataIndex: 'pdfDocumentIssueNumber',
				sorter: {
					compare: (a, b) => a.pdfDocumentIssueNumber.length - b.pdfDocumentIssueNumber.length,
				},
			},

		];

		return (
			<div style={AppStyles.marginTop50}>
				<Row gutter={16} justify="center">

					<Col xs={24} sm={24} md={20} lg={20} style={AppStyles.justifyContentCenter}>
						<Card className="card" title="Compilance Template List" >
							<Table bordered columns={tableColumns} dataSource={compilanceTemplates} rowKey='id' scroll={{ x: 600, y: 300 }} />
						</Card>
					</Col>
				</Row>

				{/* <GuardsView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/> */}
			</div>
		)
	}
}

export default CompilanceTemplates
