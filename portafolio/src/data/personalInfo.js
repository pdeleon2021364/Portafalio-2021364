// ============================================================
// DATA · Información personal
// Edita estos valores con tu información real.
// El CV debe colocarse en /src/assets/documents/cv.pdf
// ============================================================

export const personalInfo = {
  name: 'Pablo Andrés de León Rashón',
  shortName: 'Pablo de León',
  role: 'Desarrollador Web Frontend / Backend en formación',
  tagline: 'Construyo interfaces claras y sistemas ordenados, de cero a producción.',
  location: 'Guatemala',
  email: 'pablodeleonwxz@gmail.com',
  phone: '+502 4766 8957',
  age: '18 años',
  experience: '1 año practicando desarrollo web',
  education: 'Perito en Computación e Informática',
  availability: 'Disponible para prácticas y proyectos junior',
  summary:
    'Arquitecto y desarrollador full stack: diseño sistemas ordenados, construyo APIs REST, y desarrollo interfaces modernas con React. Enfoque en arquitectura, microservicios y buenas prácticas.',
  about: [
    'No empiezo escribiendo código de inmediato. Primero pienso en la estructura del proyecto: diseño la arquitectura, separo responsabilidades y organizo el código antes de implementar. Uso Feature-Sliced Design en React, versionado en APIs REST (/gestionservicio/v1), separo el panel administrativo del frontend público y analizo monolitos para dividirlos en microservicios. Priorizo el orden antes que la velocidad.',
    'Trabajo tanto en frontend como en backend. En el frontend uso React 19, Vite, Tailwind CSS, Zustand y React Router. En el backend manejo Node.js con Express, Spring Boot y C# con ASP.NET MVC. Diseño y consumo APIs REST completas. Pero no solo programo funcionalidades: analizo el dominio del negocio, identifico microservicios, los agrupo por dominios y decido cuándo usar PostgreSQL o MongoDB según el caso.',
    'Sigo buenas prácticas como JWT para autenticación, RBAC para permisos, Git y GitHub para control de versiones, Docker para contenerización y APIs REST organizadas con separación por capas. Trabajo de forma incremental: primero el panel administrativo, luego el frontend público, y mantengo proyectos en curso mientras agrego funcionalidades. Aprendo investigando documentación oficial de React, React Native y Expo. Aunque no soy un perfil DevOps, manejo Docker, PostgreSQL, MongoDB, Git y GitHub lo suficiente para desplegar y probar aplicaciones completas. Mi enfoque combina investigación, documentación, arquitectura y análisis para entender el porqué de cada decisión técnica.',
  ],
  facts: [
    { label: 'Ubicación', value: 'Guatemala' },
    { label: 'Enfoque', value: 'Arquitectura de software' },
    { label: 'Stack', value: 'React · Node · Spring Boot · C#' },
    { label: 'Experiencia', value: '+1 año en desarrollo web' },
    { label: 'Disponibilidad', value: 'Prácticas y proyectos junior' },
    { label: 'Bases de datos', value: 'PostgreSQL · MongoDB' },
    { label: 'Idiomas', value: 'Español · Inglés técnico' },
  ],
  // Contenido usado por la sección Biografía (Biography.jsx)
  bio: {
    paragraphs: [
      'Apasionado por transformar ideas en aplicaciones funcionales y escalables, trabajo con un enfoque pragmático orientado al detalle y a la calidad del software. Cada desarrollo es una oportunidad para optimizar procesos, aprender nuevas tecnologías y garantizar una experiencia de usuario fluida y bien estructurada.',
      'Mi meta es evolucionar continuamente en el ecosistema Full Stack y desarrollo móvil, aplicando las mejores prácticas para conectar la potencia de la lógica interna con presentaciones visuales atractivas y responsivas.',
    ],
    details: [
      { label: 'Nombre', value: 'Pablo Andrés De León Rashón' },
      { label: 'Edad', value: '18 años' },
      { label: 'Ubicación', value: 'Guatemala' },
      { label: 'Email', value: 'pablodeleonwxz@gmail.com' },
      { label: 'Formación', value: 'Perito Técnico en Computación e Informática' },
      { label: 'Experiencia', value: 'Proyectos académicos y desarrollo Full Stack' },
      { label: 'Disponibilidad', value: 'Disponible para prácticas, proyectos junior y freelance' },
    ],
    traits: [
      {
        id: 'responsable',
        label: 'Responsable',
        tag: 'rasgo:01',
        description: 'Cumplimiento y compromiso en cada proyecto, entregando siempre lo prometido y sosteniendo la calidad bajo presión.',
      },
      {
        id: 'detallista',
        label: 'Detallista',
        tag: 'rasgo:02',
        description: 'Atención meticulosa al detalle técnico y visual: cada interfaz, cada espaciado y cada interacción se revisan con cuidado.',
      },
      {
        id: 'aprendizaje',
        label: 'Aprendizaje constante',
        tag: 'rasgo:03',
        description: 'Crecimiento continuo y curiosidad activa, adaptándome a nuevas tecnologías y formas de resolver problemas sin detenerme.',
      },
    ],
    capabilities: [
      { label: 'Compromiso', level: 95 },
      { label: 'Precisión técnica', level: 92 },
      { label: 'Adaptabilidad', level: 90 },
    ],
  },
  links: {
    github: 'https://github.com/pdeleon2021364',
    linkedin: 'https://www.linkedin.com/in/pablo-deleon-24b0323a6/',
    instagram: 'https://www.instagram.com/andrewxs.v/',
    whatsapp: 'https://wa.me/50247668957',
    email: 'mailto:pablodeleonwxz@gmail.com',
    computrabajo: '',
    cv: '/src/assets/documents/cv.pdf',
  },
}
