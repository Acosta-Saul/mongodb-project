// name DB
const database = 'CurriculumsVitae';
// use DB
use(database);

// Object
  curriculum1 = {

    resumen: 'Soy un profesional con 5 años de experiencia en desarrollo de software. Especializado en estrategias de patrones de diseño y desarrollo de apps. Contribuí al crecimiento del tráfico web en un 30% en mi rol anterior.',

    datos_personales: {
      nombre: 'Mario',

      direccion:{
        pais: 'Venezuela',
        estado: 'Bolívar',
        ciudad: 'Ciudad Guayana',
        residencia: 'Rio Aro'
      },

      telefono: ['04149584321,04120994321'],
      email: 'mario@example.com',

      redes:{
        facebook: 'Mario Castaño',
        instagram: '@maricast',
      }
    },

    educacion:{
        nivel: 'Educación Universitaria',
        titulo: ['informático', 'docente'],
        institucion: ['UNEG', 'UDO']
    },

    laboral: {
        pasantia: [

                   { duracion: '40 días',
                     lugar: 'Venalum',
                     cargo: 'Técnico'},

                   { duracion: '5 meses',
                     lugar: 'UNEG', 
                     cargo: 'Docente'}

                  ],

        trabajos: [

                   { modalidad: 'Freelancer',
                     actividad: 'Desarrollo de App',
                     fecha: '24-03-2024'
                   }

                  ]
    },

    habilidades: ['UML', 'JavaScript', 'MySQL', 'CSS', 'HTML', 'NodeJS', 'Python', 'Flutter', 'Dart'],

    intereses: ['Programación', 'Deporte', 'Música']
     
  }

db.curriculums.insertOne(curriculum1);
