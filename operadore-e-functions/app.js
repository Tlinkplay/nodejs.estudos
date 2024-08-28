const { read } = require('fs');

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) =>{
    try{
        return Number.parseFloat(numero);
    }catch(e){
        console.log('Este numero não e valido')
    }
}

const validarOperador = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador informado invalido');
            return null;
    }
}

readLine.question('Digite um numero:', (numero1) =>{
    const numeroValido1 = validarNumeroInformado(numero1);
    
    if(numeroValido1){
        readLine.question('Favor informar outro numero:', (numero2) =>{  
            const numeroValido2 = validarNumeroInformado(numero2);

            if(numeroValido2){
                readLine.question('Favor informe o operador:', (operador) =>{
                    const operadorValido = validarOperador(operador);
                    if(operadorValido){
                        switch(operadorValido){
                            case '+' : console.log(`Operador selecinado adição resultado: ${numeroValido1} + ${numeroValido2} = ${numeroValido1 + numeroValido2}`);
                                break;
                            case '-' : console.log(`Operador selecionado subtração resultado: ${numeroValido1} - ${numeroValido2} = ${numeroValido1 - numeroValido2}`);
                                break;
                            case '/' : console.log(`Operador selecionado divisão resultado: ${numeroValido1} / ${numeroValido2} = ${numeroValido1 / numeroValido2}`);
                                break;
                            case '*' : console.log(`Operador selecionado multiplicação resultado: ${numeroValido1} * ${numeroValido2} = ${numeroValido1 * numeroValido2}`);
                                break;
                            case '%' : console.log(`Operador selecionado modulo resultado: ${numeroValido1} % ${numeroValido2} = ${numeroValido1 % numeroValido2}`);
                                break;
                            default: break;
                        }
                    }
                })
            }
        })
    }   
})