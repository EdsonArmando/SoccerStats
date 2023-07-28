## **Soccer Stats**
## Proyecto Software Avanzado 

![Github All Releases](https://img.shields.io/badge/Version-1.0-green)
![Github All Releases](https://img.shields.io/badge/Curso-Software%20Avanzado-blue)
![Github All Releases](https://img.shields.io/badge/Grupo-J-red)
![Mysql](https://img.shields.io/badge/Mysql-gray?style=flat-square&logo=mysql)
![Docker](https://img.shields.io/badge/Docker-gray?style=flat-square&logo=docker)
![Angular](https://img.shields.io/badge/Angular-gray?style=flat-square&logo=angular)
![Google Cloud](https://img.shields.io/badge/Google_Cloud-gray?style=flat-square&logo=google-cloud)
![Javascript](https://img.shields.io/badge/Javascript-gray?style=flat-square&logo=javascript)
![NodeJS](https://img.shields.io/badge/NodeJS-gray?style=flat-square&logo=node.js)
![Gitlab](https://img.shields.io/badge/Gitlab-gray?style=flat-square&logo=gitlab)
![Jenkins](https://img.shields.io/badge/Jenkins-gray?style=flat-square&logo=jenkins)
![AWs](https://img.shields.io/badge/AWS-gray?style=flat-square&logo=amazon-aws)
![Ansible](https://img.shields.io/badge/Ansible-gray?style=flat-square&logo=ansible)
![Sequelize](https://img.shields.io/badge/Sequelize-gray?style=flat-square&logo=sequelize)

## **Descripción del proyecto**

Una empresa dedicada a la recopilación de información sobre futbol desea poner a disposición de los usuarios los datos que han logrado obtener y los que seguirán obteniendo a través del tiempo, para esto lo han contratado a usted para desarrollar este producto con el fin de satisfacer la necesidad de ellos de migrar hacia un mejor sistema y con esto generar un negocio a través de información recopiladad por ellos mismos.

La aplicación que se desarrollará será una página web y una app móvil que podrá ser utilizada por 3 tipos de usuario con diferentes características cada rol, para los usuarios pueden acceder a toda la información de los equipos, torneos y jugadores. Los empleados pueden manipular toda esta información y los administradores pueden manejar la información de los usuarios y generar reportes.

---

## **Contenido**

- [Descripción del proyecto](#Descripción-del-proyecto)
- [Lenguajes de programación](#Lenguajes-de-programación)
    - [Frontend](#Frontend)
    - [Backend](#Backend)
- [Herramientas de desarrollo a utilizar](#Herramientas-de-desarrollo-a-utilizar)
- [Herramientas de metodología a utilizar y de control de tiempo de trabajo](#Herramientas-de-metodología-a-utilizar-y-de-control-de-tiempo-de-trabajo)
- [Metodología Utilizada](#Metodología-Utilizada)
- [Pruebas a implementar](#Pruebas-a-implementar)
- [Arquitectura a implementar](#Arquitectura-a-implementar)
- [Forma de implementar el algoritmo de predicción](#Forma-de-implementar-el-algoritmo-de-predicción)
- [Diagramas](#Diagramas)
    - [Componentes](#Componentes)
    - [Despliegue](#Despliegue)
    - [Modelo de la base de datos](#Modelo-de-la-base-de-datos)
    - [Diagrama de Gantt](#diagrama-de-gantt)
    - [Casos de uso](#Casos-de-uso)
- [Listado de Endpoints](#Listado-de-Endpoints)
    - [Endpoints Empleados](#Endpoints-Empleados)
- [Mockups](#Mockups)
- [Integrantes del grupo J](#Integrantes-del-grupo-J)
- [Enlaces de herramientas utilizadas](#Enlaces-de-herramientas-utilizadas)
- [Enlace al video de explicación](https://www.youtube.com/watch?v=EimzxDVPhh0&ab_channel=AlisonLeiva)

---

## **Lenguajes de programación**

Para poder desarrollar el proyecto descrito anteriormente, se necesitan de ciertos lenguajes de programación dependiendo el área que se cubrirá.

### **Frontend**

Para el frontend se utilizará diferentes lenguajes para poder presentar una interfaz intuitiva y responsive a los usuarios, de esta forma presentar una curva de aprendizaje pequeña y brindar una experiencia agradable.

#### **App Web**

Para la aplicación web se utilizarán las siguientes herramientas:

* ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

#### **App Móvil**

Para la aplicación móvil se utilizará:

* ![Ionic](https://img.shields.io/badge/Ionic-101F47?style=for-the-badge&logo=ionic&logoColor=white)

### **Backend**

Para brindar una experiencia agradable los tiempos de espera en todas las operaciones deben ser mínimos, para ellos se trabajarán todas las peticiones con las siguientes herramientas:

* ![NodeJS](https://img.shields.io/badge/Node.js-4F9D25?style=for-the-badge&logo=node.js&logoColor=white)
* ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## **Herramientas de desarrollo a utilizar**

Descripción general de todas las herramientas que vamos a utilizar para el desarrollo del proyecto:

* ![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

    Es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.

    Se utiliza principalmente del lado del cliente, implementado como parte de un navegador web permitiendo mejoras en la interfaz de usuario y páginas web dinámicas y JavaScript del lado del servidor (Server-side JavaScript o SSJS). Su uso en aplicaciones externas a la web

* ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

    Typescript es un superset de JavaScript. Decimos que una tecnología es un superset de un lenguaje de programación, cuando puede ejecutar programas de la tecnología, Typescript en este caso, y del lenguaje del que es el superset, JavaScript en este mismo ejemplo. En resumen, esto significa que los programas de JavaScript son programas válidos de TypeScript, a pesar de que TypeScript sea otro lenguaje de programación.

* ![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)

    Angular (comúnmente llamado Angular 2+ o Angular 2) es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Angular (comúnmente llamado Angular 2+ o Angular 2) es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.

* ![Ionic](https://img.shields.io/badge/Ionic-101F47?style=for-the-badge&logo=ionic&logoColor=white)

    Ionic es una estructura tecnológica (Framework)  de código abierto que se utiliza en el desarrollo de aplicaciones móviles híbridas, es decir, se combinan el HTML5, CSS y JavaScript dando como resultado aplicaciones con una interfaz amigable e intuitiva para el usuario que luego se comercializan o descargan en plataformas como Android o IOs.

* ![Docker](https://img.shields.io/badge/Docker-25ACF2?style=for-the-badge&logo=docker&logoColor=white)

    La idea detrás de Docker es crear contenedores ligeros y portables para las aplicaciones software que puedan ejecutarse en cualquier máquina con Docker instalado, independientemente del sistema operativo que la máquina tenga por debajo, facilitando así también los despliegues.

* ![Jenkins](https://img.shields.io/badge/Jenkins-F69835?style=for-the-badge&logo=jenkins&logoColor=white)

    Jenkins es un servidor automatizado de integración continua de código abierto capaz de organizar una cadena de acciones que ayudan a lograr el proceso de integración continua (y mucho más) de manera automatizada.

    Jenkins está completamente escrito en Java y es una aplicación conocida y reconocida por DevOps de todo el mundo, más de 300.000 instalaciones y + 15.500 estrellas en Github lo respaldan.

    La razón por la que Jenkins se hizo tan popular es porque se encarga de supervisar las tareas repetitivas que surgen dentro del desarrollo de un proyecto.

* ![NodeJS](https://img.shields.io/badge/Node.js-4F9D25?style=for-the-badge&logo=node.js&logoColor=white)

    Node.js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript. También aporta muchos beneficios y soluciona muchísimos problemas.

    Node.js fue creado por los desarrolladores originales de JavaScript. Lo transformaron de algo que solo podía ejecutarse en el navegador en algo que se podría ejecutar en los ordenadores como si de aplicaciones independientes se tratara. Gracias a Node.js se puede ir un paso más allá en la programación con JavaScript no solo creando sitios web interactivos, sino teniendo la capacidad de hacer cosas que otros lenguajes de secuencia de comandos como Python pueden crear. 

* ![Gitlab](https://img.shields.io/badge/Gitlab-D6670A?style=for-the-badge&logo=gitlab&logoColor=white)

    Gitlab es un servicio web de control de versiones y desarrollo de software colaborativo basado en Git. Además de gestor de repositorios, el servicio ofrece también alojamiento de wikis y un sistema de seguimiento de errores, todo ello publicado bajo una Licencia de código abierto.

    GitLab es una suite completa que permite gestionar, administrar, crear y conectar los repositorios con diferentes aplicaciones y hacer todo tipo de integraciones con ellas, ofreciendo un ambiente y una plataforma en cual se puede realizar las varias etapas de su SDLC/ADLC y DevOps.

* ![Bootstrap](https://img.shields.io/badge/Bootstrap-7D3EE8?style=for-the-badge&logo=bootstrap&logoColor=white)

    Bootstrap es un framework CSS desarrollado por Twitter en 2010, para estandarizar las herramientas de la compañía.

    El framework combina CSS y JavaScript para estilizar los elementos de una página HTML. Permite mucho más que, simplemente, cambiar el color de los botones y los enlaces.

* ![Express](https://img.shields.io/badge/Express-F76A6A?style=for-the-badge&logo=express&logoColor=white)

    Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

* ![AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

    Amazon Web Services (AWS) es la plataforma en la nube más adoptada y completa en el mundo, que ofrece más de 200 servicios integrales de centros de datos a nivel global. Millones de clientes, incluso las empresas emergentes que crecen más rápido, las compañías más grandes y los organismos gubernamentales líderes, están usando AWS para reducir los costos, aumentar su agilidad e innovar de forma más rápida.

    Entre los servicios que se utilizarán se encuentran:

    * **Amazon S3**
        
        Amazon Simple Storage Service (Amazon S3) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad de datos, seguridad y rendimiento líderes en el sector. Clientes de todos los tamaños y sectores pueden almacenar y proteger cualquier cantidad de datos para prácticamente cualquier caso de uso, como los lagos de datos, las aplicaciones nativas en la nube y las aplicaciones móviles.



* ![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)

    Google Cloud Platform se trata de la suite de infraestructuras y servicios que Google utiliza a nivel interno y, ahora, disponible para cualquier empresa, de tal forma que sea aplicable a multitud de procesos empresariales.

* ![Mysql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)

  MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo, y una de las más populares en general junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web.
* ![Sequelize](https://img.shields.io/badge/Sequelize-BD4646?style=for-the-badge&logo=sequelize&logoColor=white)

  Sequelize es un ORM basado en promesas para Node.js. Soporta PostgreSQL, MySQL, SQLite y MSSQL, y entrega características sólidas de transacciones, relaciones entre tablas, mecanismos de migraciones y carga de datos, y más.

* ![Ansible](https://img.shields.io/badge/Ansible-F0F0F0?style=for-the-badge&logo=ansible&logoColor=black)

    Ansible es una plataforma de software libre para configurar y administrar ordenadores. Combina instalación multi-nodo, ejecuciones de tareas ad hoc y administración de configuraciones. Adicionalmente, Ansible es categorizado como una herramienta de orquestación.​

---

## **Herramientas de metodología a utilizar y control de tiempo de trabajo**

Al trabajar el proyecto de forma virtual con el grupo de trabajo, nos vimos con la necesidad de trabajar con algunas metodologías ágiles para poder realizar la entrega en el tiempo establecido. Entre las herramientas a utilizar se encuentran:

* ![SCRUM](https://img.shields.io/badge/Scrum-F7DF1E?style=for-the-badge&)

    Kanban, cuyo significado es letrero o tarjeta en japonés, es un sistema de información que controla de modo armónico la fabricación de los productos necesarios en la cantidad y tiempo necesarios en cada uno de los procesos que tienen lugar tanto en el interior de la fábrica, como entre distintas empresas.

* ![KANBAN](https://img.shields.io/badge/Kanban-F7DF1E?style=for-the-badge&)

    Kanban, cuyo significado es letrero o tarjeta en japonés, es un sistema de información que controla de modo armónico la fabricación de los productos necesarios en la cantidad y tiempo necesarios en cada uno de los procesos que tienen lugar tanto en el interior de la fábrica, como entre distintas empresas. El programa que se utilizará para realizar el tablero es Trello.

* ![GITFLOW](https://img.shields.io/badge/Gitflow-F7DF1E?style=for-the-badge&)

    Gitflow es un modelo alternativo de creación de ramas en Git en el que se utilizan ramas de función y varias ramas principales. Fue Vincent Driessen en nvie quien lo publicó por primera vez y quien lo popularizó. En comparación con el desarrollo basado en troncos, Gitflow tiene diversas ramas de más duración y mayores confirmaciones. Según este modelo, los desarrolladores crean una rama de función y retrasan su fusión con la rama principal del tronco hasta que la función está completa. Estas ramas de función de larga duración requieren más colaboración para la fusión y tienen mayor riesgo de desviarse de la rama troncal. También pueden introducir actualizaciones conflictivas.
---

## **Metodología Utilizada**

> ### Sprint 1
>
> ##### Método de Priorización:
>
> Se utiliza el método SMART para la priorización de objetivos a cumplir en la fase 1.
>
> * Específicos: Objetivos sencillos de entender
> * Medibles: Objetivos que se visualizan en su finalización.
> * Alcanzables: Objetivos realistas según el tiempo.
> * Relevantes: Objetivos importantes para la fase de entrega
> * Definidos en el tiempo: Objetivos con tiempo de entrega específicos.
>
> ##### Tablero Kanban Sprint Backlog:
>
> | Requerimientos funcionales                   | Encargado | Prioridad |
> | -------------------------------------------- | --------- | --------- |
> | Análisis Módulo de Empleados               | Luis      | Media     |
> | Análisis Modelo de Predicción              | Alison    | Media     |
> | Análisis Módulo de Noticias                | Andrea    | Baja      |
> | CRUD Roles por Administrador                 | Andrea    | Alta      |
> | Análisis de Módulo Clientes sin Membresía | Edson     | Media     |
> | Análisis Módulo Cliente con Membresía     | Edson     | Media     |
>
> ![Sprint1](https://user-images.githubusercontent.com/36779113/153127457-c013d4e3-c0e0-4014-a7cc-e402ac632735.png)
>
> ### Sprint 2
>
> ##### Método de Priorización:
>
> Se utiliza el método SMART para la priorización de objetivos a cumplir en la fase 1.
>
> * Específicos: Objetivos sencillos de entender
> * Medibles: Objetivos que se visualizan en su finalización.
> * Alcanzables: Objetivos realistas según el tiempo.
> * Relevantes: Objetivos importantes para la fase de entrega
> * Definidos en el tiempo: Objetivos con tiempo de entrega específicos.
>
> #### Tablero Kanban Sprint Backlog:
>
> | Requerimientos funcionales         | Encargado    | Prioridad |
> | ---------------------------------- | ------------ | --------- |
> | Diagrama de Base de Datos          | Luis         | Alta      |
> | Diagrama de flujo del sistema      | Alison       | Media     |
> | Diagrama de Componentes            | Andrea       | Media     |
> | Diagrama de Casos de uso           | Edson y Luis | Media     |
> | Diagrama de Arquitectura           | Edson        | Media     |
> | Diagrama de Despliegue             | Luis         | Media     |
> | Análisis Algoritmo de Predicción | Alison       | Baja      |
>
> ![Sprint2](https://lh3.googleusercontent.com/zvqzM2NovzJPZakiqkstCUQuES2Ye1bD0SmlGDTAe-zfJs4VddUx6WUjNTu35pV48odtloWmwZWVWlk1VunBy11JBgFsLzFy4QsENnnntbLs_0vnq_ub5ne1ceOpbO8GGVsKyjej)
>
> ##### Reunión virtual
>
> ![Reunion Virtual](https://lh4.googleusercontent.com/CwxmoHHH-jK8NsEf32dqPWiQTUJoNyeZLtTV8VKA5gUwkF0o40SBzF9GnuVc4AqCsYJ8sYFPF4GElNdH1FX4sKdIHmc9TEZvphOjIxvBhBX7HxgtAuwIQeqv5RYwX15Bf-39FL4u)
>
> ### Sprint 3
>
> ##### Método de Priorización:
>
> Se utiliza el método SMART para la priorización de objetivos a cumplir en la fase 1.
>
> * Específicos: Objetivos sencillos de entender
> * Medibles: Objetivos que se visualizan en su finalización.
> * Alcanzables: Objetivos realistas según el tiempo.
> * Relevantes: Objetivos importantes para la fase de entrega
> * Definidos en el tiempo: Objetivos con tiempo de entrega específicos.
>
> ### **Retrospective**
>
> ###### Comentario Grupal
>
> * ¿Qué se hizo bien durante el Sprint?
>   - La organización durante el desarrollo de la fase 1 fue eficiente y se dedicó tiempo para cada uno de los módulos requeridos para todas las fases del proyecto.
> * ¿Qué se hizo mal durante el Sprint?
>   * Al principio no teníamos el conocimiento de algunas tecnologías y teníamos dudas respecto a estas, hizo que nos atrasaramos durante el proceso de la fase 1, pero a pesar de esto se ejecutó correctamente el desarrollo y lo planeado
> * ¿Qué mejoras implementaría para el próximo Sprint?
>   * Aclaración de dudas desde el principio.
>
> ![Retrospective](https://lh4.googleusercontent.com/UYgzRm59MAQLJuoD9tlSBG-9u5ci0PkEPhJXLB0e1jbljFwA23zVMYUrwzjBX8p-oJIeLZ15E61JnO19vrh5GD8wgqHdwEzInPbROjs7rPJdCqnY5fIXj_ighqJsFxuV8HDrZp1X)

---

## **Pruebas a implementar**

Para poder tener un código de calidad se plantea implementar ciertas pruebas, las *pruebas unitarias* son fundamentales para garantizar un buen código, las pruebas unitarias o unit testing son una forma de comprobar que un fragmento de código funciona correctamente. Es un procedimiento más de los que se llevan a cabo dentro de una metodología ágil de trabajo.

Si nunca te has atrevido con ellas o no sabes por dónde empezar, este artículo es para ti. Descubre cómo las pruebas unitarias pueden ayudarte a mejorar el resultado final de tu aplicación. Para poder realizar dichas pruebas se utilizará Jasmine y Karma.

---

## **Arquitectura a implementar**

![Arquitectura](https://i.ibb.co/NZHZ1bV/Captura-de-pantalla-de-2022-03-31-13-20-37.png)

**Enlace de Arquitectura:** <a href="https://lucid.app/lucidchart/0ad3c96c-5212-49c7-893e-fb6995374f2d/edit?invitationId=inv_221eb6de-2e58-403d-a6d4-cb3656837861&page=HowzCfBBZfS3#"><img alt="Arquitectura" src="https://img.shields.io/badge/Arquitectura-gray?style=for-the-badge&logo=svg"></a>

---

## **Granularidad de Microservicios**

![Componentes](https://i.ibb.co/BLtPC7s/Granularidad.jpg)

**Enlace de Componentes:** <a href="https://n9.cl/6e95w"><img alt="Granularidad" src="https://img.shields.io/badge/Granularidad-gray?style=for-the-badge&logo=docker"></a>

---

## **Forma de implementar el algoritmo de predicción**

    -

---

## **Diagramas**

### **Componentes**

![Componentes](https://i.ibb.co/rvXTfGn/Diagrama-de-Componentes-drawio.png)

**Enlace de Componentes:** <a href="https://drive.google.com/file/d/195kCDA0DMNHQA0kef66YTVde5ZXwmohZ/view?usp=sharing"><img alt="Despliegue" src="https://img.shields.io/badge/Componentes-gray?style=for-the-badge&logo=svg"></a>

### **Despliegue**

El flujo Devops que se utilizará es el siguiente:

[//]: # "![Despliegue](https://user-images.githubusercontent.com/36779113/152946590-04fa9154-ae28-4057-80b2-e81d6a70e700.png)"

![Despliegue](https://i.ibb.co/tQ5FM3w/Captura-de-pantalla-de-2022-03-31-13-24-17.png)  

**Enlace de Despliegue:** <a href="https://lucid.app/lucidchart/3be73a50-bd80-4dd8-ae8b-bcd498f5428c/edit?invitationId=inv_a4eef45f-6cbd-4aac-9cc5-8abbeee9daf6"><img alt="Despliegue" src="https://img.shields.io/badge/Despliegue-gray?style=for-the-badge&logo=gitlab"></a>

### **Modelo de la base de datos**

![BaseDeDatos](https://i.ibb.co/6J6kZFP/Soccer-Stats.png)


**Enlace de Modelo de la base de datos:** <a href="https://lucid.app/lucidchart/e1b06975-08a8-4e3c-af83-075014b035ce/edit?invitationId=inv_b4c92c30-e858-4b2f-8377-bfb86298f5c6"><img alt="Base de datos" src="https://img.shields.io/badge/Base_de_Datos-gray?style=for-the-badge&logo=mysql"></a>

### **Diagrama de Gantt**

![Gantt](https://user-images.githubusercontent.com/36779113/153693089-e02a7483-293c-45f1-8d8f-822a58957b7e.jpg)

**Enlace de imagen Diagrama de Gantt:** <a href="https://drive.google.com/file/d/1wch9vkdX9FP_NnF_9pJH-za9Ev6nuWSL/view?usp=sharing"><img alt="Base de datos" src="https://img.shields.io/badge/Diagrama%20de%20Gantt-gray?style=for-the-badge&logo=canva"></a>

### **Casos de uso de alto nivel**

![Alto Nivel Tecnologías](https://i.ibb.co/GHQgcWm/Untitled-3.jpg)

#### **Alcance**

El usuario tendrá la posibilidad de utilizar el sistema Soccer Stats para poder tener acceso a toda la información deportiva relacionada al futbol. Adicionalmente, se tienen servicios extras, como la predicción de partidos, así como que el sistema maneja un alto nivel de seguridad.

---

![Funciones CRUD](https://i.ibb.co/K97Bvnv/Untitled-4.jpg)

* **Nombre:** CRUD de Usuarios.

    **Descripción:** El usuario tiene la opción de crear una cuenta cliente con su información personal, actualizar si desea cambiar algún dato, eliminar su cuenta si ya no desea utilizar el sistema y visualizar su información dentro del perfil de usuario, el cual utiliza la base de datos del sistema. Los administradores realizan todas las operaciones relacionadas a los usuarios empleados y administradores.

* **Nombre:** CRUD de Información Deportiva

    **Descripción:** El usuario empleado tiene los permisos de manejar toda la información deportiva dentro del sistema Soccer Stats, puede manejar los directores técnicos, jugadores, equipos, competencias, partidos, estadios, noticias, quinielas que pueden visualizar los usuarios cliente.

---

### **Casos de uso extendidos**

#### **Registro de usuarios**

![Registro de usuarios](https://i.ibb.co/RbPfPNL/Registro-Usuarios.png)

##### **Descripción**

El usuario no posee una cuenta activa en la plataforma, en otras palabras no se encuentra registrado dentro de la base de datos del sistema por lo que se le solicita que ingrese su información personal para poder agregarlo a la base de datos y generarle una cuenta.

##### **Actores**

Base de datos, sistema y usuario.

##### **Precondiciones**

Ninguna.

##### **Flujo**

| Flujo Normal | Flujo Alternativo  |
| :---: | :---: |
| **1.** Ingreso a la plataforma web. |  |
| **2.** Ingresar a la sección de registro. |  |
| **3.** Ingresar información necesaria para iniciar sesión *(nombre, apellido, correo, teléfono, fotografía, genero, fecha nacimiento, dirección, país)* |  |
|| **3a.** El sistema encuentra que el correo ya está asociado a un usuario.  |
|| **3b.** El usuario no completa toda la  información requerida por el formulario de registro. |
| **4.** Enviar la información a la base de datos por medio de un endpoint. ||
| **5.** Generar una clave para el usuario nuevo. ||
| **6.** Notificar al correo del usuario que active su cuenta y enviarle su contraseña. ||
| **7.** Mostrar la página de login. ||

##### **Postcondiciones**

Ninguna.

---

#### **Login de usuarios**

![Login de usuarios](https://i.ibb.co/GtzCCpK/Untitled-2.jpg)

##### **Descripción**

El usuario aún se encuentra registrado dentro de la base de datos del sistema por lo que se solicita ingresar a su sesión, para ello necesita ingresar su usuario  contraseña. El sistema valida sus credenciales en la base de datos y su autenticidad a través de códigos de verificación.

##### **Actores**

Sistema, usuario y base de datos.

##### **Precondiciones**

El usuario debe estar registrado.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingresa a la plataforma. ||
| **2.** Se dirige al apartado de inicio de sesión presionando el boton de iniciar sesión (login). ||
| **3.** Ingresa sus credenciales *(Correo, Password)*||
|| **3a.** El sistema no reconoce al usuario por correo o contraseña |
|| **3b.** El usuario no se encuentra registrado en la base de datos |
| **4.** Se realiza una solicitud a la base de datos por medio de un endpoint. ||
| **5.** Se muestra el dashboard inicial dependiendo el tipo de usuario ||

##### **Postcondiciones**

Ninguna.

---

#### **Información Estadística**

![Información Estadística](https://i.ibb.co/Sfs49ft/Estadisticas.jpg)

##### **Descripción**

Para poder tener toda la información deportiva que se encuentra dentro del sistema, información como los equipos, noticias, jugadores, técnicos, partidos.

##### **Actores**

Sistema, usuario

##### **Precondiciones**

El usuario debe estar registrado y debe contar con rol de empleado.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingresar a la plataforma. ||
| **2.** Dirigirse a la sección de iniciar sesión haciendo click en el botón login. ||
| **3.** Ingresar las credenciales del usuario *(Correo, Password)* ||
|| **3a.** El sistema no reconoce las credenciales del usuario. |
|| **3b.** El usuario no se encuentra registrado. |
|| **3c.** El usuario no cuenta con el rol de empleado. |
| **4.** Seleccionar que tipo de información se desea ingresar, por ejemplo: jugadores, estadios, partidos, entre otros. ||
| **5.** Enviar toda la información a la base de datos. ||


##### **Postcondiciones**

Ninguna.

---

#### **Funciones Cuenta Cliente**

![Cuenta Cliente](https://i.ibb.co/GPJwYj3/Cuenta-Cliente.jpg)

##### **Descripción**

Un cliente que se encuentra dentro del sistema puede realizar diferentes acciones sobre su cuent, que le permiten al cliente una mejor interacción con el mismo sistema.

##### **Actores**

Sistema, usuario

##### **Precondiciones**

El usuario debe estar registrado y contar como rol de cliente.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingreso a la plataforma. ||
| **2.** Dirigirse a la interfaz de iniciar sesión dando click en el botón de login. ||
| **3.** Ingresar las credenciales del usuario *(Correo, Password)* ||
|| **3a.** El sistema no reconoce las credenciales del usuario. |
|| **3b.** El usuario no se encuentra registrado. |
|| **3c.** El usuario no cuenta con el rol de cliente. |
| **4.** Seleccionar la función correspondiente en la barra de tareas, por ejemplo: actualizar, visualizar, eliminar cuenta. ||
| **5.** Realizar transacción en la base de datos. ||

##### **Postcondiciones**

Ninguna.

#### **Funciones Administrador**

![Funciones Administrador](https://i.ibb.co/VQTGtD7/Administrador.jpg)

##### **Descripción**

El administrador tiene un control total sobre las acciones que se pueden realizar sobre un usuario.

##### **Actores**

Sistema, usuario

##### **Precondiciones**

El usuario debe estar registrado y contar como rol de administrador.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingreso a la plataforma. ||
| **2.** Dirigirse a la interfaz de iniciar sesión dando click en el botón de login. ||
| **3.** Ingresar las credenciales del usuario *(Correo, Password)* ||
|| **3a.** El sistema no reconoce las credenciales del usuario. |
|| **3b.** El usuario no se encuentra registrado. |
|| **3c.** El usuario no cuenta con el rol de administrador. |
| **4.** Seleccionar la función correspondiente en la barra de tareas, por ejemplo: actualizar, visualizar, eliminar cuenta. ||
| **5.** Realizar transacción en la base de datos. ||

##### **Postcondiciones**

Ninguna.

---

#### **Reportes Administrador**

![Reportes Administrador](https://i.ibb.co/D5dBSfh/Reportes.jpg)

##### **Descripción**

El sistema contará con distintos módulos que serán muy grandes y que el administrador tendrá de una forma visible reportes, estos ayudan a dar una idea al administrador de lo que pasa en el sistema.

##### **Actores**

Sistema, usuario

##### **Precondiciones**

El usuario debe estar registrado y contar como rol de administrador.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingreso a la plataforma. ||
| **2.** Dirigirse a la interfaz de iniciar sesión dando click en el botón de login. ||
| **3.** Ingresar las credenciales del usuario *(Correo, Password)* ||
|| **3a.** El sistema no reconoce las credenciales del usuario. |
|| **3b.** El usuario no se encuentra registrado. |
|| **3c.** El usuario no cuenta con el rol de administrador. |
| **4.** Seleccionar el módulo de reportes. ||
| **5.** Seleccionar el reporte a visualizar. ||

##### **Postcondiciones**

Ninguna.

---

#### **Funcionalidades Empleado**

![Empleado](https://i.ibb.co/x60rGL5/Empleado.jpg)

##### **Descripción**

El usuario de rol empleado cuenta con una tarea muy importante dentro del sistema, ya que es el encargado de poder cargar datos a la base de datos, estos datos son de suma importancia para el buen funcionamiento del sistema.

##### **Autores**

Sistema, usuario

##### **Precondiciones**

El usuario debe estar registrado y contar como rol de empleado.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingreso a la plataforma. ||
| **2.** Dirigirse a la interfaz de iniciar sesión dando click en el botón de login. ||
| **3.** Ingresar las credenciales del usuario *(Correo, Password)* ||
|| **3a.** El sistema no reconoce las credenciales del usuario. |
|| **3b.** El usuario no se encuentra registrado. |
|| **3c.** El usuario no cuenta con el rol de empleado. |
| **4.** Se despliegan 6 opciones para trabajar con ellas. ||
| **4a.** Transferir Jugador:  los jugadores deberán tener su propia bitácora de los equipos en los que han militado y de 
qué fecha a que fecha jugó para ese equipo. ||
| **4b.** Transferir Técnico:  los jugadores deberán tener su propia bitácora de los equipos en los que han militado y de qué fecha a que fecha jugó para ese equipo. ||
| **4c.** Estado Partido: Podrán cambiar el estado de un partido (Sin iniciar, en curso, finalizado, suspendido). ||
| **4d.** Agregar Incidencias: Podrán cambiar el estado de un partido (Sin iniciar, en curso, finalizado, suspendido). ||
| **4e.** Publicar Noticias: publicar noticias acerca de un equipo. ||
|| **4f.** Agregar incidencias mientras el partido está fuera de curso. |

##### **Postcondiciones**

Ninguna.

---

#### **Clientes con y sin membresía**

![Membresía](https://i.ibb.co/zFwBV4h/Membresia.jpg)

##### **Descripción**

Los clientes tendrán acceso a diferentes apartados dentro del sistema. Estos estarán a su disposición dependiendo del tipo de usuario que sean ya sea clientes con membresía o sin membresía.

##### **Autores**

Sistema, usuario.

##### **Precondiciones**

El usuario debe estar registro y debe tener rol cliente, ademas para poder acceder a las opciones premium debe estar subscrito.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** Ingreso a la plataforma. ||
| **2.** Dirigirse a la interfaz de iniciar sesión dando click en el botón de login. ||
| **3.** Ingresar las credenciales del usuario *(Correo, Password)* ||
|| **3a.** El sistema no reconoce las credenciales del usuario. |
|| **3b.** El usuario no se encuentra registrado. |
|| **3c.** El usuario no cuenta con el rol de cliente. |
| **4.** Se despliegan 6 opciones para trabajar con ellas. ||
| **4a.** Resultados:  Usuarios sin membresía pueden ver este apartado. ||
| **4b.** Datos Estadísticos:  Solo clientes con membresía. ||
| **4c.** Información de Partidos: Clientes sin y con membresía. ||
| **4d.** Seguir Equipo: Solo clientes con membresía. ||
| **4e.** Noticias de equipos: solo usuarios con membresía. ||

##### **Postcondiciones**

Ninguna.

---

#### **Creacion de quinielas**

![CrearQuniela](https://firebasestorage.googleapis.com/v0/b/storeonlineeg-e1c21.appspot.com/o/upload%2FCrearQuiniela.png?alt=media&token=39c91a36-d203-4e97-b785-253393015525)

##### **Descripción**

Lo que hace a la plataforma atractiva, aparte de resultados, noticias, etc., de partidos es, la participación de los clientes con membresía en las quinielas, para esto los empleados y los administradores son los únicos en el sistema que pueden crear las quinielas para la participación de los clientes con membresía.

##### **Autores**

Sistema y Administrador, Empleado.

##### **Precondiciones**

El usuario debe estar registrado en la base de datos y ademas de poseer el rol  de empleado o administrador.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** El usuario inicia sesión en la plataforma. ||
| **2.** El usuario selecciona en su barra de tareas que acción desea realizar. ||
|| **2a.** El sistema no reconoce las credenciales del usuario. |
|| **2b.** El usuario no se encuentra registrado. |
|| **2c.** El usuario no cuenta con el rol de Empleado o Administrador. |
| **3.** El empleado o administrador ve la lista de partidos a jugarse. ||
| **4.** Selecciona el partido. ||
| **5.** Procede a dar click en boto crea quiniela. ||

##### **Postcondiciones**

Ninguna.

---
#### **Participación en quiniela Clientes con membresía**

![AlgoritmoPrediccion](https://firebasestorage.googleapis.com/v0/b/storeonlineeg-e1c21.appspot.com/o/upload%2FAlgoritmoPrediccion.png?alt=media&token=80d24e90-fa7e-4a60-b84d-bbb87cdecfed)

##### **Descripción**

Antes de iniciar un partido, la plataforma estará lista para que los clientes que poseen una membresía puedan participar en quinielas y poder participar junto a otros clientes de la plataforma. Para ello también se cuenta con un algoritmo de predicción para que los clientes puedan tener más seguridad al momento de elegir sus marcadores y a que equipo apoyar.

##### **Autores**

Sistema y Cliente.

##### **Precondiciones**

El usuario debe estar registro y debe tener rol cliente, ademas para poder acceder a las opciones premium debe estar subscrito.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** El usuario inicia sesión en la plataforma. ||
| **2.** El usuario selecciona en su barra de tareas que acción desea realizar. ||
|| **2a.** El sistema no reconoce las credenciales del usuario. |
|| **2b.** El usuario no se encuentra registrado. |
|| **2c.** El usuario no cuenta con el rol de Empleado o Administrador. |
| **3.**  El cliente ve la lista de partidos a jugar. ||
| **4.** Selecciona el partido. ||
| **5.** Procede a Participar en quiniela. ||
| **6.** Usar algoritmos de predicción. ||
| **7.** En base a los datos mostrados por el algoritmo, ingresar resultado (MarcadorEquipoA, MarcadorEquipoB)para participar en quiniela. ||

##### **Postcondiciones**

Ninguna.

---

#### **Predicciones de los usuarios**

![Registro de usuarios](https://i.ibb.co/vXCVHQC/Untitled.jpg)

##### **Descripción**

El usuario cliente premium puede seleccionar dos equipos y evaluar cuál es la posibilidad de que alguno de esos usuarios pueda ganar el partido.

##### **Actores**

Base de datos, sistema, usuario

##### **Precondiciónes**

El usuario debe haber iniciado sesión y poseer su cuenta en estado premium.

##### **Flujo**

| Flujo Normal | Flujo Alternativo |
| :---: | :---: |
| **1.** El usuario inicia sesión en su cuenta a la plataforma. ||
| **2.** Selecciona en el menú la opción de predicciones. ||
| **3.** Ingresa los datos requeridos *(Equipo A, Equipo B)* ||
| **4.** Enviar la información a la base de datos por medio de un endpoint. || 
| **5.** Retorna los resultados de la predicción. ||
| **6.** Se le muestra al usuario los resultados obtenidos. ||

##### **Postcondiciones**

Ninguna.

---


## **Diagrama de Flujo de la Aplicación**

![Flujo](https://i.ibb.co/Th5g14T/Diagrama-de-Flujo-drawio.png)

**Enlace de Diagrama de Flujo:** <a href="https://drive.google.com/file/d/1QEbt7rd00H-jlHBsdcIoMjrvH0DPqgcR/view?usp=sharing"><img alt="Mockups" src="https://img.shields.io/badge/Flujo-gray?style=for-the-badge&logo=svg"></a>

---

## **Listado de Endpoints**

**Enlace de Endpoints:** <a href="https://balsamiq.cloud/sf5ucxz/ppu24wb"><img alt="Mockups" src="https://img.shields.io/badge/Endpoints-gray?style=for-the-badge&logo=postman"></a>

---

## **Mockups**

### **Inicio de la página web**

![Inicio Página Web](https://i.ibb.co/2Ss2Bhh/2022-02-09-14-08-45.gif)

### **Usuario Cliente sin premium**

![Cliente](https://i.ibb.co/khXCcvk/2022-02-09-14-20-04.gif )

### **Usuario Cliente con premium**

![ClientePremium](https://i.ibb.co/k2jR08Z/2022-02-09-14-21-44.gif)

### **Usuario Empleado**

![Empleado](https://i.ibb.co/qWYP5Sc/2022-02-09-14-24-47.gif)

### **Usuario Administrador**

![Administrador](https://i.ibb.co/TByKkYP/ezgif-7-8e3ff801c9.gif)

### **Página Error 404**

![404](https://i.ibb.co/Q6GPsJR/404.png)

**Enlace de Mockups:** <a href="https://balsamiq.cloud/sf5ucxz/ppu24wb"><img alt="Mockups" src="https://img.shields.io/badge/Mockups-gray?style=for-the-badge&logo=svg"></a>

---

## **Integrantes del grupo J**

| Nombre | Carnet |
| :---: | :---: |
| Cinthya Andrea Palomo Galvez | 201700670 |
| Luis Fernando Arana Arias | 201700988 |
| Alison Cristina Leiva Paredes | 201700378 |
| Edson Armando Guix Manuel | 201701029 |

---

## **Enlaces de herramientas utilizadas**

- [Google Cloud](https://cloud.google.com/)
- [Kubernetes](https://kubernetes.io/es/)
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/es/)
