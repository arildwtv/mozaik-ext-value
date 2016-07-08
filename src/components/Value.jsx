import React, { Component, PropTypes } from 'react';
import reactMixin                      from 'react-mixin';
import { ListenerMixin }               from 'reflux';
import Mozaik                          from 'mozaik/browser';

class Value extends Component {

    getApiRequest() {
        const {
            url,
            prefix,
            postfix,
            pathCurrent,
            pathChangeRate,
            pathLastUpdated
        } = this.props;

        return {
            id: `value.value.${url}.${prefix}.${postfix}.` +
                `${pathCurrent}.${pathChangeRate}.${pathLastUpdated}`,
            params: { url, pathCurrent, pathChangeRate, pathLastUpdated }
        };
    }

    onApiData(value) {
        this.setState(value);
    }

    render() {
        const state = this.state || {};

        const { prefix, postfix } = this.props;
        const { current, lastUpdated, changeRate } = state;

        const parsedChangeRate = parseFloat(changeRate, 10).toFixed(2);

        const direction = parsedChangeRate >= 0
            ? 'up'
            : 'down';

        const content = typeof current === 'undefined'
            ? <span />
            : (
                <div className="value__wrapper">
                    <span className="value__current-wrapper">
                        <span className="value__prefix">
                            {prefix}
                        </span>
                        <span className="value__current-value">
                            {current}
                        </span>
                        <span className="value__postfix">
                            {postfix}
                        </span>
                    </span>
                    <span className="value__change-rate-wrapper">
                        <i className={`fa fa-arrow-${direction} value__icon-${direction}`} />
                        <span className={`value__change-rate value__text-${direction}`}>
                            {changeRate} %
                        </span>
                    </span>
                    <span className="value__last-updated-wrapper">
                        <i className="fa fa-clock-o value__icon" />
                        <span className="value__last-updated">
                            {lastUpdated}
                        </span>
                    </span>
                </div>
            );

        return (
            <div>
                <div className="widget__header">
                    Hello <span className="widget__header__subject">World!</span>
                    <i className="fa fa-github-alt" />
                </div>
                <div className="widget__body">
                    {content}
                </div>
            </div>
        );
    }
}

Value.defaultProps = {
    lang:  'en',
    limit: 3
};

reactMixin(Value.prototype, ListenerMixin);
reactMixin(Value.prototype, Mozaik.Mixin.ApiConsumer);

export default Value;
