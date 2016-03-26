'use strict';
const randomString = () => (
    window.btoa(Math.random().toString(36).substr(2, 5))
);

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: randomString(),
        text: text
    }
};

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

const toggleTodo = (id) => {
    return {
        id,
        type: 'TOGGLE_TODO'
    }
};

const deleteTodo = (id) => {
    return {
        id,
        type: 'DELETE_TODO'
    }
};

const checkAll = () => {
    return {
        type: 'CHECK_ALL_COMPLETED'
    }
};

const clearAll = () => {
    return {
        type: 'CLEAR_ALL_COMPLETED'
    }
};

module.exports = {
    addTodo,
    setVisibilityFilter,
    toggleTodo,
    deleteTodo,
    checkAll,
    clearAll
};