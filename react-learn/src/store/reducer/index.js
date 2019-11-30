import loginUser from './loginUser'
import User from './user'
import { combineReducers } from 'redux'

// export default (state = {}, action) => {
//     const newState = {
//         loginUser: loginUser(state.loginUser, action),
//         User: User(state.User, action)
//     }
//     return newState
// }

export default combineReducers({
    loginUser,
    User
})