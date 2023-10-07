interface User {
  id: number
  name3: string
  age: number
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const user: User = {
  id: 1,
  name3: "John",
  age: 30
}

const id = getProperty(user, "id") // idの型はnumber
const name3 = getProperty(user, "name3") // name3の型はstring
const age = getProperty(user, "age") // ageの型はnumber
// const invalid = getProperty(user, "invalid") // コンパイルエラー

console.log(id, name3, age)
// console.log(id, name3, age, invalid)
