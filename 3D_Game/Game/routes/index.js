var router = require('./Couch');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Main Game Final'
    });
});

module.exports = router;