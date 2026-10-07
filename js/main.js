/* =========================================================
   Agro Shop — comportamento do site
   ========================================================= */

const WHATSAPP_NUMERO = "5561992562161"; // (61) 99256-2161

/* ---------- Helpers ---------- */
function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function linkWhatsApp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

function mensagemPedido(produto) {
  return (
    `Olá! Vim pelo site da Agro Shop e gostaria de consultar:\n` +
    `*${produto.nome}*\n` +
    (produto.preco !== null ? `Preço no site: ${formatarPreco(produto.preco)}\n` : "") +
    `\nVocê pode me confirmar disponibilidade e forma de entrega?`
  );
}

function mensagemGeral(texto) {
  return `Olá! Vim pelo site da Agro Shop. ${texto}`;
}

/* ---------- Card de produto ---------- */
function criarCardProduto(produto) {
  const artigo = document.createElement("article");
  artigo.className = "card-produto";

  const badge = produto.oferta
    ? `<span class="card-produto__badge">Oferta</span>`
    : "";

  // Substituir o placeholder por:
  // <img class="card-produto__foto" src="${produto.foto}" alt="${produto.nome}" loading="lazy">
  const foto = produto.foto
    ? `<img class="card-produto__foto" src="${produto.foto}" alt="${produto.nome}" loading="lazy">`
    : `<div class="card-produto__foto" role="img" aria-label="Imagem de ${produto.nome}">${produto.emoji}</div>`;

  const precoHtml =
    produto.preco !== null
      ? `<div class="bloco-preco">
           <span class="preco">${formatarPreco(produto.preco)}</span>
           ${produto.precoDe ? `<span class="preco--de">${formatarPreco(produto.precoDe)}</span>` : ""}
         </div>`
      : `<div class="bloco-preco"><span class="preco--consulta">Preço sob consulta</span></div>`;

  artigo.innerHTML = `
    ${badge}
    ${foto}
    <div class="card-produto__corpo">
      <span class="card-produto__categoria">${produto.categoria}</span>
      <h3>${produto.nome}</h3>
      <p class="card-produto__desc">${produto.descricao}</p>
      ${precoHtml}
      <a class="btn btn--zap btn--bloco btn--pequeno"
         href="${linkWhatsApp(mensagemPedido(produto))}"
         target="_blank" rel="noopener"
         aria-label="Pedir ${produto.nome} pelo WhatsApp">
         📲 Pedir pelo WhatsApp
      </a>
    </div>
  `;
  return artigo;
}

/* ---------- Render de grades ---------- */
function renderizarGrade(alvo, lista) {
  const caixa = document.getElementById(alvo);
  if (!caixa) return;

  if (lista.length === 0) {
    caixa.innerHTML = `
      <div class="estado-vazio" style="grid-column: 1 / -1;">
        <span class="patinho">🐾</span>
        <h3>Nenhum produto encontrado</h3>
        <p>Tente outro nome ou fale com a gente pelo WhatsApp — pode ser que estejamos sem o item na vitrine.</p>
        <a class="btn btn--zap" href="${linkWhatsApp(
          mensagemGeral("Gostaria de ajuda para encontrar um produto.")
        )}" target="_blank" rel="noopener">Chamar no WhatsApp</a>
      </div>`;
    return;
  }

  caixa.innerHTML = "";
  lista.forEach((p) => caixa.appendChild(criarCardProduto(p)));
}

/* ---------- Catálogo: busca + filtros ---------- */
function iniciarCatalogo() {
  const grade = document.getElementById("grade-produtos");
  if (!grade) return;

  const soOfertas = grade.dataset.tipo === "ofertas";
  const limite = parseInt(grade.dataset.limite || "0", 10);

  const inputBusca = document.getElementById("busca");
  const contador = document.getElementById("contador");
  const botoesFiltro = document.querySelectorAll(".filtro");

  let filtroCategoria = "todos";
  let filtroEspecie = "todas";

  function atualizar() {
    const termo = (inputBusca?.value || "").trim().toLowerCase();

    let lista = CATALOGO.filter((p) => (soOfertas ? p.oferta : true));

    if (filtroCategoria !== "todos") {
      lista = lista.filter((p) => p.categoria === filtroCategoria);
    }
    if (filtroEspecie !== "todas") {
      lista = lista.filter(
        (p) => p.especie === filtroEspecie || p.especie === "multiplo"
      );
    }
    if (termo) {
      lista = lista.filter(
        (p) =>
          p.nome.toLowerCase().includes(termo) ||
          p.categoria.toLowerCase().includes(termo) ||
          p.descricao.toLowerCase().includes(termo)
      );
    }

    if (limite > 0) lista = lista.slice(0, limite);

    renderizarGrade("grade-produtos", lista);

    if (contador) {
      contador.textContent =
        lista.length === 1
          ? "1 produto encontrado"
          : `${lista.length} produtos encontrados`;
    }
  }

  inputBusca?.addEventListener("input", atualizar);

  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      const grupo = botao.dataset.grupo;
      const valor = botao.dataset.valor;

      document
        .querySelectorAll(`.filtro[data-grupo="${grupo}"]`)
        .forEach((b) => b.setAttribute("aria-pressed", "false"));
      botao.setAttribute("aria-pressed", "true");

      if (grupo === "categoria") filtroCategoria = valor;
      if (grupo === "especie") filtroEspecie = valor;

      atualizar();
    });
  });

  atualizar();
}

/* ---------- Categorias na home ---------- */
function renderizarCategorias() {
  const caixa = document.getElementById("grade-categorias");
  if (!caixa) return;

  caixa.innerHTML = CATEGORIAS.map(
    (c) => `
    <a class="card-categoria" href="produtos.html?categoria=${encodeURIComponent(c.id)}">
      <span class="card-categoria__icone" aria-hidden="true">${c.icone}</span>
      <strong>${c.rotulo}</strong>
      <span>${c.desc}</span>
    </a>`
  ).join("");
}

/* ---------- Header: menu mobile + sombra ---------- */
function iniciarHeader() {
  const header = document.querySelector(".site-header");
  const botao = document.getElementById("btn-menu");
  const nav = document.getElementById("nav-principal");

  botao?.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
    botao.textContent = aberto ? "✕" : "☰";
  });

  window.addEventListener(
    "scroll",
    () => header?.classList.toggle("sombra", window.scrollY > 8),
    { passive: true }
  );
}

/* ---------- Links de WhatsApp genéricos ---------- */
function iniciarLinksZap() {
  document.querySelectorAll("[data-zap]").forEach((el) => {
    el.href = linkWhatsApp(el.dataset.zap);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

/* ---------- Ano do rodapé ---------- */
function iniciarRodape() {
  const el = document.getElementById("ano");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  iniciarHeader();
  iniciarLinksZap();
  iniciarRodape();
  renderizarCategorias();
  iniciarCatalogo();
});
