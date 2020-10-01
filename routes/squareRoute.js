const express = require('express');
const router = express.Router();

const {squareRoot} = require('../controllers/squareRoot');

router.route('/:num').get(squareRoot);

module.exports = router;