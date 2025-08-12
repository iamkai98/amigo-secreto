let listaDeAmigos = [];


function adicionarAmigo(){
let campoAmigo = document.querySelector('input').value;

if (campoAmigo == ''){
    alert("Por favor, insira um nome.")
}
else{
    listaDeAmigos.push(campoAmigo);
    atualizarListaDeAmigos();
}

console.log(listaDeAmigos);
limparCampo();
}


function atualizarListaDeAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++){
        lista.innerHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
}




function limparCampo(){
    campoAmigo = document.querySelector('input');
    campoAmigo.value = ''
}