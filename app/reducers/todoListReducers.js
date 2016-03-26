'use strict';

const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {completed: !state.completed});
        case 'DELETE_TODO':
            return state.id !== action.id;
        case 'CHECK_ALL_COMPLETED':
            return Object.assign({}, state, {completed: true});
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'DELETE_TODO':
            return state.filter(t => todo(t, action));
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        case 'CHECK_ALL_COMPLETED':
            return state.map(t => todo(t, action));
        case 'CLEAR_ALL_COMPLETED':
            return state.filter(t => !t.completed);
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state
    }
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

module.exports = {
    todo,
    todos,
    visibilityFilter,
    getVisibleTodos
};