# Documentacion del proyecto Macarronero

## Resumen
Este proyecto contiene:
- Un sitio estatico (HTML/CSS) de referencia.
- Un backend en Node.js + Express + MySQL.
- Un frontend en Angular para la experiencia de usuarios.

## Estructura general

### Raiz del repositorio
- ChefJavi.png: Imagen usada en el sitio estatico.
- contacto.html: Pagina estatica de contacto.
- cursos.html: Pagina estatica de cursos.
- Estilos.txt: Notas de paleta, tipografias y estructura.
- index.html: Pagina estatica principal de referencia.
- Logo-Macarronero.jpeg: Logo usado en el sitio estatico.
- macarrokits.html: Pagina estatica de kits.
- styles.css: Estilos del sitio estatico.
- SVG-Icons/: Carpeta de iconos y recursos SVG.

### Backend (macarronero-backend)
- .env: Variables de entorno locales.
- .env.example: Ejemplo de variables de entorno.
- package.json: Scripts y dependencias del backend.
- database/schema.sql: Esquema de tablas.
- database/init.sql: Script completo para crear la BD y tablas.
- src/config.js: Configuracion central (puerto, DB, JWT, CORS).
- src/db.js: Pool de conexiones MySQL.
- src/server.js: Arranque de Express y montaje de rutas.
- src/middleware/auth.js: Middleware de autenticacion/autorizacion.
- src/routes/auth.routes.js: Endpoints de login y registro.
- src/routes/users.routes.js: Endpoints de usuarios.
- src/routes/courses.routes.js: Endpoints de cursos.
- src/routes/kits.routes.js: Endpoints de kits.
- src/routes/enrollments.routes.js: Endpoints de inscripciones.
- src/routes/purchases.routes.js: Endpoints de compras de kits.
- src/utils/jwt.js: Utilidades para firmar/validar JWT.
- src/utils/password.js: Hash y verificacion de contrasenias.

### Frontend Angular (macarronero-frontend)
- angular.json: Configuracion del proyecto Angular.
- package.json: Scripts y dependencias del frontend.
- public/: Recursos estaticos.
- src/index.html: HTML base que carga la app.
- src/main.ts: Bootstrap de Angular.
- src/styles.css: Estilos globales y variables de tema.
- src/app/app.ts: Componente raiz.
- src/app/app.html: Layout principal (header, router, footer).
- src/app/app.css: Estilos del layout principal.
- src/app/app.routes.ts: Rutas de la aplicacion.
- src/app/app.config.ts: Configuracion de providers.
- src/app/app.spec.ts: Pruebas del componente raiz.
- src/app/core/api.config.ts: URL base del backend.
- src/app/core/auth/auth.service.ts: Gestion de sesion y usuario actual.
- src/app/core/auth/auth.guard.ts: Proteccion de rutas.
- src/app/core/auth/auth.interceptor.ts: Inyeccion de token en requests.
- src/app/core/models/*.ts: Interfaces de datos (User, Course, Kit, etc.).
- src/app/core/services/*.ts: Servicios HTTP por entidad.
- src/app/features/home/*: Vista principal (home).
- src/app/features/courses/*: Vista de cursos.
- src/app/features/kits/*: Vista de kits.
- src/app/features/auth/*: Login y registro.
- src/app/features/account/*: Perfil y datos del usuario.
- src/app/features/dashboard/*: Vista de panel general.

## Flujo general
1) El backend expone la API REST (auth, cursos, kits, compras, inscripciones).
2) El frontend consume la API y muestra la informacion en vistas.
3) El sitio estatico sirve como referencia de contenido y estilos.


