const database = 'CurriculumsVitae';

use(database);

// Objeto de actualización para el documento de X curriculum
const updateObject = {
  $set: {
    resumen: '6 años de experiencia en desarrollo de software.',
    'datos_personales.direccion.ciudad': 'Ciudad Bolivar',
    'educacion.titulo.1': 'desarrollador backend', // Actualiza el segundo título de educación a 'desarrollador backend'
    'laboral.trabajos.0.fecha': '01-02-2018', // Actualiza la fecha del primer trabajo a '01-02-2022'
  },
};

// Criterio de búsqueda para el documento del curriculum
const filter = {
  "_id": ObjectId("65bf255af7ed8e6dca850f43"), // Reemplaza con el ObjectId correcto del curriculum
};

// Actualizar el documento de Mario utilizando su _id
db.curriculums.updateOne(filter, updateObject);

print('Documento de Mario actualizado exitosamente');
