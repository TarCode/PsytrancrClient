var express = require('express');
var request = require('request');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('land');
});

router.get('/events', function(req, res, next) {
    getEvents(function(err, response, body) {
      var data = JSON.parse(body);
      res.render('index', {events:data});
    });
});

router.get('/events/:id', function(req, res, next) {
    var eventId = req.params.id;
    getEventById(eventId, function(err, response, body) {
      var data = JSON.parse(body);
      res.render('event', {event:data[0], artists: data[1]});
    });
});

module.exports = router;


function getEvents(cb){
  request('http://localhost:3000/api/eventList', cb);
}

function getEventById(eventId, cb){
  request('http://localhost:3000/api/event/'+ eventId, cb);
}
