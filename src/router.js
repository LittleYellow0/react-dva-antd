import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./routes/indexPage')
  });

  const Products = dynamic({
    app,
    models: () => [
      import('./models/products')
    ],
    component: () => import('./routes/products')
  });

  const UserPage = dynamic({
    app,
    models: () => [
      import('./models/user')
    ],
    component: () => import('./routes/userPage')
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" exact component={UserPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
