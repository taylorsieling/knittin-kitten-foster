import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from "./auth/protected-route";

import Navigation from './components/Navigation'
import Home from './components/Home'
import { Footer } from './components/Footer'
import Kittens from './containers/Kittens'
import KittenContainer from './containers/KittenContainer'
import IntakeForm from './containers/IntakeForm'
import EditForm from './containers/EditForm'
import { fetchKittens } from './actions/kittens'
import Features from './components/Features'
import Auth0ProviderWithHistory from './auth/auth0Provider'
import Dashboard from './containers/Dashboard'
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {

  // componentDidMount(){
  //   console.log(" app componentDidMount")
  //   this.props.fetchKittens()
  // }

    const { user } = useAuth0();

    return (
      <Router>
        <Auth0ProviderWithHistory>

          <div className="spruce">
          <Navigation />
          </div>
          
          <Switch> 
            { !user ? <Route exact path='/' component={ Home }/> : <ProtectedRoute exact path='/dashboard' component={ Dashboard }/>}
            <Route exact path='/features' component={ Features }/>
            <ProtectedRoute exact path='/kittens' component={ Kittens }/>
            <ProtectedRoute path='/kittens/:id/edit' component={ EditForm }/>
            <ProtectedRoute path='/kittens/:id' component={ KittenContainer }/>
            <ProtectedRoute exact path='/intake' component={ IntakeForm }/>
          </Switch>

          <div className="spruce">
            <Footer/>
          </div>

        </Auth0ProviderWithHistory>
      </Router>
      
    )
}

const mapStateToProps = state => {
  return {
    state
  }
}

// export default connect(mapStateToProps, { fetchKittens })(App);

export default App;
