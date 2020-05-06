module.exports = function(app,passport){

  var express = require('express');
  var router = express.Router();
  var User = require("../models").User
  var userController = require("../controllers/userController")

  router.post("/signup",function(req,res){
      userController.create(req,res)
  })

  router.post('/login',  passport.authenticate('local'), function(req, res) {
    res.json({signedin:req.user.username,
    });
  });


   router.post('/logout', function(req, res) {
                              req.logout()
                              res.send("logged out")
                          });
  return router

}
