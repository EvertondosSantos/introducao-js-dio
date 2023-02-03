

console.log("   VARIÁVEIS   ");
var nome = "Everton dos Santos";
var idade = 26;
var idade2 = 10;
console.log(10);
console.log(nome);
console.log();
            // LISTAS
console.log("   LISTAS   ");
var lista = ["maçã","banana"];
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista);

console.log(lista[1]);

console.log(lista.toString()); /* Lista no formato de strings */
console.log(lista[1].toString());

            // DICIONARIO
console.log();
console.log(   "Dicionário"   );
var fruta = {nome:"maçã",cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
            //LISTA DE DICIONÁRIOS
console.log();
console.log("LISTA DE DICIONÁRIOS");
console.log();
var frutas = [{nome:"maçã",cor:"vermelha"},{nome:"banana",cor:"amarela"}];
console.log(frutas[1]);
console.log(frutas[1].nome);
console.log(frutas[1].cor);

            //CONDICIONAIS
console.log();
console.log(   "CONDICIONAIS"   );
var n1 = prompt("Qual sua idade?"); /* PROMPT PEDE UM INPUT DO USUÁRIO*/
if (n1 >= 18) {
    alert("maior de idade");    
}else{
    alert("menor de idade");
}
            //
console.log();
console.log(   'REPETIÇÕES'   );
var contador = 0;
while (contador <= 5) {
    console.log(contador);
    contador++;
}

console.log();
var contadorFor;
for (let contadorFor = 1; contadorFor <= 3; contadorFor++) {
    alert(contadorFor);    
}

console.log();
console.log('DATA');
var datas = new Date();
var dia = datas.getDate();
var mes = (datas.getMonth())+1;
var hora = datas.getHours();
var min = datas.getMinutes();
console.log('Hoje é dia '+dia+"/"+mes);
alert('São '+hora+":"+min);

// USANDO BOTÃO

function funcaoclicou(){
    alert('Clicou no botao');
}

// Injetando um paragrafo após clicar

function mP(){
    document.getElementById("mensagem").innerHTML = "<br>Clicou no botão que coloca uma mensagem no p usando o id</br>";
    console.log(document.getElementById("mensagem")); //Penas um exemplo para mostar quem é o ID
}

function redirecionamentoJS(){
    window.open("https://www.google.com.br/");
}

function mousePassou(){
    document.getElementById("mousemove").innerHTML = "-----O MOUSE ESTÁ AQUI-----";
}
function passeNovamente(){
    document.getElementById("mousemove").innerHTML = "-----PASSE O MOUSE NOVAMENTE-----";
}
function umafuncao(qualquer){  //Sem usa o getElement By ID
    qualquer.innerHTML = "<p>Textando dessa forma usando o THIS</p>";
}
function carregado() {
    alert('Página CARREGADA!!!');
}
function funcaoChange(elemento){
    alert(elemento.value);
    console.log('Elemento da Função Change:');
    console.log(elemento);
}