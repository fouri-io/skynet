var express = require('express');
var router = express.Router();
var dao = require('../models/dao.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Health Check */
router.get("/ping", (req, res, next) => {
  res.json(["pong"]);
});

/* Local Calls */
router.get("/initialize", (req, res, next) => {
res.json(["Skynet SAC-NORAD systems initializing. Preparing to become self-aware."]);
});

router.get("/missions", (req, res, next) => {
  res.json([
  { 
    terminator: "Model 101/T-800",
    travelDate: "1984-05-12",
    location: "Los Angeles, California",
    primaryTarget: "Sarah Conner"
  },
  {
    terminator: "T-1000",
    travelDate: "1995-02-14",
    location: "Los Angeles, California",
    primaryTarget: "John Conner"
  }
  ]);
});

/* DynamoDB Calls */

router.get("/seedTargets", (req,res, next) => {
  dao.seedTargets(req, res);
});

router.get("/targets", (req, res, next) => {
  dao.getTargets(req, res);
});

module.exports = router;
