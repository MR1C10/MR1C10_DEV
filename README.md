# based linktree
- uses next ui 
- [config file](https://raw.githubusercontent.com/xyztavo/ulinked/refs/heads/main/config.json)
- has album to show pics n videos
- supports discord activities through [lanyard](https://github.com/Phineas/lanyard)
## usage
- go to [config file](https://raw.githubusercontent.com/xyztavo/ulinked/refs/heads/main/config.ts)
- also change the config for the [albums](https://raw.githubusercontent.com/xyztavo/ulinked/refs/heads/main/config.gallery.ts) if you wish to use it.
- change the stuff you want and you are good to go!🚀🚀
```ts
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
```
## screen shots
![image](https://github.com/user-attachments/assets/1b53cdd4-22a3-429b-9c2d-aeb2575dc7b9)
