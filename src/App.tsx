import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './pages/Main';
import Things from './pages/Things';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/things" component={Main} />
          <Route path="/thing/:id" component={Things} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}
