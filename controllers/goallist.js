var express = require('express');
var router = express.Router();
// require model file.
var goalModel = require('../models/goals');

router.route('/')
  .get(function(req,res) {
    // Code to fetch the polls.
    var goalObject = new goalModel();
    // Calling our model function.
    goalObject.getAllGoals(function(err,goalResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : goalResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : goalResponse});
    });
  })
  .post(function(req,res) {
    console.log(req.body)

    var goalObject = new goalModel();
    // Calling our model function.
    // We nee to validate our payload here.
    goalObject.addNewGoals(req.body,function(err,goalResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : goalResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success","data" : goalResponse});
    });
  })
  .put(function(req,res) {
    // Code to update votes of poll.
    var goalObject = new goalModel();
    // Calling our model function.
    // We need to validate our payload here.
    goalObject.voteGoalOption(req.body,function(err,goalResponse) {
      if(err) {
        return res.json({"responseCode" : 1, "responseDesc" : goalResponse});
      }
      res.json({"responseCode" : 0, "responseDesc" : "Success", "data" : goalResponse});
    });
  });

module.exports = router;
