const jwt = require("jwt-simple");

const User = require("../models/user");
const config = require("../config");

//jwt
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  //user must give both email and password
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }

  //see if a user with given email exists
  User.findOne({ email: email }, (error, existingUser) => {
    if (error) {
      return next(error);
    }

    //if the email dose exits then return an error
    if (existingUser) {
      return res.status(422).send({ error: "email is in use" });
    }
    //if the email does not exits then create and save user record
    const user = new User({
      email: email,
      password: password,
    });

    user.save(function (error) {
      if (error) {
        return next(error);
      }
      //respond indicating that the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
