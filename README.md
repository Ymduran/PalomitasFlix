# PalomitasFlix

<p align="center">
  <strong>Plataforma web para explorar películas y series</strong>
</p>

<p align="center">
  Una experiencia de entretenimiento inspirada en las plataformas de streaming, donde los usuarios pueden descubrir, explorar y consultar contenido audiovisual desde una interfaz intuitiva y moderna.
</p>

## Descripción del proyecto

**PalomitasFlix** es una aplicación web inspirada en plataformas de streaming como Netflix. Su propósito es ofrecer un espacio donde los usuarios puedan explorar películas y series, consultar información sobre diferentes títulos y descubrir contenido mediante categorías y recomendaciones.

El proyecto busca implementar una arquitectura organizada, una interfaz adaptable y una comunicación eficiente entre el frontend, el backend y la base de datos.

### Objetivos

- Desarrollar una interfaz moderna e intuitiva.
- Implementar un catálogo de películas y series.
- Organizar el contenido mediante categorías y géneros.
- Gestionar la información mediante una base de datos relacional.
- Implementar una API para la comunicación entre los diferentes componentes.
- Documentar los endpoints y funcionalidades de la API.

---

## Funcionalidades

### Implementadas

- [ ] Página principal.
- [ ] Sección de contenido destacado.
- [ ] Catálogo visual de series.
- [ ] Tarjetas de contenido audiovisual.
- [ ] Catálogo de películas.
- [ ] Filtrado por categorías y géneros.
- [ ] Búsqueda de contenido.
- [ ] Página de detalles de películas y series.
- [ ] Sistema de autenticación.
- [ ] Gestión de usuarios.
- [ ] Lista de favoritos.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React | Desarrollo de interfaces y componentes. |
| HTML5 | Estructura de la aplicación. |
| CSS3 | Diseño y estilos visuales. |
| PostgreSQL | Gestión y almacenamiento de datos. |
| Swagger / OpenAPI | Documentación y pruebas de endpoints de la API. |

### Herramientas de desarrollo

- Git y GitHub para el control de versiones.
- Visual Studio Code como entorno de desarrollo.

---

## Estructura del proyecto

La siguiente es una estructura propuesta para mantener el código organizado y facilitar su mantenimiento.

```text
PalomitasFlix/
│
├── palomitasflix-frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── documentation/
│   │   │   ├── pagina/
│   │   │   ├── admin/
│   │   │   ├── auth/
│   │   │   └── common/
│   │   │
│   │   ├── pages/
│   │   │   ├── public/
│   │   │   ├── auth/
│   │   │   ├── admin/
│   │   │
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── palomitasflix-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middlewares/
│   │   ├── config/
│   │   └── app.js
│   │
│   └── package.json
├── .gitignore
└── README.md
```

---

## Base de datos

El proyecto utiliza **PostgreSQL** como sistema de gestión de bases de datos relacional.

Se propone organizar la información mediante entidades relacionadas que permitan administrar el contenido audiovisual y los usuarios.

### Entidades principales

| Entidad | Descripción |
|---|---|
| Users | Información de los usuarios registrados. |
| Movies | Información de las películas. |
| Series | Información de las series. |
| Genres | Clasificación por géneros. |
| Episodes | Episodios pertenecientes a cada serie. |
| Favorites | Contenido guardado por los usuarios. |
| Categories | Clasificación del contenido. |

---

## API REST

La comunicación entre el frontend y el backend se realizará mediante una API REST.

La API permitirá consultar, registrar, actualizar y eliminar información relacionada con los usuarios y el contenido audiovisual.

### Documentación

La documentación de los endpoints se realizará mediante **Swagger / OpenAPI**, permitiendo visualizar las rutas disponibles, parámetros, respuestas y códigos HTTP.

**Acceso a la documentación:**

```text
http://localhost:8000/api/documentation
```

### Módulos de la API

- Usuarios.
- Películas.
- Series.
- Géneros.
- Categorías.
- Episodios.
- Favoritos.

---

## Instalación y configuración

### Requisitos previos

- Node.js y npm.
- PostgreSQL.
- Git.
- Entorno de ejecución del backend correspondiente.

### 1. Clonar el repositorio

```bash
git clone https://github.com/USUARIO/PalomitasFlix.git

cd PalomitasFlix
```

### 2. Configurar el frontend

```bash
cd palomitasflix-frontend

npm install
```

### 3. Configurar las variables de entorno

Crear un archivo `.env` en el directorio correspondiente:

```env
VITE_API_URL=http://localhost:8000/api
```

### 4. Ejecutar el proyecto

```bash
npm run dev
```

<p align="center">
  Desarrollado por: <strong>Equipo</strong>
</p>

<p align="center">
  <strong>PalomitasFlix © 2026</strong>
</p>