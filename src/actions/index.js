
export const LoginActions = {
  VERIFY_LOGIN: 'VERIFY_LOGIN',
  USER_DATA: 'USER_DATA'
}

export const loginCheckPass = (payload) => ({
  type: LoginActions.VERIFY_LOGIN,
  payload
})

export const userJsonDataAction = (payload) => ({
  type: LoginActions.USER_DATA,
  payload
})
