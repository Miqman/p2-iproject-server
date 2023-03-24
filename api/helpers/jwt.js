const jwt = require("jsonwebtoken");

const secretKeyword = "ulaaaa";

function createTokenPayload(payload) {
  return jwt.sign(payload, secretKeyword, {
    expiresIn: "2h",
  });
}

function readTokenPayload(token) {
  return jwt.verify(token, secretKeyword);
}

module.exports = { createTokenPayload, readTokenPayload };
