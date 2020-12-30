import { Card, Col, Form, Row, Select } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";
import Docs from './docs/index'
import Holidays from './holidays-and-availability/index'
import SitePreferrences from './site-preferrences/index'

const { Option } = Select;

export class DocumentAndSitePreferences extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: "site"

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

        return (

            <div style={AppStyles.marginTop50}>
                <Row justify={'center'}>

                    <Col xs={24} sm={24} md={20} lg={20} >
                        <Card
                            extra={
                                <Row>
                                    <Col xs={24} sm={24} md={24} lg={24}>

                                        <Select
                                            showSearch
                                            style={componentStyles.selectStyle}
                                            bordered={false}
                                            placeholder="Site Preferences"
                                            optionFilterProp="children"
                                            onChange={(val) => this.handleChange("type", val)}
                                            // onFocus={onFocus}
                                            // onBlur={onBlur}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                        >
                                            <Option value="site">Site Preferences</Option>
                                            <Option value="holidays">Holidays & Availability</Option>
                                            <Option value="docs">Docs</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            }
                            className="card" title="Documents & Site Preferences" style={AppStyles.paddingBottom20}>
                            {type === "site" ?
                                <SitePreferrences /> :
                                type === "holidays" ?
                                    <Holidays /> :
                                    <Docs />
                            }
                        </Card>
                    </Col>
                </Row>
            </div>
        )

    }
}

export default DocumentAndSitePreferences
