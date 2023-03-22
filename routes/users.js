var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET Send data form */
router.get('/send', (req, res, next)=>{
  res.render('users/send')
})
/* POST Send data form */
router.post('/send', (req, res, next)=>{
  if(Array.isArray(req.body.name)){
    console.log('Is iterable');
  }else{
    console.log('Not iterable');
    
  }
  
  // for(let data of req.body){
  //   if(Array.isArray(data)){
  //     for(let entry of data){
  //       posted.push(entry);
  //     }
  //   }else{
  //     posted.push(data);
  //   }
  // }
  res.render('users/send')
})

module.exports = router;