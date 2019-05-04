import {
  Route,
  Switch,
  Router,
  BrowserRouter,
} from 'react-router-dom';
import React from 'react';

import history from 'Root/history';
import Code from './Pages/Code';
import Table from './Pages/Table';
import Login from './Pages/Login';
import Article from './Pages/Article';
import Labs from './Pages/Panel/Labs';
import Links from './Pages/Panel/Links';
import Authors from './Pages/Panel/Authors';
import Tickets from './Pages/Panel/Tickets';
import Methods from './Pages/Panel/Methods';
import Donates from './Pages/Panel/Donates';
import Wallets from './Pages/Panel/Wallets';
import LinkInfo from './Pages/Panel/LinkInfo';
import Merchants from './Pages/Panel/Merchants';
import AuthorInfo from './Pages/Panel/AuthorInfo';
import TicketInfo from './Pages/Panel/TicketInfo';
import DonateInfo from './Pages/Panel/DonateInfo';
import ArticleInfo from './Pages/Panel/ArticleInfo';
import PaymentInfo from './Pages/Panel/PaymentInfo';
import CreateArticle from './Pages/Panel/CreateArticle';
import CreatePlugin from './Pages/Panel/CreatePlugin';
import Home from './Pages/Home';
import UserInfo from './Pages/Panel/UserInfo';
import UpdateArticle from './Pages/Panel/UpdateArticle';
import UpdatePlugin from './Pages/Panel/UpdatePlugin';
import Faq from './Pages/Panel/Faq';
import MerchantsInfo from './Pages/Panel/MerchantsInfo';
import ArticleComments from './Pages/Panel/ArticleComments';
import Users from './Pages/Panel/Users';
import Payments from './Pages/Panel/Payments';

function App() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/" component={Home} />
          <Route exact path="/createarticle" component={CreateArticle} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/panel/authors" component={Authors} />
          <Route exact path="/panel/articleinfo" component={ArticleInfo} />
          <Route exact path="/panel/authorinfo" component={AuthorInfo} />
          <Route exact path="/panel/tickets" component={Tickets} />
          <Route exact path="/panel/ticketinfo" component={TicketInfo} />
          <Route exact path="/panel/methods" component={Methods} />
          <Route exact path="/panel/linkinfo" component={LinkInfo} />
          <Route exact path="/panel/donateinfo" component={DonateInfo} />
          <Route exact path="/panel/paymentinfo" component={PaymentInfo} />
          <Route exact path="/panel/wallets" component={Wallets} />
          <Route exact path="/panel/links" component={Links} />
          <Route exact path="/panel/donates" component={Donates} />
          <Route exact path="/panel/merchants" component={Merchants} />
          <Route exact path="/panel/labs" component={Labs} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/panel/userinfo" component={UserInfo} />
          <Route exact path="/panel/faq" component={Faq} />
          <Route exact path="/panel/create-plugin" component={CreatePlugin} />
          <Route exact path="/panel/update-article" component={UpdateArticle} />
          <Route exact path="/panel/update-plugin" component={UpdatePlugin} />
          <Route exact path="/panel/merchants-info" component={MerchantsInfo} />
          <Route exact path="/panel/article-comments" component={ArticleComments} />
          <Route exact path="/panel/users" component={Users} />
          <Route exact path="/panel/payments" component={Payments} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
