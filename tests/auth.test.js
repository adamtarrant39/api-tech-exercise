const nock = require('nock');

describe('Transactions', () => {

    const BASE_URL = 'https://obmockaspsp.moneyhub.co.uk/api';

    test('Should retrieve transactions for user', () => {
        nock(BASE_URL)
        .post('/token')
        .reply(200, {});
    });

});