/**
 * 
 */
export default class StringContainer {
  constructor(strings = []) {
    this._strings = strings
  }

  get() {
    return this._strings
  }

  set(strings) {
    this._strings = strings
  }

  sort() {
    this._strings.sort()
  }

  add(string) {
    this._strings.push(string)
  }

  update(string) {
    //
  }

  remove(string) {
    //
  }
}