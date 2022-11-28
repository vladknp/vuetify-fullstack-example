module.exports = function errorHandler(err, req, res, next) {
  if (!res.headersSent) {
    return next(err);
  }
}
