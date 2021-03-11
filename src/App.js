import Home from './views/Home'
import PostListPage from './views/PostListPage'
import PostDetailPage from './views/PostDetailPage'
import CategoryListPage from './views/CategoryListPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/post">
            <PostListPage />
          </Route>

          <Route exact path="/category">
            <CategoryListPage />
          </Route>
          <Route exact path="/:slug">
            <PostDetailPage />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
