

let Vue;
const install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      console.log(options)
      if (options && options.store) {
        this.$store = options.store
        console.log(this.$store)
      } else {
        this.$store = this.$parent.$store
      }
    }
  })
}