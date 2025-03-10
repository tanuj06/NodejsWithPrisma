const getJwtToken = require("../helpers/jwtToken");

const getCookieToken = (user, res) => {
  const CookieToken = getJwtToken(user.id).Options({
    expires: Date.now() + 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  user.password = undefined;
  res.status(200).cookie("token", CookieToken, Options).json({
    success: true,
    CookieToken,
    user,
  });
};

module.exports = getCookieToken;
