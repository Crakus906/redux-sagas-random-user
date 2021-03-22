import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTE from '../constants/routes';
import {Home, Profile, Contacts, LinkedIn} from '../pages/index'

export default function PublicRouter() {
  
  return (
    <Switch>
      <Route exact path={ROUTE.ROOT} component={Home} />
      <Route path={ROUTE.PROFILE} component={Profile} />
      <Route path={ROUTE.CONTACTS} component={Contacts} />
      <Route path={ROUTE.LINKED_IN} component={LinkedIn} />
    </Switch>
  );
}
