export default (function () {
  // Set Storage
  function set(name, data) {
    return window.localStorage.setItem(name, JSON.stringify(data))
  }

  // Get Storage
  function get(name) {
    return JSON.parse(window.localStorage.getItem(name))
  }

  // Get all Storage
  function getStorage(name) {
    return window.localStorage
  }

  // Update Storage
  function update(name, data) {
    remove(name)
    set(name, data)
  }

  // Remove Storage
  function remove(name) {
    return window.localStorage.removeItem(name)
  }

  // Clear Storage
  function clear() {
    return window.localStorage.clear()
  }

  // get  key name
  function key(index) {
    return window.localStorage.key(index)
  }

  // is supported the storage?
  function supported() {
    if (typeof Storage !== 'undefined') {
      return true
    } else {
      return false
    }
  }

  return { set, get, getStorage, update, remove, clear, key, supported }
})()
