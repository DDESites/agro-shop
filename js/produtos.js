/* =========================================================
   Agro Shop — Catálogo (arquivo estruturável / editável)
   Para atualizar produtos, edite apenas este arquivo.
   - preco: número em reais ou null (exibir "preço sob consulta")
   - precoDe: preço anterior para itens em oferta, ou null
   - oferta: true exibe o item na página de Ofertas
   - foto: caminho da imagem (ex.: "img/produtos/racao.jpg")
           mantido como null => placeholder com ícone
   ========================================================= */

const CATALOGO = [
  {
    id: "rac-01",
    nome: "Ração Premium para Cães Adultos 15kg",
    categoria: "Ração",
    especie: "cao",
    preco: 189.9,
    precoDe: 219.9,
    oferta: true,
    foto: null,
    emoji: "🐕",
    descricao: "Sabor frango e arroz. Ingredientes selecionados para o dia a dia do seu cão."
  },
  {
    id: "rac-02",
    nome: "Ração para Gatos Adultos Frango 10kg",
    categoria: "Ração",
    especie: "gato",
    preco: 149.9,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🐈",
    descricao: "Fórmula completa para gatos castrados e não castrados."
  },
  {
    id: "rac-03",
    nome: "Ração para Filhotes de Cães 10kg",
    categoria: "Ração",
    especie: "cao",
    preco: 159.9,
    precoDe: 174.9,
    oferta: true,
    foto: null,
    emoji: "🐶",
    descricao: "Crescimento saudável com proteínas de alta qualidade."
  },
  {
    id: "rac-04",
    nome: "Ração para Galinhas Poedeiras 25kg",
    categoria: "Ração",
    especie: "agro",
    preco: null,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🐔",
    descricao: "Alimentação completa para o criatório. Consulte disponibilidade."
  },
  {
    id: "pet-01",
    nome: "Bifinho para Cães 100g",
    categoria: "Petiscos",
    especie: "cao",
    preco: 6.5,
    precoDe: 8.0,
    oferta: true,
    foto: null,
    emoji: "🦴",
    descricao: "Premiado macio, ideal para treinos e mimos."
  },
  {
    id: "pet-02",
    nome: "Petisco Para Gatos Sache 85g",
    categoria: "Petiscos",
    especie: "gato",
    preco: 5.9,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🐟",
    descricao: "Carnes selecionadas em caldo, surpreenda seu gato."
  },
  {
    id: "pet-03",
    nome: "Osso Higiênico Médio (unidade)",
    categoria: "Petiscos",
    especie: "cao",
    preco: 9.9,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🍖",
    descricao: "Diversão garantida e higiene dental para cães."
  },
  {
    id: "hig-01",
    nome: "Areia Higiênica Aglomerante 4L",
    categoria: "Higiene",
    especie: "gato",
    preco: 32.0,
    precoDe: 39.9,
    oferta: true,
    foto: null,
    emoji: "🧼",
    descricao: "Alta absorção e controle de odor por até 7 dias."
  },
  {
    id: "hig-02",
    nome: "Shampoo Antipulgas 500ml",
    categoria: "Higiene",
    especie: "cao",
    preco: 34.9,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🧴",
    descricao: "Limpeza profunda com ação repelente de pulgas."
  },
  {
    id: "hig-03",
    nome: "Escova Dentária Pet",
    categoria: "Higiene",
    especie: "multiplo",
    preco: 18.0,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🪥",
    descricao: "Cerdas macias para a rotina de higiene bucal."
  },
  {
    id: "ace-01",
    nome: "Coleira Ajustável com Guia",
    categoria: "Acessórios",
    especie: "cao",
    preco: 24.9,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🎀",
    descricao: "Tamanho ajustável, disponível em várias cores."
  },
  {
    id: "ace-02",
    nome: "Caminha Confortável Tamanho M",
    categoria: "Acessórios",
    especie: "multiplo",
    preco: 129.9,
    precoDe: 149.9,
    oferta: true,
    foto: null,
    emoji: "🛏️",
    descricao: "Interior macio e lavável. Descanso garantido."
  },
  {
    id: "ace-03",
    nome: "Brinquedo Bola de Borracha",
    categoria: "Acessórios",
    especie: "cao",
    preco: 12.0,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🎾",
    descricao: "Resistente e perfeita para passeios no parque."
  },
  {
    id: "ace-04",
    nome: "Comedouro e Bebedouro Duplo",
    categoria: "Acessórios",
    especie: "multiplo",
    preco: null,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🥣",
    descricao: "Medidas e cores sob consulta pelo WhatsApp."
  },
  {
    id: "agr-01",
    nome: "Fio de Nylon para Cerca 10m",
    categoria: "Agropecuária",
    especie: "agro",
    preco: 45.0,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🌾",
    descricao: "Alta resistência para cercas de área rural."
  },
  {
    id: "agr-02",
    nome: "Suplemento Mineral para Gado",
    categoria: "Agropecuária",
    especie: "agro",
    preco: null,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🐮",
    descricao: "Sob consulta. Consulte apresentações disponíveis."
  },
  {
    id: "agr-03",
    nome: "Ração para Peixes Ornamentais 1kg",
    categoria: "Agropecuária",
    especie: "agro",
    preco: 27.5,
    precoDe: 31.9,
    oferta: true,
    foto: null,
    emoji: "🐠",
    descricao: "Alimentação flutuante para aquários e piscinas."
  },
  {
    id: "hig-04",
    nome: "Toalhas Umidescidas para Pets",
    categoria: "Higiene",
    especie: "multiplo",
    preco: 15.9,
    precoDe: null,
    oferta: false,
    foto: null,
    emoji: "🧻",
    descricao: "Limpeza rápida entre banhos, sem álcool."
  }
];

const CATEGORIAS = [
  { id: "Ração", icone: "🥣", rotulo: "Ração", desc: "Cães, gatos e agro" },
  { id: "Petiscos", icone: "🦴", rotulo: "Petiscos", desc: "Mimos e premiações" },
  { id: "Higiene", icone: "🧼", rotulo: "Higiene", desc: "Cuidado e bem-estar" },
  { id: "Acessórios", icone: "🎀", rotulo: "Acessórios", desc: "Coleiras, caminhas e mais" },
  { id: "Agropecuária", icone: "🌾", rotulo: "Agropecuária", desc: "Para sua casa e criação" }
];
