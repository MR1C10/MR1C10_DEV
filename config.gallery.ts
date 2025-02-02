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
          title: "teste 1",
          src: "/assets/img/toduro.png",
          videoSrc: ""
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
          videoSrc: ""
        }
      ]
    }
  ]
};

export default gallery;