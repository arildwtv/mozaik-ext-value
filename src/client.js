import request from 'superagent';
import Promise from 'bluebird';
import cache   from 'memory-cache';
import config  from './config';
import jp      from 'jsonpath';
require('superagent-bluebird-promise');

/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
    mozaik.loadApiConfig(config);

    const methods = {
        value(params) {
            const {
                url,
                pathCurrent,
                pathChangeRate,
                pathLastUpdated,
                headers,     // Headers, a JSON object of the headers
                sending      // Any data that is being sent
            } = params;

            return request.get(url).set(headers).send(sending)
                .promise()
                .then(res => {
                    const json = JSON.parse(res.text);
                    const current = pathCurrent
                        ? jp.query(json, pathCurrent)
                        : json.current;
                    const changeRate = pathChangeRate
                        ? jp.query(json, pathChangeRate)
                        : json.changeRate;
                    const lastUpdated = pathLastUpdated
                        ? jp.query(json, pathLastUpdated)
                        : json.lastUpdated;
                    
                    return {
                        current,
                        changeRate,
                        lastUpdated
                    };
                })
                .catch(err => {
                    console.error(err, err.stack);
                });
        }
    };

    return methods;
};

export default client;
