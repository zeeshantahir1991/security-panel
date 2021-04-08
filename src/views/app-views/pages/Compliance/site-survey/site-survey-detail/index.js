import { Col, Row, Select, Steps } from 'antd';
import { AppStyles } from "assets/styles";
import React, { Component } from 'react';
import ClientAndSiteInfo from "./ClientAndSiteInfo";
import SiteInformation from './SiteInformation';
import HealthAndSafety from './HealthAndSafety';

const { Step } = Steps;



const { Option } = Select;



export class SiteSurveyDetail extends Component {

	state = {
		step: "First"
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


	callbackFunction = (step) => {
		if (!step) {
			this.props.parentCallback(false)
		} else {
			this.setState({ step: step })

		}
	}

	render() {
		const { sites, search, currStatus, step } = this.state;
		let { record } = this.props;


		return (
			<>
				<Row justify="center">
					<Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
						<Steps>
							<Step title="First"

								style={AppStyles.pointer}
								// onClick={() => this.setState({ step: "First" })}
								icon={
									<div style={'First' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
										1
									</div>
								} />
							<Step title="Second"
								style={AppStyles.pointer}
								// onClick={() => this.setState({ step: "Second" })}

								icon={
									<div style={'Second' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
										2
									</div>
								} />
							<Step status="finish" title="Last"
								style={AppStyles.pointer}
								// onClick={() => this.setState({ step: "Last" })}

								icon={
									<div style={'Last' === step ? AppStyles.stepperSelectedItem : AppStyles.stepperItem}>
										3
									 </div>
								} />

						</Steps>
					</Col>

				</Row>
				{
					step === "First" ?
						<ClientAndSiteInfo record={record} parentCallback={this.callbackFunction} /> :
						step === "Second" ? <SiteInformation record={record} parentCallback={this.callbackFunction} /> :
							step === "Last" ? <HealthAndSafety record={record} parentCallback={this.callbackFunction} /> : null


				}

			</>
		)
	}
}

export default SiteSurveyDetail
