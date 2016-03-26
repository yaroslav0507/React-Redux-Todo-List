'use strict';

import React from 'react';

import Header from './components/TodoListHeader';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Filter from './components/Filter';

import Paper from 'material-ui/lib/paper';

export default class TodoApp extends React.Component {
    render() {
        return (
            <Paper className="todo">
                <Header />
                <AddTodo />
                <VisibleTodoList />
                <Filter />
            </Paper>
        )
    }
}
TodoApp.contextTypes = {
    store: React.PropTypes.object
};