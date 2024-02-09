use('CurriculumsVitae');



/*
// 1. Muestrame los registros que contengan estos intereses.

// Algunas pruebas para intereses
// Arte Contemporáneo
// 'Música','Deporte'

 const intereses_comun = ['IoT'];
// busca en el atributo intereses (lista), los intereses Programación y Musica y muestralos
 db.curriculums.find({intereses: {$in:intereses_comun}});

*/

//-------------------------------------------------------------------------------------------------

/*
// 2. Consulta que muestra los documentos que tengan el atributo habilidades definido y a traves 
// del forEach itera sobre todos los documentos para obtener al final la cantidad de herramientas
// por cada curriculum
let i = 1;
db.curriculums.find({habilidades: {$exists: true}},{habilidades: true, datos_personales:true}).forEach((doc) =>{
  print('[curriculum]:' + i++);
  print("Nombre y apellido: " + doc.datos_personales.nombre + " "+ doc.datos_personales.apellido);
  console.log("Cantidad de habilidades: " + doc.habilidades.length);
  print("Habilidades:", doc.habilidades);

});
*/

//-------------------------------------------------------------------------------------------------
/*

 //3.	Mostrar la proyección de trabajos realizados (solo mostrar estos campos)
 let y = 1;
 
db.curriculums.find({"laboral.trabajos": { $exists: true }}, {"laboral.trabajos": 1, datos_personales: true}).forEach((doc) => {
  print('[curriculum]:' + y++);
  print("Nombre y apellido: " + doc.datos_personales.nombre + " "+ doc.datos_personales.apellido);
  print("Cantidad de trabajos:" + doc.laboral.trabajos.length);
  print("Trabajos:", doc.laboral.trabajos);
}); 
*/


//-------------------------------------------------------------------------------------------------
 
/*
print("\n4. Curriculums con nivel 'Educacion Universitaria':");

const educaciones = ['Educación Universitaria'];
let posicion = 0;

db.curriculums.find({
  "educacion.nivel": { $exists: true },
  "educacion.nivel": { $in: educaciones }
}).forEach((doc) => {
  posicion++;
  print(`[Curriculum ${posicion} - ID: ${doc._id}]:`);
  print("Nombre y apellido: " + doc.datos_personales.nombre + " " + doc.datos_personales.apellido + "\n");
});

 */


//-------------------------------------------------------------------------------------------------


/*
// 5. Mostrar aquellos curriculums con más de un título 
// Valido si existe el atributo educacion, valido si existe el atributo titulo, si es ($gt significa >) mayor que 1 muestrame los documentos que cumplen con dicha condicion
db.curriculums.find({
  $and: [
    { educacion: { $exists: true } },
    { 'educacion.titulo': { $exists: true } },
    { $expr: { $gt: [{ $size: '$educacion.titulo' }, 1] } }
  ]
})
*/