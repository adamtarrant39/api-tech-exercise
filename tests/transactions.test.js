const nock = require('nock');
const request = require('supertest');
const app = require('../src/server');

describe('Transactions', () => {

    const BASE_URL = 'https://obmockaspsp.moneyhub.co.uk/api';

    nock(BASE_URL)
    .post('/token')
    .reply(200, {
        access_token: 'testaccesstoken'
    });

    test('Should retrieve transactions for user', async () => {
        nock(BASE_URL)
        .get('/users/testuserid/transactions')
        .reply(200, {
            Data: {
                Transactions: [
                    {
                        "AccountId": "someuser",
                        "BookingDateTime": "2020-01-01T00:00:00.000Z",
                        "ValueDateTime": "2020-01-02T00:00:00.000Z",
                        "TransactionInformation": "DOLORE SIT LOREM",
                        "CreditDebitIndicator": "Credit",
                        "Amount": {
                            "Amount": 19.67,
                            "Currency": "GBP"
                        },
                        "TransactionId": "12345",
                        "Status": "Pending"
                    },
                ],
            },
        });

        const transactionsResponse = await request(app).get('/users/testuserid/transactions');

        expect(transactionsResponse.body).toEqual({
            data: [{
                id: '12345',
                accountId: 'someuser',
                amount: 19.67,
                date: '2020-01-01T00:00:00.000Z',
                description: 'DOLORE SIT LOREM',
                status: 'Pending'
            }],
        });
    });

});