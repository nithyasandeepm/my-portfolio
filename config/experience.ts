import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "placeholder-role",
    position: "Business Analyst",
    company: "Your Company",
    location: "Your Location",
    startDate: new Date("2022-01-01"),
    endDate: "Present",
    description: [
      "Add your key responsibilities here.",
      "Describe the systems or processes you analyzed.",
      "Mention any cross-functional collaboration.",
    ],
    achievements: [
      "Add a measurable achievement here.",
      "Add another achievement here.",
    ],
    skills: ["SQL", "Python", "Typescript"],
    companyUrl: "",
    logo: "",
  },
];
