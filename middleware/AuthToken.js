const jwt = require("jsonwebtoken");
const config = require("../config/configRoles.js");
const JSONResponse = require("../libs/JSONResponse");

module.exports = {
  verifyAuthToken(req, res, next) {
    let tokenHeader = req.headers.authorization;

    if (tokenHeader == undefined) {
      JSONResponse.success(req, res, "Unauthorized!", null);
    }
    if (tokenHeader.split(" ")[0] !== "Bearer") {
      JSONResponse.serverError(req, res, "Incorrect token format", null);
    }

    let token = tokenHeader.split(" ")[1];

    if (!token) {
      JSONResponse.serverError(req, res, "No token provided", null);
    }

    try {
      jwt.verify(token, config.secret, (error, decoded) => {
        if (error) {
          JSONResponse.serverError(req, res, "Token incorrect!", null);
        }
        res.setHeader("X-New-Policy", "Success");
        next();
      });
    } catch (error) {
      JSONResponse.serverError(req, res, null, null);
    }
  },
  isLoggedIn(req, res, next) {},
};
