const express = require('express');

const router = express.Router();
const controller = require('./controller.js');

// template route
router.get('/', (req, res) => {
	res.status(200).send(controller.getStarted());
});

module.exports = router;
