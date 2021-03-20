import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Availability from '~/pages/Availability';
import Requests from '~/pages/Requests';
import Rides from '~/pages/Rides';
import RequestRide from '~/pages/RequestRide';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import RateDriver from '~/pages/Rate/Driver';
import RateHitchhiker from '~/pages/Rate/Hitchhiker';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/availability" exact component={Availability} />
      <Route path="/requests" exact component={Requests} />
      <Route path="/rides" exact component={Rides} />
      <Route path="/request-ride" exact component={RequestRide} />
      <Route path="/rate/driver" exact component={RateDriver} />
      <Route path="/rate/hitchhiker" exact component={RateHitchhiker} />
    </Switch>
  );
}

export default Routes;
