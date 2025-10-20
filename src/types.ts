export type TechType = "frontend" | "backend" | "devops" | "other";

export interface Technology {
    name: string;
    type: TechType;
}

export interface Project {
    title: string;
    description: string;
    technologies: Technology[];
    githubUrl: string;
    demoUrl: string;
}

export interface TechCategory {
    title: string;
    technologies: string[];
    type: TechType;
}
