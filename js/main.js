const listaBotoes = document.querySelectorAll('.tecla')

function tocaListaSom(seletorSom) {
  const elementoSelecionado = document.querySelector(seletorSom)
  if (elementoSelecionado && elementoSelecionado.localName === 'audio') {
    elementoSelecionado.play()
  } else {
    alert('Algo de errado')
  }
}

for (let i = 0; 0 < listaBotoes.length; i++) {
  const tecla = listaBotoes[i]
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }
}
tecla.onkeydown = function (evento) {
  if (evento.code === 'Space' || evento.code === 'Enter') {
    tecla.classList.add('ativa')
  }
}

tecla.onkeyup = function () {
  tecla.classList.remove('ativa')
}
