import React, { useEffect } from 'react';
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';

import SharedElementContextProvider from './components/SharedElementContextProvider';
import Nav from './components/Nav';
import Main from './pages/Main';
import Things from './pages/Things';
import NotFound from './pages/NotFound';

function Routes() {
  useEffect(() => {
    require('web-animations-js');
  }, []);

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

export default function App({ location }: { location?: string }) {
  if (typeof window === 'undefined') {
    return (
      <StaticRouter location={location}>
        <Nav />
        <main>
          <Routes />
        </main>
      </StaticRouter>
    );
  }

  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  );
}
