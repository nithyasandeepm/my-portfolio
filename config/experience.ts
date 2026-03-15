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
    id: "atlassian",
    position: "Sr. Business Process Analyst - NPI",
    company: "Atlassian",
    location: "Remote",
    startDate: new Date("2025-10-01"),
    endDate: "Present",
    description: [
      "Embedded in Revenue Operations, operationalizing product and pricing changes across the SaaS portfolio.",
      "Lead end-to-end New Product Introduction (NPI) process across Product, Finance, Deal Desk, Sales, and IT.",
      "Own CPQ enhancements and BRDs, process flows, and DACIs to align stakeholders and accelerate delivery.",
    ],
    achievements: [
      "Leveraged Atlassian Rovo and Loom AI to build a unified AI-powered workflow across Slack, Confluence, and documentation — cutting research time and manual effort significantly.",
      "Maintained SKU configuration integrity across environments, ensuring pricing accuracy and system consistency.",
    ],
    skills: ["CPQ", "Confluence", "JIRA", "Agile", "SQL"],
    companyUrl: "https://www.atlassian.com",
  },
  {
    id: "vimeo",
    position: "Sr. Business Systems Analyst - Salesforce",
    company: "Vimeo",
    location: "Remote",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-09-01"),
    description: [
      "Mapped 14 complex sales processes (new business, renewals, amendments, cross-sells), identifying automation opportunities.",
      "Redesigned the Sales Use Case framework with Customer Success and Product teams.",
      "Simplified Opportunity types from 5+ with 8–10 subtypes to 4 core types — cutting complexity by 50%.",
    ],
    achievements: [
      "Identified opportunities to cut deal desk effort by 30% and finance effort by 25% per process.",
      "Standardized pipeline stages, improving forecasting accuracy and reducing tech debt.",
      "Redefined partner role attribution, automating workflows and improving forecast accuracy.",
    ],
    skills: ["Salesforce", "CPQ", "SQL", "Agile", "JIRA"],
    companyUrl: "https://vimeo.com",
  },
  {
    id: "sophos-manager",
    position: "IT Apps Manager - Enterprise Applications",
    company: "Sophos",
    location: "Remote",
    startDate: new Date("2022-07-01"),
    endDate: new Date("2024-08-01"),
    description: [
      "Led a $40M Salesforce Sales Cloud transformation (Classic → Lightning) improving UX and agility.",
      "Integrated Anaplan, Zuora, and Revenera with Salesforce for end-to-end GTM and Finance automation.",
      "Improved operational efficiency by 25% and reduced vendor costs by 15% through optimization.",
    ],
    achievements: [
      "Cut post-launch issues by 75% during hyper-care, accelerating platform stabilization.",
      "Built and led a remote BA team, mentoring juniors and enabling career growth.",
    ],
    skills: ["Salesforce", "SQL", "Agile", "JIRA", "Confluence"],
    companyUrl: "https://www.sophos.com",
  },
  {
    id: "sophos-sr-bsa",
    position: "Salesforce Sr. Business Systems Analyst",
    company: "Sophos",
    location: "Remote",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2022-05-01"),
    description: [
      "Led full Sales Cloud migration (Classic → Lightning) with Lead-to-Cash implementation.",
      "Automated renewals (auto-generated Opportunities & Quotes), boosting sales efficiency by 65%.",
      "Revamped Partner Portal with intuitive workflows for opportunity management, deal registration, and quoting.",
    ],
    achievements: [
      "Increased opportunity creation by 30% via streamlined partner deal registration.",
      "Reduced Partner account errors by 70% through redesigned onboarding/offboarding.",
      "Cut order rejections by 30% and manual fixes by 45% through EDI processing optimization.",
    ],
    skills: ["Salesforce", "CPQ", "SQL", "Agile", "JIRA"],
    companyUrl: "https://www.sophos.com",
  },
  {
    id: "paychex",
    position: "Senior Business Systems Analyst",
    company: "Paychex",
    location: "Webster, NY · Hybrid",
    startDate: new Date("2014-12-01"),
    endDate: new Date("2021-03-01"),
    description: [
      "Led state-mandated projects (MA PFML, NY PFL) — facilitated workshops and requirements gathering.",
      "Supported multiple cross-functional Agile teams, converting requirements into epics and user stories.",
      "Mobile app UX redesign improved customer engagement by 25%.",
    ],
    achievements: [
      "Managed product backlog grooming, conflict resolution, and continuous delivery across multiple product lines.",
      "Optimized business processes to remove redundancies and reduce interface complexities.",
      "Represented team in program board and stakeholder meetings to track deliverables and manage risks.",
    ],
    skills: ["Agile", "JIRA", "SQL", "Confluence"],
    companyUrl: "https://www.paychex.com",
  },
  {
    id: "excellus",
    position: "Business Analyst - Consultant",
    company: "Excellus BCBS",
    location: "Rochester, NY · On-site",
    startDate: new Date("2013-12-01"),
    endDate: new Date("2014-11-01"),
    description: [
      "Supported cross-functional Agile teams, translating requirements into themes, epics, and user stories.",
      "Evaluated recently launched products, measuring performance against perceived value with actionable recommendations.",
      "Represented the team in program board and stakeholder meetings.",
    ],
    achievements: [
      "Eliminated redundancies and reduced interface complexities through business process optimization.",
      "Fostered stakeholder engagement across virtual and challenging team members, mitigating delivery risks.",
    ],
    skills: ["Agile", "JIRA", "SQL"],
    companyUrl: "https://www.excellusbcbs.com",
  },
];
