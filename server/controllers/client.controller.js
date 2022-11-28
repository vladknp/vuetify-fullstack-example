const clients = [
  {
    name: "Лован",
    phone: "+380971234567",
    inn: 1234567890,
    residence: "м. Львів, вул. Миру 8",
    regPlace: "м. Львів, вул. Миру 8",
    numOfPassport: 123456,
  },
  {
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
}

module.exports = new ClientController()