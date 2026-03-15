export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Nithyasandeepm",
    contibutionDescription:
      "My GitHub profile — home to personal projects and experiments.",
    repoOwner: "Nithyasandeepm",
    link: "https://github.com/Nithyasandeepm",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
