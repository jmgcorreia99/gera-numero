function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }


    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números aleatórios é maior do que o range entre máximo e minimo');
        return;
    }

    for (let i = 0; i < quantidade; i++) {

        let numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);

        }

        sorteados.push(numero);


    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

    alterarStatusBotao();

}


function obterNumeroAleatorio(min, max) {

    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroAleatorio;

}


function alterarStatusBotao() {

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function limpaValores() {

    quantidade.value = '';
    de.value = '';
    ate.value = '';
    sorteados = [];

}



function reiniciar() {

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:</label>`;
    alterarStatusBotao();
    limpaValores();

}