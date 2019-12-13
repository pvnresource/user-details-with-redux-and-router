import { LoginActions } from '../actions'
const initialState = {
  login: {
    username:"hruday@gmail.com",
    password:'hruday123'
  },
  loginVerified: false,
  user_data: []
}
function verfiyLogin(log, action){
  console.log(log.username === action.username && log.password === action.password, 'log')
    return !!(log.username === action.username && log.password === action.password)
}
export const logs = (state=initialState, action) => {
  switch (action.type) {
    case LoginActions.VERIFY_LOGIN:
      return {
        ...state,
        loginVerified: verfiyLogin(state.login, action.payload)
      }
      case LoginActions.USER_DATA:
      return {
        ...state,
        user_data: [...action.payload.user]
      }
    default:
      return state
  }
};
