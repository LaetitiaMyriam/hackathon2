var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('express-jwt');
var auth = jwt({secret: 'myLittleSecret'});
var passport = require('passport');

require('../config/passport');

var User = require('../models/Users');
var Artwork = require('../models/Artworks');
var Comment = require('../models/Comments');


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
});


router.post('/addurls', function(req, res){
  User.findById(req.body.userId, function (err, data){

    var user = data;
    var urls = req.body['urls[]'];
    
    if ((typeof urls) == 'object'){
      for ( var i = 0; i < urls.length; i++) {
            var artwork = new Artwork({username: req.body.username, userId: req.body.userId, url: urls[i]});
            user.artworks.push(artwork);
      };     
    } else {
      var artwork = new Artwork({userId: req.body.userId, url: urls});
      user.artworks.push(artwork);    
    };
    user.save();    
  });
});


//comments
router.post('/users/comments', function(req, res, next) { 
  User.findById(req.body.userId, function (err, data) {

    for (var i = 0; i < data.artworks.length; i++) {
    console.log('here');

      if (data.artworks[i]._id == req.body.artId) {

        console.log('hello');
        
        var comment = new Comment(req.body.comment);
        
        console.log('beforeCommentPush', data.artworks[i].comments);
        data.artworks[i].comments.push(comment);
        console.log('afterCommentPush', data.artworks[i].comments);

      };
    };

    
    
    data.save();
  });
  });


//upvotes
router.put('/artwork/likes', function(req, res, next) {
 User.findById(req.body.userId, function (err, data) {
     for (var i = 0; i < data.artworks.length; i++) {
       if (data.artworks[i]._id == req.body._id) {
         data.artworks[i].likes += 1;
         console.log(data.artworks[i].likes);
         data.save(function(err, data) {
           console.log(data);
           res.end();
         });
       }
     }
     
   });
});



module.exports = router;