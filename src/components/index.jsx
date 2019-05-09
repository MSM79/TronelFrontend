import {
  Route,
  Switch,
  Router,
  BrowserRouter,
} from 'react-router-dom';
import React from 'react';

import history from 'Root/history';
import Explorer from './Pages/Explorer';
import MyRequests from './Pages/MyRequests';
import CreateRequest from './Pages/CreateRequest';

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Explorer} />
          <Route exact path="/myrequests" component={MyRequests} />
          <Route exact path="/createrequest" component={CreateRequest} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
