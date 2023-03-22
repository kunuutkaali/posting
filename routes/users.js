var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET Send data form */
router.get('/send', (req, res, next)=>{
  res.render('users/send', {data: 'Data'})
})
/* POST Send data form */
router.post('/send', (req, res, next)=>{
  res.render('users/send', {data: res.body})
})

module.exports = router;
