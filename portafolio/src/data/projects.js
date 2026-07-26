import kinal1 from '../sections/Projects/imagesprojects/LoginKinalTOysPAGINA1.png'
import kinal2 from '../sections/Projects/imagesprojects/DasboardAdminPAGINA2.png'
import kinal3 from '../sections/Projects/imagesprojects/dasboard3PAGINA3.png'
import kinal4 from '../sections/Projects/imagesprojects/dashboardPAGINA4.png'
import kinal5 from '../sections/Projects/imagesprojects/DASBORADPAGINA5.png'

import bancoLogin from '../sections/Projects/imagesprojects/LoginBancoFoto1.png'
import bancoDashboard from '../sections/Projects/imagesprojects/DashBoardFtoo4.png'
import bancoProductos from '../sections/Projects/imagesprojects/ProductosFiancierosFtoo3.png'
import bancoPerfil from '../sections/Projects/imagesprojects/PerfilFtoo2.png'

import sireco1 from '../sections/Projects/imagesprojects/SirecoFOTO1.png'
import sireco2 from '../sections/Projects/imagesprojects/SirecoFOTO2.png'
import sireco3 from '../sections/Projects/imagesprojects/SIRECOFOTO3.png'
import sireco4 from '../sections/Projects/imagesprojects/SIRECOFOTO4.png'

import restauranteLogin from '../sections/Projects/imagesprojects/loginRestauranteFtoo1.jpg'
import restauranteDashboard from '../sections/Projects/imagesprojects/DashboradRestuarnateFtoo2.png'
import restauranteFood from '../sections/Projects/imagesprojects/RestaurnteFoto3.png'
import restaurantePerfil from '../sections/Projects/imagesprojects/PerfilFtoo4.png'

import serviciosLogin from '../sections/Projects/imagesprojects/login_16x9.png'
import serviciosDashboard from '../sections/Projects/imagesprojects/dashboard_16x9.png'
import serviciosMapa from '../sections/Projects/imagesprojects/mapa_16x9.png'

export const projects = [
  {
    title: 'KinalToys',
    category: 'Aplicación web + Java Desktop',
    description:
      'Aplicación web y de escritorio para la gestión integral de una tienda de juguetes. Permite a los clientes explorar un catálogo de productos, agregar artículos a un carrito de compras y realizar facturación, mientras que los administradores pueden administrar el inventario, usuarios y publicar noticias. Desarrollado con Java, Hibernate, JPA, MySQL, HTML y CSS.',
    learned:
      'Arquitectura por capas con Java, Hibernate y JPA. CRUD completo con 8 entidades relacionales. Trabajo en equipo con Git.',
    tags: ['Java 21', 'Hibernate', 'JPA', 'MySQL', 'HTML', 'CSS', 'Maven'],
    images: [kinal1, kinal2, kinal3, kinal4, kinal5],
    link: '',
    repository: 'https://github.com/jrealiquez-2021549/KinalToys-Project.git',
  },
  {
    title: 'Gestión de Servicios',
    category: 'API REST con Node.js',
    description:
      'Backend para un marketplace de servicios donde los usuarios pueden publicar, buscar y contratar distintos servicios. Incluye sistema de reseñas, favoritos, reportes, notificaciones por correo y un sistema de insignias para los mejores proveedores. Desarrollado con Node.js, Express, JWT para autenticación, PostgreSQL, MongoDB y documentado con Swagger.',
    learned:
      'Arquitectura modular en Node.js/Express, PostgreSQL + MongoDB, autenticación y autorización con JWT y RBAC, documentación con Swagger, y diseño de APIs versionadas.',
    tags: ['Node.js', 'Express', 'JWT', 'PostgreSQL', 'MongoDB', 'Swagger'],
    images: [serviciosLogin, serviciosDashboard, serviciosMapa],
    link: '',
    repository: 'https://github.com/jcoyote-2024037/GestionServicios.git',
  },
  {
    title: 'Gestión Bancaria',
    category: 'Arquitectura de microservicios',
    description:
      'Plataforma de gestión bancaria diseñada para facilitar la administración de cuentas, transacciones y productos financieros de manera segura. El sistema permite a los usuarios realizar operaciones bancarias y consultar su información, mientras que los administradores pueden gestionar clientes, cuentas y movimientos. Para garantizar la seguridad y el rendimiento, fue desarrollado con React, Node.js, .NET 8, PostgreSQL, MongoDB y Docker.',
    learned:
      'Diseño de microservicios con responsabilidades delimitadas, comunicación vía APIs, autenticación con JWT, y orquestación de servicios independientes.',
    tags: ['React', 'Node.js', '.NET 8', 'PostgreSQL', 'MongoDB', 'Docker'],
    images: [bancoLogin, bancoDashboard, bancoProductos, bancoPerfil],
    link: 'https://gestion-bancario.vercel.app/',
    repository: 'https://github.com/pdeleon2021364/GestionBancario.git',
  },
  {
    title: 'SIRECO',
    category: 'Aplicación web',
    description:
      'Plataforma web enfocada en la gestión ambiental del reciclaje y la recolección de residuos. Permite a los usuarios agendar extracciones, seguir rutas de recolección, realizar pagos y acceder a su facturación. Desarrollada con Java, Spring Boot, Thymeleaf, MySQL, autenticación con Google y pagos integrados con Stripe.',
    learned:
      'Spring Boot con MVC, JPA y Security, OAuth2 con Google, Stripe, JWT, Thymeleaf, y Maven para despliegue.',
    tags: ['Java 21', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Thymeleaf', 'MySQL', 'JWT', 'Stripe', 'OAuth2', 'Maven'],
    images: [sireco1, sireco2, sireco3, sireco4],
    link: '',
    repository: 'https://github.com/eorellana-2022149/SIRECO.git',
  },
  {
    title: 'Gestión de Restaurantes',
    category: 'Arquitectura de microservicios',
    description:
      'Sistema completo para la administración de restaurantes que cubre desde el menú y los pedidos hasta las reservas, delivery, reseñas de clientes y organización de eventos. Los clientes pueden hacer pedidos y reservaciones, mientras que los administradores controlan todo el negocio desde un panel. Fue desarrollado con Node.js, Express, React, .NET, MongoDB, PostgreSQL y Docker.',
    learned:
      'Arquitectura de microservicios con Node.js y .NET, integración de MongoDB y PostgreSQL, autenticación JWT, Docker, y frontend con React, TailwindCSS y Zustand.',
    tags: ['Node.js', 'Express', 'React', '.NET', 'MongoDB', 'PostgreSQL', 'Docker', 'JWT', 'TailwindCSS'],
    images: [restauranteLogin, restauranteDashboard, restauranteFood, restaurantePerfil],
    link: 'https://desplieguerestaurante.vercel.app/',
    repository: '',
  },
]
