import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SharedElementContextProvider from './components/SharedElementContextProvider';
import Nav from './components/Nav';
import Main from './pages/Main';
import Things from './pages/Things';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <SharedElementContextProvider>
      <Switch>
        <Route exact path="/" component={Things} />
        <Route path="/things" component={Things} />
        <Route path="/thing/:id" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </SharedElementContextProvider>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes />
      </main>
    </Router>
  );
}
