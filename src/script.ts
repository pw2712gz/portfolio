type TechType = "frontend" | "backend" | "devops" | "other";

interface Technology {
    name: string;
    type: TechType;
}

interface Project {
    title: string;
    description: string;
    technologies: Technology[];
    githubUrl: string;
    demoUrl: string;
}

interface TechCategory {
    title: string;
    technologies: string[];
    type: TechType;
}

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "Built a full-stack e-commerce platform using React, Node.js, and PostgresSQL.",
        technologies: [
            {name: "React", type: "frontend"},
            {name: "Node.js", type: "backend"},
            {name: "PostgresSQL", type: "backend"},
            {name: "Stripe", type: "other"},
        ],
        githubUrl: "https://github.com/yourusername/ecommerce-platform",
        demoUrl: "https://ecommerce.example.com",
    },
    {
        title: "Cloud Infrastructure Monitor",
        description:
            "Cloud monitoring tool that tracks usage, costs, and performance metrics.",
        technologies: [
            {name: "TypeScript", type: "frontend"},
            {name: "AWS", type: "devops"},
            {name: "Terraform", type: "devops"},
            {name: "Grafana", type: "other"},
        ],
        githubUrl: "https://github.com/yourusername/cloud-monitor",
        demoUrl: "https://cloudmonitor.example.com",
    },
    {
        title: "AI Task Manager",
        description:
            "NLP-based task manager that categorizes and prioritizes tasks automatically.",
        technologies: [
            {name: "Python", type: "backend"},
            {name: "TensorFlow", type: "backend"},
            {name: "FastAPI", type: "backend"},
            {name: "React", type: "frontend"},
        ],
        githubUrl: "https://github.com/yourusername/ai-task-manager",
        demoUrl: "https://aitasks.example.com",
    },
    {
        title: "Collaborative Code Editor",
        description:
            "Real-time collaborative editor with version control and live sync.",
        technologies: [
            {name: "React", type: "frontend"},
            {name: "WebSocket", type: "backend"},
            {name: "Monaco Editor", type: "frontend"},
            {name: "Docker", type: "devops"},
        ],
        githubUrl: "https://github.com/yourusername/code-editor",
        demoUrl: "https://editor.example.com",
    },
    {
        title: "Real-time Analytics Dashboard",
        description:
            "Dashboard for real-time data stream visualization and reporting.",
        technologies: [
            {name: "React", type: "frontend"},
            {name: "D3.js", type: "frontend"},
            {name: "WebSocket", type: "backend"},
            {name: "Redis", type: "backend"},
        ],
        githubUrl: "https://github.com/yourusername/analytics-dashboard",
        demoUrl: "https://analytics.example.com",
    },
    {
        title: "Smart Home Automation Hub",
        description:
            "IoT platform for managing smart home devices and automation routines.",
        technologies: [
            {name: "Node.js", type: "backend"},
            {name: "MQTT", type: "backend"},
            {name: "GraphQL", type: "backend"},
            {name: "React Native", type: "frontend"},
        ],
        githubUrl: "https://github.com/yourusername/smart-home-hub",
        demoUrl: "https://smarthome.example.com",
    },
];

const techStack: TechCategory[] = [
    {
        title: "Frontend",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        type: "frontend",
    },
    {
        title: "Backend",
        technologies: ["Node.js", "Python", "PostgresSQL", "Next.js", "Redis"],
        type: "backend",
    },
    {
        title: "DevOps",
        technologies: ["Docker", "AWS", "CI/CD", "Kubernetes"],
        type: "devops",
    },
    {
        title: "Tools",
        technologies: ["Git", "VS Code", "Postman", "Figma"],
        type: "other",
    },
];

const tagColors: Record<TechType, string> = {
    frontend: "text-green-400",
    backend: "text-blue-400",
    devops: "text-purple-400",
    other: "text-gray-300",
};

const badgeColors: Record<TechType, string> = {
    frontend: "bg-gray-800 text-green-400/90",
    backend: "bg-gray-800 text-blue-400/90",
    devops: "bg-gray-800 text-purple-400/90",
    other: "bg-gray-800 text-gray-300",
};

function getColor(type: TechType): string {
    return tagColors[type] || "text-gray-300";
}

function createProjectCard(project: Project): string {
    const techs = project.technologies
        .map(
            (t) =>
                `<span class="text-xs px-2 py-1 mr-1.5 mb-1.5 rounded-sm bg-gray-800 ${getColor(
                    t.type
                )} inline-block">${t.name}</span>`
        )
        .join("");

    return `
    <div class="animate-fade-in border border-gray-600/75 p-4">
      <h3 class="text-lg font-bold mb-2 pb-1 border-b border-gray-600/50 inline-block">${project.title}</h3>
      <p class="text-sm mb-3">${project.description}</p>
      <div class="mb-3 flex flex-wrap">${techs}</div>
      <div class="flex space-x-3">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"
           class="flex items-center text-xs border border-gray-600 px-3 py-1.5 rounded-sm 
           transition-colors duration-200 text-gray-300 hover:text-gray-100 hover:border-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 
            1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 
            1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
          GitHub
        </a>
        <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer"
           class="flex items-center text-xs border px-3 py-1.5 rounded-sm transition-colors 
           duration-200 border-green-500 text-green-500 hover:bg-green-500/10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h6v6"/>
            <path d="M10 14 21 3"/>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>
          Demo
        </a>
      </div>
    </div>
  `;
}

function createTechCard(category: TechCategory): string {
    const badges = category.technologies
        .map(
            (tech) =>
                `<span class="text-xs px-2 py-1 mr-1.5 mb-1.5 rounded-sm 
${badgeColors[category.type]} inline-block">${tech}</span>`
        )
        .join("");

    return `
    <div class="animate-fade-in border border-gray-600/75 p-4 transition-colors duration-200 h-full">
      <h3 class="text-base font-semibold mb-2 text-gray-100">${category.title}</h3>
      <div class="flex flex-wrap">${badges}</div>
    </div>
  `;
}

document.getElementById("projects")!.innerHTML = projects
    .map(createProjectCard)
    .join("");
document.getElementById("techstack-container")!.innerHTML = techStack
    .map(createTechCard)
    .join("");
document.getElementById("year")!.textContent = new Date()
    .getFullYear()
    .toString();


/*
* {
    title: "Full Stack JWT Auth Starter",
    description:
        "Production-ready authentication boilerplate built with Spring Boot 3 and Angular 19. Includes secure JWT auth, refresh tokens, email flows, and AWS deployment.",
    technologies: [
        { name: "Spring Boot", type: "backend" },
        { name: "Angular", type: "frontend" },
        { name: "Tailwind CSS", type: "frontend" },
        { name: "Docker", type: "devops" },
        { name: "MySQL", type: "backend" },
        { name: "Resend", type: "other" },
        { name: "AWS App Runner", type: "devops" },
        { name: "CloudFront", type: "devops" },
    ],
    githubUrl: "https://github.com/pw2712gz/auth-starter",
    demoUrl: "https://auth.ayubyusuf.dev",
}
* */