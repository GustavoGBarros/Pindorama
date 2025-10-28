document.addEventListener('DOMContentLoaded', () => {
  const listaAvaliacoesContainer = document.querySelector('.lista-avaliacoes')
  const paginacaoAvaliacoes = document.querySelector('.paginacao-avaliacoes')
  const paginacaoAvaliacoesDesktop = document.querySelector(
    '.paginacao-avaliacoes-desktop',
  )

  if (listaAvaliacoesContainer && paginacaoAvaliacoes) {
    const avaliacoes = [
      {
        nome: 'Carlos Alberto',
        foto: 'images/carlosalberto.svg',
        estrelas: '★★★★★',
        texto:
          'Atendimento excepcional! A equipe foi muito cuidadosa e atenciosa com meu pet.',
      },
      {
        nome: 'Neymar Jr',
        foto: 'images/neymar.svg',
        estrelas: '★★★★★',
        texto:
          'Não poderia estar mais feliz com o serviço desta clínica. Profissionais qualificados e atenciosos.',
      },
      {
        nome: 'Josseana da Silva',
        foto: 'images/josseana.svg',
        estrelas: '★★★★★',
        texto:
          'Excelente clínica! Desde o primeiro contato, fui atendido com profissionalismo e gentileza.',
      },
      {
        nome: 'João Henrique',
        foto: 'images/carlosalberto.svg',
        estrelas: '★★★★★',
        texto:
          'Atendimento de primeira, cuidam muito bem dos animais e sempre explicam tudo com clareza.',
      },
      {
        nome: 'Adamilton Jr',
        foto: 'images/neymar.svg',
        estrelas: '★★★★★',
        texto:
          'A clínica é muito bem equipada, e os profissionais são incríveis, mas o tempo de espera poderia ser menor.',
      },
      {
        nome: 'Luciana da Silva',
        foto: 'images/josseana.svg',
        estrelas: '★★★★★',
        texto:
          'Profissionais capacitados e atenciosos, meu gato recebeu o melhor cuidado. Recomendo muito!',
      },
      {
        nome: 'Matheus Brito',
        foto: 'images/carlosalberto.svg',
        estrelas: '★★★★★',
        texto:
          'A equipe é super dedicada e o ambiente é acolhedor, perfeito para quem se importa com o bem-estar do pet.',
      },
      {
        nome: 'Luiz Jr',
        foto: 'images/neymar.svg',
        estrelas: '★★★★★',
        texto:
          'Atendimento excelente e muito atencioso! Meu pet recebeu todo o cuidado necessário e ficou ótimo.',
      },
      {
        nome: 'Clariane da Silva',
        foto: 'images/josseana.svg',
        estrelas: '★★★★★',
        texto:
          'Fiquei satisfeita com o atendimento, mas achei os preços um pouco altos para alguns serviços.',
      },
    ]

    const avaliacoesPorPagina = 3
    let paginaAtual = 1
    const totalPaginas = Math.ceil(avaliacoes.length / avaliacoesPorPagina)

    const paginaAtualSpan = paginacaoAvaliacoes.querySelector('.pagina-atual')
    const btnAnterior = paginacaoAvaliacoes.querySelector(
      '.botao-pagina-anterior',
    )
    const btnProxima = paginacaoAvaliacoes.querySelector(
      '.botao-pagina-proxima',
    )

    // Desktop pagination elements
    const paginaAtualSpanDesktop =
      paginacaoAvaliacoesDesktop.querySelector('.pagina-atual')
    const btnAnteriorDesktop = paginacaoAvaliacoesDesktop.querySelector(
      '.botao-pagina-anterior-desktop',
    )
    const btnProximaDesktop = paginacaoAvaliacoesDesktop.querySelector(
      '.botao-pagina-proxima-desktop',
    )

    function renderizarAvaliacoes() {
      listaAvaliacoesContainer.innerHTML = ''
      const inicio = (paginaAtual - 1) * avaliacoesPorPagina
      const fim = inicio + avaliacoesPorPagina
      const avaliacoesDaPagina = avaliacoes.slice(inicio, fim)

      avaliacoesDaPagina.forEach((avaliacao) => {
        const cardHtml = `
          <div class="card-avaliacao">
            <img src="${avaliacao.foto}" alt="Foto de ${avaliacao.nome}" class="foto-avaliacao" />
            <div class="conteudo-avaliacao">
              <div class="estrelas-avaliacao">${avaliacao.estrelas}</div>
              <h3 class="nome-avaliacao">${avaliacao.nome}</h3>
              <p class="texto-avaliacao">${avaliacao.texto}</p>
            </div>
          </div>
        `
        listaAvaliacoesContainer.innerHTML += cardHtml
      })
      paginaAtualSpan.textContent = paginaAtual
      paginaAtualSpanDesktop.textContent = paginaAtual
    }

    btnProxima.addEventListener('click', (e) => {
      e.preventDefault()
      paginaAtual++
      if (paginaAtual > totalPaginas) {
        paginaAtual = 1
      }
      renderizarAvaliacoes()
    })

    btnAnterior.addEventListener('click', (e) => {
      e.preventDefault()
      paginaAtual--
      if (paginaAtual < 1) {
        paginaAtual = totalPaginas
      }
      renderizarAvaliacoes()
    })

    btnProximaDesktop.addEventListener('click', (e) => {
      e.preventDefault()
      paginaAtual++
      if (paginaAtual > totalPaginas) {
        paginaAtual = 1
      }
      renderizarAvaliacoes()
    })

    btnAnteriorDesktop.addEventListener('click', (e) => {
      e.preventDefault()
      paginaAtual--
      if (paginaAtual < 1) {
        paginaAtual = totalPaginas
      }
      renderizarAvaliacoes()
    })

    renderizarAvaliacoes()
  }

  // CARROSSEL (DESKTOP)
  //javascript
  const carrosselBanner = document.getElementById('carrossel-banner')
  const carrosselChevronEsquerda = document.getElementById(
    'carrossel-chevron-esquerda',
  )
  const carrosselChevronDireita = document.getElementById(
    'carrossel-chevron-direita',
  )
  const carrosselSlides = document.querySelectorAll('.carrossel-slide')
  const indicadores = document.querySelectorAll('.carrossel-indicador')

  let indice = 0
  const imagens = [
    'images/banner-1.png',
    'images/banner-2.png',
    'images/banner-3.png',
  ]

  function atualizarCarrossel() {
    carrosselSlides.forEach((slide, i) => {
      if (i === indice) {
        slide.style.opacity = '1'
        slide.style.zIndex = '1'
      } else {
        slide.style.opacity = '0'
        slide.style.zIndex = '0'
      }
    })
    atualizarIndicadores()
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
    })
  })
})
