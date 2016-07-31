import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class LastUpdated extends Component {
    render() {
        const {
            lastUpdated,
            lastUpdatedFromNow,
            lastUpdatedFormat
        } = this.props;

        const lastUpdatedString = lastUpdatedFromNow
            ? moment(lastUpdated, lastUpdatedFormat).fromNow()
            : lastUpdated;

        return (
            <span className="value__last-updated-wrapper">
                <i className="fa fa-clock-o value__icon" />
                <span className="value__last-updated">
                    {lastUpdatedString}
                </span>
            </span>
        );
    }
}

LastUpdated.propTypes = {
    lastUpdated: PropTypes.string.isRequired
};

export default LastUpdated;
