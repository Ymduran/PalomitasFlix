import { useState } from "react";
import FiltroCategorias from "../../components/filtrocategorias/Filtrocategorias";
import PeliculasGrid from "../../components/peliculasgrid/Peliculasgrid";
import { categorias, peliculas_data } from "../../data/peliculasData";
import "../../styles/peliculaspage.css";

export default function PeliculasPage() {
  const [categoriaactiva, setcategoriaactiva] = useState("todas");

  const peliculasfiltradas =
    categoriaactiva === "todas"
      ? peliculas_data
      : peliculas_data.filter(
          (pelicula) =>
            pelicula.categoria.toLowerCase() === categoriaactiva.toLowerCase()
        );

  return (
    <main className="peliculas-page">
      <div className="peliculas-container">
        <div className="peliculas-intro">
          <h1 className="peliculas-title">Películas</h1>
          <p className="peliculas-subtitle">Elige, dale play y listo.</p>
        </div>

        <FiltroCategorias
          categorias={categorias}
          categoriaactiva={categoriaactiva}
          onseleccionarcategoria={setcategoriaactiva}
        />

        <PeliculasGrid peliculas={peliculasfiltradas} />
      </div>
    </main>
  );
}