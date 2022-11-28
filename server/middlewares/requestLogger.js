module.exports = function requestLogger(req, res, next) {
  console.info(`${req.method} url:: ${req.url}`);
  next();
}
