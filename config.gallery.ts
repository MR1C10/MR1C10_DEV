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
          title: "",
          src: "/assets/img/",
        },
        {
          title: "teste 1",
          src: "/assets/img/toduro.png",
        }
      ]
    },
    {
      title: "Life",
      route: "Life",
      coverImageSrc:
        "https://i.pinimg.com/736x/a3/bd/74/a3bd74ce69a3ac58236096bd090fc1be.jpg",
      posts: [
        {
          title: "teste 2",
          src: "/assets/img/poatan.png",
        }
      ]
    },
    {
      title: "Teste3",
      route: "n",
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
        }
      ]
    }
  ]
};

export default gallery;