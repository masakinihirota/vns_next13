function test() {
  console.log(this)
}

let obj = { name: "objectの中身", test: test() }
// let check = test.bind(obj.name)
// check()
console.log(obj.test)
