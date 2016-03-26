'use strict';

import { connect } from 'react-redux';
import Link from './Link';
import { setVisibilityFilter } from '../actionCreators/todoListActions';

const mapStateToLinkProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToLinkProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

module.exports = FilterLink;