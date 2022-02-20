import _Entity from '../_Entity.js'

/**
 *
 */
export default class User extends _Entity {
  constructor({
    id = null,
    email = null,
    birthdate = null,
    height = null,
  } = {}) {
    super({ id })
    this._email = email
    this._birthdate = birthdate
    this._height = height
  }

  get email() {
    return this._email
  }

  get birthdate() {
    return this._birthdate
  }

  get height() {
    return this._height
  }

  set email(email) {
    this._email = email
  }

  set birthdate(birthdate) {
    this._birthdate = birthdate
  }

  set height(height) {
    this._height = height
  }

  export() {
    return {}
  }
}
