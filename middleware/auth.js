function checkAuth(req, res, next) {
  // Check req.session.loggedIn to see if the user is logged in
  if (req.session.loggedIn) {
    // If the user is logged in, continue to the next middleware or route
    return next();
  }

  // If the user is not logged in, redirect to /login
  res.redirect('/login');
}

module.exports = checkAuth;