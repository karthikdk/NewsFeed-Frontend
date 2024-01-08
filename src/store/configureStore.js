import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import isLoggedReducer from '../reducers/isLoggedReducer'
import userReducer from '../reducers/userReducer'
import loginToggleReducer from '../reducers/loginToggleReducer'
import registerToggleReducer from '../reducers/registerToggleReducer'
import pageNoReducer from '../reducers/pageNumberReducer'
import postsPerPageReducer from '../reducers/postsPerPage'
import articlesReducer from '../reducers/newsArticleReducer'
import categoryReducer from '../reducers/categoryRedcuer'
import sourceReducer from '../reducers/sourceReducer'

const configureStore=()=>{
    return createStore(combineReducers({
        user:userReducer,
        isLogged:isLoggedReducer,
        loginToggle:loginToggleReducer,
        registerToggle:registerToggleReducer,
        pageNo:pageNoReducer,
        postsPerPage:postsPerPageReducer,
        articles:articlesReducer,
        category:categoryReducer,
        source:sourceReducer
    }),applyMiddleware(thunk))
}
export default configureStore