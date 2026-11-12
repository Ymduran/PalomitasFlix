
import { Link } from "react-router-dom";
import MovieCard from "../../components/movies/MovieCard";
import { series } from "../../data/seriesData";
import { peliculas_data } from "../../data/peliculasData";

function HomePage() {
  //Obtener información de las películas y series 
  const getTitle = (item) =>
    item.title || item.titulo || item.nombre || "Sin título";

  const getPoster = (item) =>
    item.poster || item.imagen || item.image || item.portada || "";

  const getGenre = (item) =>
    item.genre || item.categoria || item.genero || "Contenido";

  //Seleccionar contenido destacado
  const featuredContent = peliculas_data[0] || series[0];

  const featuredImage = featuredContent
    ? featuredContent.banner ||
      featuredContent.backdrop ||
      getPoster(featuredContent)
    : "";

  // Contenido para las secciones
  const continueWatching = [
    ...series,
    ...peliculas_data,
  ].slice(0, 7);

  const trending = [
    ...peliculas_data,
    ...series,
  ].slice(0, 7);

  // Renderizar tarjetas 
  const renderCards = (items, type) =>
    items.map((item, index) => (
      <li key={`${type}-${item.id || index}`} className="min-w-0">
        <MovieCard
          title={getTitle(item)}
          subtitle={
            type === "series"
              ? `${getGenre(item)} · ${item.seasons || 1} temporadas`
              : `${getGenre(item)} · Película`
          }
          poster={getPoster(item)}
        />
      </li>
    ));

  return (
    <main className="mx-auto max-w-[1400px] px-5 pb-8 pt-7 md:px-8">

      {/* ===== Hero ===== */}
      <section className="grid items-center gap-8 rounded-2xl bg-[var(--color-background)] py-5 md:grid-cols-2 md:gap-12">

        <div className="max-w-[440px]">
          <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-[0.65rem] font-extrabold text-black">
            NUEVO
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl">
            Tu próxima serie favorita empieza aquí
          </h1>

          <p className="mt-4 max-w-[370px] text-sm leading-relaxed text-[var(--color-muted)]">
            Series, películas y videos para ver cuando quieras,
            donde quieras.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/movies"
              className="rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-85"
            >
              ▶ Ver ahora
            </Link>

            <Link
              to="/series"
              className="rounded-full border border-current px-5 py-2.5 text-xs font-bold transition-colors hover:bg-black/5"
            >
              Más info
            </Link>
          </div>
        </div>

        <div className="relative h-[210px] overflow-hidden rounded-2xl bg-black md:h-[280px]">
          {featuredImage && (
            <img
              src={featuredImage}
              alt={getTitle(featuredContent)}
              className="h-full w-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </section>

      {/* ===== Seguir viendo ===== */}
      <section className="mt-7">
        <h2 className="mb-4 text-lg font-extrabold">
          Seguir viendo
        </h2>

        <ul className="grid list-none grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
          {renderCards(continueWatching, "series")}
        </ul>
      </section>

      {/* ===== Tendencias ===== */}
      <section className="mt-8">
        <h2 className="mb-4 text-lg font-extrabold">
          Tendencias
        </h2>

        <ul className="grid list-none grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
          {renderCards(trending, "movies")}
        </ul>
      </section>

      {/* ===== Footer ===== */}
      <footer className="mt-10 border-t border-current/10 pt-5 text-center text-[0.7rem] text-[var(--color-muted)]">
        © 2026 PalomitasFlix · Prototipo
      </footer>

    </main>
  );
}

export default HomePage;
