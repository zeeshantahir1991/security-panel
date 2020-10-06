import React from 'react'
import { Row, Col, Card, Grid, Button, Badge, Menu, Layout } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MenuOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Link as RouteLink } from 'react-router-dom';

const { Header } = Layout;

const menuItem = [
    {
        title: "About Us",
        path: "/"
    },

    {
        title: "Solutions",
        path: "/"
    },
    {
        title: "Contact Us",
        path: "/"
    },
    {
        title: "FAQ's",
        path: "/"
    }
]

export class AuthHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {


        return (
            <>
                <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <Col xs={0} sm={0} md={24} lg={24}>
                        <Header className={`app-header `} >
                        <div className="nav-left logo">
                            <RouteLink to={'/'}>

                                <img style={{ height: 70, width: 200 }} src={'/img/logo1.png'} alt={`logo`} />
                            </RouteLink>
                        </div>
                        <div className="nav-right">
                            <Menu mode="horizontal">
                                {menuItem.map((el, i) => {
                                    return (
                                        <Menu.Item>
                                            <RouteLink to={el.path}>
                                                <span>
                                                    {el.title}
                                                </span>
                                            </RouteLink>
                                        </Menu.Item>
                                    );
                                })}
                                <Menu.Item>
                                    <RouteLink to={'/auth/login'}>
                                        <Button style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50 }} type="primary">
                                            Login
								            </Button>
                                    </RouteLink>
                                </Menu.Item>
                            </Menu>
                        </div>
                        </Header>
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center', textAlign: 'center' }}>
                    <Col xs={24} sm={24} md={0} lg={0}>
                        <Header className={`app-header `} >
                        <div className={'logo'}>
                            <RouteLink to={'/'}>

                                <img style={{ height: 50, width: 150 }} src={'/img/logo1.png'} alt={`logo`} />
                            </RouteLink>
                        </div>
                        <div className="nav-right" style={{ alignSelf: 'center' }}>
                            <Button type="secondary" onClick={this.toggleCollapsed}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>
                        </div>

                        </Header>
                    </Col>
                </Row>
                {this.state.collapsed ?
                    <Row>
                        <Col xs={24} sm={24} md={0} lg={0} style={{ backgroundColor: 'white', position: 'fixed', zIndex: 1, width: '100%' }}>
                            <div className="nav-center" style={{ alignSelf: 'center', marginTop: 70 }}>
                                <Menu mode="vertical" style={{ textAlign: 'center' }}>
                                    {menuItem.map((el, i) => {
                                        return (
                                            <Menu.Item>
                                                <RouteLink to={el.path}>
                                                    <span>
                                                        {el.title}
                                                    </span>
                                                </RouteLink>
                                            </Menu.Item>
                                        );
                                    })}
                                    <Menu.Item>
                                        <RouteLink to={'/auth/login'}>
                                            <span style={{ color: '#3f51b5' }}>
                                                Login
										    </span>
                                        </RouteLink>
                                    </Menu.Item>
                                </Menu>
                            </div>

                        </Col>
                    </Row>
                    : null
                }
            </>
        )
    }
}

