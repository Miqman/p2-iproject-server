const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authen");

const multer = require("multer");
const upload = multer();

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.get("/anime", Controller.showAll);

router.get("/anime/:id", Controller.showOne);

router.get("/popular", Controller.popular);

router.use(authentication);

router.get("/fav", Controller.getFavorite);

router.post("/fav/:fId", Controller.postFavorite);

router.get("/profile", Controller.getProfile);

router.post("/profileAdd", upload.single("url"), Controller.postProfile);

module.exports = router;
