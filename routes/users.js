var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/echo', function(req,res,next){
	console.log(req);
var response = req.body;
console.log(response);
for(var queryParam in req.body) {
	response[queryParam] = req.body[queryParam];
}
res.send(response);
});

module.exports = router;
