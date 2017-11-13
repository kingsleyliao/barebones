const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      const existingUser = await User.findOne({'local.email': email});

      if (existingUser) {
        return done(null, "Email is currently in use");
      }

      const newUser = new User();
      newUser.local.email = email;
      newUser.local.password = newUser.generateHash(password);

      await newUser.save();
      done(null, newUser);
    }
  )
);

passport.use('local-login', new LocalStrategy(
   {
     usernameField : 'email',
     passwordField : 'password',
     passReqToCallback : true
   },
   async (req, email, password, done) => {
       const user = await User.findOne({ 'local.email' :  email }).select('+local.password');

       try {
         if (!user)
             return done(null, "No user found");

         if (!user.validPassword(password))
             return done(null, "Wrong password");

         return done(null, user);

       } catch (err) {
         res.send(err)
       }
  })
);
