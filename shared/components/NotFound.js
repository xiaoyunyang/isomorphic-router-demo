import React from 'react';
import TopNav from './TopNav';

const style = {
  padding: '16px'
};

export default ({ route }) => (
  <div>
    <TopNav route={route} />
    <div className="ui main text container">
      <div style={style}>
        <h1>Sorry!</h1>
        <p>Something went horribly wrong…</p>
      </div>
    </div>
  </div>
);
