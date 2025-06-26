import projects   from './data/projects.json';
import techStack  from './data/techstack.json';
import type { Project, TechCategory, TechType } from './types';

/* ── color maps ───────────────────────── */
const tagColors: Record<TechType, string> = {
  frontend: 'text-green-400',
  backend : 'text-blue-400',
  devops  : 'text-purple-400',
  other   : 'text-gray-300'
};

const badgeColors: Record<TechType, string> = {
  frontend: 'bg-gray-800 text-green-400/90',
  backend : 'bg-gray-800 text-blue-400/90',
  devops  : 'bg-gray-800 text-purple-400/90',
  other   : 'bg-gray-800 text-gray-300'
};

/* ── helpers ───────────────────────────── */
const getColor = (type: TechType) => tagColors[type] ?? 'text-gray-300';

const createProjectCard = (p: Project) => {
  const techChips = p.technologies
    .map(t =>
      `<span class="text-xs px-2 py-1 mr-1.5 mb-1.5 rounded-sm bg-gray-800 ${getColor(t.type)} inline-block">${t.name}</span>`
    )
    .join('');

  return `
  <div class="animate-fade-in border border-gray-600/75 p-4">
    <h3 class="text-lg font-bold mb-2 pb-1 border-b border-gray-600/50 inline-block">${p.title}</h3>
    <p class="text-sm mb-3">${p.description}</p>
    <div class="mb-3 flex flex-wrap">${techChips}</div>
    <div class="flex space-x-3">
      <a href="${p.githubUrl}" target="_blank" rel="noopener"
         class="flex items-center text-xs border border-gray-600 px-3 py-1.5 rounded-sm transition-colors
                text-gray-300 hover:text-gray-100 hover:border-gray-400">
         GitHub
      </a>
      <a href="${p.demoUrl}"  target="_blank" rel="noopener"
         class="flex items-center text-xs border border-green-500 px-3 py-1.5 rounded-sm transition-colors
                text-green-500 hover:bg-green-500/10">
         Demo
      </a>
    </div>
  </div>`;
};

const createTechCard = (c: TechCategory) => {
  const badges = c.technologies
    .map(tech => `<span class="text-xs px-2 py-1 mr-1.5 mb-1.5 rounded-sm ${badgeColors[c.type]} inline-block">${tech}</span>`)
    .join('');

  return `
  <div class="animate-fade-in border border-gray-600/75 p-4 h-full">
    <h3 class="text-base font-semibold mb-2 text-gray-100">${c.title}</h3>
    <div class="flex flex-wrap">${badges}</div>
  </div>`;
};

/* ── render ─────────────────────────────── */
document.getElementById('projects')!.innerHTML =
  (projects as Project[]).map(createProjectCard).join('');

document.getElementById('techstack-container')!.innerHTML =
  (techStack as TechCategory[]).map(createTechCard).join('');

document.getElementById('year')!.textContent = String(new Date().getFullYear());
