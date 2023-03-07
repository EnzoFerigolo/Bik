// Estilizacão dos links do menu

const links = document.querySelectorAll('.header-menu li a');
console.log(links);

function ativarLink(link) {
  const url = location.href;
  const linkA = link.href;
  if(url.includes(linkA)){
    link.classList.add('ativo')
  }
}
links.forEach(ativarLink);

// Ativação dos itens do orçamento via URL

const parametros = new URLSearchParams(location.search); 
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  
  if(elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(ativarProduto);

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');
console.log(perguntas);

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  console.log(controls);
  const resposta = document.getElementById(controls);
  resposta.classList.toggle('ativa');

  if (resposta.classList.contains('ativa')) {
    pergunta.setAttribute('aria-expanded','true');
  }
  console.log(resposta.classList.contains('ativa'))
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-img img');
const galeriaPrincipal = document.querySelector('.bicicleta-img');

galeria.forEach(galeriaClick);

function galeriaClick(img) {
  img.addEventListener('click', trocarImg)
}

function trocarImg(event) {
  const img = event.currentTarget;
  
  if (matchMedia('(min-width: 1000px)').matches) {
    galeriaPrincipal.prepend(img);
  }
}

// Animações

if (window.SimpleAnime) {
  new SimpleAnime();
}