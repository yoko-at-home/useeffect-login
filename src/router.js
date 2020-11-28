import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/login'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        '
      </Switch>
    </BrowserRouter>
  )
}

export default Router
