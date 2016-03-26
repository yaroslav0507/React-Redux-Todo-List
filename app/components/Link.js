'use strict';
import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';

const Link = React.createClass({
    render() {
        const {
            active,
            children,
            onClick
            } = this.props;

        if (active) {
            return <RaisedButton>{children}</RaisedButton>
        }

        return (
            <FlatButton
               onClick={onClick}
            >{children}</FlatButton>
        )
    }
});

module.exports = Link;