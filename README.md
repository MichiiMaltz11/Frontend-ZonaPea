# **Descripción del proyecto**

## **Descripción y recursos manejados**

**Búho Eats** es una plataforma web diseñada para centralizar la información de todos los locales gastronómicos ubicados en la Zona Peatonal de la Universidad Centroamericana José Simeón Cañas (UCA). Ofrece una experiencia personalizada y adaptada a diferentes tipos de usuarios.

El usuario puede registrarse e iniciar sesión, siendo capaz de modificar su nombre, foto de perfil y contraseña. Además, puede crear y eliminar sus propias reseñas, agregar locales a favoritos y eliminarlos cuando lo desee.
Los visitantes que no posean cuenta solo podrán buscar locales, registrarse o iniciar sesión.

El **administrador** dispone de privilegios avanzados dentro del sistema; además de las funciones básicas, puede bloquear usuarios y eliminar reseñas inadecuadas de la plataforma.

El **gerente de cada restaurante** combina las funciones de un usuario con permisos adicionales para el manejo del local. Puede actualizar los datos de su restaurante, editar el menú, cambiar la fotografía del establecimiento y responder a las reseñas de los clientes.

---

## **Objetivo de la aplicación**

Este proyecto busca facilitar a los usuarios el acceso a información detallada sobre los locales de comida ubicados en la zona peatonal de la Universidad Centroamericana José Simeón Cañas (UCA). Además, promueve la participación activa de los clientes mediante la calificación de los establecimientos disponibles en la plataforma.

---

## **Tecnologías utilizadas**

* **React**
* **Tailwind CSS**
* **Spring Boot**
* **Java**
* **TypeScript**

---

🔗 **Enlace a la carpeta de documentación:**
[https://ucaedusv-my.sharepoint.com/:f:/g/personal/00161220_uca_edu_sv/IgC6DVy9OfxeQJMwb2yeJQ2EARjXqjULjJKVtGqtN3CPxXo?e=nuZvIy](https://ucaedusv-my.sharepoint.com/:f:/g/personal/00161220_uca_edu_sv/IgC6DVy9OfxeQJMwb2yeJQ2EARjXqjULjJKVtGqtN3CPxXo?e=nuZvIy)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


