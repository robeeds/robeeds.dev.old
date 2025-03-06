import botanicbento from "/public/images/botanicbento.webp"
import hoobank from "/public/images/hoobank.webp"
import firstportfolio from "/public/images/firstportfolio.webp"
import taskman from "/public/images/taskman.webp"

import htmlIcon from "/public/images/html.svg"
import cssIcon from "/public/images/css.svg"
import javascriptIcon from "/public/images/javascript.svg"
import reactIcon from "/public/images/react.svg"
import tailwindIcon from "/public/images/tailwind.svg"
import bootstrapIcon from "/public/images/bootstrap.svg"
import nextjsIcon from "/public/images/nextjs.svg"
import pythonIcon from "/public/images/python.svg"
import typescriptIcon from "/public/images/typescript.svg"

export const navLinks = [
    { 
        name: 'home', 
        href: '/',
    },
    {
        name: 'about',
        href: '/#about',
    },
    {
        name: 'blog',
        href: '/blog',
    },
    {
        name: 'portfolio',
        href: '/#portfolio',
    }, 
    {
        name: 'contact',
        href: '/#contact',
    },
];

export const projectInfo = [
    {
        title: "TaskMan",
        num: 1,
        langs: ["Next.js 15", "TailwindCSS", "Appwrite", "TypeScript"],
        content: "A minimalistic gruvbox-themed task management application that employs Appwrite's Auth, Database, and Realtime APIs for user interactivity and an overall responsive user experience.",
        img: taskman,
        link: "https://taskman-beta.vercel.app/"
    },
    {
        title: "Botanic Bento",
        num: 2,
        langs: ["HTML", "TailwindCSS", "React.js"],
        content: "React-based site with Tailwind CSS for a seamless, stylish exploration of nature-inspired decor. Deployed on Vercel and responsive to all screen sizes.",
        img: botanicbento,
        link: "https://botanic-bento.vercel.app",
    },
    {
        title: "HooBank",
        num: 3,
        langs: ["HTML", "TailwindCSS", "React.js"],
        content: "A project clone of @adrianhajdin's project_hoobank on GitHub. Made from scratch and deployed on Vercel. Responsive to all screen sizes.",
        img: hoobank,
        link: "https://bank-modern-app-robeeds-projects.vercel.app/",
    },
    {
        title: "First ePortfolio",
        num: 4,
        langs: ["HTML", "BootstrapCSS", "JavaScript"],
        content: "My first ePortfolio. Made from scratch using the BootstrapCSS framework. ",
        img: firstportfolio,
        link: "https://github.com/robeeds/old_eportfolio",
    },
];

export const techInfo = [
    {
        id: 0,
        name: "HTML",
        img: htmlIcon,
    },
    {
        id: 1,
        name: "CSS",
        img: cssIcon,
    },
    {
        id: 2,
        name: "JavaScript",
        img: javascriptIcon,
    },
    {
        id: 3,
        name: "TypeScript",
        img: typescriptIcon,
    },
    {
        id: 4,
        name: "React",
        img: reactIcon,
    },
    {
        id: 5,
        name: "Tailwind",
        img: tailwindIcon,
    },
    {
        id: 6,
        name: "Bootstrap",
        img: bootstrapIcon,
    },
    {
        id: 7,
        name: "Next.js",
        img: nextjsIcon
    },
    {
        id: 8,
        name: "Python",
        img: pythonIcon,
    }
];

