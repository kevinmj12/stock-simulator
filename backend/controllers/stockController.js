const db = require('../db');

// 종목 리스트 (최신 가격 포함)
exports.getStockList = async (req, res) => {
    const [rows] = await db.query(`
      SELECT s.id, s.symbol, s.company_name, sp.price
      FROM stocks s
      LEFT JOIN (
        SELECT stock_id, price
        FROM stock_prices
        WHERE (stock_id, fetched_at) IN (
          SELECT stock_id, MAX(fetched_at)
          FROM stock_prices
          GROUP BY stock_id
        )
      ) sp ON s.id = sp.stock_id;
    `);
    res.json(rows);
  };
  
// 종목 상세
exports.getStockDetail = async (req, res) => {
  const [rows] = await db.query(
    `SELECT s.*, sp.price
     FROM stocks s
     LEFT JOIN (
       SELECT stock_id, price
       FROM stock_prices
       WHERE stock_id = ? ORDER BY fetched_at DESC LIMIT 1
     ) sp ON s.id = sp.stock_id
     WHERE s.id = ?`,
    [req.params.id, req.params.id]
  );

  if (rows.length === 0) return res.status(404).json({ message: 'Not found' });
  res.json(rows[0]);
};
