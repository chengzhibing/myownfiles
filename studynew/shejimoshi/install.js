function Storage() {
  this.setItem = function (key, val) {
    localStorage.setItem(key, val)
  }
  this.getItem = function (key) {
    return localStorage.getItem(key)
  }
}
Storage.getInstance = function () {
  if (!Storage.instance) {
    Storage.instance = new Storage()
  }
  return Storage.instance
}

const stortag = Storage.getInstance()
stortag.setItem("name", "zhang")
console.log(stortag.getItem("name"))