import React, { Component, PropTypes } from 'react';

class ChangeRate extends Component {
    render() {
        const { changeRate } = this.props;
        const parsedChangeRate = parseFloat(changeRate, 10).toFixed(2);

        const direction = parsedChangeRate >= 0
            ? 'up'
            : 'down';

        return (
            <span className="value__change-rate-wrapper">
                <i className={`fa fa-arrow-${direction} value__icon-${direction}`} />
                <span className={`value__change-rate value__text-${direction}`}>
                    {changeRate} %
                </span>
            </span>
        );
    }
}

ChangeRate.propTypes = {
    changeRate: PropTypes.string.isRequired
};

export default ChangeRate;
