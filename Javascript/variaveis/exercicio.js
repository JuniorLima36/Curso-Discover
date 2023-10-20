let pessoa = 'joão'
console.log(typeof pessoa)

const name = 'joão'
let age = 22
var stars = 12.5
let isSubscribed = true

let student = {
  name: 'maria',
  age: 18,
  weight: 85.5,
  isSubscribed: true
}
console.log(typeof student)
console.log(`${student.name} tem ${student.age} anos e pesa ${student.weight} kg.`)

let students = [
  student
]

console.log(students[0])

let john = {
  name: 'john',
  age: 18,
  weight: 75.5,
  isSubscribed: true
}

students[1] = john
console.log(students)