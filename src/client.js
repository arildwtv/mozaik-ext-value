import request from 'superagent';
import Promise from 'bluebird';
import cache   from 'memory-cache';
import config  from './config';
require('superagent-bluebird-promise');

/**
 * @param {Mozaik} mozaik
 */
const client = mozaik => {
    mozaik.loadApiConfig(config);

    const methods = {
        value(params) {
            const { url } = params;

            return request.get(url)
                .promise()
                .then(res => {
                    return JSON.parse(res.text);
                })
                .catch(err => {
                    console.error(err, err.stack);
                });
        }
    };

    return methods;
};

export default client;
