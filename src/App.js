import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Footer from './components/Footer';
import Header from './components/Header';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Feedback from './pages/Feedback';

export default function App() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </Header>
    </Router>
  );
}
