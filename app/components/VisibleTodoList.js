'use strict';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actionCreators/todoListActions';
import { getVisibleTodos } from '../reducers/todoListReducers';
import TodoList from './TodoList';


const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        },
        onTodoDeleteClick: (id) => {
            dispatch(deleteTodo(id))
        }

    }
};

const VisibleTodoList = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

module.exports = VisibleTodoList;