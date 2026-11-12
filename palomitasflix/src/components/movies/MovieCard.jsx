export default MovieCard;
function MovieCard({ title, subtitle, poster, onRemove }) {
  return (
    <article>
      <div className="aspect-[2.3/1] overflow-hidden rounded-[var(--radius-card)] bg-[#d9d4cb]">
        {poster && (
          <img
            src={poster}
            alt={title}
            className="block h-full w-full object-cover"
          />
        )}
      </div>

      <h3 className="mt-2.5 text-[0.85rem] font-bold">
        {title}
      </h3>

      <p className="mt-0.5 text-[0.7rem] text-[var(--color-muted)]">
        {subtitle}
      </p>

      {onRemove && (
        <button
          className="mt-2.5 rounded-full border-[1.5px] border-[var(--color-dark)] bg-transparent px-3.5 py-1 text-[0.7rem] font-bold"
          onClick={onRemove}
        >
          Quitar
        </button>
      )}
    </article>
  );
}