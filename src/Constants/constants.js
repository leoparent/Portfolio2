import { library } from '@fortawesome/fontawesome-svg-core';
import { useTranslation, } from "react-i18next";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  memoryGame,
  avatar,
  TerraformIcon,
  C_CPP_CdzIcon,
  AzureIcon,
  DevopsIcon,
  CreedlyIcon,
  WebsiteIcon,
  calculator,
  imogate,
  logocloud,
  Allianz,
  Databases,
  Compas
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);


const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  TerraformIcon,
  C_CPP_CdzIcon,
  AzureIcon,
  DevopsIcon,
  CreedlyIcon,
  WebsiteIcon,
  imogate,
  Allianz,
  Databases,
  Compas
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  CreedlyIcon,
  
};

const introduction_en = {
  text: [
    "Hello and welcome!",

    "I'm an information systems engineer living in Paris and I'll be graduating from ECE Paris in 2024. ",

    "I'm both an Cloud architect, mainly using Azure and AWS technologies, a DevOps with Terraform, Docker, Git and CI/CD and a Developer, using Python, C languages, and React.",

    "I can help you with the Design and implementation of highly scalable and resilient cloud architecture -- Implementation of DevOps best practices -- Migration management and Creation of Infrastructure as Code",

    "Thanks to my skills and our collaboration, your cloud infrastructures will see the light of day.",

    "As a Cloud engineer, I'm AWS solutions architect associate and Terraform certified. 🎖️",

    "Apart from computers, I also enjoy playing tennis and chess 🎾 ♘ 2000 elo",

  ],
};

const introduction_fr = {
  text: [
    "Bonjour et bienvenue !",

    "Je suis un ingénieur en systèmes d'information qui vit à Paris et je serai diplômé de l'ECE Paris en 2024.",

    "Je suis à la fois un Architecte Cloud, utilisant principalement les technologies Azure et AWS, un DevOps avec Terraform, Docker, Git et CI/CD et un développeur, maîtrisant Python, les langages C et React.",

    "Je peux vous aider dans la conception et la mise en œuvre d'une architecture cloud hautement évolutive et résiliente -- Dans la conception des meilleures pratiques DevOps -- Dans la gestion de la migration et la création de l'infrastructure en tant que code.",

    "Grâce à mes compétences et à notre collaboration, vos infrastructures cloud verront le jour.",

    "En tant qu'ingénieur Cloud, je suis certifié AWS solutions architect associate et Terraform associate. 🎖️",

    "En dehors de l'informatique, je passe mon temps à jouer au tennis et aux échecs 🎾 ♘ 2000 elo",

  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Arece",
    image: memoryGame,
    source_code_link: 'https://arece.eu/',
  },
  {
    name: 'ImoGate',
    image: imogate,
    source_code_link: 'https://www.imogate.com/',
  },
  {
    name: 'GrandCoeur',
    image: pawsitivePrototype,
    source_code_link: 'https://www.grandcoeur.fr/',
  },
  {
    name: 'Allianz',
    image: Allianz,
    source_code_link: 'https://www.allianz.fr/',
  },
];

const project_description_en = {
  text: [
    "I was the information systems manager for the first French team in the autonomous category to take part in the student formula. Our team took part in the FS UK 2023 at Silverstone.",

    "Imogate is a start-up providing loan, real estate and investment management services to international financial institutions. During my internship, I designed the architecture of the billing and support processes using Python, React, Azure and SQL.",

    "GrandCoeur is a start-up that monitors patients as they leave the emergency room. I was the product manager for the GrandCoeur application, enabling patients to communicate with doctors.",

    "As an intern at Allianz, I created a platform enabling sales representatives to better interact with brokers. As well as designing a dictionary to process customer data between lawyers and brokers (SQL).",
  ],
};

const project_description_fr = {
  text: [
    "J'étais le responsable des systèmes d'information de la première équipe française à participer à la formula student en catégorie autonome. Notre équipe a participé à la FS UK 2023 à Silverstone.",

    "Imogate est une start-up qui fournit des services de gestion de prêts, de biens immobiliers et d'investissements à des fonds d'investissements internationales. Pendant mon stage, j'ai conçu l'architecture des processus de facturation et du support client en utilisant Python, React, Azure et SQL.",

    "GrandCoeur est une start-up qui suit les patients à la sortie des urgences. J'étais chef de produit pour l'application GrandCoeur, qui permet aux patients de communiquer avec les médecins.",

    "En tant que stagiaire chez Allianz, j'ai créé une plateforme permettant aux commerciaux de mieux interagir avec les courtiers. J'ai également conçu un dictionnaire pour traiter les données des clients entre les avocats et les courtiers (SQL).",
  ],
};

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have experience in JavaScript with React.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am familiar with React and the Taildwind CSS library, to date I have built 3 websites using this technology. ',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services 🎖️',
    icon: awsIcon,
    description:
      'I am certified as an AWS Solutions Architect and know how to work with AWS infrastructure.',
  },
  {
    id: 'Azure',
    title: 'Azure ',
    icon: AzureIcon,
    description:
      'I use the Azure cloud to design and deploy cloud infrastructures',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I can code and automate processes in python.',
  },
  {
    id: 'Terraform',
    title: 'Terraform 🎖️',
    icon: TerraformIcon,
    description:
      'I am a certified Haschicorp Terraform Associate. I use Terraform when it comes to building infrastructure as code.',
  },
  {
    id: 'C_Cpp_C',
    title: 'C languages',
    icon: C_CPP_CdzIcon,
    description:
      'I have had the opportunity to work on several projects in C/C++ and C#',
  },
  {
    id: 'Devops',
    title: 'DevOps',
    icon: DevopsIcon,
    description:
      'As a cloud engineer, I integrate DevOps methods into my projects to better automate project phases.',
  },
  {
    id: 'Databases',
    title: 'Databases',
    icon: Databases,
    description:
      'I have a strong knowledge of relational and non-relational databases. ',
  },
  {
    id: 'Compas',
    title: 'Architect',
    icon: Compas,
    description:
      'I have a strong knowledge of relational and non-relational databases. ',
  },
];

const skills_description_en = {
  text: [
    "I have experience in JavaScript and TypeScript with React.",

    "I am familiar with React and the Taildwind CSS library. To date I have built 3 websites using this technology. ",

    "I am certified as an AWS Solutions Architect and like to work with AWS infrastructure.",

    "I use the Azure cloud to design and deploy cloud infrastructures",

    "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",

    "With experience in Python, I can code and automate processes in Python",

    'I am a certified Terraform Associate. I use Terraform when it comes to building infrastructure as code.',

    'I have had the opportunity to work on several projects in C/C++ and C#',

    'As a cloud engineer, I integrate DevOps methods into my projects to better automate project phases.',

    'I have a strong knowledge of relational and non-relational databases. ',

    'I can design Cloud architectures in AWS & Azure ',
  ],
};

const skills_description_fr = {
  text: [
    "J'ai de l'expérience en JavaScript et TypeScript avec React.",

    "Je suis familier avec React et la bibliothèque CSS Taildwind. A ce jour, j'ai construit 3 sites web en utilisant cette technologie.",

    "Je suis certifié en tant qu'architecte de solutions AWS et j'aime travailler avec l'infrastructure AWS.",

    "J'utilise le cloud Azure pour concevoir et déployer des infrastructures.",

    "Je maîtrise Git, la gestion des modifications de code, la collaboration avec les autres et la résolution efficace des conflits",
  
    "Avec de l'expérience en Python, je peux coder et automatiser des processus en Python",

    "Je suis certifié Terraform Associate. J'utilise Terraform pour concevoir des infrastructure en tant que code.",

    "J'ai eu l'occasion de travailler sur plusieurs projets en C/C++ et C#.",

    "En tant qu'ingénieur cloud, j'intègre les méthodes DevOps dans mes projets pour mieux automatiser les phases du projet.",

    "J'ai une bonne connaissance des bases de données relationnelles et non relationnelles. ",

    "Je peux concevoir des architectures cloud dans AWS et Azure."
  ],
};


const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction_en,
  introduction_fr,
  projects,
  project_description_en,
  project_description_fr,
  memoji,
  skills,
  skills_description_en,
  skills_description_fr,
  markerSvg,
  icons,
};
