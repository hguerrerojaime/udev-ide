import React from 'react';
import { Router,IndexRoute, Route, Link } from 'react-router';

import App from '../components/App';
import Index from '../components/Index';

let router = () => {
  return (
    <Router>
      <Route exact path="/" component={App}>
        <IndexRoute component={Index} />
      </Route>
    </Router>
  );
};

export default router;
