import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomQuotes from './components/randomQuotes/RandomQuotes';
import Header from './components/header/Header';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={RandomQuotes} />
    </Switch>
  </Router>
);

export default App;
