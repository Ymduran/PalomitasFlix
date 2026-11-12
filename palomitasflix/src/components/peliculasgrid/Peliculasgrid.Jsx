import PeliculaCard from "../peliculacard/Peliculacard";

export default function PeliculasGrid({ peliculas }) {
  if (peliculas.length === 0) {
    return (
      <p className="peliculas-empty">
        No hay películas disponibles en esta categoría.
      </p>
    );
  }

  return (
    <section className="peliculas-grid">
      {peliculas.map((pelicula) => (
        <PeliculaCard key={pelicula.id} pelicula={pelicula} />
      ))}
    </section>
  );
}