import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import NewPost from './pages/NewPost';
import Post from './pages/Post';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>The Blogger.</h1>
        <Switch>
          <Route path='/posts' exact>
            <Posts />
          </Route>
          <Route path='/posts/:postId'>
            <Post />
          </Route>
          <Route path='/post/new' exact>
            <NewPost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
