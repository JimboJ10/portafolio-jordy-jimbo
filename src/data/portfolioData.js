// Datos centralizados del portafolio
export const personalInfo = {
  name: "Jordy German Jimbo Ortiz",
  shortName: "Jordy Jimbo",
  title: "Desarrollador full-stack junior",
  location: "Huaquillas, El Oro, Ecuador",
  email: "jordyjimbo32@gmail.com",
  phone: "",
  github: "https://github.com/JimboJ10",
  cvFile: "./CV_JordyJimbo.pdf",
  tagline:
    "Estudiante de Ingeniería en Tecnologías de la Información con interés real por construir productos web, APIs y apps móviles bien organizadas.",
  subtitle:
    "Trabajo con Angular, Ionic/Angular, Node.js, Express, PostgreSQL y MongoDB, cuidando estructura, claridad y experiencia de uso.",
};

export const aboutText =
  "Soy estudiante de Ingeniería en Tecnologías de la Información en la Universidad Técnica de Machala, actualmente cursando noveno semestre. Tengo experiencia práctica desarrollando proyectos full-stack con Angular, Ionic/Angular, Node.js, Express, PostgreSQL y MongoDB. Me interesa crear soluciones funcionales, organizadas y escalables mediante APIs REST, arquitectura en capas, autenticación por token y buenas prácticas de desarrollo.";

export const strengths = [
  "Desarrollo full-stack",
  "APIs REST",
  "Arquitectura en capas",
  "Bases de datos relacionales y NoSQL",
  "Aplicaciones web y móviles",
  "Trabajo colaborativo",
];

export const experience = [
  {
    company: "Gobierno Autónomo Descentralizado Municipal de Machala",
    role: "Practicante Preprofesional — Desarrollo Frontend",
    location: "Machala, Ecuador",
    date: "Abril 2025",
    bullets: [
      "Desarrollé junto a un equipo la interfaz web de un sistema de tickets utilizando Angular.",
      "Construí pantallas y componentes frontend para facilitar la gestión visual del sistema.",
      "Colaboré en el análisis de una base de datos existente para incorporar nuevas tablas relacionadas con tickets.",
      "Apoyé en el diseño de relaciones y estructura de tablas en PostgreSQL según los requerimientos del sistema.",
      "Trabajé con requerimientos técnicos entregados por el equipo de ingeniería, fortaleciendo habilidades de comunicación y trabajo colaborativo.",
    ],
  },
];

export const projects = [
  {
    name: "Plataforma E-commerce Web Full-Stack",
    type: "Proyecto personal",
    techs: ["Angular", "Node.js", "Express", "PostgreSQL"],
    github:
      "https://github.com/JimboJ10/WebTiendaFullStack-MindFest",
    description:
      "Plataforma e-commerce web con arquitectura separada en panel administrativo, tienda online y backend. Incluye gestión de productos, clientes, inventario, ventas, proveedores, órdenes de compra, finanzas, reportes, empleados, promociones, catálogo, carrito, pedidos, reseñas, registro, login y recuperación de contraseña.",
    bullets: [
      "Desarrollé módulos administrativos para productos, clientes, inventario, ventas, proveedores y promociones.",
      "Construí funcionalidades de tienda como catálogo, detalle de producto, carrito, pedidos, reseñas y perfil de usuario.",
      "Diseñé APIs REST con Node.js y Express, integrando autenticación JWT, control de acceso, carga de archivos y lógica de negocio.",
      "Utilicé PostgreSQL para el modelado y gestión de datos relacionales.",
    ],
  },
  {
    name: "E-commerce Móvil con Panel Administrativo",
    type: "Proyecto personal",
    techs: ["Ionic/Angular", "Angular", "Node.js", "Express", "MongoDB"],
    github:
      "https://github.com/JimboJ10/AppMovilEcommerceFullStack",
    description:
      "Plataforma de e-commerce compuesta por aplicación móvil para clientes, panel administrativo web y backend REST. Incluye catálogo, búsqueda, detalle de producto, carrito, checkout, direcciones, cupones, promociones, reseñas, subida de imágenes y emails de confirmación.",
    bullets: [
      "Construí la app cliente en Ionic/Angular con flujo de compra, carrito, checkout, direcciones, cupones y reseñas.",
      "Implementé un panel administrativo en Angular para gestionar productos, categorías, variantes, stock, ventas, usuarios y reseñas.",
      "Diseñé backend REST con Node.js, Express y MongoDB.",
      "Integré autenticación por token, subida de imágenes, emails de confirmación y preparación de APK con Capacitor y Android Studio.",
    ],
  },
];

export const skills = {
  "Lenguajes": ["Java", "Python", "JavaScript", "TypeScript"],
  "Frontend": [
    "Angular",
    "Ionic/Angular",
    "HTML",
    "CSS",
    "Responsive Design",
  ],
  "Backend": [
    "Node.js",
    "Express.js",
    "APIs REST",
    "JWT",
    "Middleware",
    "Arquitectura en capas",
  ],
  "Bases de datos": ["PostgreSQL", "MySQL", "MongoDB"],
  "Herramientas": [
    "Git",
    "GitHub",
    "Postman",
    "Android Studio",
    "Capacitor",
    "Visual Studio Code",
  ],
  "Otros conocimientos": [
    "Java Swing",
    "JPA",
    "Fundamentos de Spring Boot",
    "Modelado de bases de datos",
    "Consumo de APIs",
    "Pruebas de servicios",
  ],
};

export const education = [
  {
    institution: "Universidad Técnica de Machala",
    degree: "Ingeniería en Tecnologías de la Información",
    period: "2021 — Actualidad",
    status: "Actualmente cursando noveno semestre",
    location: "Machala, Ecuador",
  },
  {
    institution: "Unidad Educativa Seis de Octubre",
    degree: "Bachillerato",
    period: "",
    status: "Finalizado",
    location: "Huaquillas, Ecuador",
  },
];

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];
