function add(a, b = "b") {
  console.log(a === arguments[0])
  console.log(b === arguments[1])
  console.log(arguments[1])
  console.log(a + b)
  a = 10;
  b = 20;
  console.log(a === arguments[0])
  console.log(b === arguments[1])
}
add("a", undefined)