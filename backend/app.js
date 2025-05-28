const express = require('express');
const app = express();
const stockRoutes = require('./routes/stocks');
const transactionRoutes = require('./routes/transactions');

require('./cron/priceUpdater'); // 6시간마다 가격 갱신

app.use(express.json());
app.use('/stocks', stockRoutes);
app.use('/transactions', transactionRoutes);




app.listen(3000, () => console.log('Server running on 3000'));

//npm install express mysql2 dotenv axios node-cron bcrypt jsonwebtoken cors moment-timezone