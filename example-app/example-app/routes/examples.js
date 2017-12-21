var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Example = require('../models/Example.js');




/* GET /examples listing. */
router.get('/', function(req, res, next) {
  Example.find(function (err, examples) {
    if (err) return next(err);
    res.json(examples);
  });
});
module.exports = router;


/* POST /examples */
router.post('/', function(req, res, next) {
  Example.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /examples/id */
router.get('/:id', function(req, res, next) {
	Example.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* PUT /examples/:id */
router.put('/:id', function(req, res, next) {
  Example.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Example.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


