// name DB
const database = 'CurriculumsVitae';
// use DB
use(database);

// Objeto de actualización para el documento de X curriculum
const updateObject = {
  $set: {
    /*
    resumen: '6 años de experiencia en desarrollo de software.',
    'datos_personales.direccion.ciudad': 'Ciudad Bolivar',
    'educacion.titulo.1': 'desarrollador backend', // Actualiza el segundo título de educación a 'desarrollador backend'
    'laboral.trabajos.0.fecha': '01-02-2018', // Actualiza la fecha del primer trabajo a '01-02-2022'
    */
    //Nuevas keys con valor y keys con documentos que se añaden al archivo


    'nuevas_habilidades_tecnicas': ['Machine Learning', 'Desarrollo Ágil'], // Añade una clave con habilidades técnicas adicionales
    'documentos_certificacion': [
      { nombre: 'Certificado de Desarrollo Ágil', enlace: 'https://udemy.com/certificado_agil' },
      { nombre: 'Certificación Machine Learning', enlace: 'https://expoclub.com/certificacion_ml' }
    ] // Añade una lista de documentos de certificación relacionados al currículum

    },
};

// Criterio de búsqueda para el documento del curriculum
const filter = {
  "_id": ObjectId("65c0fc7ec40137960c040320"), // Reemplaza con el ObjectId correcto del curriculum
};

// Actualizar el documento de Mario utilizando su _id
db.curriculums.updateOne(filter, updateObject);

print('Documento actualizado exitosamente');
