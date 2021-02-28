import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Availability from '~/pages/Availability';
import Requests from '~/pages/Requests';
import Rides from '~/pages/Rides';
import RequestRide from '~/pages/RequestRide';
import Login from '~/pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/availability" exact component={Availability} />
      <Route path="/requests" exact component={Requests} />
      <Route path="/rides" exact component={Rides} />
      <Route path="/request-ride" exact component={RequestRide} />
    </Switch>
  );
}

export default Routes;
