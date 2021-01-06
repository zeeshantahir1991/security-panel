import { Col, Row, Steps, Select, Card, Tabs } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../assets/styles";
import ComplianceInterviews from '../Compliance/compliance-interviews';
import ComplianceTraining from '../Compliance/compliance-trainings';
import ComplianceVetting from '../Compliance/compliance-vetting';
import { componentStyles } from "./styles";
const { Option } = Select;
const { TabPane } = Tabs;

const { Step } = Steps;



export class ComplianceData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            complianceType: 'interviews'
        };
    }


    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { complianceType } = this.state;
        return (
            <Row justify="center">
                <Col style={AppStyles.marginBottom50} xs={24} sm={24} md={20} lg={20} >
                    <div style={componentStyles.typeStyle}>
                        Compliance Information
                    </div>
                    <Card
                        // extra={
                        //     <Row>
                        //         <Col xs={24} sm={24} md={24} lg={24}>

                        //             <Select
                        //                 showSearch
                        //                 style={componentStyles.dropDownStyleWithWidth200}
                        //                 bordered={false}
                        //                 placeholder="Interviews"
                        //                 optionFilterProp="children"
                        //                 onChange={(val) => this.handleChange("complianceType", val)}
                        //                 // onFocus={onFocus}
                        //                 // onBlur={onBlur}
                        //                 // onSearch={onSearch}
                        //                 filterOption={(input, option) =>
                        //                     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        //                 }
                        //             >
                        //                 <Option value="interviews">Interviews</Option>
                        //                 <Option value="vetting">Vetting</Option>
                        //                 <Option value="trainings">Trainings</Option>
                        //             </Select>
                        //         </Col>
                        //     </Row>
                        // }
                        className="card" style={AppStyles.paddingBottom20}>


                        <div style={AppStyles.marginTop20}>
                            <Tabs defaultActiveKey="1" tabPosition={'left'}>
                                <TabPane tab={`Interviews`} key={1}>
                                    <ComplianceInterviews />
                                </TabPane>
                                <TabPane tab={`Vetting`} key={2} >
                                    <ComplianceVetting />
                                </TabPane>
                                <TabPane tab={`Trainings`} key={3} >
                                    <ComplianceTraining />
                                </TabPane>
                            </Tabs>
                            {/* {'interviews' === complianceType ?
                                < ComplianceInterviews /> :
                                'vetting' === complianceType ?
                                    < ComplianceVetting /> :
                                    'trainings' === complianceType ?
                                        < ComplianceTraining /> : null
                            } */}
                        </div>
                    </Card>
                </Col>




            </Row>
        )

    }
}

export default ComplianceData
