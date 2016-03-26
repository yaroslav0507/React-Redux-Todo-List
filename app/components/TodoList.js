'use strict';

import React from 'react';
import Todo from './todo';

import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';

const TodoList = React.createClass({
    render(){
        const { todos, onTodoClick, onTodoDeleteClick } = this.props;

        let notCompleted = todos.filter(item => (
            !item.completed
        ));

        return (
            <div>
                <List className="todo__list">
                    {todos.map(todo =>
                        <Todo key={todo.id}
                            {...todo}
                              onClick={() => onTodoClick(todo.id)}
                              onTodoDeleteClick={() => onTodoDeleteClick(todo.id)}
                        />
                    )}

                    <Divider />
                </List>
                <div className="todo__list-items-left">
                    {notCompleted.length} item{ todos.length !== 1 ? 's' : ''} left
                </div>
            </div>

        )
    }
});

module.exports = TodoList;