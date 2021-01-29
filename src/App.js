import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomQuotes from './components/randomQuotes/RandomQuotes';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RandomQuotes} />
    </Switch>
  </Router>
);

export default App;
