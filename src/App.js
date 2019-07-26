import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom'

import Links from './views/Links';
import About from './views/About';
import RandomGIF from './views/RandomGIF';
import NotFound from './views/NotFound';
import './App.css';

class App extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="App">
        <h1>Welcome to 101 ways!</h1>
        {
          pathname !== '/' ? (
            <h3><Link to="/">Home</Link></h3>
          ) : null
        }
        <Switch>
          <Route exact path="/" component={Links} />
          <Route exact path="/about" component={About} />
          <Route exact path="/random-gif" component={RandomGIF} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
