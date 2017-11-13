const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
   app.post(
     '/api/signup',
     passport.authenticate('local-signup'),
     (req, res) => {
       req.login(req.user, (err) => {
         if (!err) {
           return res.send(req.user).redirect('/home');
         }
       });
     }
  );

   app.post(
     '/api/login',
     passport.authenticate('local-login'),
     (req, res) => {
       req.login(req.user, (err) => {
         if(!err) {
           let sanitizedUser = req.user.toObject();
           delete sanitizedUser['local'];
           return res.send(sanitizedUser).redirect('/home');
         }
       });
     }
   );

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/home');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', requireLogin, (req, res) => {
    res.send(req.user);
  });
};
