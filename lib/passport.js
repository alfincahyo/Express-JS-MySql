const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const UserModel = require("../models/users.model");
require("dotenv").config();

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.API_KEY,
    },
    async function (jwtPayload, done) {
      let user = await UserModel.findOne({
        where: {
          email: jwtPayload.data.email,
        },
      });

      if (user) {
        return done(null, user);
      } else {
        return done(user);
      }
    }
  )
);

module.exports = passport;
