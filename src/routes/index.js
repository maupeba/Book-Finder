import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/list" component={List} />
    <Route path="/details" component={Details} />
  </Switch>
);

export default Routes;
