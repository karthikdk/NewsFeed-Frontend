import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import isLoggedReducer from '../reducers/isLoggedReducer'
import userReducer from '../reducers/userReducer'
import loginToggleReducer from '../reducers/loginToggleReducer'
import registerToggleReducer from '../reducers/registerToggleReducer'

const configureStore=()=>{
    return createStore(combineReducers({
        user:userReducer,
        isLogged:isLoggedReducer,
        loginToggle:loginToggleReducer,
        registerToggle:registerToggleReducer
    }),applyMiddleware(thunk))
}
export default configureStore