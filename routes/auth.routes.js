const router = require("express").Router();

<<<<<<< HEAD
// AUTH ROUTES GO HERE
=======
// ROUTES router
>>>>>>> 403c38574e59fd633f4e2ff53fb5770df829f3a9

// GET  /signup
router.get("/signup", (req, res) => {
  res.render("auth/signup-form");
});

module.exports = router;
