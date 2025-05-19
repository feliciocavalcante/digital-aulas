
const inputCep = document.getElementById("cep");

async function buscarCep(){
   console.log("Buscando CEP...");
   const cep = inputCep.value;
    console.log(cep);


  // Buscando o CEP na API viacep.com usando o fetch
 const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
 const dadosDoCep = await resposta.json();

 
console.log(dadosDoCep);
}

