import React, { Component, PropTypes } from 'react';

class LastUpdated extends Component {
    render() {
        const { lastUpdated } = this.props;

        return (
            <span className="value__last-updated-wrapper">
                <i className="fa fa-clock-o value__icon" />
                <span className="value__last-updated">
                    {lastUpdated}
                </span>
            </span>
        );
    }
}

LastUpdated.propTypes = {
    lastUpdated: PropTypes.string.isRequired
};

export default LastUpdated;
