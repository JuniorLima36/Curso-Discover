// if else

let temp = 36.9
let altaTemp = temp >= 37.5
let mediaTemp = temp < 37.5 && temp >= 37

if(altaTemp) {
  console.log('Febre alta')
} else if (mediaTemp) {
  console.log('Febre moderada')
} else {
  console.log('Saudavel')
}