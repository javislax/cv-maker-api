const express = require("express")
const router = express.Router()
const personController = require('../controllers/person')
const userController = require('../controllers/user')
const passport = require('../auth/auth')

  // Login
  router.post("/login", userController.login)
  router.post("/signup", userController.signup)

  // CRUD Person
  router.post("/create", personController.savePerson)
  


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
 */

module.exports = router