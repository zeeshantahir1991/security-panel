import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

export const AppViews = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${match.url}/dashboards`} component={lazy(() => import(`./dashboards`))} />
        <Route path={`${match.url}/apps`} component={lazy(() => import(`./apps`))} />
        <Route path={`${match.url}/components`} component={lazy(() => import(`./components`))} />
        <Route path={`${match.url}/pages`} component={lazy(() => import(`./pages`))} />
        <Route path={`${match.url}/maps`} component={lazy(() => import(`./maps`))} />
        <Route path={`${match.url}/charts`} component={lazy(() => import(`./charts`))} />
        <Route path={`${match.url}/docs`} component={lazy(() => import(`./docs`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/dashboards`} />
      </Switch>
    </Suspense>
  )
}

export default AppViews;
