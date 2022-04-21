const { readTokenPayload } = require("../helpers/jwt");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = readTokenPayload(access_token);
    // console.log(payload, "===========");
    const getUser = await User.findByPk(payload.id);

    if (!getUser) {
      throw { name: "AuthFail", statusCode: 401 };
    } else {
      req.user = {
        id: getUser.id,
        email: getUser.email,
        username: getUser.name,
      };
      // console.log(req.user, "<<<<<<<<<<");
      next();
    }
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

module.exports = authentication;
