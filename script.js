// Biblioteca de produtos – adicione quantos quiser aqui
const produtos = [
  {
    nome: "Sandália Strass de Amarrar",
    desc: "Sandália Rasteira • Trança com Brilho • Palmilha acolchoada",
    preco: "R$ 29,93",
    link: "https://s.shopee.com.br/1gCfZV79Pv",
    imagem: "imagens/sandalia_amarrar.jpg",
    alt: "Sandália Strass de Amarrar"
  },
  {
    nome: "Sandália Salto Baixo",
    desc: "Tiras finas • Salto baixo 2 cm • Enfeite de ABS",
    preco: "R$ 41,33",
    link: "https://s.shopee.com.br/8AQ9J54teE",
    imagem: "imagens/sandalia_triangulo.jpeg",
    alt: "Sandália Dourada Salto Brilho"
  },
  // Adicione mais produtos aqui ↓↓↓
   {
     nome: "Sandália Salto Trança 7 cm",
     desc: "Bico Quadrado • Salto médio 7 cm • Ajuste de fivela • Calcanhar copinho",
     preco: "R$ 59,90",
     link: "https://s.shopee.com.br/7AXhz4Z4da",
     imagem: "imagens/salto_tranca_7cm.jpeg",
     alt: "Sandália Salto Trança 7 cm"
   },
   {
     nome: "Sandália Salto Trança 5 cm",
     desc: "Bico Quadrado • Salto médio 5 cm • Ajuste de fivela • Calcanhar copinho",
     preco: "R$ 49,90",
     link: "https://s.shopee.com.br/2g5Ihb2Dvi",
     imagem: "imagens/salto_tranca_5cm.jpeg",
     alt: "Sandália Salto Trança 5 cm"
   },
   {
     nome: "Sandália Rasteira Pirâmide",
     desc: "Bico Quadrado • Sem salto • Ajuste de fivela • Enfeite de Pirâmide",
     preco: "R$ 29,90",
     link: "https://s.shopee.com.br/2g5Ihb2Dvi",
     imagem: "imagens/sandalia_piramide.jpg",
     alt: "Sandália Rasteira Pirâmide"
   },
];

// Função que cria e renderiza os cartões
function renderizarProdutos(lista = produtos) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = ''; // limpa os cartões antigos

  if (lista.length === 0) {
    document.getElementById('noResults').style.display = 'block';
    return;
  }

  document.getElementById('noResults').style.display = 'none';

  lista.forEach(produto => {
    const card = document.createElement('a');
    card.href = produto.link;
    card.target = '_blank';
    card.rel = 'noopener';
    card.className = 'product-card';
    card.setAttribute('data-name', produto.nome);
    card.setAttribute('data-desc', produto.desc);

    card.innerHTML = `
      <div class="product-image-wrapper">
        <img src="${produto.imagem}" alt="${produto.alt}" class="product-image">
      </div>
      <div class="product-details">
        <div class="product-name">${produto.nome}</div>
        <div class="product-desc">${produto.desc}</div>
        <div class="product-price">${produto.preco}</div>
        <div class="btn-shopee">Ver na Shopee</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Renderiza todos os produtos ao carregar
renderizarProdutos();

// Busca / filtro em tempo real
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
  const term = this.value.toLowerCase().trim();

  if (!term) {
    renderizarProdutos();
    return;
  }

  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(term) ||
    p.desc.toLowerCase().includes(term)
  );

  renderizarProdutos(filtrados);
});