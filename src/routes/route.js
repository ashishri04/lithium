const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myMidd1 = require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",myMidd1.authenticate, myMidd1.authorise, userController.getUserData)
router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId",myMidd1.authenticate, myMidd1.authorise, userController.updateUser)
router.delete('/users/:userId',myMidd1.authenticate, myMidd1.authorise, userController.deleteUserData)

module.exports = router;