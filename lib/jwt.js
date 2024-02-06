const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const key = process.env.API_KEY;

async function hash(text, saltRounds) {
  let salt = await bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(text, salt);
}

async function compare(text, hash) {
  return new Promise(function (resovle, reject) {
    var result = bcrypt.compareSync(text, hash);
    if (result) resovle(result);
    else reject(result);
  });
}

async function sign(data) {
  const expiresIn = 60 * 10;
  return jwt.sign(data, key, { expiresIn: expiresIn });
}

async function verify(token) {
  return jwt.verify(token, key);
}

module.exports = {
  hash,
  compare,
  sign,
  verify,
};
