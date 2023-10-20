const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  const items = [
    {
      title: 'D', 
      message: 'esenvolvedor aplicações/serviços de forma facil'
    },
    {
      title: 'E', 
      message: 'JS usa Javascript para renderizar HTML'
    },
    {
      title: 'M', 
      message: 'uito facil de usar'
    },
    {
      title: 'I', 
      message: 'nstall ejs'
    },
    {
      title: 'S', 
      message: 'intaxe simples'
    },
  ];

  const subtitle = 'Uma linguagem de modelagem para criação de pagina HTML utilizando JS'
  
  res.render('pages/index', {
    qualitys: items,
    subtitle: subtitle,
  });
})

app.get('/sobre', function(req, res) {
  res.render('pages/about');
})

app.listen(3000);
console.log('Rodando')