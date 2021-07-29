import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Post from './pages/Post';
import Posts from './pages/Posts';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>The Blogger.</h1>
        <Switch>
          <Route path='/' exact>
            <Posts />
          </Route>
          <Route path='/:postId'>
            <Post />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
