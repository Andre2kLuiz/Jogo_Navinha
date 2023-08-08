

// Obtém uma referência para o botão no HTML
const meuBotao = document.querySelector('meuBotao');

// Adiciona um ouvinte de evento para o clique no botão
meuBotao.addEventListener('click', simularTeclaW);
console.log(meuBotao)
// Função para simular pressionar a tecla "W"
function simularTeclaW() {
  // Cria um evento do teclado simulando uma tecla pressionada
  const eventoTeclaPressionada = new KeyboardEvent('keydown', {
    key: 'w',
    keyCode: 87,
    which: 87,
    code: 'KeyW',
  });

  // Despacha o evento para o documento
  document.dispatchEvent(eventoTeclaPressionada);
}






