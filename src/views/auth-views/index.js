import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

export const AppViews = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="page"/>}>
      <Switch>
        <Route path={`${match.url}/login`} component={lazy(() => import(`./authentication/login`))} />
        <Route path={`${match.url}/login-1`} component={lazy(() => import(`./authentication/login-1`))} />
        <Route path={`${match.url}/login-2`} component={lazy(() => import(`./authentication/login-2`))} />
        <Route path={`${match.url}/register-1`} component={lazy(() => import(`./authentication/register-1`))} />
        <Route path={`${match.url}/register-2`} component={lazy(() => import(`./authentication/register-2`))} />
        <Route path={`${match.url}/forgot-password`} component={lazy(() => import(`./authentication/forgot-password`))} />
        <Route path={`${match.url}/error-1`} component={lazy(() => import(`./errors/error-page-1`))} />
        <Route path={`${match.url}/error-2`} component={lazy(() => import(`./errors/error-page-2`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/login`} />
      </Switch>
    </Suspense>
  )
}

export default AppViews;

