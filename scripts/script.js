/* Armazena as IDs de cada contador*/
var contadorId = 1;

/* Variável que guarda todas as contagens */
var vetorContador = new Array(50); 

/* Coloca todos os contadores = 0 */
for(let i = 0; i < 50; i++){
    vetorContador[i] = 0;
}

/*
 * Pega o ID do botão pressionado
 * Com esse ID incrementa +1 na posição do vetor
 * Pega a div através do ID
 * Adiciona o novo valor
 */
function soma(obj){

    vetorContador[obj.id]++;
    const pegarDiv = document.getElementById(`div${obj.id}`);
    pegarDiv.innerHTML = `${vetorContador[obj.id]}`;
}

/*
 * Mesma lógica da função de somar
 */
function subtrai(obj){

    vetorContador[obj.id]--;
    const pegarDiv = document.getElementById(`div${obj.id}`);
    pegarDiv.innerHTML = `${vetorContador[obj.id]}`;  
}

/*
 * Pega a parte do HTML que contém a(s) seções (as seções contém o nome, contador e botões)
 * Cria uma section
 * Atribui a classe padrão para pegar os estilos do style.css
 * Adiciona a section criada dentro do nosso article
 * Adiciona dentro da section os botões, nome e contador, todos com a ID correta
 * Soma +1 na nossa ID, para que seja adicionado mais uma pessoa
 */
function adicionar(){

    const pegarArticle = document.getElementById('add');
    const pegarSection = document.createElement("section")

    pegarSection.setAttribute("class","padrao")
    pegarSection.setAttribute(`id`,`padrao-${contadorId}`)
    pegarArticle.appendChild(pegarSection);

    pegarSection.innerHTML = `<button id="${contadorId}" onclick="subtrai(this)">-</button>
    <input type="text" id="nome"/>
    <div id="div${contadorId}">0</div>
    <button id="${contadorId}" onclick="soma(this)">+</button>`

    contadorId++;
}

function remover(){

    const deletarSection = document.getElementById(`padrao-${contadorId-1}`).outerHTML = "";
    contadorId--;

}