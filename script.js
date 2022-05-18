const equipos = [
  {
    nombre: 'Barcelona',
    fundacion: 1899,
    imagen:
      'https://cdn.worldvectorlogo.com/logos/fc-barcelona.svg',
    estadio: 'Camp Nou',
    imagenEstadio:
      'data:image/jpeg;base64,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',
    presidente: 'Josep Maria Bartomeu',
    posicion: 1,
  },
  {
    nombre: 'Real Madrid',
    fundacion: 1902,
    imagen: 'https://cdn.worldvectorlogo.com/logos/real-madrid-club-de-futbol.svg',
    estadio: 'Santiago Bernabéu',
    imagenEstadio:
      'https://www.realmadrid.com/img/sc_960px/reforma-del-estadio-santiago-bernabeu-05_20220124034518.jpg',
    presidente: 'Florentino Pérez',
    posicion: 2,
  },
  {
    nombre: 'Valencia',
    fundacion: 1919,
    imagen: 'https://cdn.worldvectorlogo.com/logos/valencia-2.svg',
    estadio: 'Mestalla',
    imagenEstadio:'https://www.lovevalencia.com/wp-content/uploads/2011/12/Plano-de-Mestalla.jpg',
    presidente: 'Anil Murthy',
    posicion: 3,
  },
  {
    nombre: 'Atlético de Madrid',
    fundacion: 1903,
    imagen: 'https://cdn.worldvectorlogo.com/logos/athletic-club-madrid.svg',
    estadio: 'Wanda Metropolitano',
    imagenEstadio:'https://static-sevilla.abc.es/media/MM/2019/04/09/Stadium-football-Wanda-Metropolitano-Madrid-Spain-Europe_Design-stand_Cruz-y-Ortiz_PPE_38-k05C--1350x900@abc.jpg',
    presidente: 'Enrique Cerezo',
    posicion: 4,
  },
  {
    nombre: 'Sevilla',
    fundacion: 1890,
    imagen: 'https://cdn.worldvectorlogo.com/logos/sevilla-fc.svg',
    estadio: 'Ramón Sánchez Pizjuán',
    imagenEstadio:'https://sevillafc.es/sites/default/files/news/image/50_IMG20201024_001.jpeg',
    presidente: 'José Castro Carmona',
    posicion: 5,
  },
  {
    nombre: 'Villarreal',
    fundacion: 1923,
    imagen: 'https://cdn.worldvectorlogo.com/logos/villarreal.svg',
    estadio: 'Estadio de la Cerámica',
    imagenEstadio: 'https://www.palco23.com/files//0002017/000redaccion/la%20liga/villarreal/Villarreal-Estadio-ceramica-728.jpg',
    presidente: 'Fernando Roig Alfonso',
    posicion: 6,
  },
  {
    nombre: 'Real Sociedad',
    fundacion: 1909,
    imagen: 'https://cdn.worldvectorlogo.com/logos/real-sociedad.svg',
    estadio: 'Reale Arena',
    imagenEstadio: 'https://static3.abc.es/media/deportes/2019/08/01/anoeta-reale-seguros-kEjG--620x349@abc.jpg',
    presidente: 'Jokin Aperribay',
    posicion: 7,
  },
  {
    nombre: 'Espanyol',
    fundacion: 1900,
    imagen: 'https://cdn.worldvectorlogo.com/logos/espanyol.svg',
    estadio: 'RCDE Stadium',
    imagenEstadio: 'https://upload.wikimedia.org/wikipedia/commons/4/47/EstadioRCDE_Pano.jpg',
    presidente: 'Chen Yansheng',
    posicion: 9,
  },
  {
    nombre: 'Athletic Bilbao',
    fundacion: 1898,
    imagen: 'https://cdn.worldvectorlogo.com/logos/athletic-club-bilbao.svg',
    estadio: 'San Mamés',
    imagenEstadio: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/San_Mames%2C_Bilbao%2C_Euskal_Herria_-_Basque_Country.jpg',
    presidente: 'Aitor Elizegi',
    posicion: 10,
  },
];

const teamsList$$ = document.querySelector('.laLiga');

for (const equipo of equipos) {
  const team$$ = document.createElement('div');
  const nombreEquipo$$ = document.createElement('h2');
  const fundacion$$ = document.createElement('p');
  const imageClub$$ = document.createElement('img');
  const labelPresi$$ = document.createElement('p');
  const nombrePresidente$$ = document.createElement('p');
  const nombreEstadio$$ = document.createElement('p');
  const imagenEstadio$$ = equipo.imagenEstadio;

  //Contenedor equipo
  team$$.classList.add('divEquipo');
  
  //imagen de fondo
  team$$.style.backgroundImage = 'url(' + imagenEstadio$$ + ')';
  team$$.style.backgroundSize = 'cover';

  console.log(imagenEstadio$$);

  //nombre del equipo
  nombreEquipo$$.innerText = equipo.nombre;

  //año de fundacion
  fundacion$$.innerText = equipo.fundacion;

  //escudo del club
  imageClub$$.setAttribute('src', equipo.imagen);
  imageClub$$.classList.add('imgClub');

  //Presidente
  nombrePresidente$$.classList.add('nombrePresi');
  nombrePresidente$$.innerText = equipo.presidente;

  // Estadio
  nombreEstadio$$.innerText = equipo.estadio;
  nombreEstadio$$.classList.add('nombreEstadio');

  teamsList$$.appendChild(team$$);
  team$$.appendChild(nombreEquipo$$);
  team$$.appendChild(fundacion$$);
  team$$.appendChild(imageClub$$);
  team$$.appendChild(labelPresi$$);
  team$$.appendChild(nombrePresidente$$);
  team$$.appendChild(nombreEstadio$$);
}
console.log(teamsList$$);

