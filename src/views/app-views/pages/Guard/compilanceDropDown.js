import { Col, Row, Steps, Select, Card } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../assets/styles";
import CompilanceInterviews from '../Compilance/compilance-interviews';
import CompilanceTraining from '../Compilance/compilance-trainings';
import CompilanceVetting from '../Compilance/compilance-vetting';
import { componentStyles } from "./styles";
const { Option } = Select;

const { Step } = Steps;



export class CompilanceData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            compilanceType: 'interviews'
        };
    }

    
    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { compilanceType } = this.state;
        return (
            <Row justify="center">
                <Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
                    <Card
                        extra={
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24}>

                                    <Select
                                        showSearch
                                        style={componentStyles.selectStyle}
                                        bordered={false}
                                        placeholder="Interviews"
                                        optionFilterProp="children"
                                        onChange={(val) => this.handleChange("compilanceType", val)}
                                        // onFocus={onFocus}
                                        // onBlur={onBlur}
                                        // onSearch={onSearch}
                                        filterOption={(input, option) =>
                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="interviews">Interviews</Option>
                                        <Option value="vetting">Vetting</Option>
                                        <Option value="trainings">Trainings</Option>
                                    </Select>
                                </Col>
                            </Row>
                        }
                        className="card" title="Compliance Information" style={AppStyles.paddingBottom20}>


                        <div style={AppStyles.marginTop20}>
                            {'interviews' === compilanceType ?
                                < CompilanceInterviews /> :
                                'vetting' === compilanceType ?
                                    < CompilanceVetting /> :
                                    'trainings' === compilanceType ?
                                        < CompilanceTraining /> : null
                            }
                        </div>
                    </Card>
                </Col>




            </Row>
        )

    }
}

export default CompilanceData
