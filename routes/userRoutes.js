const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {
  app.patch("/api/user", requireLogin, async (req, res) => {
    const { fName, lName, Dob } = req.body;

    const updateObject = {
      fName,
      mInitial,
      Dob,
    };

    const user = await User.findOneAndUpdate(req.user._id, updateObject)

    try {
      await user.save();
      res.send(user);
    } catch(err) {
      res.status(500).send(err);
    }
  });
};
