const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authen");

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.use(authentication);

module.exports = router;
