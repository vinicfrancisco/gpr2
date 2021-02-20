import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Availability from '~/pages/Availability';
import Requests from '~/pages/Requests';

function Routes() {
  return (
    <Switch>
      <Route path="/availability" component={Availability} />
      <Route path="/requests" component={Requests} />
    </Switch>
  );
}

export default Routes;
