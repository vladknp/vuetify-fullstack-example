module.exports = function clientErrorHandler(err, req, res, next) {
  const { code, message = '' } = err
  if (/* req.xhr &&  */code && Number(code) <= 500) {
    res.status(code).json({ error: message })
  } else {
    res.status(500).json()
    next(err)
  }
}
