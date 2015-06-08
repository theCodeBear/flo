'use strict';

module.exports = function(req, res, next) {
  if (req.body.password.length > 2) {
    next();
  } else {
    res.status(400).send('User password payload did not pass server validation');
  }
};