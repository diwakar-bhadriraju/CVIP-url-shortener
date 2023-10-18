// routes/urlRoutes.js
const express = require('express');
const router = express.Router();

// URL Shortening route
router.post('/shorten', async (req, res) => {
});

// URL Redirection route
router.get('/:shortCode', async (req, res) => {
});

module.exports = router;
