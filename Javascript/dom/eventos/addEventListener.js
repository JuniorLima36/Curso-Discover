const h1 = document.querySelector('h1')

// click mouseover
h1.addEventListener('click', print)

function print() {
  console.log('print')
}


// Outro metodo
const h2 = document.querySelector('h2')

h2.addEventListener('click', print)

function print() {
  console.log('print')
}

h2.addEventListener('click', function() {
  console.log('Outro momento')
})