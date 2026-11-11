export default MovieCard;
import "../../styles/components/MovieCard.css";

function MovieCard({ title, subtitle, poster, onRemove }) {
  return (
    <article className="movie-card">
      <div className="movie-card__poster">
        {poster && <img src={poster} alt={title} />}
      </div>
      <h3 className="movie-card__title">{title}</h3>
      <p className="movie-card__meta">{subtitle}</p>
      {onRemove && (
        <button className="movie-card__remove" onClick={onRemove}>
          Quitar
        </button>
      )}
    </article>
  );
}