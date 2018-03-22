import React from 'react';
import { renderRoutes } from 'react-router-config';

const Main = ({ routes }) => (
  <div>
    {renderRoutes(routes)}
  </div>
);

export default Main;
