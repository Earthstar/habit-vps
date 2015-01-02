var express = require('express');
var router = express.Router();

/* Everything which is at /app will load the backbone main function */
router.get('/*', function(req, res) {
  res.render('layout', {});
});

module.exports = router;