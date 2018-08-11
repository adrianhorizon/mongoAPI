/*Algunos comandos importantes a tener en cuenta sobre MongoDB son:

mongo --help Muestra el menú de ayuda.

show dbs Muestra las bases de datos existentes en MongoDB.

use [name-db] Permite usar una base de datos determinada.

db.<collection>.insert({JSON-Document}) Permite crear una colección (tabla en MySQL) e insertar datos en una base de datos.

show collections Muestra las colecciones existentes.

db.createCollection('name-colletion') Crea una colección de manera explicita.

load('name-file.js') Permite cargar un archivo JavaScript a MongoDB.

mongo permite hacer scripts en javascript para ciertas funciones

// insertar un array json en documentos1 mongodb
//  b.ticker.insert(documentos1) mongoDb
// db.ticker.insertOne(documentos2)
// insertar multiples documentos
// db.ticker.insertMany([documento3,documento4])
// db.ticker.find().pretty() // para mostrar legibilidad en la base datos
 
*/
/*
 * > show collections
curso
> db.find()
2018-08-07T18:12:53.689-0500 E QUERY    [js] TypeError: db.find is not a function :
@(shell):1:1
> db.curso.find()
{ "_id" : ObjectId("5b6a27612519c252076e272b"), "name" : "Platzi" }
> db.createCollection("curso1")
{ "ok" : 1 }
> show collections
curso
curso1
> function hello() {
... print("hola")
... }
> hello()
 * 
 * 
*/

/*
buscar en mongo

db.ticker.find() // devuelve todos los documetnos

 *  db.ticker.findOne() devuelve un documento
*/

/*** CONSULTAS ***/
/* Para Consultar un documento donde se cumpla que el last_updated  sea igual que 1506462510*/
db.ticker.find({"last_updated" : "1506462510"})

/* Para consultar una informacion donde se cumplan las siguientes dos condiciones  */
/* que last_updated" sea igual a  "1506462510 */
/* Y que avaible_supply" sea igual que  "16588625.0 */
db.ticker.find({"last_updated" : "1506462510" , "avaible_supply" : "16588625.0"})

/* Colocando la funcion pretty()  se presenta la informacion de forma mas legile*/
db.ticker.find({"last_updated" : "1506462510" , "avaible_supply" : "16588625.0"}).pretty()


/* FindOne() es una funcion que hace lo que find(), pero combinada con la funcion pretty() y un limit 1 */
db.ticker.findOne({"last_updated" : "1506462510"})
/*Otra forma de hacerlo sería de la siguiente manera:*/
db.ticker.find({"last_updated" : "1506462510"}).limit(1).pretty()

/* Busca todos los valores que en last_updated sean mayores a  506462510*/
/* De donde $gt: equivale a mayor que */
db.ticker.find({"last_updated" : {$gt: "1506462510"}}).pretty()

/* Busca todos los valores que en last_updated sean menores a  506462510*/
/* De donde $lt: equivale a menor que */
db.ticker.find({"last_updated" : {$lt: "1506462511"}}).pretty()


/* Busca todos los valores que en last_updated sean menores o iguales a  506462510*/
/* De donde $lte: equivale a menor igual que */
db.ticker.find({"last_updated" : {$lte: "1506462511"}}).pretty()

/* Busca todos los valores que en last_updated sean mayores o iguales a  506462510*/
/* De donde $gt: equivale a mayor igual que */
db.ticker.find({"last_updated" : {$gte: "1506462510"}}).limit(3).pretty()

/*Para evitar que se muestren algunos campos de la consulta*/
/* De donde ,{id: 0,price_btc : 0, rank: 0} sirve para declarar los campos que no mostraremos */
db.ticker.find({"last_updated" : {$gte: "1506462510"}},{id: 0,price_btc : 0, rank: 0}).limit(2).pretty()