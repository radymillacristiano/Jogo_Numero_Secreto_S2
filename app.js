let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumero()
let tentativas = 1

function exibirTexto(tag, texto) {
  document.querySelector(tag).innerHTML = texto
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}) // funcionalidade de fala
}

function exibirMensagemInicial() {
  exibirTexto('h1', 'Jogo do número secreto')
  exibirTexto('p', 'Escolha um número entre 1 e 10')
}

exibirMensagemInicial()

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
  let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length

  if (quantidadeDeNumerosNaLista == numeroLimite) {
    listaDeNumerosSorteados = []
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumero()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    return numeroEscolhido
  }
}

function verificarChute() {
  let chute = document.querySelector('input').value

  if (chute == numeroSecreto) {
    exibirTexto('h1', 'Você acertou!')
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    exibirTexto('p', mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (chute > numeroSecreto) {
      exibirTexto('h1', 'O número secreto é menor. Tente novamente')
    } else {
      exibirTexto('h1', 'O número secreto é maior. Tente novamente')
    }
    tentativas++
    limparCampo()
  }
}

function limparCampo() {
  chute = document.querySelector('input').value = ''
}

function reiniciarJogo() {
  numeroSecreto = gerarNumero()
  limparCampo()
  tentativas = 1
  exibirMensagemInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

// -----------------------------------------------

// algoritmo
// 1 - criar numero secreto ok
// 2 - pegar valor do chute ok
// 3 - comparar chute com numero secreto ok
// 4 - enviar resposta ou dica para o usuario na tela ok

// DESAFIO
// function mensagem(numero1, numero2, numero3) {
//   let resultado = (numero1 + numero2 + numero3)/2
//   console.log(resultado)
// }

// mensagem(7, 6, 5)

// Desafios
// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// Crie uma lista vazia, com o nome listaGenerica.
// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
