# 🚀 Roadmap Completo para Aprender Node.js — De Junior a Senior

## 📌 Descripción

Esta guía tiene como objetivo aprender Node.js desde cero hasta un nivel avanzado, entendiendo no solo cómo funciona el código, sino también la arquitectura, las buenas prácticas, el manejo profesional de errores y la construcción de APIs robustas.

El roadmap está basado en:

* JavaScript moderno
* Backend profesional
* APIs REST
* PostgreSQL
* Seguridad
* Arquitectura escalable
* Debugging y testing
* Buenas prácticas
* Estructura profesional de proyectos

Además:

* Incluye ejercicios
* Explicación de sintaxis
* Documentación profesional
* Separación de responsabilidades
* Validaciones reales
* Conexión frontend/backend
* Desarrollo fullstack

---

# 🧠 Requisitos Previos 

Antes de comenzar Node.js, tener conocimiento de:

## JavaScript Base

* Variables
* Funciones
* Arrays
* Objetos
* DOM
* Eventos
* Manipulación HTML/CSS
* localStorage
* forEach / filter / map

## JavaScript Intermedio

* try/catch
* throw new Error
* callbacks
* promesas
* async/await
* fetch
* axios
* temporizadores
* validaciones
* render dinámico
* CRUD frontend

## Backend Inicial

* Express
* PostgreSQL
* CRUD
* rutas
* controllers
* req.body
* req.params
* APIs REST

---

# 🔥 ¿Qué es Node.js?

Node.js es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador.

Gracias a Node.js se puede:

* Crear servidores
* Crear APIs REST
* Automatizar tareas
* Conectar bases de datos
* Manejar sockets
* Construir aplicaciones backend completas

---

# 🔥 Frameworks Más Usados con Node.js

| Framework | Uso                                     |
| --------- | --------------------------------------- |
| Express   | APIs REST y backend tradicional         |
| NestJS    | Arquitectura empresarial con TypeScript |
| Fastify   | Alto rendimiento                        |
| Koa       | Minimalista                             |
| Hapi      | Seguridad y configuraciones avanzadas   |

## ✅ Framework Recomendado para Empezar

### Express.js

Porque:

* Es el más usado
* Tiene mucha documentación
* Fácil de aprender
* Gran comunidad
* Excelente para entender backend desde cero

---

# 🥇 PARTE 1 — Fundamentos del Backend

---

# 1. Instalación y Configuración del Entorno

## 🎯 Objetivo

Aprender a configurar un entorno backend profesional.

## 📚 Temas

* Node.js
* pnpm
* package.json
* dependencias
* scripts
* nodemon
* ESModules

## ⚙️ Instalación

```bash
pnpm init
```

```bash
pnpm add express pg cors dotenv
```

```bash
pnpm add -D nodemon
```

## 📄 package.json

```json
"scripts": {
   "dev": "nodemon server.js"
}
```

## 🧠 Conceptos Importantes

* Dependencias
* Dependencias de desarrollo
* Scripts
* import/export
* ESModules
* package.json

---

# 2. Conexión con PostgreSQL

## 🎯 Objetivo

Conectar Node.js con PostgreSQL profesionalmente.

## 📂 Estructura

```txt
src/
 ├── config/
 │    └── db.js
 ├── .env
 └── server.js
```

## 📚 Temas

* Pool
* Variables de entorno
* dotenv


# 3. Arquitectura Backend Inicial

## 🎯 Objetivo

Separar responsabilidades correctamente.

## 📂 Estructura

```txt
src/
 ├── routes/
 ├── controllers/
 ├── config/
 ├── models/
 ├── app.js
 └── server.js
```

## 📚 Temas

* Express
* app.use
* middleware
* rutas
* controllers
* JSON
* status HTTP

## 🧠 Conceptos Importantes

* Diferencia entre Node.js y Express
* req.body
* req.params
* res.json
* express.json()
* cors()
* Arquitectura REST

---

# 4. CRUD Profesional

## 🎯 Objetivo

Crear APIs REST completas.

## 🌐 Métodos HTTP

| Método | Acción     |
| ------ | ---------- |
| GET    | Obtener    |
| POST   | Crear      |
| PUT    | Actualizar |
| DELETE | Eliminar   |

## 📚 Práctica

* CRUD usuarios
* CRUD productos
* Relaciones SQL

## 🖥️ Frontend

* fetch
* axios
* render dinámico

## 🧠 Conceptos Importantes

* REST API
* JSON
* asincronía
* status HTTP
* flujo frontend/backend

---

# 5. Validaciones Profesionales

## 🎯 Objetivo

Validar datos correctamente.

## 📚 Temas

* Validaciones frontend
* Validaciones backend
* Sanitización
* Manejo de errores

## 📦 Librerías Futuras

* zod
* joi
* express-validator

## 🧠 Conceptos Importantes

* Nunca confiar en frontend
* Validación doble
* Errores HTTP
* Seguridad de datos

---

# 🥈 PARTE 2 — Middlewares y Arquitectura

---

# 6. Middlewares

## 🎯 Objetivo

Entender el flujo interno de Express.

## 📚 Temas

* Middlewares personalizados
* next()
* logs
* auth
* permisos

## 🧪 Ejercicios

* Middleware logger
* Middleware auth
* Middleware admin

---

# 7. Manejo Global de Errores

## 🎯 Objetivo

Centralizar errores.

## 📚 Temas

* try/catch global
* errores personalizados
* status HTTP
* manejo centralizado

## 🧠 Conceptos Importantes

* Error middleware
* errores operacionales
* debugging backend

---

# 8. Arquitectura Profesional

## 🎯 Objetivo

Escalar aplicaciones.

## 📂 Nueva Estructura

```txt
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── middlewares/
 ├── validators/
 ├── utils/
 ├── config/
 └── models/
```

## 🧠 Conceptos Importantes

* Separación de responsabilidades
* Lógica desacoplada
* Reutilización
* Código escalable

---

# 🥉 PARTE 3 — Autenticación y Seguridad

---

# 9. Hash de Contraseñas

## 📦 bcrypt

## 📚 Temas

* Hash
* Salt
* Comparación de passwords

## 🧠 Conceptos Importantes

* Nunca guardar passwords reales
* Seguridad backend
* Protección de usuarios

---

# 10. JWT (JSON Web Token)

## 🎯 Objetivo

Implementar autenticación moderna.

## 📚 Temas

* Tokens
* Login/Register
* Autorización
* Expiración

## 🧠 Conceptos Importantes

* Access token
* Refresh token
* Bearer token
* Middleware JWT

---

# 11. Roles y Permisos

## 📚 Temas

* Admin
* Usuario
* Empleado

## 🧪 Ejercicios

* Rutas protegidas
* Permisos dinámicos
* Roles personalizados

---

# 🏆 PARTE 4 — Backend Avanzado

---

# 12. Relaciones SQL

## 📚 Temas

* Foreign Keys
* Joins
* Relaciones 1:N
* Relaciones N:M

## 🧪 Ejercicios

* Usuarios y pedidos
* Productos y categorías

---

# 13. Subida de Archivos

## 📦 Librerías

* multer

## 📚 Temas

* Imágenes
* PDFs
* Almacenamiento

---

# 14. WebSockets

## 📦 Librerías

* socket.io

## 📚 Temas

* Chat realtime
* Notificaciones
* Comunicación en tiempo real

---

# 15. Variables de Entorno Avanzadas

## 📚 Temas

* Producción
* Seguridad
* Configuración dinámica

---

# 🧪 PARTE 5 — Debugging y Testing

---

# 16. Debugging Profesional

## 📚 Temas

* console.log inteligente
* breakpoints
* DevTools Node
* debugging VSCode

## 🧠 Conceptos Importantes

* Stack trace
* Runtime errors
* Tracing
* Logs útiles

---

# 17. Testing

## 📦 Librerías

* Jest
* Supertest

## 📚 Temas

* Unit testing
* Integration testing
* Testing APIs

---

# 🚀 PARTE 6 — Deploy y Producción

---

# 18. Deploy Backend

## 📚 Temas

* Railway
* Render
* VPS
* PM2
* Nginx

---

# 19. Docker

## 📚 Temas

* Contenedores
* docker compose
* PostgreSQL + backend

---

# 20. CI/CD

## 📚 Temas

* GitHub Actions
* Automatización
* Pipelines

---


# 🌐 Códigos de Estado HTTP (HTTP Status Codes)

## 📌 ¿Qué son los códigos HTTP?

Los códigos HTTP son respuestas que el servidor devuelve al frontend para indicar:

* Si la petición fue correcta
* Si hubo un error
* Qué tipo de error ocurrió
* Cómo debe reaccionar el frontend

Ejemplo del flujo:

```txt
Frontend → petición HTTP → Backend → respuesta + status HTTP
```

---

# 🟢 200 — OK

## ✅ Significado

La petición se ejecutó correctamente.

## 📌 Cuándo se utiliza

* Obtener datos correctamente
* Actualizar datos correctamente
* Eliminar datos correctamente
* Respuestas exitosas en general

## 🧪 Ejemplo

```js
res.status(200).json({
   mensaje: "Usuarios obtenidos correctamente"
});
```

---

# 🟢 201 — Created

## ✅ Significado

El recurso fue creado correctamente.

## 📌 Cuándo se utiliza

* Crear usuarios
* Registrar productos
* Insertar datos nuevos

## 🧪 Ejemplo

```js
res.status(201).json(usuarioCreado);
```

---

# 🟡 400 — Bad Request

## ⚠️ Significado

El cliente envió datos inválidos o incompletos.

## 📌 Cuándo se utiliza

* Campos vacíos
* Validaciones incorrectas
* Datos inválidos
* Formato incorrecto

## 🧪 Ejemplo

```js
if (!email) {
   return res.status(400).json({
      mensaje: "El email es obligatorio"
   });
}
```

---

# 🟡 401 — Unauthorized

## 🔐 Significado

El usuario no está autenticado.

## 📌 Cuándo se utiliza

* Token inexistente
* JWT inválido
* Usuario sin login

## 🧪 Ejemplo

```js
if (!token) {
   return res.status(401).json({
      mensaje: "Token requerido"
   });
}
```

---

# 🟡 403 — Forbidden

## 🚫 Significado

El usuario está autenticado pero no tiene permisos.

## 📌 Cuándo se utiliza

* Usuario sin permisos admin
* Rutas protegidas
* Acceso restringido

## 🧪 Ejemplo

```js
if (usuario.rol !== "admin") {
   return res.status(403).json({
      mensaje: "Acceso denegado"
   });
}
```

---

# 🔴 404 — Not Found

## ❌ Significado

El recurso solicitado no existe.

## 📌 Cuándo se utiliza

* Usuario no encontrado
* Producto inexistente
* Ruta inexistente
* ID inválido

## 🧪 Ejemplo

```js
if (usuario.rows.length === 0) {
   return res.status(404).json({
      mensaje: "Usuario no encontrado"
   });
}
```

---

# 🔴 409 — Conflict

## ⚠️ Significado

Existe un conflicto con los datos.

## 📌 Cuándo se utiliza

* Email repetido
* Usuario duplicado
* Datos únicos ya registrados

## 🧪 Ejemplo

```js
if (emailExiste) {
   return res.status(409).json({
      mensaje: "El email ya existe"
   });
}
```

---

# 🔴 500 — Internal Server Error

## 💀 Significado

Ocurrió un error interno en el servidor.

## 📌 Cuándo se utiliza

* Error en PostgreSQL
* Error inesperado
* Fallo interno backend
* Problemas del servidor

## 🧪 Ejemplo

```js
catch(error) {
   return res.status(500).json({
      mensaje: "Error interno del servidor"
   });
}
```

---

# 🧠 Diferencia Entre 400 y 500

## 400

👉 El cliente envió algo incorrecto.

Ejemplo:

* Campos vacíos
* Edad inválida
* Email incorrecto

---

## 500

👉 El problema ocurrió en el backend.

Ejemplo:

* PostgreSQL apagado
* Error de código
* Fallo interno del servidor

---

# 🚀 Códigos Más Utilizados en Backend

| Código | Significado            |
| ------ | ---------------------- |
| 200    | Todo correcto          |
| 201    | Recurso creado         |
| 400    | Datos inválidos        |
| 401    | No autenticado         |
| 403    | Sin permisos           |
| 404    | Recurso no encontrado  |
| 409    | Conflicto de datos     |
| 500    | Error interno servidor |

---

# 🧠 Ejemplo Profesional Completo

```js
try {

   const result = await pool.query(
      "SELECT * FROM usuarios WHERE id = $1",
      [id]
   );

   if(result.rows.length === 0) {

      return res.status(404).json({
         mensaje: "Usuario no encontrado"
      });

   }

   res.status(200).json(result.rows[0]);

} catch(error) {

   res.status(500).json({
      mensaje: "Error interno del servidor"
   });

}
```


# 🔥 Consejos Importantes

## ✅ No memorices

Entiende el flujo completo.

---

## ✅ Practica CRUD muchas veces

Porque ahí se aprende:

* async/await
* SQL
* errores
* arquitectura

---

## ✅ Aprende debugging

Los desarrolladores senior depuran más de lo que programan.

---

## ✅ Lee los errores

Nunca ignores:

* Stack traces
* Status HTTP
* Logs

---

## ✅ Construye proyectos reales

Ideas:

* Sistema POS
* Auth completo
* Chat realtime
* Ecommerce
* Reservas
* API cementerio

---

# 🧠 Meta Final

Al terminar este roadmap deberías poder:

✅ Crear APIs REST profesionales
✅ Conectar frontend/backend
✅ Manejar PostgreSQL
✅ Implementar autenticación
✅ Proteger rutas
✅ Manejar errores correctamente
✅ Desplegar proyectos reales
✅ Entender arquitectura backend moderna
✅ T
