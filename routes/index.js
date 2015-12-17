var express = require('express');
var request = require('request');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    getEvents(function(err, response, body) {
      var data = JSON.parse(body);
      res.render('index', {events:data});
    });
});

module.exports = router;


function getEvents(cb){
  request('http://localhost:3000/api/eventList', cb);
}
