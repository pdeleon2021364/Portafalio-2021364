// ============================================================
// DATA · Proyectos
// "image" es opcional: si no la defines, la tarjeta muestra un
// marcador con las iniciales del proyecto. Para usar una imagen,
// colócala en /src/assets/img/projects/ e impórtala arriba, ej:
//
//   import miProyecto from '../assets/img/projects/mi-proyecto.png'
//
// y luego úsala como image: miProyecto
// ============================================================

export const projects = [
  {
    title: 'KinalToys',
    category: 'Aplicación web + Java Desktop',
    description:
      'Sistema de gestión para tienda de juguetes con frontend web (HTML/CSS), backend Java con Hibernate y JPA, login de usuarios, catálogo de juguetes, carrito de compras, facturación y noticias.',
    learned:
      'Arquitectura por capas con Java, Hibernate y JPA. CRUD completo con 8 entidades relacionales. Trabajo en equipo con Git.',
    tags: ['Java 21', 'Hibernate', 'JPA', 'MySQL', 'HTML', 'CSS', 'Maven'],
    image: null,
    link: '',
    repository: 'https://github.com/jrealiquez-2021549/KinalToys-Project',
  },
  {
    title: 'Gestión Bancaria',
    category: 'Arquitectura de microservicios',
    description:
      'Plataforma bancaria modular con frontend en React + Vite, microservicios en Node.js, servicio de autenticación en C# .NET 8, y bases de datos PostgreSQL y MongoDB.',
    learned:
      'Diseño de microservicios con responsabilidades delimitadas, comunicación vía APIs, autenticación con JWT, y orquestación de servicios independientes.',
    tags: ['React', 'Node.js', '.NET 8', 'PostgreSQL', 'MongoDB', 'Docker'],
    image: null,
    link: '',
    repository: 'https://github.com/pdeleon2021364/GestionBancario.git',
  },
  {
    title: 'Agenda de Contactos',
    category: 'API REST',
    description:
      'API RESTful para gestión de contactos personales con operaciones CRUD, validaciones, y persistencia en PostgreSQL. Construida con Spring Boot siguiendo el patrón MVC.',
    learned:
      'Spring Boot, JPA e Hibernate, diseño de APIs REST, manejo de excepciones y validación de datos con Jakarta Validation.',
    tags: ['Spring Boot', 'Java', 'JPA', 'Hibernate', 'PostgreSQL'],
    image: null,
    link: '',
    repository: 'https://github.com/pdeleon2021364/AgendaContactos.git',
  },
  {
    title: 'Gestión de Servicios',
    category: 'API REST con Node.js',
    description:
      'Backend para marketplace de servicios con autenticación JWT, roles (USER y ADMIN), gestión de solicitudes, reseñas, favoritos, reportes, insignias y notificaciones por correo.',
    learned:
      'Arquitectura modular en Node.js/Express, PostgreSQL + MongoDB, autenticación y autorización con JWT y RBAC, documentación con Swagger, y diseño de APIs versionadas.',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'MongoDB', 'Swagger'],
    image: null,
    link: '',
    repository: 'https://github.com/jcoyote-2024037/GestionServicios.git',
  },
  {
    title: 'SIRECO',
    category: 'Aplicación web',
    description:
      'Plataforma web de gestión ambiental y logística para reciclaje y recolección de residuos, con OAuth2/Google, roles de usuario, pagos con Stripe, facturación, rutas de recolección, y calendario de extracción.',
    learned:
      'Spring Boot con MVC, JPA y Security, OAuth2 con Google, Stripe, JWT, Thymeleaf, y Maven para despliegue.',
    tags: ['Java 21', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Thymeleaf', 'MySQL', 'JWT', 'Stripe', 'OAuth2', 'Maven'],
    image: null,
    link: '',
    repository: '',
  },
  {
    title: 'Gestión de Restaurantes',
    category: 'Arquitectura de microservicios',
    description:
      'Sistema completo de gestión de restaurantes con microservicios backend (Node.js/Express), autenticación en .NET, y frontend React + Vite. Cubre menús, pedidos, reservas, delivery, reseñas, reportes y administración de eventos.',
    learned:
      'Arquitectura de microservicios con Node.js y .NET, integración de MongoDB y PostgreSQL, autenticación JWT, Docker, y frontend con React, TailwindCSS y Zustand.',
    tags: ['Node.js', 'Express', 'React', '.NET', 'MongoDB', 'PostgreSQL', 'Docker', 'JWT', 'TailwindCSS'],
    image: null,
    link: '',
    repository: '',
  },
]
