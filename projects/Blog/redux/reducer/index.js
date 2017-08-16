import todos from './todo.js';
import visibility from './visibility.js';
import {combineReducers} from 'redux';

const todoApp = combineReducers({
    todos,
    visibility
});