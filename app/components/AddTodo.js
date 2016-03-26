'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actionCreators/todoListActions';

import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

let AddTodo = ({ dispatch }) => {
    let input;

    const onInputChange = e => {
        input = e.target
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
    };

    return (
        <form className="todo__add" onSubmit={onSubmit}>
            <TextField className="todo__input"
                       onChange={onInputChange}
                       placeholder="What needs to be done?"/>
        </form>
    )
};
AddTodo = connect()(AddTodo);

module.exports = AddTodo;