const express = require('express');
const router = express.Router();
const { buyStock, sellStock, getMyTransactions } = require('../controllers/transactionController');

router.post('/buy', buyStock);
router.post('/sell', sellStock);
router.get('/me', getMyTransactions);

module.exports = router;
