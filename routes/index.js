var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({secret: 'myLittleSecret'});
var passport = require('passport');

require('../config/passport');

var User = require('../models/Users');
var Artwork = require('../models/Artworks');


router.get('/users', function(req, res, next) {
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
});


router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  var user = new User();

  user.name = req.body.name;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function (err){
    if(err){ return next(err); }

    return res.json({token: user.generateJWT()})
  });
});

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }

  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }

    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});


router.post('/users', function(req, res, next) {

  var artwork = new Artwork(req.body.artwork);
  
  User.findById(req.body.id, function (err, data){

    data.artworks.push(artwork);
    data.save();

    res.json(data);
  });
  
})


module.exports = router;