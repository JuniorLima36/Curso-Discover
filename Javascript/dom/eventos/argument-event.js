const input = document.querySelector('input')

// key currentTarget/value event
input.onkeydown = function(event) {
  console.log(event.key)
  console.log(event.currentTarget)
  console.log(event.currentTarget.value)
  console.log(event)
}
