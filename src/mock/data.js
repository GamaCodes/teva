import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TEVA',
  lang: 'es',
  description: 'Teva comercializadora y servicios para el campo SPR de RL',
};

// HERO DATA
export const heroData = {
  title: 'Somos',
  name: 'TEVA',
  subtitle: 'Comercializadora y servicios para el Campo',
  cta: '',
  img: 'teva.png',
};

// ABOUT DATA
export const aboutData = {
  img: 'bayas.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'valores.jpg',
    title: 'Nuestros Valores',
    info: 'Reconocemos la tradición y valor de las distintas marcas, la lealtad de nuestros clientes y la identificación de nuestros concesionarios. Manejaremos el negocio con el fin de subministrar un retorno superior para nuestros accionistas, alcanzando un crecimiento rentable. En este mundo de la agricultura siempre cambiante, nuestros valores centrales son constantes:',
    info2: 'Responsabilidad, Integridad, Respeto, Espíritu de equipo, Transparencia.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'hidro.jpg',
    title: 'Responsabilidad Ambiental',
    info: 'Con ayuda de la hidroponía haremos frente al problema de la degradación y contaminación de la tierra, a la vez que tendremos mayor control sobre la incidencia de plagas en las plantas lo que protege ecosistemas que suelen ser dañados con cultivos tradicionales.',
    info2: 'Al no necesitar químicos los productos son más frescos y saludables. Adicional se reduciría el consumo de agua, ya que, al cultivar en tierra, gran parte del agua se pierde por escurrimiento en el suelo.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'calidad.jpg',
    title: 'Política de Calidad',
    info: 'Nuestra política de calidad se manifiesta mediante nuestro firme compromiso con los CLIENTES de satisfacer plenamente sus requerimientos, expectativas y siempre cuidando su salud. Para esto garantizamos impulsar una cultura de calidad basada en los principios de honestidad, solidaridad, seguridad y una constante mejora.',
    info2: 'Tenemos el compromiso de ser un referente para la industria frutícola nacional e internacional, que busca ser reconocida por un alto estándar de calidad en nuestros procesos, seguridad laboral y respeto por el medio ambiente.',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};