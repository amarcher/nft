import React from 'react';
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router';

import { SharedElementContextProvider } from 'react-shared-element-transition';
import Nav from './components/Nav';
import Main from './pages/Main';
import Things from './pages/Things';
import NotFound from './pages/NotFound';

function Routes() {
  const { pathname } = useLocation();

  return (
    <SharedElementContextProvider pathname={pathname}>
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
