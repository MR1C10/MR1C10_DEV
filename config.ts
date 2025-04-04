import { Config } from "./types/config";

const config: Config = {
  options: {
    blog: true,
    gallery: true
  },
  nickname: "Mauricio Souza",
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
      title: "Fale comigo",
      link: "https://api.whatsapp.com/send?phone=5511980983301&text=Oi%20Mauricio%2C%20como%20vai%3F%20Vi%20seu%20portf%C3%B3lio%20e%20achei%20muito%20legal.%20Bora%20trocar%20uma%20ideia%3F",
    },
    {
      title: "Veja o codigo deste projeto",
      link: "https://github.com/MR1C10/MR1C10_DEV",
    },
  ],
  githubLink: "https://github.com/mr1c10",
  instagramLink: "https://www.instagram.com/_mau_rodrigues/",
  linkedInLink: "https://www.linkedin.com/in/mr1c10",
  discordLink: "https://discord.com/users/688597843833126963",
  spotifyLink: "https://open.spotify.com/user/1prvi53t67qh884hlp1t1tvg8",
  footer: "☠️Dev MR1C10☠️",
};

export default config;