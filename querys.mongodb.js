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

 
 