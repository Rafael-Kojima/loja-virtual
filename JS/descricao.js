//selecionando o body
var body = document.querySelector('body')

//pegando o objeto descrição do localStorage
const descricaoStorage = localStorage.getItem("Descrição");

//criação e estilização do elemento div que chamei de container
var container = document.createElement('div')
container.style.border = "black solid 2px"
container.style.width = "100%"
container.style.display = "flex"
container.style.padding = "5px"
container.style.marginTop = "10px"

//criação do elemento div para a imagem
var containerImg = document.createElement('div')
containerImg.style.width = "20%"
containerImg.style.height = "100%"

//atribuindo a variável containerImg para a variável principal container
container.appendChild(containerImg)

//criação do elemento img e estilização
var img = document.createElement('img')
var imgStorage = localStorage.getItem("Imagem")
img.src = imgStorage
img.style.width = "100%"
img.style.height = "100%"
img.style.marginLeft = "20px"

//atribuição do elemento img para o container
containerImg.appendChild(img)

//criação do container de informações
var containerInfos = document.createElement('div')
containerInfos.style.width = "30%"
containerInfos.style.height = "100%"
containerInfos.style.marginLeft = "110px"

//título do container de informações
var tituloInfos = document.createElement('h2')
tituloInfos.textContent = "Informações do produto:"
containerInfos.appendChild(tituloInfos)

//array de informações pegando elas diretamente do localStorage
const infos = [
  localStorage.getItem("Nome")
  , localStorage.getItem("Marca")
  , localStorage.getItem("Peso")
  , localStorage.getItem("Descrição")]

//laço de repetição para colocar as informações dinamicamente
for (let i = 0; i < infos.length; i++) {
  var p = document.createElement('p')
  var lista = document.createElement('ul')
  var listaLi = document.createElement('li')
  p.textContent = infos[i]
  p.style.fontSize = "18px"
  p.style.color = "black"
  listaLi.appendChild(p)

  lista.appendChild(listaLi)
  containerInfos.appendChild(lista)
  container.appendChild(containerInfos)
}

//criação do elemento div para o container de compra
var containerComprar = document.createElement('div')
containerComprar.style.margin = "0 auto"
containerComprar.style.width = "30%"
containerComprar.style.height = "100%"
containerComprar.style.marginLeft = "100px"

//título do preço
var tituloPreco = document.createElement('h2')
tituloPreco.textContent = "Preço:"

//colocando o preço do produto pegando do localStorage
var p2 = document.createElement('p')
p2.textContent = "R$ " + localStorage.getItem("Preço")
p2.style.fontSize = "18px"

//titulo da quantidade
var tituloQuantidade = document.createElement('h2')
tituloQuantidade.textContent = "Quantidade:"

//criação do input para receber a quantidade de produto
var quantidade = document.createElement('input')
quantidade.type = 'Number'
quantidade.style.borderRadius = "5px"
quantidade.style.fontSize = "18px"

//função para toda vez que a quantidade do produto seja aumentada, o valor do preço aumente
function atualizarPreco() {
  const quantidadeValor = parseFloat(quantidade.value);
  const precoUnitario = parseFloat(localStorage.getItem("Preço"));
  const precoTotal = quantidadeValor * precoUnitario;

  p2.textContent = "R$ " + precoTotal.toFixed(2);
}

// Evento de escuta para atualizar o preço sempre que a quantidade for alterada
quantidade.addEventListener("input", atualizarPreco);

var br = document.createElement('br')

//criação e estilização do botão de comprar
var btnComprar = document.createElement('button')
btnComprar.type = 'Submit'
btnComprar.textContent = "Comprar"
btnComprar.style.width = "200px"
btnComprar.style.height = "50px"
btnComprar.style.marginTop = "15px"
btnComprar.style.fontSize = "18px"
btnComprar.style.borderRadius = "5px"
btnComprar.style.color = "white"
btnComprar.style.backgroundColor = "#333333"

//efeito hover para o botão
btnComprar.addEventListener('mouseover', function() {
  btnComprar.classList.add('hover');
  btnComprar.style.backgroundColor = "black"
  btnComprar.style.color = "white"
});

btnComprar.addEventListener('mouseout', function() {
  btnComprar.classList.remove('hover');
  btnComprar.style.backgroundColor = "#333333"
  btnComprar.style.color = "white"
});

//função para deixar o layout responsivo sempre que o tamanho da tela mude
function ajustarLayoutResponsivo() {
  if (window.innerWidth < 768) {
    container.style.flexDirection = "column";
    container.style.marginLeft = "0";
    containerInfos.style.width = "70%";
    containerComprar.style.width = "100%";
    quantidade.style.width = "20%";
  } else {
    container.style.flexDirection = "row";
    container.style.marginLeft = "5px";
    containerInfos.style.width = "30%";
    containerComprar.style.width = "20%";
    quantidade.style.width = "50%";
  }
}

ajustarLayoutResponsivo();
window.addEventListener('resize', ajustarLayoutResponsivo);

//atribuindo tudo para o container principal
containerComprar.appendChild(tituloPreco)
containerComprar.appendChild(p2)
containerComprar.appendChild(tituloQuantidade)
containerComprar.appendChild(quantidade)
containerComprar.appendChild(br)
containerComprar.appendChild(btnComprar)
container.appendChild(containerComprar)

//atribuindo o container principal para o body
body.appendChild(container)