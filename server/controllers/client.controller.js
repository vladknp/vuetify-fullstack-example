const statuses = require('../utils/statuses')
const { BadRequest, NotModified } = statuses

const clients = [
  {
    id: 0,
    name: "Лован",
    phone: "+380971234567",
    inn: 1234567890,
    residence: "м. Львів, вул. Миру 8",
    regPlace: "м. Львів, вул. Миру 8",
    numOfPassport: 123456,
  },
  {
    id: 1,
    name: "Рюмер",
    phone: "+380972234567",
    inn: 2234567890,
    residence: "м. Київ, вул. Дмитрівська 28, кв. 5",
    regPlace: "м. Київ, вул. Дмитрівська 28, кв. 5",
    numOfPassport: 223456,
  },
]

class ClientController {
  getAll(req, res, next) {
    res.json(clients)
  }

  updateById(req, res, next) {
    const { clientId } = req.params
    const { phone } = req.body

    const clientIndex = clients.findIndex(client => client.id === Number(clientId))

    if(clientIndex === -1) {
      return new NotModified(res)
    }

    const client = clients[clientIndex]

    client.phone = phone
    res.json({ client })
  }

  validateClientId(req, res, next) {
    const { clientId } = req.params
    
    if(Number.isNaN(Number(clientId))) {
      return next(new BadRequest(`Не валідне значення ідентифікатора '/:clientId' ${clientId}`))
    }
    next()
  }

  validateBody(req, res, next) {
    const { phone, ...otherKeys } = req.body
    if(Object.keys(otherKeys).length > 0) {
      return next(new BadRequest(`Доступні ключі ['phone']`))
    }
    next()
  }
}

module.exports = new ClientController()
