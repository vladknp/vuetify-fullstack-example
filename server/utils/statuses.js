const statuses = require('statuses')

const clases = {}
const codes = statuses.codes
for(const code of codes) {
  const rawName = statuses(code)
  const pascalName = rawName
    .toLowerCase()
    .split(' ')
    .map(w => w.replace(/(^\w)/, w.charAt(0).toUpperCase()))
    .join('')

  if(100 <= code && code < 400) {
    clases[pascalName] = class {
      constructor(response, message) {
        this.name = pascalName
        
        response.status(code)
        if(message !== '') {
          response.json(message)
        }
        response.end()
      }
    }
    continue
  }

  if(400 <= code && code <= 511) {
    clases[pascalName] = class extends Error {
      constructor(message) {
        super(message)
        this.name = pascalName
        this.code = code
        this.phrathe = rawName
      }
    }
  }
  
}

module.exports = clases
