import { Config } from "./types/config";

const config: Config = {
  options: {
    blog: true,
    gallery: true
  },
  nickname: "Mauricio",
  lanyard: {
    active: true,
    discordId: "688597843833126963",
  },
  accentColor: "#4c02b5",
  avatarImgSrc: "/assets/profile.png",
  buttons: [
    {
      title: "My Projects",
      link: "https://github.com/mr1c10?tab=repositories",
    },
    {
      title: "Github",
      link: "https://github.com/mr1c10",
    },
    {
      title: "Contact Me",
      link: "https://api.whatsapp.com/send?phone=5511980983301&text=Olá%2C%20Mauricio!%20Encontrei%20seu%20portfólio%20e%20gostei%20bastante%20dos%20seus%20projetos.%20Gostaria%20de%20saber%20mais%20e%20trocar%20uma%20ideia.%20😊",
    },
    {
      title: "See this project code",
      link: "https://github.com/MR1C10/Testando",
    },
  ],
  githubLink: "https://github.com/mr1c10",
  instagramLink: "https://www.instagram.com/_mau_rodrigues/",
  linkedInLink: "https://www.linkedin.com/in/mr1c10",
  discordLink: "https://discord.com/users/688597843833126963",
  spotifyLink: "https://open.spotify.com/user/1prvi53t67qh884hlp1t1tvg8",
  footer: "☠️Dev M☠️",
};

export default config;