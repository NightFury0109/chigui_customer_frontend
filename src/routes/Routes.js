import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Dashboard from '../components/dashboard/Dashboard';
import Plan from '../components/plan/Plan';
import Quotation from '../components/quotation/Quotation';
import State from '../components/state/State';
import StateDetail from '../components/state/StateDetail';
import StateImage from '../components/state/StateImage';
import Media from '../components/media/Media';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='/dashboard' component={Dashboard} />
      <PrivateRoute exact path='/plan' component={Plan} />
      <PrivateRoute exact path='/quotation' component={Quotation} />
      <PrivateRoute exact path='/state' component={State} />
      <PrivateRoute exact path='/state/details' component={StateDetail} />
      <PrivateRoute exact path='/state/details/images' component={StateImage} />
      <PrivateRoute exact path='/media' component={Media} />
    </Switch>
  )
}
