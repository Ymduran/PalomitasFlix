export default function FiltroCategorias({
  categorias,
  categoriaactiva,
  onseleccionarcategoria,
}) {
  return (
    <nav aria-label="categorías de películas" className="filtro-nav">
      {categorias.map((categoria) => {
        const esactiva = categoriaactiva === categoria;
        return (
          <button
            key={categoria}
            onClick={() => onseleccionarcategoria(categoria)}
            className={`filtro-btn ${
              esactiva ? "filtro-btn--activo" : "filtro-btn--inactivo"
            }`}
          >
            {categoria}
          </button>
        );
      })}
    </nav>
  );
}