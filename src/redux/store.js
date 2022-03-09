import { applyMiddleware, combineReducers, createStore } from 'redux';
import { list, todoReducer } from './features/todoReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
    todo:todoReducer
}),{
    todo: list
},applyMiddleware(thunk))

export default store