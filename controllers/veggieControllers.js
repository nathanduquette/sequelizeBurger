var express = require("express");

var router = express.Router();

//  model
var veggie = require("../models/veggie.js");

//  routes 
router.get("/", function(req, res) {
  veggie.all(function(data) {
    var hbsObject = {
      veggie: data
    };
    console.log(hbsObject);
    // put the HTML from in index.handlebars into main.html=====================================================
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  veggie.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  veggie.update({
    devoured: true
  }, condition, function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
