const express = require('express');

const router = express.Router();
const controller = require('./controller.js');

// signup via email
router.get('/', (req, res) => {
	res.status(200).send(controller.getStarted());
});

module.exports = router;
