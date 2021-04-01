const jwt = require("jsonwebtoken");
const config = require("../config/configRoles.js");
const JSONResponse = require("../libs/JSONResponse");

module.exports = {
  verifyAuthToken(req, res, next) {
    let tokenHeader = req.headers["x-access-token"];

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
          JSONResponse.serverError(req, res, null, null);
        }
        next();
      });
    } catch (error) {
      JSONResponse.serverError(req, res, null, null);
    }
  },
};
