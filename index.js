 const display = document.querySelector('.display');
 const botoes = document.querySelector('.botao');

 let valor1 = null;
 let valor2 = null;
 let valor3 = null;

 function limparDisplay(){
    display.innerText= '';

 }

 function apagarUltimo(){
    display.innerHTML = display.innerText.slice(0, -1);

 }
 const btnBackspace = document.querySelector('#btn-backspace');
 btnBackspace.addEventListener('click', apagarUltimo);

 function atualizarDisplay(valor){
    display.innerText += valor;
 }

 function realizarOperacao(){
    switch (operacao) {
        case '+':
            display.innerText = valor1 + valor2;
            break;
            case '-':
            display.innerText = valor1 - valor2;
            break;
            case '*':
            display.innerText = valor1 * valor2;
            break;
            case '/':
            display.innerText = valor1 / valor2;
            break;

    }
    valor1 = null;
    valor2 = null;
    operacao = null;
 }

function adicionarEvento(botao){
    botao.addEventListener('click', () => {
        const valor = botao.innerText;

        if(/\d/.test(valor)){
            atualizarDisplay(valor)
        }else if (valor === '.') {
            if (!display.innerText.includes('.')){
                atualizarDisplay(valor)
            }
        } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            if (valor1 === null){
                valor1.parseFloat(display.innerText);
                operacao = valor;
            }else {
                valor2 = parseFloat(display.innerText);
                realizarOperacao();
            }
        }else if ( valor === '='){
            valor2 = parseFloat(display.innerText);
            realizarOperacao();
        } else if (valor === "c"){
            valor1 = null;
            valor2 = null;
            operacao = null;
            limparDisplay();
        }
    });
}

botoes.forEach