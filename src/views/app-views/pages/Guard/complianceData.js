import { Card, Col, Menu, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "../../../../assets/styles";
import { AppColors } from "../../../../assets/styles/colors"
import ComplianceInterviews from '../Compliance/compliance-interviews';
import ComplianceTraining from '../Compliance/compliance-trainings';
import ComplianceVetting from '../Compliance/compliance-vetting';
import SiaRecordList from './SiaRecords';
import { componentStyles } from "./styles";
const { Option } = Select;




export class ComplianceData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Interviews'
        };
    }


    handleChange = (type, value) => {
        console.log(`selected ${value}`);
        this.setState({

            [type]: value

        })

    }


    render() {
        const { type } = this.state;
        const {record, action} = this.props;
        return (
           
                           
                            <Row 
                            // justify="center"
                            style={AppStyles.marginTop20}
                            >

                            <Col xs={24} sm={24} md={24} lg={24} >
    
    
                                <Row >
                                    {/* <Col className="card" xs={24} sm={24} md={4} lg={4} style={{ backgroundColor: 'white' }}> */}
                                    <Col className="card" xs={24} sm={24} md={4} lg={4} style={{ backgroundColor: 'white', height:"10%" }} >
    
                                        <Menu mode="vertical" >
    
                                            <Menu.Item
                                                className="menuHover"
                                                onClick={() => this.setState({ type: "Interviews" })}
                                                style={'Interviews' === type ? componentStyles.staffMenuItemSelected : null
                                                }
                                            >
                                                {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}
    
                                                <span
                                                    style={{
                                                        color: 'Interviews' === type ? AppColors.pictonBlue : null
                                                    }}
    
                                                >
                                                    Interviews
    
                                                    </span>
                                            </Menu.Item>
    
    
                                            <Menu.Item
                                                className="menuHover"
                                                onClick={() => this.setState({ type: "Vetting" })}
                                                style={'Vetting' === type ? componentStyles.staffMenuItemSelected : null
                                                }
                                            >
                                                <span
                                                    style={{
                                                        color: 'Vetting' === type ? AppColors.pictonBlue : null
                                                    }}
                                                >
                                                    Vetting
                                                   </span>
                                            </Menu.Item>
    
                                            <Menu.Item
                                                className="menuHover"
                                                onClick={() => this.setState({ type: "Trainings" })}
                                                style={'Trainings' === type ? componentStyles.staffMenuItemSelected : null
                                                }
                                            >
                                                <span
                                                    style={{
                                                        color: 'Trainings' === type ? AppColors.pictonBlue : null
                                                    }}
                                                >
                                                    Trainings
                                                   </span>
                                            </Menu.Item>
                                            <Menu.Item
                                                className="menuHover"
                                                onClick={() => this.setState({ type: "SiaLicence" })}
                                                style={'SiaLicence' === type ? componentStyles.staffMenuItemSelected : null
                                                }
                                            >
                                                <span
                                                    style={{
                                                        color: 'SiaLicence' === type ? AppColors.pictonBlue : null
                                                    }}
                                                >
                                                    Sia Licence
                                                   </span>
                                            </Menu.Item>
                                            
    
    
                                        </Menu>
    
                                    </Col>
                                    <Col xs={24} sm={24} md={1} lg={1} >
                                    </Col>
                                    <Col className="card" xs={24} sm={24} md={19} lg={19} style={{ backgroundColor: 'white', borderRadius: 10 }}>
                                        <Card style={{ border: 0 }}
                                        >
    
                                            <Row justify={'start'} style={AppStyles.marginBottom20}>
                                                <Col xs={6} sm={6} md={6} lg={6} style={AppStyles.alignSelfCenter}>
                                                    <div style={componentStyles.typeStyle}>
                                                        {type}
                                                    </div>
                                                </Col>
                                                <Col xs={14} sm={14} md={14} lg={14}>
    
                                                    <Select
                                                        showSearch
                                                        style={componentStyles.dropDownStyleWithWidth200}
                                                        bordered={false}
                                                        placeholder={type ? type : "Select Type"}
                                                        value={type ? type : "Select Type"}
    
                                                        optionFilterProp="children"
                                                        onChange={(val) => this.handleChange("type", val)}
                                                        // onFocus={onFocus}
                                                        // onBlur={onBlur}
                                                        // onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        <Option value="Interviews">Interviews</Option>
                                                        <Option value="Vetting">Vetting</Option>
                                                        <Option value="Trainings">Trainings</Option>
                                                        <Option value="SiaLicence">Sia Licence</Option>
                                                  
    
    
    
                                                    </Select>
                                                </Col>
                                                <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfCenter}>

                                                   <div style={componentStyles.nameStyle}>
                                                        {record.name}
                                                    </div>

                                                </Col>
    
                                            </Row>
    
    
                                            {'Interviews' === type ?
                                                < ComplianceInterviews /> :
                                                  'Vetting' === type ?
                                                   < ComplianceVetting /> :
                                                     'Trainings' === type ?
                                                          < ComplianceTraining /> : 
                                                          'SiaLicence' === type ?
                                                          <SiaRecordList action={action} record={record} history={this.props.history} /> 
                                                          : null
                                                 }
    
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
    
                        </Row>
        )

    }
}

export default ComplianceData
