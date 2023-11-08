import { Icon } from "@iconify/react";

import moi from "./images/moi.jpg";

import quizz from "./images/children-593313_640.jpg";
import debog from "./images/code-1076536_640.jpg";
import argent from "./images/money-2724241_640.jpg";
import food from "./images/outdoor-dining-1846137_640.jpg";
import sophie from "./images/photographer-407068_640.jpg";
import kasa from "./images/wall-416060_640.jpg";

import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

export { HeroLight as Light };
export { HeroDark as Dark };

export const githubUsername = "mehdi660";

export const navLogo = moi;

export const Blog = <Icon icon="mdi:linkedin" color="white" />;

export const moreInfo =
  "Passionate about web development, I am looking for a company for a work-study or other employment contract. I started learning development on my own, thanks to our wonderful tool which is the internet, and I then followed web dev training at openclassrooms. So there you have it, see you very soon I hope!";

export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4 skill" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4 skill" />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4 skill" />,
    name: "JavaScript",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4  skill" />,
    name: "React",
  },
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4 skill" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4 skill" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4 skill" />,
    name: "GitHub",
  },
  {
    id: 10,
    skill: <Icon icon="solar:figma-bold" className="display-4 skill" />,
    name: "Figma",
  },
  {
    id: 11,
    skill: <Icon icon="file-icons:swagger" className="display-4 skill" />,
    name: "Swagger editor",
  },
];

export const resume = "https://pdf.ac/288nm2";

export const filteredProjects = [
  "ArgentBankProject",
  "Deboging-77events",
  "Kasa-V0-",
  "Nina_Carducci_SEO",
  "OhMyFoodV1",
  "Quizz-JS-fr-",
];

export const projectCardImages = [
  {
    name: "ArgentBankProject",
    image: argent,
  },
  {
    name: "Deboging-77events",
    image: debog,
  },
  {
    name: "Kasa-V0-",
    image: kasa,
  },
  {
    name: "Nina_Carducci_SEO",
    image: sophie,
  },
  {
    name: "OhMyFoodV1",
    image: food,
  },
  {
    name: "Quizz-JS-fr-",
    image: quizz,
  },
];

export const formspreeUrl = "https://formspree.io/f/xwkdylzz";
