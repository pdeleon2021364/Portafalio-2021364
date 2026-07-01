// ============================================================
// DATA · Habilidades
// Agrupadas por categoría. "level" va de 0 a 100.
// Usa "status" en vez de "level" para algo como "En proceso".
// ============================================================

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Interfaces, estilos y experiencia de usuario.',
    skills: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 75 },
      { name: 'JavaScript', level: 60 },
      { name: 'React', level: 55 },
      { name: 'Tailwind CSS', level: 45 },
    ],
  },
  {
    title: 'Backend',
    description: 'Servicios, APIs y bases de datos.',
    skills: [
      { name: 'Node.js', level: 50 },
      { name: 'Java', level: 65 },
      { name: 'MySQL', level: 70 },
      { name: 'PostgreSQL', level: 40 },
    ],
  },
  {
    title: 'Lenguajes',
    description: 'Lenguajes de programación principales.',
    skills: [
      { name: 'JavaScript', level: 60 },
      { name: 'Java', level: 65 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    title: 'Herramientas',
    description: 'Control de versiones, IDEs y productividad.',
    skills: [
      { name: 'Git', level: 75 },
      { name: 'GitHub', level: 70 },
      { name: 'VS Code', level: 80 },
      { name: 'Figma', level: 30, status: 'En proceso' },
    ],
  },
]
