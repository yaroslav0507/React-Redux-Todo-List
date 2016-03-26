'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/action/done-all';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';

const AppBarMenu = React.createClass({
    render() {
        const onCheckAllClick = this.props.onCheckAllClick;
        const onClearAllClick = this.props.onClearAllClick;

        return (
            <AppBar
                title="Todo list application"
                iconElementLeft={
                <div className="logo-icon"
                     onClick={onCheckAllClick}>
                    <IconButton><NavigationClose color={Colors.white}/></IconButton>
                </div>
                }

                iconElementRight={<FlatButton onClick={onClearAllClick} label="Clear completed" />}
            />
        )
    }

});

export default AppBarMenu;