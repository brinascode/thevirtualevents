module.exports = function(passport){
    var LocalStrategy = require("passport-local").Strategy
    var User = require("../models").User

    passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });
    
    passport.use(new LocalStrategy(
        function(username, password, done) {
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.checkPassword(password)) { return done(null, false); }
             return done(null, user);
          });
        }
      ));
    
}
