import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Availability from '~/pages/Availability';

function Routes() {
  return (
    <Switch>
      <Route path="/availability" component={Availability} />
    </Switch>
  );
}

export default Routes;
