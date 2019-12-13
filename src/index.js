import './style.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './configureStore'
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList'
const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component = {App} />
        <Route path='/employeeList' render={(props) => { console.log(props, '::router')
        return <EmployeeList {...props} isAuthed={true} />}}/>
      </Switch>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
