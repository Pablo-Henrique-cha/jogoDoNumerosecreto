let numeroSecretoSortiados = [];
let numeroLimente = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function boasvindas() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}

boasvindas();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log (chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `voce precisou de ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'o numero secreto e maior');
        }
        tentativas++;
        limparcampo();
    }
    
 }

function gerarNumeroAleatorio() {
   let numeroEscolido = parseInt(Math.random() * numeroLimente + 1);
   let quantidadeDeElementosNalista = numeroSecretoSortiados.length;

   if (quantidadeDeElementosNalista == numeroLimente) {
      numeroSecretoSortiados = [];
   }
   if (numeroSecretoSortiados.includes(numeroEscolido)) {
      return gerarNumeroAleatorio();
   } else {
      numeroSecretoSortiados.push(numeroEscolido);
      return numeroEscolido; 
   }
}

function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparcampo();
    tentativas = 1;
    boasvindas();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
