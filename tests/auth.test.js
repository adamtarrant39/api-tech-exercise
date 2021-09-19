const nock = require('nock');
const { getAccessToken } = require('../src/openBankingApi/auth');

describe('Authentication', () => {

    const BASE_URL = 'https://obmockaspsp.moneyhub.co.uk/api';

    test('Should retrieve access token', async () => {
        nock(BASE_URL)
        .post('/token')
        .reply(200, {
            access_token: 'testaccesstoken'
        });

        const accessTokenResponse = await getAccessToken();

        expect(accessTokenResponse).toEqual('testaccesstoken');
    });

});