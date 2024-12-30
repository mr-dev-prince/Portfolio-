import { assets } from "./images";

export const techStackSectionKeys = {
  strongHold: "Strong Hold Concepts",
  summary: "Summary",
  learning: "Currently Learning",
  projects: "Projects",
};

export const myTechStack = [
  {
    id: "1",
    name: "HTML",
    image: assets.html,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: "1", topic: "Structure of an HTML Document" },
      { id: "2", topic: "Sectioning Elements" },
      { id: "3", topic: "Canvas & Storage API" },
      { id: "4", topic: "SEO Basics" },
      { id: "5", topic: "Viewport Meta Tag" },
      { id: "6", topic: "Responsive Images" },
    ],
  },
  {
    id: 2,
    name: "CSS",
    image: assets.css,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Box Model" },
      { id: 2, topic: "Flexbox and Grid" },
      { id: 3, topic: "Responsive Design" },
      { id: 4, topic: "Animations and Transitions" },
      { id: 5, topic: "CSS Variables" },
    ],
    learning: [
      { id: 1, topic: "Advanced CSS Animations" },
      { id: 2, topic: "CSS Houdini" },
    ],
  },
  {
    id: 3,
    name: "JavaScript",
    image: assets.js,
    experienceLevel: "Advanced",
    strongHold: [
      { id: 1, topic: "Asynchronous Programming" },
      { id: 2, topic: "ES6+ Features" },
      { id: 3, topic: "DOM Manipulation" },
      { id: 4, topic: "Closures and Scope" },
    ],
    learning: [
      { id: 1, topic: "Web Workers" },
      { id: 2, topic: "Service Workers" },
    ],
  },
  {
    id: 4,
    name: "TypeScript",
    image: assets.ts,
    experienceLevel: "Advanced",
    strongHold: [
      { id: 1, topic: "Type Inference" },
      { id: 2, topic: "Interfaces and Types" },
      { id: 3, topic: "Generics" },
    ],
    learning: [
      { id: 1, topic: "Decorators" },
      { id: 2, topic: "Advanced TypeScript Patterns" },
    ],
  },
  {
    id: 5,
    name: "Python",
    image: assets.python,
    experienceLevel: "Advanced",
    strongHold: [
      { id: 1, topic: "Data Structures and Algorithms" },
      { id: 2, topic: "Web Development with Flask/Django" },
      { id: 3, topic: "File Handling and Data Parsing" },
    ],
    learning: [
      { id: 1, topic: "Machine Learning with Scikit-Learn" },
      { id: 2, topic: "Advanced Python Libraries" },
    ],
  },
  {
    id: 6,
    name: "C++",
    image: assets.cpp,
    experienceLevel: "Advanced",
    strongHold: [
      { id: 1, topic: "Object-Oriented Programming" },
      { id: 2, topic: "STL (Standard Template Library)" },
      { id: 3, topic: "Dynamic Memory Management" },
    ],
    learning: [
      { id: 1, topic: "Advanced Multithreading" },
      { id: 2, topic: "Design Patterns" },
    ],
  },
  {
    id: 7,
    name: "React",
    image: assets.react,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "React Hooks" },
      { id: 2, topic: "Component Lifecycle" },
      { id: 3, topic: "State Management with Redux" },
    ],
    learning: [
      { id: 1, topic: "Server Components" },
      { id: 2, topic: "React Suspense" },
    ],
  },
  {
    id: 8,
    name: "Node.js",
    image: assets.nodejs,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "REST API Development" },
      { id: 2, topic: "Express.js Middleware" },
      { id: 3, topic: "Asynchronous Programming" },
    ],
    learning: [
      { id: 1, topic: "GraphQL APIs" },
      { id: 2, topic: "Cluster and Worker Threads" },
    ],
  },
  {
    id: 9,
    name: "MongoDB",
    image: assets.mongoDbIcon,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Document Modeling" },
      { id: 2, topic: "Aggregation Pipelines" },
      { id: 3, topic: "Indexing and Performance Tuning" },
    ],
    learning: [{ id: 1, topic: "Sharding and Replication" }],
  },
  {
    id: 10,
    name: "PostgreSQL",
    image: assets.sql,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Joins and Subqueries" },
      { id: 2, topic: "Database Normalization" },
      { id: 3, topic: "Stored Procedures" },
    ],
    learning: [{ id: 1, topic: "Advanced Query Optimization" }],
  },
  {
    id: 11,
    name: "Tailwind CSS",
    image: assets.tailwind,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Utility-First Styling" },
      { id: 2, topic: "Responsive Design" },
      { id: 3, topic: "Custom Themes" },
    ],
    learning: [{ id: 1, topic: "Dark Mode Customization" }],
  },
  {
    id: 12,
    name: "Framer Motion",
    image: assets.framermotion,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Animation Controls" },
      { id: 2, topic: "Transitions" },
      { id: 3, topic: "Gestures" },
    ],
    learning: [{ id: 1, topic: "Complex Motion Layouts" }],
  },
  {
    id: 13,
    name: "Git",
    image: assets.github,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Branching and Merging" },
      { id: 2, topic: "Rebasing" },
      { id: 3, topic: "Conflict Resolution" },
    ],
    learning: [{ id: 1, topic: "Advanced CI/CD Integrations" }],
  },
  {
    id: 14,
    name: "Docker",
    image: assets.docker,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Containerization Basics" },
      { id: 2, topic: "Docker Compose" },
      { id: 3, topic: "Image Optimization" },
    ],
    learning: [{ id: 1, topic: "Multi-Stage Builds" }],
  },
  {
    id: 15,
    name: "AWS",
    image: assets.aws,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "S3 Storage" },
      { id: 2, topic: "EC2 Management" },
      { id: 3, topic: "IAM Roles" },
    ],
    learning: [{ id: 1, topic: "Serverless with Lambda" }],
  },
  {
    id: 16,
    name: "Firebase",
    image: assets.firebase,
    experienceLevel: "Intermediate",
    strongHold: [
      { id: 1, topic: "Realtime Database" },
      { id: 2, topic: "Authentication" },
      { id: 3, topic: "Cloud Functions" },
    ],
    learning: [{ id: 1, topic: "Firestore Optimization" }],
  },
];
