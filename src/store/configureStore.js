import {createStore,combineReducers,applyMiddleWare} from 'redux'
import thunk from 'redux-thunk'
import isLoggedReducer from '../reducers/isLoggedReducer'

const configureStore=()=>{
    return createStore(combineReducers({
        isLogged:isLoggedReducer
    }),applyMiddleWare)
}
export default configureStore