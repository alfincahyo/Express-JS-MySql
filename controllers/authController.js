const authService = require("../services/auth.service");
const jwt = require("../lib/jwt");

exports.login = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    let user = await authService.findUser(email);

    if (!user.success) {
      return res.status(404).send(user);
    }

    jwt
      .compare(password, user.data.password)
      .then(async function (done) {
        let response = await authService.login(user, false);
        response.code = response.success ? 200 : 500;
        return res.status(response.code).send(response);
      })
      .catch(function (error) {
        console.log(error);
        return res.status(400).send({
          code: 400,
          success: false,
          message: "Kata Sandi Anda Salah",
          data: error,
        });
      });
  } catch (err) {
    next(err);
  }
};
