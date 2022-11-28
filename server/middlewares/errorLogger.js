module.exports = function errorLogger(err, req, res, next) {
  console.error('error-logger => ',err.stack)
  next(err)
}
