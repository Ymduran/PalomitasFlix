export default HeaderComponent;
import "../../styles/components/HeaderComponent.css";

function HeaderComponent({ active = "inicio" }) {
  const links = [
    { id: "inicio", label: "Inicio", href: "/" },
    { id: "series", label: "Series", href: "/series" },
    { id: "peliculas", label: "Películas", href: "/peliculas" },
    { id: "mi-lista", label: "Mi lista", href: "/mi-lista" },
  ];

  const navLinks = links.map((link) => (
    <a
      key={link.id}
      href={link.href}
      className={
        link.id === active
          ? "header__link header__link--active"
          : "header__link"
      }
    >
      {link.label}
    </a>
  ));

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          PalomitasFlix
        </a>
        <nav className="header__nav">{navLinks}</nav>
        <button className="header__login">Iniciar sesión</button>
      </div>
    </header>
  );
}