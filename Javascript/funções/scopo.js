/*
# Function scope
*/
let subject = 'create'

function create(subject) {
  subject = 'study'
  return subject
}

console.log(create(subject))
console.log(subject)