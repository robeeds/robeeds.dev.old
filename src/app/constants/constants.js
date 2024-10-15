import botanicbento from "/public/images/botanicbento.png"
import hoobank from "/public/images/hoobank.png"
import firstportfolio from "/public/images/firstportfolio.png"

import htmlIcon from "/public/images/html.svg"
import cssIcon from "/public/images/css.svg"
import javascriptIcon from "/public/images/javascript.svg"
import reactIcon from "/public/images/react.svg"
import tailwindIcon from "/public/images/tailwind.svg"
import bootstrapIcon from "/public/images/bootstrap.svg"

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
        title: "Botanic Bento",
        num: 1,
        langs: ["HTML", "TailwindCSS", "React.js"],
        content: "React-based site with Tailwind CSS for a seamless, stylish exploration of nature-inspired decor. Deployed on Vercel and responsive to all screen sizes.",
        img: botanicbento,
        link: "https://botanic-bento.vercel.app",
    },
    {
        title: "HooBank",
        num: 2,
        langs: ["HTML", "TailwindCSS", "React.js"],
        content: "A project clone of @adrianhajdin's project_hoobank on GitHub. Made from scratch and deployed on Vercel. Responsive to all screen sizes.",
        img: hoobank,
        link: "https://bank-modern-app-robeeds-projects.vercel.app/",
    },
    {
        title: "First ePortfolio",
        num: 3,
        langs: ["HTML", "BootstrapCSS", "JavaScript"],
        content: "My first ePortfolio. Made from scratch using the BootstrapCSS framework. ",
        img: firstportfolio,
        link: "https://github.com/robeeds/old_eportfolio",
    },
];

export const techInfo = [
    {
        id: 0,
        lang: "HTML",
        img: htmlIcon,
    },
    {
        id: 1,
        lang: "CSS",
        img: cssIcon,
    },
    {
        id: 2,
        lang: "JavaScript",
        img: javascriptIcon,
    },
    {
        id: 3,
        lang: "React",
        img: reactIcon,
    },
    {
        id: 4,
        lang: "Tailwind",
        img: tailwindIcon,
    },
    {
        id: 5,
        lang: "Bootstrap",
        img: bootstrapIcon,
    }
];

