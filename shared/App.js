import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopNav from './components/TopNav';
import Main from './components/Main';

const App = () => (
  <div>
    <TopNav />
    <Main />
  </div>
);

export default App;
