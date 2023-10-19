// function test() {
//   console.log(this)
// }

// const obj = {
//   // name: "obj",
//   // test: test
// }

// // obj.test() // => {name: "obj", test: ƒ}
// obj.test = test

var obj = {
  name: "masakinihirota",
  test: function () {
    // console.log(this.name)
    return this.name
  }
}

console.log(obj.test())
// obj.test()
