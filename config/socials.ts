import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Nithyasandeepm",
    icon: Icons.gitHub,
    link: "https://github.com/Nithyasandeepm",
  },
  {
    name: "LinkedIn",
    username: "Nithya Raveendran",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/nithya-raveendran-590b0295",
  },
  {
    name: "Gmail",
    username: "nithya.sandeepm",
    icon: Icons.gmail,
    link: "mailto:nithya.sandeepm@gmail.com",
  },
];
