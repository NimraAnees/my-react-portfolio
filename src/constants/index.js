import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. With a keen eye for design and a commitment to delivering seamless user experiences, I create applications that are both visually appealing and highly functional. My expertise spans various programming languages, frameworks, and tools that allow me to tackle diverse challenges across the development stack.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with various technologies, including React, Next.js, and Node.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "Countdown Timer",
    image: project1,
    description:
      "I developed a countdown timer using Next.js, React, and Tailwind CSS, combining modern tools to create an efficient, stylish, and responsive timer. Leveraging Next.js for server-side rendering and routing, and React for dynamic state management, the timer updates seamlessly to reflect the time remaining for an event. Tailwind CSS enhances the UI with utility-first classes, allowing for quick, custom styling that ensures the timer looks clean and polished across devices.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "Weather Widget App",
    image: project2,
    description:
      "I developed a weather widget app using Next.js, React, Tailwind CSS, a weather API, and ShadCN UI. This app dynamically retrieves and displays real-time weather data, leveraging Next.js for seamless data fetching and server-side rendering. With React handling state and interactivity, the app provides users with an engaging, responsive interface. Tailwind CSS and ShadCN UI contribute to the app’s clean, modern design and ensure consistent, visually appealing components.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "I built a personal portfolio using Next.js, React, and CSS, showcasing my skills, projects, and professional experience. Next.js provides fast rendering and smooth navigation, enhancing the user experience, while React offers dynamic components and state management, allowing me to highlight my work interactively. With custom CSS styling, I’ve crafted a unique and polished design that reflects my personal brand. This portfolio is likely optimized for performance, ensuring that potential clients or employers can browse my work seamlessly across devices.",
    technologies: ["Next.js", "CSS", "React"],
  },
  {
    title: "Static Interactive Resume",
    image: project4,
    description:
      "I developed a static, interactive resume using HTML, TypeScript, and CSS, creating a unique and visually engaging representation of your professional profile. By incorporating TypeScript, I’ve added interactive elements that enhance the resume's functionality while maintaining type safety and reducing potential errors. This combination results in a professional, well-organized resume that goes beyond standard formats, providing viewers with an engaging way to explore my skills, experiences, and accomplishments interactively.",
    technologies: ["HTML", "CSS", "Typescript"],
  },
];

export const CONTACT = {
  address: "Karachi, Pakistan ",
  phoneNo: "+92 3142007878 ",
  email: "nimranaz11819@gmail.com",
  linkedIn: "www.linkedIn.com"
};