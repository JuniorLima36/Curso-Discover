const livros = [
  {
    categoria: 'Riqueza',
    livros: [
      {
        titulo: 'Os segredos da mente milionario',
        autor: 'T. Harv Eker',
      },
      {
        titulo: 'O homem mais rico da babilonia',
        autor: 'George S. Clason',
      },
      {
        titulo: 'Pai rico, pai pobre',
        autor: 'Robert T. Kiyosaki e Sharon L. Lechter',
      },
    ],
  },
  {
    categoria: 'Inteligencia Emocional',
    livros: [
      {
        titulo: 'Voce é Insubstituivel',
        autor: 'Augusto Cury',
      },
      {
        titulo: 'Ansiedade - Como enfrentar o mal do seculo',
        autor: 'Augusto Cury',
      },
      {
        titulo: 'Os 7 habitos das pessoas altamente eficazes',
        autor: 'Stephen R. Covey',
      },
    ],
  },
];

const totalCat = livros.length
console.log(totalCat)

for(let categoria of livros) {
  console.log('Total de livros da categoria: ', categoria,categoria)
  console.log(categoria.livros.length)
}

function contAutor(){
  let autor = [];

  for(let categoria of livros) {
    for(let livro of categoria.livros) {
      if(autor.indexOf(livro.autor) == -1){
        autor.push(livro.autor)
      }
    }
  }
  console.log('Total de autores: ', autor.length)
}

contAutor()

function livrosAutor(autor){
  let livros = [];

  for(let categoria of livros) {
    for(let livro of categoria.livros) {
      if(livros.autor === autor){
        livros.push(livro.titulo)
      }
    }
  }
  console.log(`Livros do autor ${autor}: ${livros.join(', ')}`)
}

livrosAutor('George S. Clason')