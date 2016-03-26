'use strict';

import { compose, createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers/todoListReducers';
import persistState from 'redux-localstorage';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const createPersistentStore = compose(
    persistState(null, { key: 'todo-app-storage' })
)(createStore);

export default createPersistentStore(todoApp);