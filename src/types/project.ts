export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  github_languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
  features: string[];
  challenges: string;
  solution: string;
  images: string[];
  githubUrl: string;
  showAsLarge: boolean;
};
