import { produtos } from './produtos.js';

/*Criando um container para os cards */
const cardContainer = document.createElement('div');
cardContainer.style.display = 'flex';
cardContainer.style.flexWrap = 'wrap';
cardContainer.style.backgroundColor = '#333333';
cardContainer.style.maxWidth = '100%';
cardContainer.style.margin = '0 auto';

document.body.appendChild(cardContainer);

/* Interando usando um ForEach no array de objetos */

produtos.forEach((produto) => {
  /* Criando e estilizando os cards */
  const card = document.createElement('div');
  card.style.flexBasis = 'calc(20% - 20px)';
  card.style.height = '65vh';
  card.style.margin = '10px';
  card.style.backgroundColor = '#f9f9f9';
  card.style.border = '2px solid #ddd';
  card.style.borderRadius = '5px';
  card.style.transition = 'transform 0.2s, box-shadow 0.2s';
  card.style.boxSizing = 'border-box';
  card.style.display = 'flex';
  card.style.flexDirection = 'column';

  
  /* Criando e estilizando a imagem */
  const imagem = document.createElement('img');
  imagem.src = produto.Imagem;
  imagem.style.width = '100%';
  imagem.style.height = '50%';
  imagem.style.borderRadius = '5px 5px 0 0';

  const contentContainer = document.createElement('div');
  contentContainer.style.flex = '1';
  contentContainer.style.display = 'flex';
  contentContainer.style.flexDirection = 'column';
  contentContainer.style.padding = '10px';

  /* Criando e estilizando o nome dos produtos */
  const nomeProduto = document.createElement('h3');
  nomeProduto.textContent = produto.Produto;
  nomeProduto.style.margin = '0';

  /* Criando e estilizando a marca */
  const marca = document.createElement('p');
  marca.textContent = `Marca: ${produto.Marca}`;
  marca.style.margin = '0';
  
  /* Criando e estilizando o peso */
  const peso = document.createElement('p');
  peso.textContent = `Peso: ${produto.Peso}`;
  peso.style.margin = '0';
  
  /* Criando e estilizando o preço */
  const preco = document.createElement('p');
  preco.textContent = `Preço: ${produto.Preco}`;
  preco.style.margin = '0';
  preco.style.color = 'black';
  preco.style.fontSize = '22px';
  
  /* Criando e estilizando o botao ver mais */
  const verMaisLink = document.createElement('a');
  verMaisLink.textContent = 'Ver Mais';
  verMaisLink.style.listStyle = 'none';
  verMaisLink.href = 'descricao.html';
  verMaisLink.style.backgroundColor = '#333';
  verMaisLink.style.color = 'white';
  verMaisLink.style.padding = '10px';
  verMaisLink.style.textAlign = 'center';
  verMaisLink.style.textDecoration = 'none';
  verMaisLink.style.margin = '0';

  /* Criando um efeito para os cards usando o evento mouseenter */
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.1)';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  });
  
  /* Adicionando os elementos criados na página com appendChild */
  card.appendChild(imagem);
  contentContainer.appendChild(nomeProduto);
  contentContainer.appendChild(marca);
  contentContainer.appendChild(peso);
  contentContainer.appendChild(preco);
  contentContainer.appendChild(verMaisLink);
  card.appendChild(contentContainer);

  cardContainer.appendChild(card);

  /* Criando a função de descrição*/
  const descricao = produto.Descricao
  verMaisLink.onclick = mostrarDescricao

  function mostrarDescricao(){
    localStorage.setItem("Descrição", descricao);
    localStorage.setItem("Imagem", produto.Imagem);
    localStorage.setItem("Nome", produto.Produto);
    localStorage.setItem("Marca", produto.Marca);
    localStorage.setItem("Peso", produto.Peso);
    localStorage.setItem("Preço", produto.Preco);
    window.location.href = "descricao.html";
  }
    });
