import { assets } from "./images";

export const myTechStack = [
  {
    id: 1,
    name: "React",
    image: assets.react,
    experienceLevel: "Intermediate",
    strongHold: [
      {
        id: 1,
        no: 1,
        topic: "Component Lifecycle",
      },
      {
        id: 2,
        no: 2,
        topic: "React Hooks",
      },
      {
        id: 3,
        no: 3,
        topic: "Context API",
      },
    ],
    learning: [
      {
        id: 1,
        no: 1,
        topic: "React Suspense",
      },
      {
        id: 2,
        no: 2,
        topic: "Server Components",
      },
      {
        id: 3,
        no: 3,
        topic: "Testing with Jest",
      },
    ],
    projects: [
      {
        id: 1,
        name: "Portfolio Website",
        link: "https://example.com/portfolio",
      },
      {
        id: 2,
        name: "Task Manager App",
        link: "https://example.com/task-manager",
      },
      {
        id: 3,
        name: "E-commerce Store",
        link: "https://example.com/e-commerce",
      },
    ],
  },
  {
    id: 2,
    name: "TypeScript",
    image: assets.ts,
    experienceLevel: "Advanced",
    strongHold: [
      {
        id: 1,
        no: 1,
        topic: "Asynchronous Programming",
      },
      {
        id: 2,
        no: 2,
        topic: "ES6+ Features",
      },
      {
        id: 3,
        no: 3,
        topic: "DOM Manipulation",
      },
    ],
    learning: [
      {
        id: 1,
        no: 1,
        topic: "Web Workers",
      },
      {
        id: 2,
        no: 2,
        topic: "Advanced TypeScript",
      },
      {
        id: 3,
        no: 3,
        topic: "Service Workers",
      },
    ],
    projects: [
      {
        id: 1,
        name: "Interactive Map",
        link: "https://example.com/interactive-map",
      },
      {
        id: 2,
        name: "Chat Application",
        link: "https://example.com/chat-app",
      },
      {
        id: 3,
        name: "Weather Dashboard",
        link: "https://example.com/weather-dashboard",
      },
    ],
  },
];
