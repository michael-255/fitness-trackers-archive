/**
 * 
 */
export default class _IdContainer {
  constructor({ items = [] } = {}) {
    this._items = items
  }

  get items() {
    return this._items
  }

  set items(items) {
    this._items = items
  }

  findById(id) {
    return null
  }

  findByIds(ids) {
    return null
  }

  sort() {
    this._items.sort()
  }

  add(item) {
    this._items.push(item)
  }

  update(item) {
    //
  }

  remove(item) {
    //
  }
}
