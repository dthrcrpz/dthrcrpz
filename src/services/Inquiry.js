import { api } from "./_api"

class Inquiry {
  add (data) {
    return api.post('inquiries', data)
  }
}

export default new Inquiry