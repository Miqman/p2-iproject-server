const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const authentication = require("../middleware/authen");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer();
// const upload = multer();
// console.log(upload, "<<<<<<<<<");

router.post("/register", Controller.register);

router.post("/login", Controller.login);

router.get("/anime", Controller.showAll);

router.get("/popular", Controller.popular);

router.use(authentication);

router.get("/anime/:id", Controller.showOne);

router.get("/fav", Controller.getFavorite);

router.post("/fav/:fId", Controller.postFavorite);

router.get("/profile", Controller.getProfile);

router.post("/profileAdd", upload.single("imageUrl"), Controller.postProfile);

router.delete("/delete/:id", Controller.deletePost);

module.exports = router;
