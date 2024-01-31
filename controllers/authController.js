const authService = require("../services/auth.service");

exports.login = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    let user = await authService.findUser(email);

    if (!user.success) {
      return res.status(404).send(user);
    }
  } catch (err) {
    next(err);
  }
};
