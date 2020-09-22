import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "layouts/app-layout";
import AuthLayout from 'layouts/auth-layout';
import AppLocale from "lang";
import { IntlProvider } from "react-intl";
import { ConfigProvider } from 'antd';

function RouteInterceptor({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export const Views = (props) => {
  const { locale, token, location } = props;
  const currentAppLocale = AppLocale[locale];
  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}>
      <ConfigProvider locale={currentAppLocale.antd}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/app" />
          </Route>
          <Route path="/auth">
            <AuthLayout />
          </Route>
          <RouteInterceptor path="/app" isAuthenticated={token}>
            <AppLayout location={location}/>
          </RouteInterceptor>
        </Switch>
      </ConfigProvider>
    </IntlProvider>
  )
}


const mapStateToProps = ({ theme, auth }) => {
  const { locale } =  theme;
  const { token } = auth;
  return { locale, token }
};

export default withRouter(connect(mapStateToProps)(Views));