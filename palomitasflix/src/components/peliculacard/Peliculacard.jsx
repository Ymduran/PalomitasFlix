export default function PeliculaCard({ pelicula }) {
  return (
    <a href={pelicula.link} className="pelicula-card group">
      <div className="pelicula-card__media">
        <img
          src={pelicula.imagen}
          alt={pelicula.titulo}
          className="pelicula-card__img"
          loading="lazy"
        />
      </div>

      <div className="pelicula-card__info">
        <h2 className="pelicula-card__titulo">{pelicula.titulo}</h2>
        <p className="pelicula-card__meta">
          {pelicula.categoriatexto || pelicula.categoria} · {pelicula.duracion}
        </p>
      </div>
    </a>
  );
}