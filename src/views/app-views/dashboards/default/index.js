import React, { useState } from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag, Select } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import ChartWidget from 'components/shared-components/ChartWidget';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import GoalWidget from 'components/shared-components/GoalWidget';
import {
  VisitorChartData,
  AnnualStatisticData,
  RecentTransactionData
} from './DefaultDashboardData';
import ApexChart from "react-apexcharts";
import { apexLineChartDefaultOption, COLOR_2 } from 'constants/ChartConstant';
import {
  UserAddOutlined,
  FileExcelOutlined,
  PrinterOutlined,
  PlusOutlined,
  EllipsisOutlined,
  StopOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import utils from 'utils';
import exampleService from 'services/ExampleService'
import { withRouter } from 'react-router-dom';
import { AppStyles } from "./../../../../assets/styles";
import { AppColors } from "./../../../../assets/styles/colors";
import { componentStyles } from "./../styles";
import { GuardsList } from "./../../pages/guard-list/index"
import SearchInput from "./../../../../components/layout-components/NavSearch/SearchInput.js"

const { Option } = Select;

const MembersChart = props => (
  <ApexChart {...props} />
)

const memberChartOption = {
  ...apexLineChartDefaultOption,
  ...{
    chart: {
      sparkline: {
        enabled: true,
      }
    },
    colors: [COLOR_2],
  }
}

const pushRoute = () => {
  console.log('execute')
  exampleService.getPost().then(resp => {
    console.log('resp', resp)
  })
}



const latestTransactionOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <ReloadOutlined />
          <span className="ml-2">Refresh</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <PrinterOutlined />
          <span className="ml-2">Print</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="12">
      <span>
        <div className="d-flex align-items-center">
          <FileExcelOutlined />
          <span className="ml-2">Export</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const cardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
    <a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
      <EllipsisOutlined />
    </a>
  </Dropdown>
)

const tableColumns = [
  {
    title: 'Customer',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar size={30} className="font-size-sm" style={{ backgroundColor: record.avatarColor }}>
          {utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: () => <div className="text-right">Status</div>,
    key: 'status',
    render: (_, record) => (
      <div className="text-right">
        <Tag className="mr-0" color={record.status === 'Approved' ? 'cyan' : record.status === 'Pending' ? 'blue' : 'volcano'}>{record.status}</Tag>
      </div>
    ),
  },
];

const onChange = (value) => {
  console.log(`selected ${value}`);
}

export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [recentTransactionData] = useState(RecentTransactionData)


  // function onBlur() {
  //   console.log('blur');
  // }

  // function onFocus() {
  //   console.log('focus');
  // }

  // function onSearch(val) {
  //   console.log('search:', val);
  // }
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row gutter={16}>
            {
              annualStatisticData.map((elm, i) => (
                <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                  <StatisticWidget
                    title={elm.title}
                    value={elm.value}
                    status={elm.status}
                    subtitle={elm.subtitle}
                  />
                </Col>
              ))
            }
          </Row>

        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card title="Filters">
            <div className="mt-3">
              <Select
                showSearch
                style={componentStyles.selectStyle}
                bordered={false}
                placeholder="Employment Type"
                optionFilterProp="children"
                onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Employment Type 1</Option>
                <Option value="lucy">Employment Type 2</Option>
                <Option value="tom">Employment Type 3</Option>
              </Select>
            </div>
            <div className="mt-3">
              <Select
                showSearch
                style={componentStyles.selectStyle}
                bordered={false}
                placeholder="Subcontractor Name"
                optionFilterProp="children"
                onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">ABC</Option>
                <Option value="lucy">DEF</Option>
                <Option value="tom">GHI</Option>
              </Select>
            </div>
            <div className="mt-3">
              <Select
                showSearch
                style={componentStyles.selectStyle}
                bordered={false}
                placeholder="Position"
                optionFilterProp="children"
                onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">SG</Option>
                <Option value="lucy">SG</Option>
                <Option value="tom">SG</Option>
              </Select>
            </div>
            <div className="mt-3">
              <Select
                showSearch
                style={componentStyles.selectStyle}
                bordered={false}
                placeholder="Status"
                optionFilterProp="children"
                onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Active</Option>
                <Option value="lucy">Inactive</Option>
              </Select>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={17} style={{ justifyContent: 'center' }}>
          <Card title="Guards List" extra={cardDropdown(latestTransactionOption)}>
            <div style={{ width: 300, marginBottom: 25 }}>
              <SearchInput />
            </div>
            <GuardsList />
          </Card>
        </Col>
      </Row>
    </>
  )
}


export default withRouter(DefaultDashboard);
