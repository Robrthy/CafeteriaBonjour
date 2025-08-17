let carrinho = [];
let modal = document.getElementById("carrinhoModal");
let lista = document.getElementById("listaCarrinho");
let qtd = document.getElementById("qtd");
let totalEl = document.getElementById("total");

// Preço dos produtos
const precos = {
  "Expresso": 6,
  "Cappuccino": 10,
  "Latte": 12,
  "Mocha": 14,
  "Macchiato": 11,
  "Americano": 8,
  "Bolo de Chocolate": 7,
  "Bolo de Cenoura": 6,
  "Bolo Red Velvet": 9,
  "Bolo de Limão": 8,
  "Bolo de Morango": 9
};

function addCarrinho(produto) {
  carrinho.push(produto);
  qtd.innerText = carrinho.length;
  atualizarLista();
}

function toggleCarrinho() {
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function atualizarLista() {
  lista.innerHTML = "";
  let total = 0;

  let contagem = {};
  carrinho.forEach(item => {
    contagem[item] = (contagem[item] || 0) + 1;
    total += precos[item];
  });

  for (let produto in contagem) {
    let li = document.createElement("li");
    li.textContent = `${produto} x${contagem[produto]} - R$ ${(precos[produto]*contagem[produto]).toFixed(2)}`;
    lista.appendChild(li);
  }

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
  window.location.href = "pagamento.html";
  carrinho = [];
  qtd.innerText = 0;
  atualizarLista();
  modal.style.display = "none";
}