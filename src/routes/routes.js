const express = require("express")
const router = express.Router()
const profileController = require('../controllers/profile')
const userController = require('../controllers/user')
const passport = require('../auth/auth')

router.post("/loginLinkedin", passport.authenticate('linkedin', {
    successRedirect: '/', //userController.loginLinkedin)
    failureRedirect: '/login'
  }));
 

/* app.get('/auth/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  }); */

/* router.post("/profile", passport.auth, profileController.saveProfile)
router.get("/profiles", profileController.getProfiles)
router.get("/profile/:id", profileController.getProfile)
router.put("/profile/:id", passport.auth, profileController.updateProfile)
router.delete("/profile/:id", passport.auth, profileController.deleteProfile)

router.post("/user", userController.signup)
router.post("/login", userController.login) */

module.exports = router