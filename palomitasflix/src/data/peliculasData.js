import screamimg from "../assets/posters/scream.jpg";
import viernesimg from "../assets/posters/viernes.jpg";
import halloweenimg from "../assets/posters/halloween.jpg";
import casadepapelimg from "../assets/posters/casa-de-papel.jpg";
import youimg from "../assets/posters/you.jpeg";
import guerreraskpopimg from "../assets/posters/guerreras-kpop.jpg";
import charronegroimg from "../assets/posters/charro-negro.jpg";
import suzumeimg from "../assets/posters/suzume.png";
import estacionzombie2img from "../assets/posters/estacion-zombie-2.jpg";
import thepurgeimg from "../assets/posters/the-purge.jpg";

export const categorias = [
  "Todas",
  "Acción",
  "Comedia",
  "Terror",
  "Animadas",
  "Romance",
];

export const peliculas_data = [
  {
    id: 1,
    titulo: "Película uno",
    categoria: "Acción",
    duracion: "2h 05m",
    imagen: screamimg,
    link: "#ver-pelicula-1",
  },
  {
    id: 2,
    titulo: "Película dos",
    categoria: "Comedia",
    duracion: "1h 40m",
    imagen: viernesimg,
    link: "#ver-pelicula-2",
  },
  {
    id: 3,
    titulo: "Película tres",
    categoria: "Romance",
    duracion: "1h 55m",
    imagen: halloweenimg,
    link: "#ver-pelicula-3",
  },
  {
    id: 4,
    titulo: "Película cuatro",
    categoria: "Terror",
    duracion: "1h 30m",
    imagen: casadepapelimg,
    link: "#ver-pelicula-4",
  },
  {
    id: 5,
    titulo: "Película cinco",
    categoria: "Animadas",
    categoriatexto: "Animada",
    duracion: "1h 35m",
    imagen: youimg,
    link: "#ver-pelicula-5",
  },
  {
    id: 6,
    titulo: "Película seis",
    categoria: "Acción",
    duracion: "1h y 35m",
    imagen: guerreraskpopimg,
    link: "#ver-pelicula-6",
  },
  {
    id: 7,
    titulo: "Película siete",
    categoria: "Aventura",
    duracion: "1 h 34m",
    imagen: charronegroimg,
    link: "#ver-pelicula-7",
  },
  {
    id: 8,
    titulo: "Película ocho",
    categoria: "Fantasía",
    duracion: "2h y 2m",
    imagen: suzumeimg,
    link: "#ver-pelicula-8",
  },
  {
    id: 9,
    titulo: "Película nueve",
    categoria: "Terror",
    duracion: "1 h 58 m",
    imagen: estacionzombie2img,
    link: "#ver-pelicula-9",
  },
  {
    id: 10,
    titulo: "Película diez",
    categoria: "Terror",
    duracion: "1h 50m",
    imagen: thepurgeimg,
    link: "#ver-pelicula-10",
  },
];