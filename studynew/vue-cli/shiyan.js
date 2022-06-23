// setTimeout(() => {
//   console.log("setTimeout")
//   setTimeout(() => {
//     console.log("dsdddd")
//   })
//   setImmediate(() => {
//     console.log("djdjdjjdjdjdjdjdj")
//   })
//   process.nextTick(() => {
//     console.log("ppppp")
//   })
// })
// setImmediate(() => {
//   console.log("setImmediate")

// })
// process.nextTick(() => {
//   console.log("nextTick")
// })

setImmediate(() => {
  console.log(1000)
  process.nextTick(() => {
    console.log(3000)
  })
})
setImmediate(() => {
  console.log(4000)
})
process.nextTick(() => {
  console.log(2000)
})