const dotenv = require('dotenv');
const { getToken } = require('../get-client-credentials-grant-token');
const { getBaseUrl } = require('./utils');


exports.getAccessToken = async () => {
    dotenv.config();
    const scope = 'transactions';
    const tokenEndpoint = `${getBaseUrl()}/token`;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;

    const { body } = await getToken({tokenEndpoint, clientId, clientSecret, scope});
    const { access_token } = body;
    return access_token;
}