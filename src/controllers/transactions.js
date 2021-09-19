const { getUserTransactions } = require('../openBankingApi/transactions');

const formatUserTransactions = userTransactions => {
    return userTransactions.map(
        ({
            TransactionId,
            AccountId,
            Amount,
            BookingDateTime,
            TransactionInformation,
            Status,
        }) => ({
            id: TransactionId,
            accountId: AccountId,
            amount: Amount.Amount,
            date: BookingDateTime,
            description: TransactionInformation,
            status: Status,
        })
    );
};

exports.respondWithUserTransactions = async (req, res) => {
    const { body } = await getUserTransactions(req.params.userId);
    const userTransactions = body.Data.Transactions;
    const formattedUserTransactions = formatUserTransactions(userTransactions);
    res.json({ data: formattedUserTransactions });
}