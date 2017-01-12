var router = require('./Couch');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Data Master. Tania Leonova-Vendrovska' });
});

module.exports = router;
