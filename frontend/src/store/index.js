import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from "./usersReducer";

const rootReducer = combineReducers({
    users: userReducer
})

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;