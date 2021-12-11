const thenable = {
    then: function(resolve, reject) {
        resolve(42)
    }
}
const promise = Promise.resolve(thenable)
promise.then(function(val) {
    console.log(val)
})