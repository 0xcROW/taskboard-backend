const express = require('express');
const connectDB = require('../middlewares/connectDB.js');
const router = express.Router();

/* GET users listing. */
router.get('/', connectDB, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
