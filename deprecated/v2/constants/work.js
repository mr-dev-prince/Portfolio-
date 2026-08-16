import devnotes from "../assets/projects/devnotes.png";
import journio from "../assets/projects/journio.png";
import kisaanai from "../assets/projects/kisaanai.png";
import portfolio from "../assets/projects/portfolio.png";
import softlab from "../assets/projects/softlab.png";
import splito from "../assets/projects/splito.png";

export const projects = [
  {
    title: "Splito - Expense Splitter App",
    deployed_link: "https://splito-client.vercel.app/",
    cover_image: {
      alternativeText: "Full-stack expense splitting application",
      formats: {
        large: {
          url: splito,
        },
      },
    },
  },
  {
    title: "Journio - Social Media Platform for Travelers",
    deployed_link: "https://journio-two.vercel.app/",
    cover_image: {
      alternativeText: "Social media platform for travelers",
      formats: {
        large: {
          url: journio,
        },
      },
    },
  },
  {
    title: "The Prince Softlab - Machine Code Challenges",
    deployed_link: "https://the-prince-softlab.vercel.app/",
    cover_image: {
      alternativeText: "Platform for machine code challenges and learning",
      formats: {
        large: {
          url: softlab,
        },
      },
    },
  },
  {
    title: "DevNotes - Technology Learning Notes",
    deployed_link: "https://notes-liart-pi.vercel.app/",
    cover_image: {
      alternativeText: "Platform for organizing technology learning notes",
      formats: {
        large: {
          url: devnotes,
        },
      },
    },
  },
  {
    title: "KisaanAI - AI-Powered Agriculture Assistant",
    deployed_link: "https://kai-dun.vercel.app/",
    cover_image: {
      alternativeText: "AI-powered agriculture assistant platform",
      formats: {
        large: {
          url: kisaanai,
        },
      },
    },
  },
  {
    title: "Personal Portfolio Website",
    deployed_link: "https://devprince.xyz",
    cover_image: {
      alternativeText:
        "Personal portfolio website showcasing projects and skills",
      formats: {
        large: {
          url: portfolio,
        },
      },
    },
  },
];
