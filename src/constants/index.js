import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    weblaunch,
    carrent,
    jobit,
    tripguide,
    threejs,
    flutter,
    ovp,
    tunify,
    chaton,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI / UX designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
        name: "flutter",
        icon: flutter,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Weblaunch India",
      icon: weblaunch,
      iconBg: "#383E56",
      date: "January 2023 - March 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "OVP - Online Voting Platform",
      description:
        "Web-based platform that makes aids in creating and deploying a form online where the signed in voters can vote.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: ovp,
      source_code_link: "https://github.com/yogeshbhutkar/voterWebApp",
    },
    {
      name: "Tunify",
      description:
        "A full stack web application made using MERN stack with firebase auth which helps user to schedule his appointments and keep a track of them.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: tunify,
      source_code_link: "https://github.com/yogeshbhutkar/Tunify",
    },
    {
      name: "Chat_On",
      description:
        "A comprehensive android app made using Google's flutter which helps the user to stay connected with other users in a group chat environment, also comes with a built-in chat bot.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "API management",
          color: "pink-text-gradient",
        },
      ],
      image: chaton,
      source_code_link: "https://github.com/yogeshbhutkar/Chat_on",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };