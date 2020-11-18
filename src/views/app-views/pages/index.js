import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/profile`} />
      <Route path={`${match.url}/profile`} component={lazy(() => import(`./profile`))} />
      <Route path={`${match.url}/invoice`} component={lazy(() => import(`./invoice`))} />
      <Route path={`${match.url}/home`} component={lazy(() => import(`./landing`))} />
      <Route path={`${match.url}/faq`} component={lazy(() => import(`./faq`))} />
      <Route path={`${match.url}/setting`} component={lazy(() => import(`./setting`))} />

      <Route path={`${match.url}/guard-list`} component={lazy(() => import(`./Guard/guard-list`))} />
      <Route path={`${match.url}/add-guard`} component={lazy(() => import(`./Guard/add-guard`))} />
      <Route path={`${match.url}/sia-licence`} component={lazy(() => import(`./Guard/sia-licence`))} />
      <Route path={`${match.url}/position-and-pay`} component={lazy(() => import(`./Guard/position-pay`))} />
      <Route path={`${match.url}/right-to-work`} component={lazy(() => import(`./Guard/right-to-work`))} />
      <Route path={`${match.url}/manage-details`} component={lazy(() => import(`./CompanyDetails/manage-details`))} />
      <Route path={`${match.url}/letter-head-settings`} component={lazy(() => import(`./CompanyDetails/letter-head-settings`))} />
      <Route path={`${match.url}/docs`} component={lazy(() => import(`./CompanyDetails/docs`))} />

      <Route path={`${match.url}/sub-contractors`} component={lazy(() => import(`./Contractor/sub-contractors`))} />
      <Route path={`${match.url}/add-sub-contractor`} component={lazy(() => import(`./Contractor/add-sub-contractor`))} />

      <Route path={`${match.url}/compilance-templates`} component={lazy(() => import(`./Compilance/compilance-templates`))} />
      <Route path={`${match.url}/compilance-interviews`} component={lazy(() => import(`./Compilance/compilance-interviews`))} />
      <Route path={`${match.url}/compilance-vetting`} component={lazy(() => import(`./Compilance/compilance-vetting`))} />
      <Route path={`${match.url}/compilance-trainings`} component={lazy(() => import(`./Compilance/compilance-trainings`))} />
      <Route path={`${match.url}/compilance-sia-records`} component={lazy(() => import(`./Compilance/compilance-sia-records`))} />

      <Route path={`${match.url}/add-client`} component={lazy(() => import(`./Client/add-client`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./Client/clients`))} />

      <Route path={`${match.url}/add-sg-site`} component={lazy(() => import(`./Sites/add-sg-site`))} />
      <Route path={`${match.url}/add-ds-site`} component={lazy(() => import(`./Sites/add-ds-site`))} />
      <Route path={`${match.url}/static-sites`} component={lazy(() => import(`./Sites/static-sites`))} />

      <Route path={`${match.url}/mobile-patrol-sites`} component={lazy(() => import(`./MobilePatrol/mobile-patrol-sites`))} />
      <Route path={`${match.url}/add-mobile-patrol-site`} component={lazy(() => import(`./MobilePatrol/add-mobile-patrol-site`))} />

      <Route path={`${match.url}/guard-view`} component={lazy(() => import(`./Guard/guard-list/ViewGuard`))} />
      <Route path={`${match.url}/guard-sia-record`} component={lazy(() => import(`./Guard/guard-list/SiaRecords`))} />
      <Route path={`${match.url}/guard-position-pay`} component={lazy(() => import(`./Guard/guard-list/PositionAndPay`))} />
      <Route path={`${match.url}/guard-right-work`} component={lazy(() => import(`./Guard/guard-list/RightToWork`))} />

      <Route path={`${match.url}/key-holding-sites`} component={lazy(() => import(`./KeyHolding/key-holding-sites`))} />
      <Route path={`${match.url}/add-key-holding`} component={lazy(() => import(`./KeyHolding/add-key-holding`))} />
      <Route path={`${match.url}/dispatch-calls`} component={lazy(() => import(`./KeyHolding/dispatch-calls`))} />
      <Route path={`${match.url}/new-dispatch-call`} component={lazy(() => import(`./KeyHolding/new-dispatch-call`))} />

    </Switch>
  </Suspense>
);

export default Pages;