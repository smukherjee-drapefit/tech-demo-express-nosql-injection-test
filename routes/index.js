const express = require('express');

const User = require('../models/user.model');

const router = express.Router();

router.get('/users', async (req, res, next) => {
  return res.json({
    users: await User.find({}).exec()
  });
});

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password }).exec();

  res.json({
    message: `Logged in as ${user.username}`
  });
});

module.exports = router;
