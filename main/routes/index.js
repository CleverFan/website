var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers.host);

  if(req.headers.host == "upload.improvecfan.cn"){
    res.redirect('http://www.improvecfan.cn:8082/');
  }
  //res.render('index', { title: 'Express' });
});

module.exports = router;
