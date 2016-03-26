'use strict';

import { connect } from 'react-redux';
import AppBar from './AppBar';
import { checkAll, clearAll } from '../actionCreators/todoListActions';

const mapStateToHeaderProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToHeaderProps = (
    dispatch
) => {
    return {
        onCheckAllClick: () => {
            dispatch(checkAll())
        },
        onClearAllClick: () => {
            dispatch(clearAll())
        }
    }
};

const Header = connect(
    mapStateToHeaderProps,
    mapDispatchToHeaderProps
)(AppBar);

module.exports = Header;