// name DB
const database = 'CurriculumsVitae';
// use DB
use(database);

// Object
  curriculum1 = {

    resumen: 'Soy un profesional con 5 años de experiencia en desarrollo de software. Especializado en estrategias de patrones de diseño y desarrollo de apps. Contribuí al crecimiento del tráfico web en un 30% en mi rol anterior.',

    datos_personales: {
      nombre: 'Mario',
      apellido: 'Castaño',
      direccion:{
        pais: 'Venezuela',
        estado: 'Bolívar',
        ciudad: 'Ciudad Guayana',
        residencia: 'Rio Aro'
      },

      telefono: ['04149584321,04120994321'],
      email: 'mariocasta@gmail.com',

      redes:{
        facebook: 'Mario Castaño',
        instagram: '@maricast',
        github: 'mariocastac_'
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

// Object2
  curriculum2 = {

  resumen: 'Ingeniero en Electrónica con experiencia en diseño y desarrollo de sistemas electrónicos. Especializado en la implementación de circuitos y dispositivos para aplicaciones industriales y de telecomunicaciones. He trabajado en proyectos que van desde el diseño de tarjetas de circuito impreso (PCB) hasta la integración de sistemas embebidos.',

  datos_personales: {
    nombre: 'Carlos',
    apellido: 'Gómez',

    direccion:{
      pais: 'México',
      estado: 'Nuevo León',
      ciudad: 'Monterrey',
      residencia: 'Colonia Tecnológico'
    },

    telefono: ['0448112345678'],
    email: 'carlosgmz@gmail.com',

    redes:{
      linkedin: 'linkedin.com/in/carlosgomez',
      twitter: '@carlosg_electron'
    }
  },

  educacion:{
      nivel: 'Educación Universitaria',
      titulo: ['Ingeniería en Electrónica'],
      institucion: ['Tecnológico de Monterrey']
  },

  laboral: {
      pasantia: [

                 { duracion: '3 meses',
                   lugar: 'Siemens',
                   cargo: 'Ingeniero de Sistemas Embebidos'},

                 { duracion: '6 meses',
                   lugar: 'TelecomTech', 
                   cargo: 'Diseñador de Circuitos Electrónicos'}

                ],

      trabajos: [

                 { modalidad: 'Tiempo completo',
                   actividad: 'Desarrollo de sistemas electrónicos para automatización industrial',
                   fecha: '05-12-2023'
                 }

                ]
  },

  habilidades: ['Diseño de PCB', 'Sistemas Embebidos', 'Microcontroladores', 'Comunicaciones Inalámbricas', 'Análisis de Señales', 'Instrumentación Electrónica'],

  intereses: ['Automatización Industrial', 'IoT', 'Telecomunicaciones']
};


// Object3
  curriculum3 = {

  resumen: 'Desarrollador de software con enfoque en el diseño de interfaces de usuario y experiencia del usuario. Apasionado por la creación de aplicaciones web atractivas y fáciles de usar. He trabajado en proyectos de comercio electrónico y sistemas de gestión de contenido.',

  datos_personales: {
    nombre: 'Elena',
    apellido: 'Martínez',

    direccion:{
      pais: 'Argentina',
      estado: 'Buenos Aires',
      ciudad: 'CABA',
      residencia: 'Palermo'
    },

    telefono: ['01145678901'],
    email: 'elenmartzz@gmail.com',

    redes:{
      twitter: '@elenamart',
      linkedin: 'linkedin.com/in/elenamartinez',
    }
  },

  educacion:{
      nivel: 'Licenciatura',
      titulo: ['Ingeniería en Sistemas'],
      institucion: ['Universidad de Buenos Aires']
  },

  laboral: {
      pasantia: [

                 { duracion: '3 meses',
                   lugar: 'Amazon',
                   cargo: 'Desarrollador Frontend'},

                 { duracion: '6 meses',
                   lugar: 'Shopify', 
                   cargo: 'Diseñador de Interfaces'}

                ],

      trabajos: [

                 { modalidad: 'Tiempo completo',
                   actividad: 'Desarrollo de plataformas de comercio electrónico',
                   fecha: '20-02-2024'
                 }

                ]
  },

  habilidades: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js', 'Adobe XD', 'UI/UX Design'],

  intereses: ['Diseño de Interfaces', 'Usabilidad', 'Tecnologías Web']
};

// Object4
  curriculum4 = {

  resumen: 'Arquitecto colombiano con una visión apasionada por el diseño arquitectónico contextual y sostenible. Especializado en la creación de espacios que reflejen la cultura y la identidad local. He contribuido al desarrollo de proyectos que resaltan la riqueza arquitectónica y promueven la integración con el entorno.',

  datos_personales: {
    nombre: 'Andrés',
    apellido: 'Gómez',

    direccion:{
      pais: 'Colombia',
      estado: 'Bogotá D.C.',
      ciudad: 'Bogotá',
      residencia: 'Chapinero'
    },

    telefono: ['0311234567'],
    email: 'andarquitectonicol@gmail.com',

    redes:{
      linkedin: 'linkedin.com/in/andresgomez',
      twitter: '@andresg_arch'
    }
  },

  educacion:{
      nivel: 'Licenciatura',
      titulo: ['Arquitectura'],
      institucion: ['Universidad Nacional de Colombia']
  },

  laboral: {
      pasantia: [

                 { duracion: '3 meses',
                   lugar: 'Arquitectura Andina',
                   cargo: 'Diseñador Asociado'},

                 { duracion: '6 meses',
                   lugar: 'Studio Paisaje Urbano', 
                   cargo: 'Arquitecto Paisajista'}

                ],

      trabajos: [

                 { modalidad: 'Tiempo completo',
                   actividad: 'Desarrollo de proyectos arquitectónicos contextualizados',
                   fecha: '20-05-2023'
                 }

                ]
  },

  habilidades: ['Diseño Arquitectónico', 'Dibujo Técnico', 'Planificación Urbana', 'Arquitectura del Paisaje', 'BIM', 'Sostenibilidad'],

  intereses: ['Arquitectura Vernácula', 'Preservación del Patrimonio', 'Desarrollo Sostenible']
};

// Object5
 curriculum5 = {

  resumen: 'Médico Veterinario chileno con dedicación a la salud y bienestar animal. Especializado en medicina preventiva y cuidado integral de mascotas. He trabajado en clínicas veterinarias y centros de rescate, contribuyendo al tratamiento y bienestar de animales domésticos y de la fauna silvestre.',

  datos_personales: {
    nombre: 'Camila',
    apellido: 'Soto',

    direccion:{
      pais: 'Chile',
      region: 'Metropolitana',
      ciudad: 'Santiago',
      residencia: 'Providencia'
    },

    telefono: ['+56987654321'],
    email: 'camveterinariosch@gmail.com',

    redes:{
      linkedin: 'linkedin.com/in/camilasoto',
      instagram: '@camilavet_cl'
    }
  },

  educacion:{
      nivel: 'Doctorado',
      titulo: ['Médico Veterinario'],
      institucion: ['Universidad de Chile']
  },

  laboral: {
      pasantia: [

                 { duracion: '4 meses',
                   lugar: 'Clínica Veterinaria Patitas Felices',
                   cargo: 'Veterinaria General'},

                 { duracion: '6 meses',
                   lugar: 'Centro de Rescate Fauna Silvestre', 
                   cargo: 'Médico Veterinario de Fauna Silvestre'}

                ],

      trabajos: [

                 { modalidad: 'Tiempo completo',
                   actividad: 'Atención clínica y cirugías en animales domésticos',
                   fecha: '10-10-2023'
                 }

                ]
  },

  habilidades: ['Medicina Preventiva', 'Cirugía Veterinaria', 'Diagnóstico por Imágenes', 'Cuidado de Fauna Silvestre', 'Zootecnia', 'Gestión de Clínicas Veterinarias'],

  intereses: ['Bienestar Animal', 'Fauna Silvestre', 'Educación Veterinaria']
};





db.curriculums.insertOne(curriculum1);
