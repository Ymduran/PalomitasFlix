export default SeriesPage;
import { useState } from "react";
import MovieCard from "../../components/movies/MovieCard";
import { series } from "../../data/seriesData";

const filters = ["Todas", "Drama", "Comedia", "Acción", "Misterio"];

function SeriesPage() {
  const [activeFilter, setActiveFilter] = useState("Todas");

  const filteredSeries =
    activeFilter === "Todas"
      ? series
      : series.filter((serie) => serie.genre === activeFilter);

  const filterButtons = filters.map((filter) => (
    <button
      key={filter}
      className={`rounded-full border-[1.5px] border-[#f4f4f5] px-4 py-1.5 text-[0.8rem] font-bold transition-colors ${
        filter === activeFilter
          ? "bg-[#f4f4f5] text-[#09090b]"
          : "bg-transparent text-[#f4f4f5] hover:bg-white/10"
      }`}
      onClick={() => setActiveFilter(filter)}
    >
      {filter}
    </button>
  ));

  const cards = filteredSeries.map((serie) => (
    <li key={serie.id}>
      <MovieCard
        title={serie.title}
        subtitle={`${serie.genre} · ${serie.seasons} ${
          serie.seasons === 1 ? "temporada" : "temporadas"
        }`}
        poster={serie.poster}
      />
    </li>
  ));

  return (
    <main className="mx-auto max-w-[1200px] px-8 pt-8 pb-6">
      <h1 className="text-[2rem] font-extrabold">
        Series
      </h1>

      <p className="mt-1 text-[0.85rem] text-[var(--color-muted)]">
        Maratones para todos los gustos.
      </p>

      <div className="mt-[18px] flex flex-wrap gap-2.5">
        {filterButtons}
      </div>

      <ul className="mt-6 grid list-none grid-cols-2 gap-4 min-[901px]:grid-cols-5">
        {cards}
      </ul>
    </main>
  );
}