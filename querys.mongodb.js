use('CurriculumsVitae');


// 1. Muestrame los registros que contengan estos intereses.

// Algunas pruebas para intereses
// Arte Contemporáneo
// 'Música','Deporte'

 const intereses_comun = ['IoT'];
// busca en el atributo intereses (lista), los intereses Programación y Musica y muestralos
 db.curriculums.find({intereses: {$in:intereses_comun}});




// 2. Consulta que muestra los documentos que tengan el atributo habilidades definido y atraves del forEach itera sobre todos los documentos para obtener al final la cantidad de herramientas por cada curriculum
let i = 1;
db.curriculums.find({habilidades: {$exists: true}},{habilidades: true}).forEach((doc) =>{
  console.log("Cantidad de habilidades: " + doc.habilidades.length + " [documento]: "+ i++);
  print("Habilidades:", doc.habilidades);
});




 //3.	Mostrar la proyección de trabajos realizados (solo mostrar estos campos)
 let y = 1;
db.curriculums.find({"laboral.trabajos": { $exists: true }}, {"laboral.trabajos": 1}).forEach((doc) => {
  print("Cantidad de trabajos:" + doc.laboral.trabajos.length + "[documento]:" + y++);
  print("Trabajos:", doc.laboral.trabajos);
}); 

 
 // 4. Consulta que muestra los documentos que tengan el nivel "Educacion Universitaria"
print("\n4. Curriculums con nivel 'Educacion Universitaria':");

db.curriculums.find({"educacion.nivel": "Educación Universitaria"}).forEach(printjson);



// 5. Mostrar aquellos curriculums con más de un título 
// Valido si existe el atributo educacion, valido si existe el atributo titulo, si es ($gt significa >) mayor que 1 muestrame los documentos que cumplen con dicha condicion
db.curriculums.find({
  $and: [
    { educacion: { $exists: true } },
    { 'educacion.titulo': { $exists: true } },
    { $expr: { $gt: [{ $size: '$educacion.titulo' }, 1] } }
  ]
})