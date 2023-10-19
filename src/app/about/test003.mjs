function test() {
  console.log(this)
}

var obj = { name: "objectの中身" }
var check = test.bind(obj)
check()
