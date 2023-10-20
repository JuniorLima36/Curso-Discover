// events
const events = require('events')

console.log(events)

// EventEmitter - Utilizar os eventos
const { EventEmitter } = require('events')
const ev = new EventEmitter()

console.log(ev)

// emit - Disparar eventos
const { EventEmitter } = require('events')
const ev2 = new EventEmitter()

ev2.emit('saySomething')

// on / emit - Ouvir eventos
const { EventEmitter } = require('events')
const ev3 = new EventEmitter()

ev3.on('saySomething', (message) => {
  console.log('Eu ouvi voce: ', message)
})
ev3.emit('saySomething', 'Junior')
ev3.emit('saySomething', 'Carlos')
ev3.emit('saySomething', 'João')

// once - Executar ações para determinados eventos
const { EventEmitter } = require('events')
const ev4 = new EventEmitter()

ev4.once('saySomething', (message) => {
  console.log('Eu ouvi voce: ', message)
})
ev4.emit('saySomething', 'Junior')
ev4.emit('saySomething', 'Carlos')
ev4.emit('saySomething', 'João')

// Entender como ele é a base para os outros modulos
const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')