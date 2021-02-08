import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import Biking from './pages/Biking'
import Camping from './pages/Camping'
import Climbing from './pages/Climbing'
import Hiking from './pages/Hiking'
import Skiing from './pages/Skiing'
import Traveling from './pages/Traveling'
import Watersports from './pages/Watersports'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/biking">
          <Biking/>
        </Route>
        <Route exact path="/camping">
          <Camping/>
        </Route>
        <Route exact path="/climbing">
          <Climbing/>
        </Route>
        <Route exact path="/hiking">
          <Hiking/>
        </Route>
        <Route exact path="/skiing">
          <Skiing/>
        </Route>
        <Route exact path="/traveling">
          <Traveling/>
        </Route>
        <Route exact path="/watersports">
          <Watersports/>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
