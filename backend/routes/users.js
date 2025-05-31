const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ✅ 명세서에 맞게 수정된 엔드포인트
router.post('/signup', userController.register); 
router.post('/login', userController.login);

module.exports = router;
