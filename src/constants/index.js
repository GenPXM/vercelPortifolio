import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a talent for creating robust and scalable web applications. With 5 years of practical experience, I have honed my skills in front-end technologies such as React and Next.js, as well as back-end technologies such as , Net., NodeJS, SQLServer, PostgreSQL and MongoDB. My goal is to leverage my experience to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Since I was a child, I have always been curious about objects that involved some type of technology, I would disassemble remote-controlled cars just to have the joy of seeing what was inside. And time passed and this curiosity for technology only increased, nowadays I have the ability to know how to deal with challenges, I research technologies and learn how to do them quickly, and what seemed impossible becomes reality. Discover a little more about my work below.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Full Stack Developer",
    company: "Startup Sesi MS",
    description: `Together with the team developing and maintaining web applications using JavaScript, React.js, NextJS, Node.js, .Net Framework Implementation of RESTful APIs and integration with SQL Server databases. Collaborated with stakeholders to define project requirements and timelines. I integrated some system pages in addition to developing the Backend.`,
    technologies: ["Javascript", "React.js","Next.js",".Net Framework","SQL Server","Azure"],
  },
  {
    year: "2022 - 2022",
    role: "Back-end",
    company: "Centro de Inovação de Saúde e Segurança do Trabalho - SESI-FIEMS",
    description: `I participated in the development of a system for industry where I performed facial recognition of workers in a given area, using C# and Python for AI training and movement detection.`,
    technologies: ["Python", "C#", "IA", "ML"],
  },
  {
    year: "2022 - 2023",
    role: "Back-end",
    company: "Startup Sesi MS",
    description: `Participation in the development of a web system for registering and managing participants, for the Challenge 2023 challenge for the Mato Grosso do Sul industry`,
    technologies: ["Node JS", "React", "Docker", "Sql Server"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    company: "Startup Sesi MS",
    description: `Participation in the development of a web system for registering students who will take courses in industries, the People Management System (SGP), teachers and managers had control of all students and managed the system.`,
    technologies: ["C#", "React-VUE", "Azure Devops", "Sql-Server"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Campo Grande, Mato Grosso do Sul, Brazil",
  phoneNo: "+55 67 99166-4457 ",
  email: "genilson.7@hotmail.com",
};
