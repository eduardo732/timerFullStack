# Título del Proyecto

Cronómetro 

## Comenzando 🚀

Proyecto full stack react-node-pgsql, con contenedor docker


### Instalación 🔧

Al utilizar docker basta con ejecutar el siguiente comando:
-sudo docker-compose up --build

Luego de que se arme lo necesario ir al link http://localhost:3000

En pgsql se debe crear una tabla "times" con los siguientes atributos (id: serial PK, seconds:text, minutes:text)
el archivo sql está en /pgSql

## Ejecutando las pruebas ⚙️

Se hicieron test en la parte del backend por lo que para ejecutarlos debe ejecutar en consola: sudo docker-compose run backend npm run test

### Analice las pruebas end-to-end 🔩

Las pruebas verifican 2 endpoints.
1- Obtener todos los tiempos guardados del cronómetro. debe obtener un status code 200 y una respuesta en json.
2- Agregar un tiempo, en el cual se pasan los minutos y segundos transcurridos en el cronometro.
Para este último existen 3 casos, el primero es donde se manda todo perfecto y responde con un status 200.
Los otros dos se mandan datos distintos a numeros, por lo que arroja un código 500.


## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [NODE](https://nodejs.dev/) - El framework web usado para el back
* [REACT](https://es.reactjs.org/) - El framework web usado para el front


## Autores ✒️

* **Eduardo Fuentes**  - [eduardo732](https://github.com/eduardo732) - (https://www.linkedin.com/in/eduardofuentesreyes/)

