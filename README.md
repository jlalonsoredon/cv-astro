Descripción del Proyecto
Este proyecto es un portfolio personal desarrollado con Astro, aprovechando las ventajas de rendimiento que ofrece este framework moderno para crear una experiencia web ultrarrápida y optimizada.

🚀 Rendimiento con Astro
Astro se destaca por su arquitectura "Zero JavaScript by default", lo que significa que:

Carga instantánea: Las páginas se renderizan como HTML estático, eliminando el JavaScript innecesario
Hidratación selectiva: Solo los componentes interactivos cargan JavaScript cuando es necesario
Optimización automática: Minificación, tree-shaking y code-splitting están integrados
Core Web Vitals excelentes: Tiempos de carga sub-segundo y puntuaciones perfectas en PageSpeed
📡 Integración con WordPress API
El contenido se gestiona a través de la WordPress REST API, proporcionando:

Flexibilidad de contenido:

Posts categorizados (experiencia, formación, tecnologías, aficiones)
Gestión de medios e imágenes optimizada
Estructura de datos consistente con WP
Arquitectura híbrida:

Beneficios de esta arquitectura:

Editor familiar: Los contenidos se gestionan desde el panel de WordPress
Separación de responsabilidades: Frontend (Astro) + Backend (WordPress)
Escalabilidad: El CMS puede crecer independientemente del frontend
SEO optimizado: HTML pre-renderizado con contenido dinámico
🛠 Características Técnicas
Static Site Generation (SSG): Páginas pre-generadas en build time
Gestión de categorías centralizada: Configuración unificada en categories.ts
Componentes reutilizables: PostsLoop, TechnoCard, HtmlCard
Manejo robusto de errores: Fallbacks para fallos de API
TypeScript: Tipado estático para mayor confiabilidad
Tailwind CSS: Diseño responsive y optimizado
El resultado es un portfolio que combina la velocidad de Astro con la flexibilidad de WordPress, ofreciendo tiempos de carga excepcionales sin sacrificar la facilidad de gestión de contenidos.
