const fetch = require('node-fetch');
const yc = require('../../../../index');

function invokeUrl(id, options) {
    let url = `https://functions.yandexcloud.net/${id}?`;

    options = options || {};
    if (options.integrationRaw) {
        url += `&integration=raw`;
    }
    if (options.tag) {
        url += `&tag=${options.tag}`;
    }

    return url;
}

async function mapException(response) {
    const data = await response.text();
    try {
        const err = JSON.parse(data);
        if (err['errorType'] && err['errorMessage']) {
            return new Error(`${err['errorType']}: ${err['errorMessage']}`);
        }
    } catch (e) {
        // do nothing
    }
    return new Error(
        `function invocation failed with ${response.status}: ${data}`
    );
}

class InvokeServiceImpl {
    constructor(address, credentials, options, tokenCreator) {
        this._tokenCreator = tokenCreator;
        this.$method_definitions = {};
    }

    async invoke(functionId, payload, tag, options) {
        options = options || {};
        options['tag'] = tag;
        options['integrationRaw'] = ('undefined' === typeof options.integrationRaw || !!options.integrationRaw) ? true : false;

        let url = invokeUrl(functionId, options);

        const token = await this._tokenCreator();
        const opts = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        if (payload) {
            if (options.integrationRaw) {
                opts.body = JSON.stringify(payload);
            } else if (payload['queryStringParameters']) {
                for (const key in payload['queryStringParameters']) {
                    url += `&${key}=${payload['queryStringParameters'][key]}`;
                }
            }
        }

        if ('function' === typeof options.logging) {
            options.logging(`Fetch ${url}, options: ${JSON.stringify(opts)}`);
        }

        const res = await fetch(url, opts);
        if (!res.ok || (res.headers && res.headers['x-function-error'])) {
            throw await mapException(res);
        }

        const data = (await res.buffer()).toString();
        try {
            return JSON.parse(data);
        } catch (_) {
            return data;
        }
    }

    wrap(functionId) {
        return async (payload) => {
            return await this.invoke(functionId, payload);
        };
    }
}

InvokeServiceImpl.__endpointId = 'serverless-functions';

function InvokeService(session) {
    if (session === undefined) {
        session = new yc.Session();
    }

    return session.client(InvokeServiceImpl);
}

module.exports = {
    InvokeService,
};
