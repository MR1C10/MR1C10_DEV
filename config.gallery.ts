import { Album } from "./types/config.gallery";

const gallery: { albums: Album[] } = {
  albums: [
    {
      title: "Work",
      route: "Work",
      coverImageSrc:
        "https://i.pinimg.com/236x/02/63/7a/02637a8d4b36894dca7dd8b965daec4a.jpg",
      posts: [
        {
          title: "Android",
          src: "/assets/img/code.webp",
        },
        {
          title: "",
          src: "/assets/img/code1.jpg",
        },
        {
          title: "C# contact list",
          src: "/assets/img/code2.webp",
        },
        {
          title: "Analise DS",
          src: "/assets/img/viabi.jpg",
        },
        {
          title: "RB",
          src: "/assets/img/auditorio.jpg",
        }
      ]
    },
    {
      title: "EU",
      route: "EU",
      coverImageSrc:
        "https://preview.redd.it/8n14e28ef25c1.png?width=640&crop=smart&auto=webp&s=12acf3daaf0394935c53d8e8bbd1b06324e8dba8",
      posts: [
        {
          title: "🐓",
          src: "/assets/img/euAcad.jpg",
        },
        {
          title: "",
          src: "/assets/img/profile.png",
        },
        {
          title: "Casada?",
          src: "/assets/img/euBanhe.jpg",
        },
        {
          title: "Aula foda",
          src: "/assets/img/euEte.webp",
        },
      ]
    },
    {
      title: "MR1C10",
      route: "Coisas",
      coverImageSrc:
        "https://preview.redd.it/queria-saber-o-contexto-do-meme-desse-cara-dando-contexto-v0-hy5rf7z3fiud1.jpeg?auto=webp&s=cb7366dc8eefd46ac2f627e64282d5ed55e1777a",
      posts: [
        {
          title: "FDS?!",
          src: "/assets/img/eu.gif",
        },
        {
          title: "Kit sobrevivência",
          src: "/assets/img/kitsobrev.jpg",
        },
        {
          title: "Xereca",
          src: "/assets/img/tucano.jpg",
        },
        {
          title: "Feetesp 2024",
          src: "/assets/img/fetesp.jpg",
        },
        {
          title: "Arma de Programador",
          src: "/assets/img/pendras.webp",
        },
        {
          title: "😏",
          src: "/assets/img/sorvetememe.jpg",
        },
      ]
    }
  ]
};

export default gallery;