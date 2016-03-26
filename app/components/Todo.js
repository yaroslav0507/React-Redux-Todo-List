'use strict';

import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Toggle from './checkbox';
import IconDelete from 'material-ui/lib/svg-icons/content/clear';

const Todo = React.createClass({
    render(){
        const { onClick, onTodoDeleteClick, completed, text} = this.props;

        const onDeleteClick = e => {
            e.preventDefault();
            onTodoDeleteClick();
        };

        return (
            <ListItem onClick={onClick}
                style={{ textDecoration: completed ?
                                        'line-through':
                                        'none'
            }}
            rightIcon={
                <IconDelete
                    onClick={onDeleteClick}
                />
            }><Toggle completed={completed} label={text}/></ListItem>
        )
    }
});

module.exports = Todo;