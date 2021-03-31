var success = function (req, res, message, data) {
  res.status(200).json({
    code: 200,
    message: message || "success",
    data: data,
  });
};

var serverError = function (req, res, message, data) {
  res.status(500).json({
    code: 500,
    message: message || "internal server error",
    data: data,
  });
};

module.exports = { success, serverError };
