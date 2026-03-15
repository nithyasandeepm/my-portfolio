import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Nithya Raveendran's portfolio — Business Analyst, Process Analyst, and Systems Analyst.",
    },
  },
  skills: {
    title: "Skills",
    description: "The tools and platforms I use to turn complexity into clarity.",
    metadata: {
      title: "Skills",
      description:
        "Nithya Raveendran's skills — Salesforce, process analysis, requirements documentation, JIRA, Agile, and AI tools.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Nithya Raveendran's projects.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Nithya Raveendran.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Nithya Raveendran's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Nithya Raveendran's resume.",
    metadata: {
      title: "Resume",
      description: "Nithya Raveendran's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Perspectives on business analysis, process design, and navigating the intersection of tech and strategy.",
    metadata: {
      title: "Blogs",
      description:
        "Nithya Raveendran's blog — perspectives on business analysis, process design, and navigating the intersection of tech and strategy.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Nithya Raveendran's professional journey and experience timeline.",
    },
  },
};
