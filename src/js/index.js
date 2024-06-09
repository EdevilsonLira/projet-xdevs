// objetivo
// -passo 1 - dar um jeito de pegar o elemento html de seta
//console.log(document.getElementById('btn-avancar'));
const btnAvancar  = document.getElementById('btn-avancar');
const btnVoltar  = document.getElementById('btn-voltar');
let cartaoAtual = 0; 
//- passo 3 - fazer aparecero proximo da lista, colocando a classe selecionado nele
const cartoes = document.querySelectorAll(".cartao");

// -passo 2 - dar um jeito de identificar um click do usuario da seta avançar
btnAvancar.addEventListener("click",function(){ 
    console.log("click");
    

    if(cartaoAtual === cartoes.length - 1)return;
    // - passo 4 - buscar cartao que esta selecionado e esconder
    const cartaoSelecionado =  document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    
    
    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
    //console.log(cartoes[0]);
    

});


//objetivo 2 

// -passo 2 - dar um jeito de identificar um click do usuario da seta avançar
btnVoltar.addEventListener("click",function(){ 
    console.log("click");
    

    if(cartaoAtual === 0)return;
    // - passo 4 - buscar cartao que esta selecionado e esconder
    const cartaoSelecionado =  document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    cartaoAtual--;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");
    //console.log(cartoes[0]);
});