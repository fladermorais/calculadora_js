const resultado = document.querySelector('#resultado');
let soma;

function botao(value)
{
    soma = resultado.value + value;
    resultado.value = soma;
}

function del()
{
    resultado.value = "";
}

function result()
{
    const valor = eval(soma);

    resultado.value = valor;
}

function clean()
{

    const total = resultado.value;
    console.log(total);

    const retirado = total.substring(0, resultado.value.length -1);

    console.log(retirado)

    resultado.value = retirado;
}