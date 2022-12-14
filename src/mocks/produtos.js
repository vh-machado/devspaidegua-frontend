import manga from "../assets/produtos/manga.jpg";
import banana from "../assets/produtos/banana.jpg";
import carne from "../assets/produtos/carne.png";
import acai from "../assets/produtos/acai.jpg";
import acaiFarinha from "../assets/produtos/acai-farinha.png";
import peixeFilhote from "../assets/produtos/peixe-filhote.jpg"
import camarao from "../assets/produtos/camarao.jpg"

export const produtos = [
  {
    id: 0,
    nome: "Manga",
    preco: 3,
    imagem: manga,
    descricao: "Descrição do produto",
    categoria: 1,
    filtro: "Manga",
    vendedor: 3,
  },
  {
    id: 1,
    nome: "Banana",
    preco: 3,
    imagem: banana,
    descricao: "Descrição do produto",
    categoria: 1,
    filtro: "Banana",
    vendedor: 3,
  },
  {
    id: 2,
    nome: "Costela",
    preco: 10,
    imagem: carne,
    descricao: "Descrição do produto",
    categoria: 0,
    filtro: "Costela",
    vendedor: 2,
  },
  {
    id: 3,
    nome: "Agulha",
    preco: 10,
    imagem: carne,
    descricao: "Descrição do produto",
    categoria: 0,
    filtro: "Agulha",
    vendedor: 2,
  },
  {
    id: 4,
    nome: "Agulha",
    preco: 10,
    imagem: carne,
    descricao: "Descrição do produto",
    categoria: 0,
    filtro: "Agulha",
    vendedor: 2,
  },
  {
    id: 5,
    nome: "Picanha",
    preco: 10,
    imagem: carne,
    descricao: "Descrição do produto",
    categoria: 0,
    filtro: "Picanha",
    vendedor: 2,
  },
  {
    id: 6,
    nome: "Açaí e acompanhamento",
    preco: 10,
    imagem: acai,
    descricao: "Descrição do produto",
    categoria: 4,
    filtro: "Açaí",
    vendedor: 4,
  },
  {
    id: 7,
    nome: "Açaí com farinha",
    preco: 8,
    imagem: acaiFarinha,
    descricao: "Descrição do produto",
    categoria: 4,
    filtro: "Açaí",
    vendedor: 4,
  },
  {
    id: 8,
    nome: "Peixe Filhote",
    preco: 13,
    imagem: peixeFilhote,
    descricao: "Descrição do produto",
    categoria: 3,
    filtro: "",
    vendedor: 1,
  },
  {
    id: 9,
    nome: "Camarão",
    preco: 24,
    imagem: camarao,
    descricao: "Descrição do produto",
    categoria: 3,
    filtro: "Camarão",
    vendedor: 1,
  },
];
