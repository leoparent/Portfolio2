import { library } from '@fortawesome/fontawesome-svg-core';
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
  Databases
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
  Databases
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

const introduction = {
  text: [
    "Hello everyone and welcome!",

    "My name is Léo, and I'm an information systems engineer who graduated from ECE Paris. With me, your cloud infrastructures will see the light of day, thanks to my skills and your collaboration.",

    "I can offer you tailor-made cloud solutions that optimize performance, security and reliability. Whether it's a question of migration, security or optimizing costs and models. If you wish, I can also offer you an IaC (Infrastructure as Code) using Terraform, to meet your cloud infrastructure needs.",

    "Team up with me, your trusted freelance cloud architect, and transform your operations with powerful cloud solutions tailored to your unique needs.",

    "I'm always delighted to work in partnership with new teams and discover new technologies. I'm delighted that you're visiting my Portfolio !",

    "When I have time to myself I love to go and play tennis, which I still play a little competitively. I also like to play chess, having a rating of 2000 elo.  ♘ 🎾",

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
    description: 'I was the information systems manager of the first French team in the autonomous category participating to the formula student ',
    image: memoryGame,
    source_code_link: 'https://arece.eu/',
  },
  {
    name: 'GrandCoeur',
    description: 'I was the product owner of the GrandCoeur application, a company whose goal was to track patients as they left the emergency room.',
    image: pawsitivePrototype,
    source_code_link: 'https://www.grandcoeur.fr/',
  },
  {
    name: 'ImoGate',
    description: 'As an intern at Imogate, I designed the architecture of the billing and support processes.',
    image: imogate,
    source_code_link: 'https://www.imogate.com/',
  },
  {
    name: 'Allianz',
    description: 'As an intern at Allianz, I created a platform enabling sales representatives to better interact with brokers. As well as designing a dictionary to process customer data between lawyers and brokers (SQL).',
    image: Allianz,
    source_code_link: 'https://www.allianz.fr/',
  },

];

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
    title: 'Amazon Web Services \u2714',
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
    title: 'Terraform \u2714',
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
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
