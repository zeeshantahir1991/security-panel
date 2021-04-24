// import React, { lazy, Suspense } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
// import Loading from 'components/shared-components/Loading';

// export const AuthViews = ({ match }) => {
//   return (
//     <Suspense fallback={<Loading cover="page" />}>
//       <Switch>
//         <Route path={`${match.url}/pricing`} component={lazy(() => import(`../app-views/pages/PricingDetail`))} />
//         <Route path={`${match.url}/ordersummary`} component={lazy(() => import(`../app-views/pages/OrderSummary`))} />
//         <Route path={`${match.url}/landing`} component={lazy(() => import(`../app-views/pages/landing`))} />
//         <Route path={`${match.url}/login`} component={lazy(() => import(`./authentication/login`))} />
//         <Route path={`${match.url}/login-1`} component={lazy(() => import(`./authentication/login-1`))} />
//         <Route path={`${match.url}/register`} component={lazy(() => import(`./authentication/register`))} />
//         <Route path={`${match.url}/forgot-password`} component={lazy(() => import(`./authentication/forgot-password`))} />
//         <Route path={`${match.url}/otp`} component={lazy(() => import(`./authentication/OTP`))} />
//         <Route path={`${match.url}/contact`} component={lazy(() => import(`./authentication/Contact`))} />
//         <Route path={`${match.url}/error-1`} component={lazy(() => import(`./errors/error-page-1`))} />
//         <Route path={`${match.url}/error-2`} component={lazy(() => import(`./errors/error-page-2`))} />
//         <Redirect from={`${match.url}`} to={`${match.url}/landing`} />
//       </Switch>
//     </Suspense>
//   )
// }

// export default AuthViews;

