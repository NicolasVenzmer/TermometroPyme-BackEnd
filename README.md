 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg) 

## Presentacion del producto
![Product Presentation Image](https://i.ibb.co/TbfGrL5/landing.png)

## Descripcion

<p>Nuestro proyecto consta en hacer un benchmarking sobre la fundacion "Observatorio pyme" donde las Pymes podran realizar consultas de como se encuentra su empresa en el mercado.</p>
<p>A continuacion les dejamos un link para que vean el contexto del proyecto en el cual estamos trabajando.</p>
https://www.observatoriopyme.org.ar/la-fundacion/historia-y-actualidad/

## Tabla de contenidos

* [Integrantes](#Integrantes)
* [Tecnologia](#Tecnologia)
* [Instalacion](#Instalacion)
* [End-Points](#End-Points)
* [Base de datos](#Base-de-datos)
* [Recursos](#Recursos)
* [Flujo](#Flujo)

## Integrantes grupo 6

* Alcantara Yrigoyen, Stefano Guillermo <b>Legajo : 1058188</b>
* Camicha, Nicolas                      <b>Legajo : 1101634</b>
* Girardi, Facundo Martin               <b>Legajo : 1084454</b>
* Marchant Rojas, Luis Jose Javier      <b>Legajo : 1042891</b>
* Venzmer, Nicolas Alejandro            <b>Legajo : 1076345</b>

## Tecnologia

<img src="https://i.ibb.co/GR1VxFh/material-ui.png" width="64" height="64" /><img src="https://i.ibb.co/bsJMq4X/aps-504x498-small-transparent-pad-600x600-f8f8f8-u1.jpg" width="64" height="64" />

## Instalacion

## FrontEnd

* Descargar la aplicacion del repositorio https://gitlab.com/facundogirardi/aplicaciones-interactivas-frontend
* En la carpeta del proyecto ejecutar <b>npm install</b>
* <b>cd</b> aplicaciones-interactivas
* Luego dar <b>npm start</b>
* Se levantará en local http://localhost:3000/

## BackEnd

* El backend de la aplicacion se encuesta en ek siguiente repositorio https://gitlab.com/facundogirardi/aplicaciones-interactivas-backend
* En la carpeta del proyecto ejecutar <b>npm install</b>
* <b>cd</b> aplicaciones-interactivas
* Luego dar <b>npm start</b> o <b>nodemon --exec npm start</b> (Requiere tener instalado el nodemon*)
* Se levantará en local http://localhost:4000/
* Tambien se encuentra hosteado en Heroku https://api-benchmark-back.herokuapp.com/

## End-Points

El backend tiene configurado los siguientes endpoints :

<b><p>Contacto (/contacto)</b></p>
<p>Se utiliza para poder registrar los datos de contacto del usuario</p>
<p>Metodo : POST</p>

 * razonsocial: String
 * email: String
 * region: String
 * tamaño: String

<img src="https://i.ibb.co/R2Sn3JY/contacto.png"/>

<b><p>Registrar Usuario (/registration)</b></p>
<p>Se utiliza para poder registrar los usuarios de acceso a la aplicacion</p>
<p>Metodo : POST</p>

 * name: String
 * lastname: String
 * email: String
 * dni: String
 * password: String
 * root: String
 * date: Date

<img src="https://i.ibb.co/TLD9D1x/registro.png"/>

<b><p>Recuperar Usuarios (/tusuarios)</b></p>
<p>Se utiliza para poder recuperar la lista de usuarios existentes</p>
<p>Metodo : GET</p>

<img src="https://i.ibb.co/jTgLzzP/traerusuarios.png"/>

<b><p>Actualizar Usuario (/actualizacion)</b></p>
<p>Se utiliza para actualizar los usuarios de acceso a la aplicacion, la clave del usuario es el DNI</p>
<p>Metodo : PUT</p>

Campos actualizables

 * name: String
 * lastname: String
 * email: String
 * password: String

<img src="https://i.ibb.co/HXRVPrG/actualizacion-user.png"/>

<b><p>Eliminar Usuario (/usr)</b></p>
<p>Se utiliza para eliminar los usuarios de acceso a la aplicacion</p>
<p>Metodo : POST</p>

Campos para delete

 * id: String

<img src="https://i.ibb.co/qFvm98z/2020-11-20-10-37-36-Window.png"/>

<b><p>Login Usuario (/actualizacion)</b></p>
<p>Se utiliza para acceder a la aplicacion</p>
<p>Metodo : POST</p>

Campos

 * email: String
 * password: String

 Aclaracion, la password se guarda hasheada y se encripta y desencripta segun la necesidad

<img src="https://i.ibb.co/zsmS41j/2020-11-20-10-44-27-Window.png"/>

<b><p>Crear encuestas (/encuesta)</b></p>
<p>Se utiliza para generar nuevas encuestas para el usuario</p>
<p>Metodo : POST</p>

Campos

 * titulo: String
 * sector: String
 * tamaño: String
    
 * pregunta1: String
 * P1respuesta1: String
 * P1opcion1: String
 * P1respuesta2: String
 * P1opcion2: String
 * P1respuesta3: String
 * P1opcion3: String
 * P1respuesta4: String
 * P1opcion4: String
 * P1respuesta5: String
 * P1opcion5: String
 * P1valorref1: String    
    
 * pregunta2: String
 * P2respuesta1: String
 * P2opcion1: String
 * P2respuesta2: String
 * P2opcion2: String
 * P2respuesta3: String
 * P2opcion3: String
 * P2respuesta4: String
 * P2opcion4: String
 * P2respuesta5: String
 * P2opcion5: String
 * P2valorref1: String
    
 * pregunta3: String
 * P3respuesta1: String
 * P3opcion1: String
 * P3respuesta2: String
 * P3opcion2: String
 * P3respuesta3: String
 * P3opcion3: String
 * P3respuesta4: String
 * P3opcion4: String
 * P3respuesta5: String
 * P3opcion5: String
 * P3valorref1: String
    
 * pregunta4: String
 * P4respuesta1: String
 * P4opcion1: String
 * P4respuesta2: String
 * P4opcion2: String
 * P4respuesta3: String
 * P4opcion3: String
 * P4respuesta4: String
 * P4opcion4: String
 * P4respuesta5: String
 * P4opcion5: String
 * P4valorref1: String

 * pregunta5: String
 * P5respuesta1: String
 * P5opcion1: String
 * P5respuesta2: String
 * P5opcion2: String
 * P5respuesta3: String
 * P5opcion3: String,
 * P5respuesta4: String
 * P5opcion4: String
 * P5respuesta5: String
 * P5opcion5: String
 * P5valorref1: String

 * date: Date

<img src="https://i.ibb.co/GH7j9jP/crearencuesta.png"/>

<b><p>Eliminar encuesta (/bencuesta)</b></p>
<p>Se utiliza para eliminar las encuestas generadas</p>
<p>Metodo : POST</p>

Campos para delete

 * id: String

<img src="https://i.ibb.co/nCBMqbL/eliminar.png"/>

<b><p>Recuperar Encuestas (/tencuesta)</b></p>
<p>Se utiliza para poder recuperar la lista de encuestas existentes</p>
<p>Metodo : GET</p>

<img src="https://i.ibb.co/FVBq1RM/getencuestas.png"/>

<b><p>Recuperar Encuestas por Titulo (/encuestaid)</b></p>
<p>Se utiliza para poder recuperar filtrada la lista de encuestas por titulo</p>
<p>Metodo : POST</p>

<img src="https://i.ibb.co/D843TLt/2020-11-20-17-03-06-Window.png"/>

<b><p>Crear encuestas Resuestas(/encuestaResp)</b></p>
<p>Se utiliza para poder guardar los resultados de las encuestas para luego evaluar en el bench</p>
<p>Metodo : POST</p>

Campos

 * titulo: String
 * sector: String
 * tamaño: String
    
 * pregunta1: String
 * P1respuesta: Number
 * P1valorref: Number    
    
 * pregunta2: String
 * P2respuesta: Number
 * P2valorref: Number
    
 * pregunta3: String
 * P3respuesta: Number
 * P3valorref: Number
    
 * pregunta4: String
 * P4respuesta: Number
 * P4valorref: Number

 * pregunta5: String
 * P5respuesta: Number
 * P5valorref: Number
 
 * date: Date

<img src="https://i.ibb.co/FWVm70C/2020-11-25-12-27-00-Microsoft-Store.png"/>

## Base de Datos

<p>Para la base de datos utilizamos MongoDB</p>
<p>Poseemos el siguiente Cluster configurado <b>cluster0.02zbr.mongodb.net</b></p>
<p>En la ruta /api-benchmark/models, se encuentran los modelos de datos para los documentos</p>

## Recursos

- GIT: <https://gitlab.com/facundogirardi/api-benchmarking>
- GIT: <https://gitlab.com/facundogirardi/aplicaciones-interactivas-backend>