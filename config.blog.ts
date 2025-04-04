import { Blog } from "./types/config.blog"

const blog: Blog = {
    title: "Posts",
    posts: [
        {
            title: "i'm a backend developer",
            description: "I'm a Brazilian backend developer focused on building efficient and scalable solutions.💻",
            footer: "I primarily work with C#, Java, PHP, and database management.",
        },
        // {
        //     title: "Sou um desenvolvedor backend",
        //     description: "Desenvolvedor backend brasileiro, apaixonado por tecnologia e especializado em criar sistemas robustos, eficientes e escaláveis.💻",
        //     footer: "Trabalho principalmente com C#, Java, PHP e gerenciamento de banco de dados."
        // },
        {
            title: "Garoto de Programa 😏",
            description: "Faço suas ideias e pensamentos se tornarem realidade... Trabalho principalmente com C#, Java, PHP e gerenciamento de banco de dados.",
            footer: "Desenvolvedor backend"
        },
    ],
}

export default blog