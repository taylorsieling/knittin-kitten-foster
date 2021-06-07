import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './components/Home'
import { Footer } from './components/Footer'
import Kittens from './containers/Kittens'
import KittenContainer from './containers/KittenContainer'
import IntakeForm from './containers/IntakeForm'
import Applications from './containers/Applications'
import ApplicationContainer from './containers/ApplicationContainer'
import './App.css';
import ApplicationForm from './containers/ApplicationForm'

class App extends Component {
  render() {
    return (

      <Router>

        <div className="navbar">
        <Navigation />
        </div>
        
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/kittens' component={ Kittens }/>
            <Route exact path='/intake' component={ IntakeForm }/>
            <Route path='/kittens/:id' component={ KittenContainer }/>
            <Route path='/kittens/:id/edit' component={ IntakeForm }/>
          </Switch>

        <div className="footer">
          <Footer/>
        </div>

      </Router>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
    // kittens: state.kittenReducer.kittens,
    // loading: state.kittenReducer.loading
  }
}

export default connect(mapStateToProps)(App);
