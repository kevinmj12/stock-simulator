const express = require("express");
const app = express();
const stockRoutes = require("./routes/stocks");
const transactionRoutes = require("./routes/transactions");
const assetRoutes = require("./routes/assets");
const userRoutes = require("./routes/users");

require("./cron/priceUpdater"); // 6시간마다 가격 갱신
require("./cron/dailyUpdater");
require("dotenv").config();

app.use(express.json());
app.use("/stocks", stockRoutes);
app.use("/transactions", transactionRoutes);
app.use("/assets", assetRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running on 3000"));

//npm install express mysql2 dotenv axios node-cron bcrypt jsonwebtoken cors moment-timezone bcryptjs
