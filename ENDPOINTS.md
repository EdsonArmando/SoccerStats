## **PROYECTO - DOCUMENTACIÓN GENERAL**

### ** ÍNDICE **


- [MICROSERVICIOS](#MICROSERVICIOS)
- [ENDPOINTS](#ENDPOINTS)
    - [Endpoints en Inglés](#Endpoints-en-Inglés)
        - [Headers](#Headers)
        - [Guardan en Token JWT](#Guardan-en-Token-JWT)
    - [Roles](#Roles)
- [CLIENTES](#CLIENTES)
    - [Obtener Membresía](#ObtenerMembresia)
    - [Restablecer contraseña](#Restablecer-contraseña)
    - [Seguir equipo](#Seguir-equipo)
    - [Eliminar equipo](#Eliminar-equipo)
    - [Ver notificaciones](#Ver-notificaciones)
    - [Unirse a quiniela](#Unirse-a-quiniela)
    - [Seguir equipo](#Seguir-equipo)
    - [Consultas y estadísticas por cliente](#CONSULTAS-Y-ESTADISTICAS-POR-CLIENTE)
    - [Jugadores o Técnico menores a X años](#Jugadores-o-Técnico-menores-a-X-años)
    - [Jugadores o Técnico mayores a X años](#Jugadores-o-Técnico-mayores-a-X-años)
    - [Equipos que participaron en X competición](#Equipos-que-participaron-en-X-competición)
    - [Equipos de X país](#Equipos-de-X-país)
    - [Equipos X años de antiguadad](#Equipos-X-años-de-antiguadad)
    - [Estadios en X país](#Estadios-en-X-país)
    - [Estadios con capacidad menor o igual a X](#Estadios-con-capacidad-menor-o-igual-a-X)
    - [Histórico de partidos de X equipo](#Histórico-de-partidos-de-X-equipo)
    - [Equipos en los que ha estado o dirigido X técnico o jugador](#Equipos-en-los-que-ha-estado-o-dirigido-X-técnico-o-jugador)
    - [Partidos donde hubo al menos X goles](#Partidos-donde-hubo-al-menos-X-goles)
    - [Jugadores con más X incidencias en Y competición, (de Z año)](#Jugadores-con-más-X-incidencias-en-Y-competición,-(de-Z-año))
    - [Cantidad de X competiciones que ha ganado Y equipo](#Cantidad-de-X-competiciones-que-ha-ganado-Y-equipo)
    - [Listado de partidos en X año](#Listado-de-partidos-en-X-año)
    - [Listado de partidos entre X equipo contra Y equipo](#Listado-de-partidos-entre-X-equipo-contra-Y-equipo)
- [SERVICIOS ADMINISTRATIVOS](#EMPLEADOS)
    - [CRUD Estadio](#CRUD-Estadio)
        - [Crear estadio](#Crear-estadio)
        - [Actualizar estadio](#Actualizar-estadio)
        - [Ver estadio](#Ver-estadio)
        - [Eliminar estadio](#Eliminar-estadio)
    - [CRUD Equipo](#CRUD-Equipo)
        - [Crear equipo](#Crear-equipo)
        - [Actualizar equipo](#Actualizar-equipo)
        - [Ver equipo](#Ver-equipo)
        - [Eliminar equipo](#Eliminar-equipo)
    - [CRUD Partido](#CRUD-Partido)
        - [Obtener los datos](#Obtener-los-datos)
        - [Crear una Liga](#Crear-una-Liga)
        - [Crear competencia](#Crear-competencia)
        - [Actualizar competencia](#Actualizar-competencia)
        - [Eliminar competencia](#Eliminar-competencia)
        - [Acciones Empleado](#Acciones-Empleado)
    - [Noticias](#Noticias)
        - [Crear noticia](#Crear-noticia)
        - [Obtener la noticia](#Obtener-la-noticia)
- [ADMINISTRADOR](#ADMINISTRADOR)
    - [Crear Persona](#Crear-Persona)
    - [Actualizar Persona](#Actualizar-Persona)
    - [Ver Persona](#Ver-Persona)
    - [Eliminar Persona](#Eliminar-Persona)
    - [Actualizar estado Persona](#Actualizar-estado-Persona)
    - [Reportes](#Reportes)
        - [Suscritos a X equipo](#Suscritos-a-X-equipo)
        - [Con o sin membresia](#Con-o-sin-membresia)
        - [Top cantidad de membresias](#Top-cantidad-de-membresias)
        - [Más dinero gastado](#Más-dinero-gastado)
        - [Usuarios por X pais](#Usuarios-por-X-pais)
        - [Usuarios por X genero](#Usuarios-por-X-genero)
        - [Usuarios por X edad](#Usuarios-por-X-edad)
        - [Empleados con MAS/MENOS noticias](#Empleados-con-MAS/MENOS-noticias)
        - [Empleados con MAS/MENOS noticias por X equipo](#Empleados-con-MAS/MENOS-noticias-por-X-equipo)
        - [Bitácora](#Bitácora)
        - [Actualizar estado del usuario](#Actualizar-estado-del-usuario)
- [USUARIO](#USUARIO)
    - [Crear Usuario](#Crear-Usuario)
    - [Delete Usuario](#Delete-Usuario)
    - [Get Usuario](#Get-Usuario)
- [LOGIN](#LOGIN)
    - [Login](#Login)
    - [Delete Usuario](#Delete-Usuario)
    - [Nuevo Usuario](#Nuevo-Usuario)
    - [Actualizar Usuario](#Actualizar-Usuario)
    - [Ver Perfil de usuario](#Ver-Perfil-de-usuario)
    - [Verificacion de correo](#Verificacion-de-correo)
- [ESTADIO](#ESTADIO)
    - [CRUD Partido](#CRUD-Partido)
        - [Actualizar estadio](#Actualizar-estadio)
        - [Ver estadio](#Ver-estadio)
        - [Eliminar estadio](#Eliminar-estadio)
- [PARTIDO](#PARTIDO)
    - [CRUD Partido](#CRUD-Partido)
        - [Actualizar partido](#Actualizar-partido)
        - [Ver partido](#Ver-partido)
        - [Eliminar partido](#Eliminar-partido)
- [PREDICCIÓN](#PREDICCIÓN)
- [QUINELA](#QUINELA)



### **MICROSERVICIOS**

##### Consideraciones:

* Para la tabla Country, manejar esta estructura y utilizar estos inserts -> <a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Tabla%20Country-inserts-cyan"></a>
* Para la respuesta de la api considerar esta estructura (Esto es para facilitar el trabajo y tener entendido que en todos los endpoints recibiremos esta estructura):

  ```typescript
  {
      status : number, // 200 = ok   400 = wrong
      msj : string,
      data : cualquier objeto [], {}, string, etc
  }
  ```

##### Encriptacion:

### **ENDPOINTS**

#### Endpoints en Inglés

<img alt="Tabla Country" src="https://img.shields.io/badge/IP:-ip:3000-blue?style=for-the-badge">

##### Headers:

```typescript
{
	authorization: Bearer <Token>
}
```

##### Guardan en Token JWT

```typescript
{
	id_usuario: 2,
	id_rol: 1
}
```

#### Roles

> 1. admin
> 2. Empleado
> 3. Cliente

### **CLIENTES**

#### ObtenerMembresia

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20 (patch)-http://ip:5000/esb/client/membership-orange?style=plastic"></a>


##### Enviar

###### Entrada:

```typescript
{
	id_client:number
}
```

###### Salida:

```typescript
{
    status : number, // 200 = ok   400 = wrong
    msj : "Ahora cuenta con una membresia"  /  "Error al obtener membresia ",
    data : cualquier objeto [], {}, string, etc
}
```

#### Restablecer contraseña

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reset-orange?style=plastic"></a>


##### Enviar

###### Entrada:

```typescript
{
	id_c: number
	new_pass : string

}
```

###### Salida:

```typescript
{
    status : number, // 200 = ok   400 = wrong
    msj : "Se ha enviado un correo para reestablecer la clave"  /  "Error al reestablecer la clave",
    data : cualquier objeto [], {}, string, etc
}
```

#### Seguir equipo

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/client/reset-orange?style=plastic"></a>



##### Enviar

###### Entrada:

```typescript
{
	id_cliente: number
    	id_team: number
}

```

###### Salida:

```typescript
{
    status : number, // 200 = ok   400 = wrong
    msj : "Error al seguir a un equipo",
    data : cualquier objeto [], {}, string, etc

}
```

#### Eliminar equipo

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip:5000/esb/team/delete/:id-orange?style=plastic"></a>



###### Salida:

```typescript
{
    status : number, // 200 = ok   400 = wrong
    msj : "Equipo eliminado"  /  "Error al eliminar equipo",
    data : cualquier objeto [], {}, string, etc

}
```

#### Ver notificaciones

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/notifications-orange?style=plastic"></a>



>  QUERY PARAM --id--

> Ejemplo : http://ip:5000/esb/team/?id=2

###### Salida:

```typescript
{
    status : number, // 200 = ok   400 = wrong
    msj : "Se envia las notificaciones",
   data :  [
            {
                id_news :number,
                id_team : number,
                name_team : string
            }
        ]
}
```
#### Unirse a quiniela

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000//esb/client/quiniela-orange?style=plastic"></a>


###### Entrada:

```typescript
{
	id_client : number,
	id_game : number,
   	result_1 : number,
	result_2: number
}
```

###### Salida:

```typescript
{
    status : number, // 200 = ok   400 = wrong
    msj : "Estado de la quiniela actualizado"  /  "Error al actualizar el estado de la persona",
    data : cualquier objeto [], {}, string, etc
}
```
#### CONSULTAS Y ESTADISTICAS POR CLIENTE
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/client/reports-orange?style=plastic"></a>

> En los endpoints solo se especificará lo enviado en **data** y/o en **msj**

~~~ typescript
{
    status : number, // 200 = ok   500 = wrong
    msj : string,
    data : cualquier objeto [], {}, string, etc
}
~~~
##### Jugadores o Técnico menores a X años

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/person/-orange?style=plastic"></a>

> QUERY PARAM **equipo**
>  Ej : http://ip:5000/esb/client/reports/person/?equipo=2

###### Salida:

```typescript
data :  [
            {
                id_person : number,
                name : string,
                lastname : string,
                photo : string,
                id_team : number,
                name_team : string
            }
        ]

```
##### Jugadores o Técnico mayores a X años

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/person/higher-orange?style=plastic"></a>

> QUERY PARAM **edad**
>  Ej : http://ip:5000/esb/client/reports/person/higher/?edad=2

###### Salida:

```typescript
data :  [
            {
                id_person : number,
                name : string,
                lastname : string,
                photo : string
                age : number
            }
        ]
```
##### Jugadores o Técnico menores a X años

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/person/lower-orange?style=plastic"></a>

> QUERY PARAM **edad**
>  Ej : http://ip:5000/esb/client/reports/person/lower/?edad=2

###### Salida:

```typescript
data :  [
            {
                id_person : number,
                name : string,
                lastname : string,
                photo : string
                age : number
            }
        ]
```
##### Equipos que participaron en X competición

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/competition/team/-orange?style=plastic"></a>

> QUERY PARAM **competicion**
>  Ej : http://ip:5000/esb/client/reports/competition/team/?competicion=2

###### Salida:

```typescript
data :  [
            {
                id_competition : number,
                name_competition : string,
                id_team : number,
                name_team : string
            }
        ]
```
##### Equipos de X país

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/country/team/-orange?style=plastic"></a>

> QUERY PARAM **pais**
>  Ej : http://ip:5000/esb/client/reports/country/team/?pais=2

###### Salida:

```typescript
data :  [
            {
                id_country : number,
                name_country : string,
                id_team : number,
                name_team : string
            }
        ]
```
##### Equipos  X años de antiguadad

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/team/age-orange?style=plastic"></a>

> QUERY PARAM **edad**
>  Ej : http://ip:5000/esb/client/reports/country/team/age/?edad=2

###### Salida:

```typescript
data :  [
            {
                id_team : number,
                name_team : string,
                age : number
            }
        ]

```
##### Estadios en X país

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/country/stadium/-orange?style=plastic"></a>

> QUERY PARAM **pais**
>  Ej : http://ip:5000/esb/client/reports/country/stadium/?pais=2

###### Salida:

```typescript
data :  [
            {
                id_stadium : number,
                name_stadium : string,
                id_country : number,
                name_country : string
            }
        ]
```
##### Estadios con capacidad menor o igual a X

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/stadium/capacity-orange?style=plastic"></a>

> QUERY PARAM **capacidad**
>  Ej : http://ip:5000/esb/client/reports/stadium/capacity/?capacidad=2

###### Salida:

```typescript
data :  [
            {
                id_stadium : number,
                name_stadium : string,
                capacidad : number
            }
        ]
```
##### Histórico de partidos de X equipo

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)- http://ip:5000/esb/client/reports/team/game/-orange?style=plastic"></a>

> QUERY PARAM **equipo**
>  Ej : http://ip:5000/esb/client/reports/team/game/?equipo=2

###### Salida:

```typescript
data :  [
            {
                id_team : number,
                name_team : string,
                id_game : number
                date_game : date,
                id_stadium : number,
                name_stadium : string
                viewers : number,
                winner : string,
                result : string
            }
        ]
```
##### Equipos en los que ha estado o dirigido X técnico o jugador

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/team/person/-orange?style=plastic"></a>

> QUERY PARAM **persona**
>  Ej : http://ip:5000/esb/client/reports/team/person/?persona=2

###### Salida:

```typescript
data :  [
            {
                id_team : number,
                name_team : string,
                id_person : number,
                name_person : string
            }
        ]
```
##### Partidos donde hubo al menos X goles

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/game/goal/-orange?style=plastic"></a>

###### Salida:

```typescript
data :  [
            {
                id_game : number,
                name_game : string,
                goals : number
            }
        ]
```
##### Jugadores con más X incidencias en Y competición, (de Z año)

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/person/competition/incidents-orange?style=plastic"></a>

> QUERY PARAM **competicion**
> QUERY PARAM **incidente**
> QUERY PARAM **anio**
>  Ej : http://ip:5000/esb/client/reports/person/competition/incidents/?competicion=1&?incidente=2&anio=2011

###### Salida:

```typescript
data :  [
            {
                id_game : number,
                name_game : string,
                total_incidents : number,
                name_incidents :string
                id_competition : number,
                name_competition : string,
                id_person : number,
                name_person : string,
                year: string
            }
        ]
```
##### Cantidad de X competiciones que ha ganado Y equipo

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/team/competitions/-orange?style=plastic"></a>

> QUERY PARAM **equipo**
>  Ej : http://ip:5000/esb/client/reports/team/competitions?equipo=2

###### Salida:

```typescript
data :  [
            {
                id_team : number,
                name_team : string,
                total_competitions : number
            }
        ]
```
##### Listado de partidos en X año

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/games/year/-orange?style=plastic"></a>

> QUERY PARAM **anio**
>  Ej : http://ip:5000/esb/client/reports/games/year?anio=2

###### Salida:

```typescript
data :  [
            {
                id_game : number,
                name_game : string,
                year : number
            }
        ]
```
##### Listado de partidos entre X equipo contra Y equipo

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/client/reports/games/teams/-orange?style=plastic"></a>

> QUERY PARAM **local**
>QUERY PARAM **visitante**
>  Ej : http://ip:5000/esb/client/reports/games/teams?local=2&?=visitante=3

###### Salida:

```typescript
data :  [
            {
                id_game : number,
                name_game : string,
                id_team_local : number,
                team_local : string,
                id_team_visit : number,
                team_visit : string,
                result : string,
                date_game : date
            }
        ]
```
### **EMPLEADOS**
#### CRUD Estadio
##### Crear estadio

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/stadium-blue?style=plastic"></a>


###### Entrada:

```typescript
{
    name : string,
    fundation_date : date,
    capacity: number,
    id_country : number,
    address: string,
    state: string,
    photo : string //base64
}
```

###### Salida:

```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Estadio creado con éxito"  / "Error al crear el estadio",
    data : [] // Se podría devolver la información del estadio creado o no devolver nada (?)
}
```
##### Actualizar estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip/stadium-blue?style=plastic"></a>

###### Entrada:
```typescript
{
    id : number,
    name : string,
    fundation_date : date,
    capacity: number,
    id_country : number,
    address: string,
    state: string,
    photo : string //base64
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Estadio actualizado" / "Error al actualizar estadio",
    data : [] // Se podría devolver la información del estadio                                                    actualizado o no devolver nada (?)
}
```
##### Ver estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip/stadium:id-blue?style=plastic"></a>

> QUERY PARAM **id**
>  Ej :  ip/stadium/?id=2
> * Si viene el query param se manda la información del estadio correspondiente.
> * Sino, se mandan la información de todos los estadios.


###### Salida:
* Información de todos los estadios
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de los estadios" / "Error al obtener los estadios",
    data : [
               {
                      id : number,
                      name : string,
                      fundation_date : date,
                      capacity: number,
                      id_country : number,
                      address: string,
                      state: string,
                      photo : string //base64
               },
               {
                     id : number,
                     name : string,
                     fundation_date : date,
                     capacity: number,
                     id_country : number,
                     address: string,
                     state: string,
                     photo : string //base64
                },
            …
       ]
}
```
* Un estadio
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información del estadio" / "Error al obtener el estadio",
   data : {
                id : number,
                name : string,
                fundation_date : date,
                id_country : number,
                photo : string
             }
}
```
##### Eliminar estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip/stadium:id-blue?style=plastic"></a>

> QUERY PARAM **id**
>  Ej :  ip/stadium/?id=2


###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Estadio eliminado" / "Error al eliminar el estadio",
    data : [] 
}
```
#### CRUD Equipo
##### Crear equipo

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/team-blue?style=plastic"></a>


###### Entrada:

```typescript
{
    name : string,
    fundation_date : date,
    id_country : number
    photo : string //base64
}
```

###### Salida:

```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Equipo creado con éxito"  / "Error al crear equipo",
    data : [] // Se podría devolver la información del equipo creado o no devolver nada (?)
}
```
##### Actualizar equipo
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip/team-blue?style=plastic"></a>

###### Entrada:
```typescript
{
    id : number,
    name : string,
    fundation_date : date,
    id_country : number,
    photo : string //base64
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Equipo actualizado" / "Error al actualizar equipo",
    data : [] // Se podría devolver la información del equipo actualizado o no devolver nada (?)
}
```
##### Ver equipo
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip/team:id-blue?style=plastic"></a>

> QUERY PARAM **id**
>  Ej :  ip/team/?id=2
> * Si viene el query param se manda la información del equipo correspondiente
> * Sino, se mandan la información de todos los equipos.


###### Salida:
* Información de todos los equipos
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de los equipos" / "Error al obtener los equipos",
    data : [
           {
                id : number,
                name : string,
                fundation_date : date,
                id_country : number,
                photo : string
             },
           {
                id : number,
                name : string,
                fundation_date : date,
                id_country : number,
                photo : string
             },
            …
     ]
}
```
* Un Equipo
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de los equipos" / "Error al obtener los equipos",
   data : {
                id : number,
                name : string,
                fundation_date : date,
                id_country : number,
                photo : string
             }
}
```
##### Eliminar equipo
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip/team:id-blue?style=plastic"></a>

> QUERY PARAM **id**
>  Ej :  ip/team/?id=2


###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Equipo eliminado" / "Error al eliminar el equipo",
    data : [] 
}
```

#### CRUD Partido
##### Obtener los datos 
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/competition:championship=id-blue?style=plastic"></a>

> URL : http://ip:5000/esb/competition?championship=id
###### Entrada:
> * Si viene championship en query param se manda la información de la competencia correspondiente.
> * Sino, se mandan la información de todas las competencias.

```typescript
{
    id : number,
    name : string,
    fundation_date : date,
    id_country : number,
    photo : string //base64
}
```
###### Salida:
* Información de todos las competencias
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de las competencias" / "Error al obtener las competencias",
    data :[
{ year : number, type : string, champion_team : string, country : name },
{ year : number, type : string, champion_team : string, country : name },
… 
     ]
}
```
* Una competencia
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de la competencia" / "Error al obtener la competencia",
    data :[
        { year : number, type : string, champion_team : string, country : name },
        { year : number, type : string, champion_team : string, country : name }
    ]
}
```
##### Crear una Liga
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/league-blue?style=plastic"></a>

###### Enviar:
```typescript
{
    name: string,
    description: string,
    type: number
}
```
###### Respuesta:
```typescript
{
    msj : { 
            msj:”league was created successfully”, 
            idLeague: number 
          }  /  "Error al crear partido"
}
```
##### Crear competencia
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/competition-blue?style=plastic"></a>

###### Enviar:

```typescript
{
    league: number,
    year : number,
    champion_team : number,
}
```
###### Respuesta:

```typescript
{
    msj : 
    { 
        msj:”competition created successfully”, 
        idChampionship: number 
    }  /  "Error al crear partido"
}
```
##### Actualizar competencia
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/competencia/-blue?style=plastic"></a>

###### Enviar:

```typescript
{
    league: number,
    year : number,
    champion_team : number,
}
```
###### Respuesta:

```typescript
{
    msj : 
    { 
        msj:”competition updated successfully”, 
        idChampionship: number 
    }  //  "Error al actualizar partido"
}
```
##### Eliminar competencia
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/competencia/{id}-blue?style=plastic"></a>

###### Respuesta:

```typescript
{
    msj : 
    { 
        msj:”Operation completed successfully”, 
        idChampionship: number 
    }   //"Error al eliminar partido"

}
```
##### Acciones Empleado
 1. Transferir un jugador de un equipo a otro, los jugadores deberán tener su propia bitácora de los equipos en los que han militado y de qué fecha a que fecha jugó para ese equipo.
 <a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/transfer~player-blue?style=plastic"></a>

###### Entrada:

```typescript
{
    id_player: number,
    id_team_origin : number,
    id_team_destination : number,
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Jugador actualizado"  / "Error al transferir el jugador",
    data : []
}
```
* Considerar que en este endpoint se debe guardar internamente la información en la **bitácora de transferencias**
```typescript
{
              id:number,
              id_player: number, 
              id_team_origin : number,
              id_team_destination : number,
              transfer_date: date,
              team_origin_date: date,
}
```
###### De lo solicitado anteriormente surge el endpoint para obtener los datos de la bitácora de transferencias.
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip/transfer~player-blue?style=plastic"></a>

###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de la bitácora de transferencias"  / "Error al obtener la información de la bitácora de transferencias",
    data : [
           {
              id:number,
              id_player: number, 
              id_team_origin : number,
              id_team_destination : number,
              transfer_date: date,
              team_origin_date: date,
          }
    ]
}
```
2. Transferir un técnico de un equipo a otro, los jugadores deberán tener su propia bitácora de los equipos en los que han militado y de qué fecha a que fecha jugó para ese equipo.
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/transfer~coach-blue?style=plastic"></a>

###### Entrada:

```typescript
{
    id_coach: number,
    id_team_origin : number,
    id_team_destination : number,
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Jugador actualizado"  / "Error al transferir el jugador",
    data : []
}
```
* Considerar que en este endpoint se debe guardar internamente la información en la **bitácora de transferencias**
```typescript
{
              id:number,
              id_coach: number, 
              id_team_origin : number,
              id_team_destination : number,
              transfer_date: date,
              team_origin_date: date,
}
```
###### De lo solicitado anteriormente surge el endpoint para obtener los datos de la bitácora de transferencias.
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip/transfer~log~coach:id=id_coach-blue?style=plastic"></a>

> http://ip/transfer-log-coach?id=id_coach
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de la bitácora de transferencias"  / "Error al obtener la información de la bitácora de transferencias",
    data : [
           {
              id:number,
              name: string, 
              id_team_origin : number,
              team_origin: string,
              id_team_destination : number,
              team_destinantion: string,
              transfer_date: date,
              team_origin_date: date,
          }
    ]
}
```
3. Podrán cambiar el estado de un partido (Sin iniciar, en curso, finalizado, suspendido)

* Se puede hacer uso del mismo endpoint de actualizar un partido (PUT ->  ip/soccer-game), sabiendo que el atributo state solo puede tener los valores de : “unstarted”, “in-progress”, “completed” , “suspended”

4) Podrán agregar incidencias a un partido media vez se encuentre en curso

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/add~incidence-blue?style=plastic"></a>

###### Entrada:

```typescript
{
    id_game: number,
    incidence : string,
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Incidencia agregada con éxito"  / "Error al intentar agregar incidencia",
}
```
5) Cambiar el estado de un jugador o técnico

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip/add~incidence-blue?style=plastic"></a>

###### Entrada:

```typescript
{
    id_person: number,
    state : number,
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Estado de persona actualizado"  // "Error al intentar actualizar el estado de la persona",
}
```
6) Publicar una noticia acerca de un equipo.

### Noticias
##### Crear noticia
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/notice-blue?style=plastic"></a>

###### Entrada:

```typescript
{
     id_team: number,
     title: string,
    description : string, 
    date: date
}
```
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Ha insertado una noticia con éxito"  / "Error al guardar una noticia",
    data : [] // Se podría devolver la información de la noticia o no devolver nada (?)
}
```
##### Obtener la noticia
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip/notice-blue?style=plastic"></a>

> **Query params:**
> * id (idi de la noticia)
> * team (id del team)

> **Ejemplo:**
>   - ip/notice?team=1
>   - ip/notice?id=10

> **Explicación:**
> * Si en query params viene team entonces devolvemos las noticias correspondientes a ese equipo.
> * Si no vienen query params devolvemos todas la noticias de todos los equipos.
> * Si viene id, entonces devolvemos la información de la noticia con el id especificado.

###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong,
    msj : "Información de la  noticia con éxito"  // "Error al obtener una noticia",
    data : [
         {
                 id_team: number,
                 title: string,
                 description : string, 
                 date: date
         }
    ]  
}
```
### **ADMINISTRADOR**
###### PERSONA (UTILIZADOS POR ADMINISTRADORES O EMPLEADOS)
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20-http://ip:5000/esb/person/-A7F707?style=plastic"></a>

##### En los endpoints solo se especificará lo enviado en **data** y/o en **msj**
###### Formato de Salida : 
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong
    msj : string,
    data : cualquier objeto [], {}, string, etc
}
```
##### Crear Persona
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/person/create-A7F707?style=plastic"></a>

###### Entrada:

```typescript
{
    name : string,
    lastname : string,
    birthday : date,
    nationality : number,
    id_stand : number
    status : string,
    id_team : number,
    photo : string
}
```
###### Salida:
```typescript
{
    msj : "Jugador o DT creado con exito"  /  "Error al crear jugador o dt"
}
```
##### Actualizar Persona
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/person/update-A7F707?style=plastic"></a>

###### Entrada:

```typescript
{
    id_person : number,
    name : string,
    lastname : string,
    birthday : date,
    nationality : number,
    id_stand : number
    status : string,
    id_team : number,
    photo : string
}
```
###### Salida:
```typescript
{
    msj : "Jugador o DT actualizado"  /  "Error al actualizar jugador o dt"
}
```
##### Ver Persona
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/person/read/-A7F707?style=plastic"></a>

> Ej :  http://ip:5000/esb/person/read/?id=2

###### Salida:
```typescript
{
    data :  [
            {
                id_person : number
                name : string,
                lastname : string,
                birthday : date,
                nationality : string,
                id_stand :number,
                stand : string
                status : string,
                id_team : number,
                name_team : string
                photo : string
            }
        ]
}
```
##### Eliminar Persona
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip:5000/esb/person/delete/:id-A7F707?style=plastic"></a>

> Ej : http://ip:5000/esb/person/delete/2

###### Salida:
```typescript
{
    msj : "Jugador o DT eliminado"  /  "Error al eliminar jugador o dt"
}
```
##### Actualizar estado Persona
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/user/admin/update-A7F707?style=plastic"></a>

###### Entrada:
```typescript
{
    id_user : number,
    id_status : number
}
```
###### Salida:
```typescript
{
    msj : "Estado de usuario actualizado" / "Error al actualizar el estado del usuario"
}
```
#### Reportes
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20-http://ip:5000/esb/admin/report/-A7F707?style=plastic"></a>

##### En los endpoints solo se especificará lo enviado en **data** y/o en **msj**
###### Formato de Salida : 
###### Salida:
```typescript
{
    status : number, // 200 = ok   500 = wrong
    msj : string,
    data : cualquier objeto [], {}, string, etc
}
```
##### Suscritos a X equipo:
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/subscribe/-A7F707?style=plastic"></a>

> Ej :  http://ip:5000/esb/admin/report/subscribe/1

###### Salida:
```typescript
{
    data : [
        {
            equipo : string,
            id_user : number,
            name : string,
            lastname :string
        }
    ]

}
```
##### Con o sin membresia
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/membership-A7F707?style=plastic"></a>

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        membership : boolean
    }
]
```
##### Top cantidad de membresias
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/memberships-A7F707?style=plastic"></a>

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        memberships : number
    }
]
```
##### Más dinero gastado
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/expenses-A7F707?style=plastic"></a>

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        expenses : number
    }
]
```
##### Usuarios por X pais
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/country/-A7F707?style=plastic"></a>

> Ej: http://ip:5000/esb/admin/report/country/?pais=1

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        country : string
    }
]
```
##### Usuarios por X genero
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/genre/-A7F707?style=plastic"></a>

> Ejemplo: http://ip:5000/esb/admin/report/genre/?genero=1

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        genre : string
    }
]
```
##### Usuarios por X edad
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/age/-A7F707?style=plastic"></a>

> Ejemplo: http://ip:5000/esb/admin/report/age/?edad=19

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        edad : number
    }
]
```
##### Empleados con MAS/MENOS noticias
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/news-A7F707?style=plastic"></a>

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        news : number
    }
]
```
##### Empleados con MAS/MENOS noticias por X equipo
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/news/team/-A7F707?style=plastic"></a>

> ej:  http://ip:5000/esb/admin/report/news/team/?equipo=2

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        edad : number
    }
]
```
##### Bitácora
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/admin/report/logs-A7F707?style=plastic"></a>

###### Salida:
```typescript
data : [
    {
        id_user : number,
        name : string,
        lastname :string,
        log : string,
        created : date,
        is_error : boolean
    }
]
```
##### Actualizar estado del usuario
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/user/admin/update/status-A7F707?style=plastic"></a>

###### Entrada:
```typescript
{
    id_user : number,
    status : string // “congelado” o “activo”
}
```
###### Salida:
```typescript
{
    msj : "Estado de usuario actualizado" / "Error al actualizar el estado del usuario"
}
```
### **USUARIO**
##### Crear Usuario

<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/user/add-74E6AD?style=plastic"></a>

###### Entrada:
```typescript
{
    no_id: ,
        name: “”,
    last_name: “”,
    password: “pass”,
    email: “@email.com” ,
    phone: ,
    photo : “”,
    gender: “”,
    birth_date : “”,
    signup_date: “”,
    address: “”,
    country: “”,
    type: ,
}
```
###### Salida:

```typescript
*200: {"status": true}
*409: {"status": false}  //error al guardar el usuario
```
##### Delete Usuario
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip:7500/user/delete-74E6AD?style=plastic"></a>

###### Entrada:
```typescript
{
	no_id: 5645
}
```
###### Salida:

```typescript
*200: {"status": true}
*409: {"status": false}  //error al guardar el usuario
```
##### Get Usuarios
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip/user/al-74E6AD?style=plastic"></a>

###### Entrada:
```typescript
{
}
```
###### Salida:

```typescript
*200: [
    {
    },
    {
     
    },
    {
        
    },
    {
    },
    {
       
    }
]
*409: {"status": false}  //error en sql
```
### **LOGIN**
#### Login
##### Delete Usuario
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/user/login-C98ADB?style=plastic"></a>

###### Entrada:
```typescript
{
    email : string,
    password : string
}
```
###### Salida:

```typescript
{
    msj : ""    //enviar msj de error si no se loguea
    data : {
        token : string,
        statusAccount:   // ‘Congelada’, ‘Activa“
    }
}
```
> Nota
> Password: contraseña encriptada con cryptoJs, contraseña para encriptar: ‘SiSaleSA_’

Respueseta :
~~~ typescript
*200{
 // all data of user colocar aca que datos devuelve el backend
}
*409: {"status": false}  //error al guardar el usuario
~~~
##### Nuevo Usuario
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/user/client/create-C98ADB?style=plastic"></a>

###### Entrada:
```typescript
{
    name : string,
    lastname : string,
    password : string,
    email : string,
    telephone : string,
    photo : string,    // ejemplo.jpg
    genre : string,   // F, M, U
    birthday : date,
    created : date,
    address : string,
    id_country : number,
    id_status : number,
    id_rol : number,
    age : number,
    membership : boolean
}
```
###### Salida:

```typescript
{
    msj : "Usuario creado con exito"  /  "Error al crear el usuario"
}
```
##### Actualizar usuario
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/user/client/update-C98ADB?style=plastic"></a>

###### Entrada:
```typescript
{
    id: number,
    name : string,
    lastname : string,
    password : string,
    email : string,
    telephone : string,
    photo : string,    
    genre : string,  
    birthday : date,
    address : string,
    id_country : number,
    age : number
}
```
###### Salida:

```typescript
msj : "Datos actualizado"  /  "Error al actualizar los datos"
*200: {"status": “Datos actualizado”}
*409: {"status": "Error al actualizar los datos"}  //error al guardar el usuario	
```
##### Ver Perfil de usuario 
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/user/client/:id-C98ADB?style=plastic"></a>

> Ej :  http://ip:5000/esb/user/client/1

###### Salida:
```typescript
{
    data :  {
            name : string,
            lastname : string,
            email : string,
            telephone : string,
            photo : string,
            genre : string,
            birthday : date,
            address : string,
            id_country : number,
            country : string,
            age : number
        }

}
```
##### Verificacion de correo
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PATCH)-http://ip:5000/esb/user/client/:id-C98ADB?style=plastic"></a>

###### Entrada:
```typescript
{
    id_user : number,
    verify : boolean
}
```
###### Salida:

```typescript
msj : "Correo verificado"  /  "Error al verificar correo"
```
### **ESTADIO**
#### CRUD ESTADIO
##### Endpoints utilizados por **empleados** o **admins**
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint-http://ip:5000/esb/stadium/-FA0399?style=plastic"></a>

###### En los endpoints solo se especificará lo enviado en **data** y/o en **msj**
###### Formato de Salida : 
~~~ typescript
{
    status : number, // 200 = ok   500 = wrong
    msj : string,
    data : cualquier objeto [], {}, string, etc
}
~~~
##### Crear estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/stadium-FA0399?style=plastic"></a>

###### Entrada:
```typescript
{
    name_stadium : string,
    inauguration_date : date,
    id_country : number,
    photo_stadium : string, //base64
    capacity :number,
    status_stadium : string,
    address : string
}
```
###### Salida:

```typescript
{
    msj : "Estadio creado con exito"  /  "Error al crear estadio"
}
```
##### Actualizar estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/stadium-FA0399?style=plastic"></a>

###### Entrada:
```typescript
{
    id_stadium : number,
    name_stadium : string,
    inauguration_date : date,
    id_country : number,
    photo_stadium : string,
    capacity :number,
    status_stadium : string,
    address : string
}
```
###### Salida:

```typescript
{
    msj : "Estadio actualizado"  /  "Error al actualizar estadio"
}
```
##### Ver estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/stadium-FA0399?style=plastic"></a>

> Ej : http://ip:5000/esb/stadium/?id=2

###### Salida:
```typescript
{
    data :  [
            {
                id_stadium : number,
                name_stadium : string,
                inauguration_date : date,
                id_country : number,
                country : string,
                photo_stadium : string,
                capacity :number,
                status_stadium : string,
                address : string
            }
        ]
}
```
##### Eliminar estadio
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip:5000/esb/stadium/:id-FA0399?style=plastic"></a>

> Ej : Ej :  http://ip:5000/esb/stadium/2

###### Salida:
```typescript
{
   msj : "Estadio eliminado"  /  "Error al eliminar estadio"
}
```
### **PARTIDO**
#### CRUD Partido
##### Endpoints utilizados por **empleados** o **admins**
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint-http://http://ip:5000/esb/game/-F9F501?style=plastic"></a>

###### En los endpoints solo se especificará lo enviado en **data** y/o en **msj**
###### Formato de Salida : 
~~~ typescript
{
    status : number, // 200 = ok   500 = wrong
    msj : string,
    data : cualquier objeto [], {}, string, etc
}
~~~
##### Crear partido
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip:5000/esb/game-F9F501?style=plastic"></a>

###### Entrada:
```typescript
{
    date_game : date,
    id_stadium : number,
    viewers : number,
    local_team : number,
    visiting _team : number,
    result : string,
    status_game : string,
    winner : number
}
```
###### Salida:

```typescript
{
    msj : "partido creado con exito"  /  "Error al crear partido"
}
```
##### Actualizar partido
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(PUT)-http://ip:5000/esb/game-F9F501?style=plastic"></a>

###### Entrada:
```typescript
{
    id_game : number
    date_game : date,
    id_stadium : number,
    viewers : number,
    local_team : number,
    visiting _team : number,
    result : string,
    winner :number
}
```
###### Salida:

```typescript
{
    msj : "partido actualizado"  /  "Error al actualizar partido"
}
```
##### Ver partido
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(GET)-http://ip:5000/esb/game/:id-F9F501?style=plastic"></a>

> QUERY PARAM **id**
> Ej :  http://ip:5000/esb/game/?id=2

###### Salida:
```typescript
{
    data :  [
            {
                id_game : number
                date_game : date,
                id_stadium : number,
                name_stadium : string
                viewers : number,
                local_team : number,
                name_team_local : string,
                visiting _team : number,
                name_team_visiting : string,
                result : string,
                winner : string
            }
        ]
}
```
##### Eliminar partido
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(DELETE)-http://ip:5000/esb/game/:id-F9F501?style=plastic"></a>

> Ej :  http://ip:5000/esb/game/2

###### Salida:
```typescript
{
   msj : "partido eliminado"  /  "Error al eliminar partido"
}
```
### **PREDICCIÓN**
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/predict/-F9014C?style=plastic"></a>

###### Entrada:
```typescript
{
    team1_id: 
    team2_id: 
    //time_min: 90 min

}
```
###### Salida:

```typescript
{
    *200: {
        "status": true,
        team1: 5    //integer de los goles
        team2: 5    //integer de los goles
        graphic: base64 // “” enviar imagen o cadena vacia
    }
    *409: {"status": false}  //error al guardar el usuario
}
```
### **QUINELA**
<a href="https://gist.github.com/adhipg/1600028"><img alt="Tabla Country" src="https://img.shields.io/badge/Endpoint%20(POST)-http://ip/quiniela/create-26C6BE?style=plastic"></a>

###### Entrada:
```typescript
{
    team1_id: 
    team2_id: 
    goals_teams1:
    goals_teams2:
}
```
###### Salida:

```typescript
{
   *200:{
            "status": true,
        }
    *409: {"status": false}  //error al guardar el usuario	
}
```
