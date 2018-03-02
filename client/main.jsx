import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const renderRouter = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>, document.getElementById('root')
  );
};

renderRouter(App);
