import React, { Component, PropTypes } from 'react';
import reactMixin  from 'react-mixin';
import { ListenerMixin } from 'reflux';
import Mozaik from 'mozaik/browser';
import ChangeRate from './ChangeRate.jsx';
import LastUpdated from './LastUpdated.jsx';
import { isDefined, createElementIf } from '../util';

class Value extends Component {

    getApiRequest() {
        const {
            url,
            title,
            prefix,
            postfix,
            pathCurrent,
            pathChangeRate,
            pathLastUpdated,
            headers,
            sending
        } = this.props;

        return {
            id: `value.value.${title}.${url}.${prefix}.${postfix}.` +
                `${pathCurrent}.${pathChangeRate}.${pathLastUpdated}.${headers}.${sending}`,
            params: { title, url, pathCurrent, pathChangeRate, pathLastUpdated, headers, sending }
        };
    }

    onApiData(value) {
        this.setState(value);
    }

    render() {
        const state = this.state || {};

        const {
            title,
            prefix,
            postfix,
            lastUpdatedFromNow = true,
            lastUpdatedFormat = 'YYYY-MM-DDThh:mm:ssTZD'
        } = this.props;

        const {
            current,
            lastUpdated,
            changeRate
        } = state;

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
                    {
                        createElementIf(
                            isDefined(changeRate),
                            ChangeRate,
                            { changeRate })
                    }
                    {
                        createElementIf(
                            isDefined(lastUpdated),
                            LastUpdated,
                            { lastUpdated, lastUpdatedFromNow, lastUpdatedFormat })
                    }
                </div>
            );

        return (
            <div>
                <div className="widget__header">
                    <span className="widget__header__subject">{{title}}</span>
                    <i className="fa fa-balance-scale" />
                </div>
                <div className="widget__body">
                    {content}
                </div>
            </div>
        );
    }
}

Value.propTypes = {
    title: PropTypes.string,
    prefix: PropTypes.string,
    postfix: PropTypes.string,
    pathCurrent: PropTypes.string,
    pathChangeRate: PropTypes.string,
    pathLastUpdated: PropTypes.string
};

reactMixin(Value.prototype, ListenerMixin);
reactMixin(Value.prototype, Mozaik.Mixin.ApiConsumer);

export default Value;
