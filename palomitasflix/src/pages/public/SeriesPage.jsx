export default SeriesPage;
import { useState } from "react";
import MovieCard from "../../components/movies/MovieCard";
import { series } from "../../data/seriesData";
import "../../styles/pages/SeriesPage.css";

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
      className={
        filter === activeFilter
          ? "series__filter series__filter--active"
          : "series__filter"
      }
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
    <main className="series">
      <h1>Series</h1>
      <p className="series__subtitle">Maratones para todos los gustos.</p>

      <div className="series__filters">{filterButtons}</div>

      <ul className="series__grid">{cards}</ul>
    </main>
  );
}