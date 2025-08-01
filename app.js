let listaDeNumerosSorteados = [];
let limite = 10;
let onumerosecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // Fala o texto na voz do navegador
    let fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR'; // português do Brasil
    fala.rate = 1.5; // velocidade da fala
    window.speechSynthesis.speak(fala);
}

function exibirMensagemInicial() {exibirTextoNaTela('h1', 'Bem-vindo ao jogo!');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
    }
    exibirMensagemInicial()


function verificarChute() {
    let numeroEscolhido = document.querySelector('input').value;

    if (numeroEscolhido == onumerosecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let fraseTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', fraseTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroEscolhido > onumerosecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}


function numeroAleatorio() {
    let numeroGerado = Math.floor(Math.random() * limite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limite) {listaDeNumerosSorteados = [];

    }


    if (listaDeNumerosSorteados.includes(numeroGerado)) {return numeroAleatorio();

    } else {
        listaDeNumerosSorteados.push(numeroGerado);
        console.log(listaDeNumerosSorteados);
        return numeroGerado;

    }
}
    function limparCampo() { numeroEscolhido = document.querySelector('input');
    numeroEscolhido.value = '';
    
}   function reniciarjogo() {onumerosecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial(); 
   document.getElementById('reiniciar').setAttribute('disabled', true);
}
        
            
            
                              
            
        
        
           
            
    

   


