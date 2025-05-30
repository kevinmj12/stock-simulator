const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.put('/me', assetController.updateCash);
router.get('/me', assetController.getMyAssets);



module.exports = router;
