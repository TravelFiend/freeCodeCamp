import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomQuotes from './components/randomQuotes/RandomQuotes';
import Header from './components/header/Header';
import DrumMachine from './components/drumMachine/DrumMachine';
import Home from './components/home/Home';


const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quotes" component={RandomQuotes} />
      <Route exact path="/beats" component={DrumMachine} />
    </Switch>
  </Router>
);

export default App;
