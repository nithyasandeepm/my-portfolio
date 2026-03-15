import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "sample-project",
    companyName: "Your Project Name",
    type: "Personal",
    category: ["Web Dev"],
    shortDescription:
      "Add a short description of a project you have worked on. You can edit this in config/projects.ts.",
    githubLink: "https://github.com/Nithyasandeepm",
    techStack: ["SQL", "Python"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-06-01"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Project Overview",
        description: "A summary of the project and what it does.",
        imgArr: ["/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Describe what this project is about and why you built it.",
        "Talk about the challenges you solved and the outcomes.",
      ],
      bullets: [
        "Key feature or achievement 1.",
        "Key feature or achievement 2.",
        "Key feature or achievement 3.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
