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
    name: "Process Analysis",
    description:
      "Mapping workflows, identifying bottlenecks, and driving automation opportunities with a sharp lens on ROI.",
    rating: 5,
    icon: Icons.zapier,
  },
  {
    name: "Requirements & User Stories",
    description:
      "Full documentation stack: requirements docs, solution docs, process flows, and user stories built for stakeholder clarity.",
    rating: 5,
    icon: Icons.post,
  },
  {
    name: "JIRA",
    description:
      "Sprint planning, backlog grooming, and end-to-end project tracking across Agile delivery teams.",
    rating: 5,
    icon: Icons.jira,
  },
  {
    name: "Agile / Scrum",
    description:
      "Agile ceremonies, sprint cycles, and iterative delivery — bridging business needs with development execution.",
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
    name: "Confluence",
    description:
      "Collaborative documentation and knowledge management — the single source of truth for process and product teams.",
    rating: 4,
    icon: Icons.confluence,
  },
  {
    name: "UAT & QA",
    description:
      "End-to-end user acceptance testing, defect management, and sign-off coordination across complex system implementations.",
    rating: 4,
    icon: Icons.check,
  },
  {
    name: "GitHub",
    description:
      "Version control and repository management — including real-world deployment troubleshooting experience.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "Replit",
    description:
      "AI-assisted browser-based development environment — used to build and ship a fully transacting web application.",
    rating: 4,
    icon: Icons.laptop,
  },
  {
    name: "Zapier",
    description:
      "Workflow automation connecting business tools — eliminating manual steps and enabling scalable process design.",
    rating: 4,
    icon: Icons.zapier,
  },
  {
    name: "NotebookLM",
    description:
      "AI-powered research and document synthesis — turning dense source material into structured, actionable insights.",
    rating: 3,
    icon: Icons.gitRepoIcon,
  },
  {
    name: "Gemini",
    description:
      "Google's AI model used for research, debugging, and problem-solving across complex technical and analytical tasks.",
    rating: 3,
    icon: Icons.gemini,
  },
  {
    name: "SQL",
    description:
      "Data querying for reporting, analysis, and system validation — supporting data-driven decision making.",
    rating: 3,
    icon: Icons.mysql,
  },
  {
    name: "Vercel",
    description:
      "Cloud deployment and hosting — hands-on experience deploying and debugging a live web application.",
    rating: 3,
    icon: Icons.vercel,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
