# 🧪 **Información General del Plan**

## 🎯 Objetivo
Verificar que el módulo de delimitación y visualización del mapa de establecimientos cumpla con los requisitos funcionales definidos en cada historia de usuario, asegurando que la interacción del usuario y el funcionamiento del mapa sean correctos antes de su integración final.


## 🗺️ Alcance

Este plan abarca pruebas funcionales para las 6 historias de usuario asociadas a la Épica 4:
Estudiar componente, investigación, refactorización, añadir marcador, integración del mapa y pruebas funcionales.

## 🚀 Estrategia de Pruebas

| Tipo de Prueba             | Descripción                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| **Pruebas Funcionales**    | Validación de requisitos definidos en criterios de aceptación.      |
| **Pruebas de Integración** | Verificar comunicación del mapa con backend y componentes externos. |
| **Niveles de Prueba**      | Unitarias, Integración, Sistema y Aceptación.                       |

---
## Casos de Prueba por Historia de Usuario

## 🧩 **Épica 1 – Conexión entre Front-end y Back-end**

## 🔗 **H1 – Conexión inicial**

### ✔ **CP-001: Verificar comunicación básica entre frontend y backend**

**Tipo:** Integración
**Prioridad:** 🔴 Alta

### **Precondiciones**

* El backend debe estar ejecutándose correctamente (puerto configurado).
* El frontend debe tener configurada la URL base del backend.
* Deben existir endpoints disponibles para pruebas.
* Conexión a internet o red local estable.

### 📝 **Pasos de Ejecución**

1. Ejecutar el backend.
2. Ejecutar el frontend.
3. Desde el frontend, acceder a la vista que consume el endpoint de prueba.
4. Observar la comunicación entre frontend y backend.
5. Validar que la respuesta del servidor coincide con lo esperado.
6. Revisar la consola del navegador para detectar errores de red.

### ✨ **Resultado Esperado**

✓ El frontend recibe correctamente la respuesta del backend.
✓ No se generan errores de comunicación (CORS, URL incorrecta, 404, 500, etc.).

### 📋 **Criterios de Aceptación Verificados**

* El frontend consume correctamente los endpoints.
* Se valida que la respuesta del servidor es funcional usando datos de prueba.

---

# ❗ **H2 – Identificar errores**

### ✔ **CP-002: Prueba Funcional – Detección de errores de conexión**

**Tipo:** Sistema / Integración
**Prioridad:** 🔴 Alta
**Encargados:** Elías Zelaya, Florence Cruz

### **Precondiciones**

* El frontend debe estar en modo de desarrollo.
* El backend debe poder activarse y desactivarse para simular fallos.
* Herramientas de debugging activadas.

### 📝 **Pasos de Ejecución**

1. Ejecutar el frontend.
2. Apagar el backend o modificar temporalmente la URL de conexión.
3. Realizar una acción que haga una petición HTTP desde el frontend.
4. Observar el comportamiento del sistema ante la falla.
5. Revisar si aparece un mensaje claro para el usuario.
6. Consultar la consola y/o logs para verificar que el error se registró.

### ✨ **Resultado Esperado**

✓ El sistema muestra un mensaje claro indicando la falla de conexión.
✓ Se registran los errores en consola o archivo log.

### 📋 **Criterios de Aceptación Verificados**

* El sistema debe mostrar mensajes claros ante fallas de conexión.
* Los errores deben quedar registrados para análisis futuro.

---

# 🛠 **H3 – Corregir errores**

### ✔ **CP-003: Prueba Funcional – Validar correcciones en la comunicación**

**Tipo:** Integración / Sistema
**Prioridad:** 🔴 Alta
**Encargados:** Elías Zelaya, Florence Cruz

### **Precondiciones**

* Todos los errores identificados previamente deben estar documentados.
* Código corregido y actualizado tanto en frontend como backend.
* El servidor funcionando sin errores previos.
* Endpoints estables para pruebas.

### 📝 **Pasos de Ejecución**

1. Ejecutar frontend y backend.
2. Repetir los escenarios donde se habían detectado fallos.
3. Consumir endpoints afectados.
4. Validar que las respuestas se reciben correctamente.
5. Realizar pruebas de estrés básicas (varias solicitudes seguidas).
6. Verificar que no se generan errores nuevos después de aplicar las correcciones.

### ✨ **Resultado Esperado**

✓ Las correcciones aplicadas eliminan los errores previamente reportados.
✓ No se generan errores nuevos en la comunicación.
✓ Las pruebas de integración completan sin fallos.

### 📋 **Criterios de Aceptación Verificados**

* Todos los errores detectados se solucionan sin afectar otras funcionalidades.
* Las pruebas de integración finalizan correctamente.

---

## 🗺️ Épica 4: Delimitación del mapa de establecimiento

## 🔍 **H1 – Estudiar código del componente**

### ✅ **CP-001: Prueba Funcional – Verificación de Renderización del Mapa**

**Tipo:** Funcional
**Prioridad:** 🟡 Media

### **Precondiciones**

* Acceso al repositorio del proyecto.
* La aplicación debe encontrarse corriendo en el puerto correspondiente.
* El componente del mapa debe estar correctamente importado en la vista.
* Google Maps API debe cargar sin errores.

### **Pasos de Ejecución**

1. Abrir la vista donde se renderiza el componente del mapa.
2. Verificar que el contenedor del mapa se muestre sin errores.
3. Confirmar que el mapa carga correctamente (sin pantalla en blanco o errores en consola).

### **Resultado Esperado**

✓ El mapa se renderiza correctamente y es visible para el usuario.
✓ Se identifican áreas de mejora.

### 📋 **Criterios de Aceptación Verificados**

* El análisis debe permitir comprender cómo se renderiza el mapa.
* Debe documentarse el comportamiento del componente. 

---

## 🔎 **H2 – Investigación para su implementación**

### ✅ **CP-002: Prueba No Funcional – Validación de Selección de Librería**

 **Tipo:** No funcional
 **Prioridad:** 🟢Baja
 
### **Precondiciones**

* Acceso a documentación de Google Maps
* Acceso a documentación alternativa como Leaflet o Mapbox.

### 📝 **Pasos de Ejecución**

1. Investigar sobre Google Maps API.
2. Investigar acerca de al menos una librería adicional.
3. Comparar compatibilidad, soporte e integración.
4. Registrar conclusiones en un informe técnico.

### ✨ **Resultado Esperado**

✓ Se genera un documento comparativo con al menos dos librerías posibles.
✓ Se identifica y justifica la opción más compatible con las necesidades de la aplicación.

### 📋 **Criterios de Aceptación Verificados**

* La investigación debe incluir al menos dos opciones viables.
* Debe seleccionarse la opción más compatible con el proyecto. 

---

## 🔧 **H3 – Refactorizar el código**
### ✅ **CP-003: Prueba Funcional – Validación del Mapa posterior a Refactorización**

**Tipo:** Funcional
**Prioridad:** 🔴 Alta

### **Precondiciones**

* Código refactorizado aplicado.
* Servidor local funcionando.

### 📝 **Pasos de Ejecución**

1. Ejecutar el proyecto.
2. Navegar hacia la vista de "Home".
3. Deslizar la pantalla hasta encontrar el componente del mapa.
4. Observar que el mapa carga correctamente.
5. Validar que los marcadores de locales correspondientes aparecen.

### ✨ **Resultado Esperado**

✓ El mapa se renderiza sin errores.
✓ El código refactorizado no afecta la funcionalidad.

### 📋 **Criterios de Aceptación Verificados**

* El código debe seguir buenas prácticas de programación.
* El mapa debe mantener su funcionalidad tras los cambios. 

---

## 📍 **H4 – Añadir marcador en el mapa**
### ✅ **CP-004: Prueba Funcional – Agregar marcador mediante coordenadas**

**Tipo:** Funcional
**Prioridad:** 🔴 Alta

### **Precondiciones**

* Agregar un nuevo restaurante.
* Llenar los otros campos solicitados además de los de coordenadas.
* Componente del mapa con evento `onClick` habilitado.
* Restricción de área delimitada activa.

### 📝 **Pasos de Ejecución**

1. Ingresar las coordenadas de latitud y longitud, dentro de los límites establecidos en el mapa.
2. Guardar el nuevo establecimiento.
3. Verificar que se muestra un marcador en el lugar elegido.
4. Recargar la vista del mapa.

### 📋 **Criterios de Aceptación Verificados**

* El marcador debe mostrarse dentro del área delimitada y no fuera de los límites permitidos.
* Al guardar un nuevo establecimiento, su marcador debe aparecer automáticamente en el mapa.
* Debe validarse que la ubicación del marcador pertenezca a la zona restringida establecida. 

---

## 🔗 **H5 – Integración con el sistema**

### ✔ **CP-005: Prueba Funcional – Visualización correcta de establecimientos desde backend**

**Tipo:** Integración
**Prioridad:** 🔴 Alta

### **Precondiciones**

* El backend debe ser accesible desde el lugar en el que la aplicación se encuentra corriendo.
* La API encargada de devolver la lista de establecimientos debe responder correctamente.
* Debe existir al menos un establecimiento registrado en la base de datos.
* El componente del mapa debe cargar sin errores.
* No deben existir errores previos en consola relacionados a fallos en la carga del mapa o solicitudes a la API.

### 📝 **Pasos de Ejecución**

1. Iniciar el sistema o aplicación desde el navegador.
2. Acceder a la sección de "Home" donde se muestra el mapa.
3. Verificar que el mapa se renderiza correctamente sin errores visuales o mensajes de falla.
4. Validar en consola o en herramientas de red que la API responde exitosamente.
5. Observar si los marcadores correspondientes a cada establecimiento del backend aparecen en el mapa.
6. Confirmar que cada marcador se ubica correctamente según sus coordenadas (latitud/longitud).
7. Revisar que la información asociada a cada marcador (nombre, categoría, u otros datos) coincida con lo provisto.

### ✨ **Resultado Esperado**

✓ Los marcadores cargan correctamente desde el backend.
✓ No hay datos duplicados o faltantes.

### 📋 **Criterios de Aceptación Verificados**

* El mapa debe mostrar los locales correctamente.
* Debe interactuar con los datos del backend. 

---

## 🧪 **H6 – Probar funcionalidad del mapa**

### ✔ **CP-006: Prueba Funcional – Validar que el mapa responde correctamente**

**Tipo:** Sistema
**Prioridad:** 🟡 Media

### **Precondiciones**

* Mapa operativo y cargado sin errores.
* Scripts de Google Maps funcionando correctamente.
* Navegador con conexión estable.
* No deben existir errores previos en consola.

### 📝 **Pasos de Ejecución**

1. Acceder a la vista donde se muestra el mapa.
2. Verificar que se renderiza correctamente.
3. Mover el mapa en distintas direcciones.
4. Aplicar zoom con mouse, controles o gestures.
5. Hacer click en diferentes puntos del mapa.
6. Revisar que no existan errores visuales o en consola.

### ✨ **Resultado Esperado**

✓ El mapa responde correctamente a las interacciones.
✓ No hay errores visuales ni de carga.

### 📋 **Criterios de Aceptación Verificados**

* El mapa debe responder correctamente a la interacción del usuario.
* No deben presentarse errores de carga o visualización.

# 🍔 *Épica 5: Recolección y actualización de información local*

## 🎯 *Descripción*
 Recopilar y actualizar la información de los restaurantes para asegurar que los datos mostrados en la plataforma sean verídicos y actualizados, garantizando que el usuario final tenga acceso a menús, horarios y precios reales[cite: 186].

---

## 📝 *H1 – Investigación de restaurante*

### ✅ *CP-001: Prueba Manual – Verificación de Exactitud de Datos Recolectados*

*Tipo:* Calidad de Datos
*Prioridad:* 🔴 Alta

### *Precondiciones*

* Acceso físico o digital a la información oficial de los locales de la Zona Peatonal UCA.
* Plantilla maestra de recolección de datos preparada.

### 📝 *Pasos de Ejecución*

1. Seleccionar una muestra representativa de locales.
2. Realizar la investigación de campo (visita o consulta oficial).
3. Registrar los datos en la plantilla maestra.
4. Realizar validación cruzada: Comparar el dato escrito contra la evidencia real (foto del menú/horario).

### ✨ *Resultado Esperado*

✓ La plantilla está completa y sin ambigüedades.
✓ Los precios registrados incluyen el formato correcto (moneda y decimales).
✓ No existen discrepancias entre la realidad del local y el documento generado.

### 📋 *Criterios de Aceptación Verificados*

* [cite_start]Los datos deben incluir nombre, ubicación, menú y horarios[cite: 191].
* [cite_start]Debe garantizarse la veracidad de la información obtenida[cite: 192].

---

## 💾 *H2 – Transcribir información en el backend*

### ✅ *CP-002: Prueba de Sistema – Carga Inicial de Datos*

*Tipo:* Integración
*Prioridad:* 🔴 Crítica

### *Precondiciones*

* Backend corriendo y conectado a la base de datos.
* Datos de la H1 validados y listos para su ingreso.

### 📝 *Pasos de Ejecución*

1. Utilizar el endpoint de creación (POST /create) para insertar un restaurante nuevo con la información recolectada.
2. Consultar la base de datos (SELECT * FROM local) para confirmar la persistencia del registro.
3. Verificar que se generó un ID único y que los caracteres especiales (tildes, ñ) se guardaron correctamente.

### ✨ *Resultado Esperado*

✓ La fila existe en la base de datos con la información íntegra.
✓ El sistema no arroja errores de formato de datos (Tipos de datos correctos).

### 📋 *Criterios de Aceptación Verificados*

* [cite_start]La información debe almacenarse correctamente en la base de datos[cite: 197].
* [cite_start]Los endpoints deben permitir su consulta desde el frontend[cite: 198].

---

## 🔄 *H3 – Mantenimiento de información*

### ✅ *CP-003: Prueba Funcional – Actualización de Precios y Horarios*

*Tipo:* Funcional
*Prioridad:* 🟡 Media

### *Precondiciones*

* Existe un local ya creado en el sistema.
* Se ha detectado un cambio en la realidad operativa (ej. cambio de precios por nueva temporada).

### 📝 *Pasos de Ejecución*

1. Identificar un local existente en la base de datos a través de su ID.
2. Utilizar el endpoint de actualización (PUT /update) para modificar el precio de un plato o el horario de atención.
3. Consultar el endpoint de lectura (GET) o visualizar en el Frontend para confirmar el cambio.
4. Verificar que se muestra el dato nuevo y no el anterior.

### ✨ *Resultado Esperado*

✓ El sistema permite modificar registros existentes sin duplicarlos.
✓ Los cambios se reflejan inmediatamente en la visualización del usuario.

### 📋 *Criterios de Aceptación Verificados*

* El sistema debe permitir la edición de datos sensibles (precios/horarios) sin errores.
* La consistencia de los datos se mantiene tras la edición (no se pierden datos no editados).

