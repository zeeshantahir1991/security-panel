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
import { GuardsList } from "../../pages/Guard/guard-list/index"
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

export const DefaultDashboard = (props) => {
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
  function goToAddGuard() {
    props.history.push({
      pathname: '/app/pages/add-guard',
    })
  }
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Row gutter={16} justify="end">

            <Col xs={20} sm={20} md={6} lg={6} xl={6} style={AppStyles.marginBottom20}>
              <Button onClick={goToAddGuard} style={componentStyles.searchButton} htmlType="submit" block>
                Add Guard
		          </Button>
            </Col>

          </Row>
          <Row gutter={16}>
            {
              annualStatisticData.map((elm, i) => (
                <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                  <StatisticWidget
                    title={elm.title}
                    value={elm.value}
                    status={elm.status}
                    subtitle={elm.subtitle}
                    backgroundColor={elm.backgroundColor}
                  />
                </Col>
              ))
            }
          </Row>

        </Col>
      </Row>
      <Row gutter={16}>

        <Col xs={24} sm={24} md={24} lg={24} style={AppStyles.justifyContentCenter}>
          <GuardsList />
        </Col>
      </Row>
    </>
  )
}


export default withRouter(DefaultDashboard);
