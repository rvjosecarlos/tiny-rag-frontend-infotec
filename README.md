# DocuStudy Sensei — Frontend

DocuStudy Sensei es una aplicación de apoyo al estudio que permite cargar documentos PDF y conversar con su contenido. Este repositorio contiene el frontend web; el procesamiento de documentos y la recuperación de información se realizan mediante un backend independiente.

## Funcionalidades

- Crear espacios de estudio con título, descripción y color.
- Cargar documentos en formato PDF.
- Consultar información del documento mediante un chat.
- Conservar los espacios y el historial de conversación en el almacenamiento local del navegador.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- Zod

## Requisitos

- Node.js y npm.
- Una instancia del backend de DocuStudy disponible.

## Instalación

```bash
npm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto y define la URL base del backend:

```env
VITE_BASE_URL=http://localhost:8000
```

Reemplaza el valor de ejemplo por la dirección donde se encuentre disponible el backend.

## Desarrollo

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación.

## Compilación

```bash
npm run build
```

Para servir localmente la versión compilada:

```bash
npm run preview
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run build` | Comprueba los tipos de TypeScript y genera la compilación de producción. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run preview` | Sirve localmente la compilación de producción. |

## Persistencia

El frontend guarda el nombre del usuario, los espacios de estudio y el historial de chat en el `localStorage` del navegador. Por ello, esa información es local al navegador y al dispositivo utilizados.

## Backend

El frontend se comunica con el backend para enviar documentos PDF a procesamiento y solicitar respuestas a preguntas sobre su contenido. Configura `VITE_BASE_URL` para que apunte a la instancia correspondiente.

## Estado del proyecto

Este repositorio contiene únicamente la aplicación frontend. Consulta el repositorio del backend para conocer su instalación y configuración.
