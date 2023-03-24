function errHandle(err, req, res, next) {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      err = err.errors.map((el) => el.message);
      res.status(400).json({
        message: err[0],
      });
      break;
    case "email!":
      res.status(400).json({
        message: "Email is required",
      });
      break;
    case "password!":
      res.status(400).json({
        message: "Password is required",
      });
      break;
    case "401":
      res.status(401).json({
        message: "Invalid email/password",
      });
      break;
    case "Not_Found":
      res.status(404).json({
        message: "Data Not found",
      });
      break;
    case "AuthFail":
      res.status(401).json({
        message: "You are not authorized",
      });
      break;
    case "JsonWebTokenError":
      res.status(401).json({
        message: "Invalid token",
      });
      break;

    default:
      res.status(500).json({
        message: "Internal Server Error",
      });
      break;
  }
}

module.exports = errHandle;
