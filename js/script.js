const inputCep = document.querySelector("#cepUsuario");

inputCep.addEventListener("keyup", apiCEP);

async function apiCEP(e) {
  if (this.value.length == 8) {
    //buscar o cep na api
    // fetch("https://brasilapi.com.br/api/cep/v1/" + this.value)
    //   .then(function (resposta) {
    //     return resposta.json();
    //   })
    //   .then(function (cep) {
    //     console.log(cep.street);
    //   });
    let resposta = await fetch(
      "https://brasilapi.com.br/api/cep/v1/" + this.value
    );
    let cep = await resposta.json();
    console.log(cep);
    let bairro = document.querySelector('#bairroUsuario');
    let rua = document.querySelector('#enderecoUsuario');
    let cidade = document.querySelector('#cidadeUsuario');
    cidade.value = cep.city;
    bairro.value = cep.neighborhood;
    rua.value = cep.street;
  }
}

