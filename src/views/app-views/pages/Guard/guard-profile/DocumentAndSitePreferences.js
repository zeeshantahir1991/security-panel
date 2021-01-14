import { Card, Col, Menu, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "./../../../../../assets/styles";
import { AppColors } from "./../../../../../assets/styles/colors";
import { componentStyles } from "./../styles";
import Docs from './docs/index';
import Holidays from './holidays-and-availability/index';
import SitePreferrences from './site-preferrences/index';

const { Option } = Select;

export class DocumentAndSitePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "Documents and Preferences"

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
        const { record } = this.props;
        return (

            <Row
                // justify="center"
                style={AppStyles.marginTop20}>

                <Col xs={24} sm={24} md={24} lg={24} >


                    <Row >
                        <Col className="card" xs={24} sm={24} md={4} lg={4} style={{ backgroundColor: 'white', height:"10%" }}>

                            <Menu mode="vertical">

                                <Menu.Item
                                    className="menuHover"
                                    onClick={() => this.setState({ type: "Documents and Preferences" })}
                                    style={'Documents and Preferences' === type ? componentStyles.staffMenuItemSelected : null
                                    }
                                >
                                    {/* <img style={AppStyles.staffSideBarIcon} src={'/img/sidebar/personal-information.png'} alt={`logo`} /> */}

                                    <span
                                        style={{
                                            color: 'Documents and Preferences' === type ? AppColors.pictonBlue : null
                                        }}

                                    >
                                        Documents and Preferences

                                    </span>
                                </Menu.Item>


                                <Menu.Item
                                    className="menuHover"
                                    onClick={() => this.setState({ type: "Holidays" })}
                                    style={'Holidays' === type ? componentStyles.staffMenuItemSelected : null
                                    }
                                >
                                    <span
                                        style={{
                                            color: 'Holidays' === type ? AppColors.pictonBlue : null
                                        }}
                                    >
                                        Holidays
                                   </span>
                                </Menu.Item>

                                <Menu.Item
                                    className="menuHover"
                                    onClick={() => this.setState({ type: "Docs" })}
                                    style={'Docs' === type ? componentStyles.staffMenuItemSelected : null
                                    }
                                >
                                    <span
                                        style={{
                                            color: 'Docs' === type ? AppColors.pictonBlue : null
                                        }}
                                    >
                                        Docs
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
                                            <Option value="Documents and Preferences">Documents and Preferences</Option>
                                            <Option value="Holidays">Holidays</Option>
                                            <Option value="Docs">Docs</Option>




                                        </Select>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} style={AppStyles.alignSelfCenter}>

                                        <div style={componentStyles.nameStyle}>
                                            {record.name}
                                        </div>

                                    </Col>

                                </Row>


                                {type === "Documents and Preferences" ?
                                    <SitePreferrences /> :
                                    type === "Holidays" ?
                                        <Holidays /> :
                                        type === "Docs" ?
                                            <Docs /> : null
                                }

                            </Card>
                        </Col>
                    </Row>
                </Col>

            </Row>


        )

    }
}

export default DocumentAndSitePreferences
