const got = require('got');
const { getBaseUrl } = require('./utils');
const { getAccessToken } = require('./auth');

exports.getUserTransactions = async userId => {
    const baseUrl = getBaseUrl();
    const endpoint = `/users/${userId}/transactions`

    return got.get(`${baseUrl}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${await getAccessToken()}`,
        },
        responseType: 'json'
    });
};