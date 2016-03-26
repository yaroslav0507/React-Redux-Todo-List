'use strict';

import React from 'react';
import FilterLink from './FilterLink';

const Filter = React.createClass({
    render() {
        return (
            <div className="todo__filter">
                <span className="filter-label">Show:</span>

                <FilterLink
                    filter='SHOW_ALL'>All
                </FilterLink>

                <FilterLink
                    filter='SHOW_ACTIVE'>Active
                </FilterLink>

                <FilterLink
                    filter='SHOW_COMPLETED'>Done
                </FilterLink>
            </div>
        )
    }
});

module.exports = Filter;