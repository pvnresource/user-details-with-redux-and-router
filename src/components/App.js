import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {
  loginCheckPass,
  userJsonDataAction
} from '../actions';
import userJson from '../dashboard.json';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //  user: {
        username: '',
        password: '',
        submitted: false
    //  }
    }
    this.userLogin = this.userLogin.bind(this);
    this.loginDetails = this.loginDetails.bind(this);
  }

  componentDidMount() {
    this.props.userJsonData(userJson);
  }
  loginDetails(event){
    const { target: {value, name}} = event;
    console.log(value, name, '::name')
    this.setState({
      [name]: value,
      submitted: false
    })
  }
  userLogin() {
    const obj = {
      username: "hruday@gmail.com",
      password: 'hruday123'
    };
    console.log(this.state, 'user')
    const { username, password, submitted } = this.state;
    this.props.loginCheckPass({
      username: username,
      password: password})
      this.setState({
        submitted: !submitted
      })
  }

  render() {
    const { loginVerified, user_data } = this.props;
    const { submitted, username, password  } = this.state;
    console.log(password, 'ok', !password)
    return loginVerified ? <Redirect to={{
      pathname: '/employeeList',
      state: user_data
    }}
    />
      :
        <div className="user_details">
          <form>
            <div className="user_name">
              <label>
                UserName:
                <input type="text" name="username" onChange={this.loginDetails}/>
              </label>
              </div>
            <div className="user_password">
              <label>
                Password:
                <input type="text" name="password" onChange={this.loginDetails}/>
              </label>
               </div>
          </form>
          {(!loginVerified && submitted && !username) && <span className="show_error">Please Enter username <br/></span>}
          {(!loginVerified && submitted && !password) && <span className="show_error">Please Enter password <br/></span>}
           
          {(!loginVerified && submitted && (password && username)) && <span className="show_error">Please Enter Valid Details</span>}
          <div><button className="login_btn" onClick={this.userLogin}>Login</button></div>
        </div>
     
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    loginCheckPass: (data) => {
      dispatch(loginCheckPass(data))
    },
    userJsonData: (data) => {
      dispatch(userJsonDataAction(data))
    }
  }
}
const mapStateToProps = (state) => {
  const { logs: { loginVerified, user_data } } = state;
  return {
    loginVerified,
    user_data
  }

}
export default connect(
  mapStateToProps, mapDisptachToProps
)(App)