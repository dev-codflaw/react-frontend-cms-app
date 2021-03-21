import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home'
import LatestPostListPage from './views/LatestPostListPage';
import PostListPage from './views/PostListPage';
import CategoryListPage from './views/CategoryListPage';
import PostDetailPage from './views/PostDetailPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

axios.defaults.baseURL = 'https://cms.codflaw.com';
// axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request

const routing = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/latest" component={LatestPostListPage} />
        <Route path="/posts" component={PostListPage} />
        <Route path="/category" component={CategoryListPage} />
        <Route path="/:slug" component={PostDetailPage} />
        {/* <Route component={Notfound} /> */}
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  // <React.StrictMode>
  routing,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
