const { comparePass } = require("../helpers/bcrypt");
const { createTokenPayload } = require("../helpers/jwt");
const { User } = require("../models/index");

class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;

      const newUser = await User.create({
        username,
        email,
        password,
      });
      res.status(201).json({
        statusCode: 201,
        data: {
          id: newUser.id,
          email: newUser.email,
        },
      });
    } catch (error) {
      //   console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      // console.log(req.body, "=================");
      const getUserLogin = await User.findOne({
        where: { email },
      });

      if (!email) {
        throw { name: "email!" };
      }
      if (!password) {
        throw { name: "password!" };
      }

      if (!getUserLogin) {
        throw { name: "401" };
      }
      const getValidUser = comparePass(password, getUserLogin.password);

      if (!getValidUser) {
        throw { name: "401" };
      }

      const payload = { id: getUserLogin.id };
      // console.log(payload);

      const access_token = createTokenPayload(payload);
      //balikin data
      res.status(200).json({
        statusCode: 200,
        access_token: access_token,
        id: getUserLogin.id,
        username: getUserLogin.username,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
