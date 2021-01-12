import { Button, Col, Row } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import { GuardsList } from "../../pages/Guard/guard-list/index";
import { AppStyles } from "./../../../../assets/styles";
import { componentStyles } from "./../styles";
import {
  AnnualStatisticData,
  RecentTransactionData, VisitorChartData
} from './DefaultDashboardData';





export const DefaultDashboard = (props) => {
  const [] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [] = useState(RecentTransactionData)


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
      <Row gutter={16} justify="center">
        <Col xs={24} sm={24} md={24} lg={24}>

          <Row gutter={16}>
            {
              annualStatisticData.map((elm, i) => (
                <Col xs={24} sm={24} md={8} lg={8} xl={8} key={i}>
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
          <GuardsList propsData={props} />
        </Col>
      </Row>
    </>
  )
}


export default withRouter(DefaultDashboard);
