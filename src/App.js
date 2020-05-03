import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Show from './components/Show';
import Product from './components/Product';
import Done from './components/Done';
import Details from './components/details';
import Stats from './components/Stats';

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/show" component={Show} />
        <Route path="/stats" component={Stats} />
        <Route path="/details" component={Details} />
        <Route path="/done" component={Done} />
      </Switch>
    </React.Fragment>
  );
}
}
export default App;
