const express = require('express');
const router = express.Router();
const openCors = require('../middleware/openCors');

router.use(openCors)
router.use('/apartments', require('./apartments'));
router.use('/commercial', require('./commercial'));
router.use('/houses', require('./houses'));
router.use('/land', require('./land'));
router.use('/api-docs', require('./swagger'));

module.exports = router;