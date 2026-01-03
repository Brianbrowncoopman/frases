# App de Citas - Ionic & SQLite

¡Bienvenido! Esta es una aplicación híbrida desarrollada con **Ionic** y **Angular** que permite gestionar una colección de citas y frases célebres. El proyecto está diseñado para funcionar perfectamente tanto en navegadores web como en dispositivos móviles Android.

## 🚀 Características principales

* **Persistencia Híbrida:** * En **Web**, los datos se gestionan en memoria para pruebas rápidas.
    * En **Android**, se utiliza **Capacitor SQLite** para garantizar que tus citas permanezcan guardadas incluso al cerrar la app.
* **Cita del Día:** Algoritmo de selección aleatoria para mostrar una frase distinta cada vez.
* **Gestión Completa (CRUD):** Pantalla dedicada para agregar nuevas frases y eliminar las existentes.
* **Configuración Personalizada:** Opción para habilitar o deshabilitar el borrado de citas desde la pantalla de inicio.
* **Diseño Standalone:** Implementación moderna de Angular para una carga más ligera y eficiente.

---

## 📸 Capturas de Pantalla

En esta sección se muestra la consistencia visual lograda en las diferentes plataformas.

## 🌐 Demostración: Versión Web (`ionic serve`)

La versión web utiliza persistencia en memoria y permite validar rápidamente el flujo de la aplicación.

### 🏠 Pantalla de Inicio y Estados
| Estado Inicial | Sin Citas (Vacío) |
| :---: | :---: |
| <img width="323" height="664" alt="image" src="https://github.com/user-attachments/assets/a88af844-dcf7-44e5-8471-f1ebb8c3312f" />| <img width="200" alt="Sin citas" src="https://github.com/user-attachments/assets/8bd26fe8-4388-4d3f-9100-673306629e85" /> |
 

### ⚙️ Flujo de Configuración (Borrado Dinámico)
Control de permisos para eliminar citas directamente desde la pantalla principal.

| Configuración #1 (Desactivado) | Resultado en Inicio |
| :---: | :---: |
| <img width="200" alt="Config Off" src="https://github.com/user-attachments/assets/9d6e45ec-0f2f-4401-a38d-f840e42d64a6" /> | <img width="328" height="658" alt="image" src="https://github.com/user-attachments/assets/89333178-01b5-4bc3-b1a3-828b926b2be2" />|

| Configuración #2 (Activado) | Resultado en Inicio |
| :---: | :---: |
| <img width="200" alt="Config On" src="https://github.com/user-attachments/assets/3721a72c-9f7c-418f-9749-3ec51d808780" /> | <img width="327" height="650" alt="image" src="https://github.com/user-attachments/assets/5a8f7320-1f43-4d3e-8836-3498cb317dae" />|

### ✍️ Gestión de Citas y Validaciones
Proceso de creación con validaciones en tiempo real para los campos de Frase y Autor.

| Vista de Gestión | Validaciones de Campos |
| :---: | :---: |
| <img width="326" height="653" alt="image" src="https://github.com/user-attachments/assets/a4b26559-fc56-4e13-85f9-51b6b18ac057" />| <img width="334" height="664" alt="image" src="https://github.com/user-attachments/assets/1d6d67e8-2b54-409c-9c7e-13c056f16c10" />|

### 💾 Almacenamiento y Eliminación
| Datos Listos para Cargar | Frase Almacenada | Confirmación en Inicio |
| :---: | :---: | :---: |
| <img width="315" height="653" alt="image" src="https://github.com/user-attachments/assets/aea75b0f-433e-4457-b36f-3627941f99a1" />| <img width="325" height="656" alt="image" src="https://github.com/user-attachments/assets/a5822d7f-ab82-4c3a-a1a2-77650078075d" />| <img width="319" height="653" alt="image" src="https://github.com/user-attachments/assets/c229aced-fe64-4950-91a9-36668fcb88eb" />|

> **Nota sobre Eliminación:** Se validó correctamente la eliminación de registros tanto de forma individual como masiva.
> <img width="319" height="651" alt="image" src="https://github.com/user-attachments/assets/cfd0ee6a-a050-48cf-8d2d-39b0ce333160" />



### 📱 Dispositivo Virtual (Emulador Android Studio)
*Validación de persistencia nativa mediante el plugin Capacitor SQLite.*

#### 🔄 Flujo de Configuración y Permisos
Se verifica que el estado del *Toggle* persiste correctamente en la base de datos nativa y afecta la UI de inicio.

| Estado Inicial (Sin Citas) | Configuración: Borrado Off | Inicio: Sin botón borrar |
| :---: | :---: | :---: |
| <img width="386" height="821" alt="image" src="https://github.com/user-attachments/assets/ec76bdad-130d-460d-99a6-c05fe0f1d3ce" />|<img width="406" height="829" alt="image" src="https://github.com/user-attachments/assets/a33b33fa-359e-4d96-8a4b-141a00dab015" />| <img width="375" height="824" alt="image" src="https://github.com/user-attachments/assets/8613d1d5-2031-41d6-ae3c-4583abe67224" />|

| Configuración: Borrado On | Inicio: Con botón borrar |
| :---: | :---: |
| <img width="385" height="826" alt="image" src="https://github.com/user-attachments/assets/ae09f00d-43b6-4fc5-9717-4ba186a373e2" />| <img width="381" height="802" alt="image" src="https://github.com/user-attachments/assets/e6989d39-6953-4d69-9af1-70b61306c529" />|

#### 💾 Persistencia en SQLite
Pruebas de escritura y lectura de datos persistentes.

| Cita lista para almacenar | Cita Almacenada en Lista | Cita Aleatoria en Inicio |
| :---: | :---: | :---: |
|<img width="358" height="804" alt="image" src="https://github.com/user-attachments/assets/d5b1d9a2-83a0-4f88-9756-99195ce1f86b" />| <img width="386" height="820" alt="image" src="https://github.com/user-attachments/assets/b449702b-ace1-44ec-bad3-c585133f984b" />| <img width="383" height="826" alt="image" src="https://github.com/user-attachments/assets/58ba3548-2cd2-4f39-b792-47565a8b1024" />|

#### 🗑️ Limpieza de Registros
Validación del borrado definitivo en la base de datos física.

| Proceso de Borrado | Registro Único Permanente |
| :---: | :---: |
| <img width="333" height="758" alt="image" src="https://github.com/user-attachments/assets/04641436-13f7-45f8-a954-8f5c6d0a0823" />| <img width="375" height="819" alt="image" src="https://github.com/user-attachments/assets/f9a4484b-9739-4af0-b6b6-5b89844fc6d9" />|



## 🛠️ Tecnologías Utilizadas

* **Ionic Framework:** UI y componentes nativos.
* **Angular:** Lógica de componentes standalone.
* **Capacitor:** Puente para acceso a funciones nativas.
* **Capacitor SQLite Community:** Motor de base de datos para Android.
* **Ionicons:** Set de iconos oficiales.

---


   
