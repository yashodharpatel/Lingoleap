const express = require('express');
const router = express.Router();
const { register, login, logout, verifyEmail, resetPassword, forgotPassword } = require('../controllers/auth');

router.post('/register', register);
router.post('/login', login);
router.delete('/logout', logout);
router.post('/verify-email',verifyEmail)
router.post('/reset-password', resetPassword);
router.post('/forgot-password', forgotPassword);

module.exports = router;