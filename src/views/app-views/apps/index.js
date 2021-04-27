import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/calendar`} component={lazy(() => import(`./calendar`))} />
      <Route path={`${match.url}/project`} component={lazy(() => import(`./project`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/mail`} />
      <Route path={`${match.url}/chat`} component={lazy(() => import(`./chat`))} />

    </Switch>
  </Suspense>
);

export default Apps;