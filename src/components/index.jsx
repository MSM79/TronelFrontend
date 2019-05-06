import {
  Route,
  Switch,
  Router,
  BrowserRouter,
} from 'react-router-dom';
import React from 'react';

import history from 'Root/history';
import Explorer from './Pages/Explorer';

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Explorer} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
