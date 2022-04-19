const bcryp = require("bcrypt");

function createHashPass(pass) {
  return bcryp.hashSync(pass, 8);
}

function comparePass(inputPass, passDb) {
  return bcryp.compareSync(inputPass, passDb);
}

module.exports = { createHashPass, comparePass };
