const questions = [
  'Ola tudo bem ?',
  'Como foi seu dia ?',
  'O que voce esta fazendo ?'
]

const ask = (index = 0) => {
  process.stdout.write('\n' + questions[index] + '\n' ) 
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers)
    process.exit(process.on('exit', () => {
      console.log(`Bacana Junior!\n To bem tb: ${answers[0]}\n Fico feliz com isso: ${answers[1]}\n Parece interessante: ${answers[2]}\n`)
    }))
  }
})