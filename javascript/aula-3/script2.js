const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');

const totalIMC = document.getElementById('total-imc');
const grauIMC = document.getElementById('grau');

let imcGlobal = 0;
function calcularIMC() {
    const peso = pesoInput.value;
    const altura = alturaInput.value;

    const imc = peso / (altura * altura);

    console.log(imc);
    let imcGlobal = 0;

    totalIMC.innerHTML = imc.toFixed(2);

    if (imc < 18.5) {
        grauIMC.innerHTML = 'Abaixo do peso';
    } else if (imc < 25) {
        grauIMC.innerHTML = 'Peso normal';
    } else if (imc < 30) {
        grauIMC.innerHTML = 'Sobrepeso';
    } else {
        grauIMC.innerHTML = 'Obesidade';
    }

    return imc;
}