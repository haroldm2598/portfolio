import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "@/lib/types/definition";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const initialState: InitialState = {
  isActive: false,
  navLinks: [
    { name: "about", path: "about" },
    { name: "projects", path: "projects" },
    { name: "contact", path: "contact" },
  ],
  projectList: [
    {
      imageSrc: require("/public/images/projects/todolist.png").default,
      title: "Todolist",
      desc: "Provide the essitial tasks todo and record on the spot and friendly user",
      githubLink: "https://github.com/haroldm2598/Project-todolist",
      livePreviewLink: "https://haroldm2598.github.io/Project-todolist/",
    },
    {
      imageSrc: require("/public/images/projects/resume-original.png").default,
      title: "Resume Builder",
      desc: "Where create instant resume through online using a react js",
      githubLink: "https://github.com/haroldm2598/Project-resume",
      livePreviewLink: "https://haroldm2598.github.io/Project-resume/",
    },
    {
      imageSrc: require("/public/images/projects/ecommerce.png").default,
      title: "Ecommerce",
      desc: "A reliable and friendly user ecommerce website.",
      githubLink: "https://github.com/haroldm2598/Project-ecommerce",
      livePreviewLink: "https://haroldm2598.github.io/Project-ecommerce/",
    },

    {
      imageSrc: require("/public/images/projects/podia.png").default,
      title: "Podia(unofficial website)",
      desc: "A frontendpractice.com where to showcase enhance their frontend skills by working on real-world project challenges.",
      githubLink: "https://github.com/haroldm2598/podia",
      livePreviewLink: "https://haroldm2598.github.io/podia/",
    },
    {
      imageSrc: require("/public/images/projects/elitegrounds.jpg").default,
      title: "Elitegroundsran",
      desc: "A classical game MMORPG it features a mix of fantasy and action gameplay with elements like quests, PvP battles, and dungeon raids.",
      livePreviewLink: "https://elitegroundsran.com/",
    },
  ],
  expertiseList: [
    {
      main: [
        { imgSrc: require("/public/images/experties/html.svg").default },
        { imgSrc: require("/public/images/experties/css.svg").default },
        { imgSrc: require("/public/images/experties/javascript.svg").default },
        { imgSrc: require("/public/images/experties/sass.svg").default },
        { imgSrc: require("/public/images/experties/tailwindcss.svg").default },
        { imgSrc: require("/public/images/experties/reactjs.svg").default },
        { imgSrc: require("/public/images/experties/nextjs.svg").default },
        { imgSrc: require("/public/images/experties/github.svg").default },
        { imgSrc: require("/public/images/experties/git.svg").default },
        { imgSrc: require("/public/images/experties/typescript.svg").default },
      ],
      sub: [
        { imgSrc: require("/public/images/experties/nodejs.svg").default },
        { imgSrc: require("/public/images/experties/express.svg").default },
        { imgSrc: require("/public/images/experties/mongodb.svg").default },
      ],
    },
  ],
  socialMediaList: [
    {
      Icon: SiGithub,
      socmedName: "Github",
      path: "https://github.com/haroldm2598",
      name: "@haroldm2598",
    },
    {
      Icon: SiLinkedin,
      socmedName: "Linkedin",
      path: "https://www.linkedin.com/in/haroldmagisa/",
      name: "@haroldmagisa",
    },
    {
      Icon: SiTwitter,
      socmedName: "Twitter",
      path: "https://x.com/Mahayrolddd",
      name: "@mayharolddd",
    },
  ],
};

export const data = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    SetIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { SetIsActive } = data.actions;
export default data.reducer;
