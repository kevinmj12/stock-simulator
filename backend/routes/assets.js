const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.put('/me', assetController.addAsset);
router.get('/me', assetController.getTotalAsset);



module.exports = router;
