# Título Principal (H1)

Este es un párrafo de texto normal para probar el renderizado básico. Incluye **texto en negrita**, *texto en cursiva* y ***negrita y cursiva***.

---

## Secciones y Encabezados (H2)

### Subsección Nivel 3 (H3)
#### Subsección Nivel 4 (H4)
##### Subsección Nivel 5 (H5)
###### Subsección Nivel 6 (H6)

---

## Listas

### Lista no ordenada
* Elemento de lista 1
* Elemento de lista 2
  * Subelemento 2.1
  * Subelemento 2.2
* Elemento de lista 3

### Lista ordenada
1. Primer paso
2. Segundo paso
3. Tercer paso
   1. Subpaso A
   2. Subpaso B

---

## Enlaces e Imágenes

[Este es un enlace externo a GitHub](https://github.com)

![Texto alternativo de la imagen](https://picsum.photos/600/300 "Imagen de ejemplo")

---

## Citas (Blockquotes)

> Esta es una cita en bloque.
> Puede abarcar múltiples líneas y contener **formato interno**.
>
> > Cita anidada dentro de otra cita.

---

## Código

Código en línea: usa la función `useState()` o `useEffect()` en React.

Bloque de código multilínea:



## Tablas (GFM)

### Tabla básica

| Nombre    | Edad | Ciudad          |
|-----------|------|-----------------|
| Ana       | 28   | Ciudad de México|
| Luis      | 34   | Guadalajara     |
| Marta     | 22   | Monterrey       |

### Tabla con alineación

| Producto       | Precio | Stock |
|:---------------|:------:|------:|
| Teclado        | $450   | 12    |
| Mouse          | $200   | 34    |
| Monitor 24"    | $3,200 | 5     |

### Tabla con formato dentro de las celdas

| Tecnología | Tipo         | Notas                          |
|------------|--------------|---------------------------------|
| **React**  | Librería     | Usa `JSX` y componentes         |
| *Vite*     | Build tool   | Muy rápido en desarrollo        |
| ~~jQuery~~ | Librería     | Ya casi no se usa en proyectos nuevos |


\`\`\`javascript
import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownViewer({ content }) {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownViewer;
\`\`\`