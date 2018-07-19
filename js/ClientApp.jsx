import React from 'react';
import { render } from 'react-dom';
import { BrowswerRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const App = () => (
  <BrowswerRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </BrowswerRouter>
);

render(<App />, document.getElementById('app'));
