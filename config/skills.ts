import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Salesforce",
    description:
      "End-to-end CRM across the full lead-to-order lifecycle — lead conversion, CPQ, deal management, and order processing.",
    rating: 5,
    icon: Icons.salesforce,
  },
  {
    name: "Replit",
    description:
      "AI-assisted browser-based development environment — used to build and ship a fully transacting web application.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "GitHub",
    description:
      "Version control and repository management — including real-world deployment troubleshooting experience.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "Vercel",
    description:
      "Cloud deployment and hosting — hands-on experience deploying and debugging a live web application.",
    rating: 4,
    icon: Icons.vercel,
  },
  {
    name: "Loom",
    description:
      "Async video communication for walkthroughs, demos, and stakeholder updates — replacing long email threads with clarity.",
    rating: 5,
    icon: Icons.loom,
  },
  {
    name: "Rovo",
    description:
      "Atlassian's AI assistant for surfacing insights, answering questions, and automating work across the Atlassian suite.",
    rating: 5,
    icon: Icons.atlassian,
  },
  {
    name: "Claude",
    description:
      "AI research, documentation drafting, analysis, and ideation — a core partner in reimagining how analysts work.",
    rating: 5,
    icon: Icons.anthropic,
  },
  {
    name: "NotebookLM",
    description:
      "AI-powered research and document synthesis — turning dense source material into structured, actionable insights.",
    rating: 5,
    icon: Icons.gitRepoIcon,
  },
  {
    name: "Zapier",
    description:
      "Workflow automation connecting business tools — eliminating manual steps and enabling scalable process design.",
    rating: 4,
    icon: Icons.zapier,
  },
  {
    name: "Gemini",
    description:
      "Google's AI model used for research, debugging, and problem-solving across complex technical and analytical tasks.",
    rating: 5,
    icon: Icons.gemini,
  },
  {
    name: "Lucid Charts",
    description:
      "Mapping workflows, identifying bottlenecks, and driving automation opportunities with a sharp lens on ROI.",
    rating: 5,
    icon: Icons.lucid,
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
