import { Card, Col, Form, Row, Select, Tabs } from 'antd';
import React, { Component } from 'react';
import { AppStyles } from "./../../../../../assets/styles";
import { componentStyles } from "./../styles";
import Docs from './docs/index'
import Holidays from './holidays-and-availability/index'
import SitePreferrences from './site-preferrences/index'

const { Option } = Select;
const { TabPane } = Tabs;

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

                <Row justify={'center'}>

                    <Col xs={24} sm={24} md={20} lg={20} >
                        <div style={componentStyles.typeStyle}>
                            Documents & Site Preferences
                        </div>
                        <Card
                            // extra={
                            //     <Row>
                            //         <Col xs={24} sm={24} md={24} lg={24}>

                            //             <Select
                            //                 showSearch
                            //                 style={componentStyles.dropDownStyleWithWidth200}
                            //                 bordered={false}
                            //                 placeholder="Site Preferences"
                            //                 optionFilterProp="children"
                            //                 onChange={(val) => this.handleChange("type", val)}
                            //                 // onFocus={onFocus}
                            //                 // onBlur={onBlur}
                            //                 // onSearch={onSearch}
                            //                 filterOption={(input, option) =>
                            //                     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            //                 }
                            //             >
                            //                 <Option value="site">Site Preferences</Option>
                            //                 <Option value="holidays">Holidays & Availability</Option>
                            //                 <Option value="docs">Docs</Option>
                            //             </Select>
                            //         </Col>
                            //     </Row>
                            // }
                            className="card" style={AppStyles.paddingBottom20}>
                            <Tabs defaultActiveKey="1" tabPosition={'left'}>
                                <TabPane tab={`Site Preferrences`} key={1}>
                                    <SitePreferrences />
                                </TabPane>
                                <TabPane tab={`Holidays`} key={2} >
                                    <Holidays />
                                </TabPane>
                                <TabPane tab={`Docs`} key={3} >
                                    <Docs />
                                </TabPane>
                            </Tabs>
                            {/* {type === "site" ?
                                <SitePreferrences /> :
                                type === "holidays" ?
                                    <Holidays /> :
                                    <Docs />
                            } */}
                        </Card>
                    </Col>
                </Row>
        )

    }
}

export default DocumentAndSitePreferences
