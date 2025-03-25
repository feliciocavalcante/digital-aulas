const titulo = document.getElementById('titulo');
const paragrafo = document.getElementById('paragrafo');




function darkMode() {
    document.body.style.backgroundColor = 'black';
    titulo.style.color = 'white';
    paragrafo.style.color = 'white';
    return titulo.innerHTML = 'Hello World!';
}

function lightMode() {
    document.body.style.backgroundColor = 'white';
    paragrafo.style.color = 'black';
    titulo.style.color = 'black';
    return botao.innerHTML = 'Boa noite!';
}

