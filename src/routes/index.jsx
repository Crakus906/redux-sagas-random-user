import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTE from '../constants/routes';
import {Home, Profile, Contacts} from '../pages/index'

export default function PublicRouter() {
  return (
    <Switch>
      <Route exact path={ROUTE.ROOT} component={Home} />
      <Route path={ROUTE.PROFILE} component={Profile} />
      <Route path={ROUTE.CONTACTS} component={Contacts} />
    </Switch>
  );
}
