module.exports = function NotFoundHandler(req, res, next) {
  res.status(404).json({ error: 'Запитуваний ресурс відсутній' })
}