import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RandomQuotes from './components/randomQuotes/RandomQuotes';
import Header from './components/header/Header';
import DrumMachine from './components/drumMachine/DrumMachine';
import Home from './components/home/Home';
import MKDNPreviewer from './components/mkdnPreviewer/MKDNPreviewer';
import Calculator from './components/calculator/Calculator';
import Clock from './components/pomodoroClock/Clock';


const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quotes" component={RandomQuotes} />
      <Route exact path="/beats" component={DrumMachine} />
      <Route exact path="/mkdn" component={MKDNPreviewer} />
      <Route exact path="/calc" component={Calculator} />
      <Route exact path="/clock" component={Clock} />
    </Switch>
  </Router>
);

export default App;
