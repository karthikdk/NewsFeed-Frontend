import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import isLoggedReducer from '../reducers/isLoggedReducer'

const configureStore=()=>{
    return createStore(combineReducers({
        isLogged:isLoggedReducer
    }),applyMiddleware(thunk))
}
export default configureStore