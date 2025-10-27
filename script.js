//javascript
const carrosselImagem = document.getElementById('carrossel-imagem')
const carrosselChevronEsquerda = document.getElementById(
  'carrossel-chevron-esquerda',
)
const carrosselChevronDireita = document.getElementById(
  'carrossel-chevron-direita',
)
const indicadores = document.querySelectorAll('.carrossel-indicador')

let indice = 0
const imagens = [
  'images/banner-1.png',
  'images/banner-2.png',
  'images/banner-3.png',
]

function atualizarCarrossel() {
  carrosselImagem.src = imagens[indice]
}

carrosselChevronEsquerda.addEventListener('click', () => {
  indice--
  if (indice < 0) {
    indice = imagens.length - 1
  }
  atualizarCarrossel()
})

carrosselChevronDireita.addEventListener('click', () => {
  indice++
  if (indice >= imagens.length) {
    indice = 0
  }
  atualizarCarrossel()
  atualizarIndicadores()
})

function atualizarIndicadores() {
  indicadores.forEach((indicador, index) => {
    if (index === indice) {
      indicador.classList.add('carrossel-indicador-ativo')
    } else {
      indicador.classList.remove('carrossel-indicador-ativo')
    }
  })
}

indicadores.forEach((indicador, index) => {
  indicador.addEventListener('click', () => {
    indice = index
    atualizarCarrossel()
    atualizarIndicadores()
  })
})
