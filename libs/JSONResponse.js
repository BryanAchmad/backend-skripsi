var success = function (req, res, message, data) {
  res.status(200).json({
    code: 200,
    status: "success",
    message: message || "success",
    data: data,
  });
};

var serverError = function (req, res, message, data) {
  res.status(400).json({
    code: 401,
    status: "error",
    message: message || "internal server error",
    data: data,
  });
};

module.exports = { success, serverError };
