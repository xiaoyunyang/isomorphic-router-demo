import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '../routes';

const Main = () => (
  <Switch>
    {renderRoutes(routes)}
  </Switch>
);

export default Main;
