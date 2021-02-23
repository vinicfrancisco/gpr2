import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Availability from '~/pages/Availability';
import Requests from '~/pages/Requests';
import Rides from '~/pages/Rides';
import RequestRide from '~/pages/RequestRide';

function Routes() {
  return (
    <Switch>
      <Route path="/availability" component={Availability} />
      <Route path="/requests" component={Requests} />
      <Route path="/rides" component={Rides} />
      <Route path="/request-ride" component={RequestRide} />
    </Switch>
  );
}

export default Routes;
