export default HeaderComponent;
import { Link, NavLink } from "react-router-dom";
import { useSession } from "../../hooks/UseSession";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/series", label: "Series" },
  { to: "/movies", label: "Películas" },
  { to: "/list", label: "Mi lista" },
];

function HeaderComponent() {
  const { session, logout } = useSession();
  const userName = session?.user.perfil?.nombre || session?.user.username;

  return (
    <header className="bg-[var(--color-surface)] text-[var(--color-text)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-8 py-[18px] md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          className="text-xl font-extrabold text-[var(--color-primary)]!"
        >
          PalomitasFlix
        </Link>

        <nav className="flex gap-[22px]">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-[0.85rem] font-semibold transition-opacity ${
                  isActive ? "text-[var(--color-accent)]!" : "hover:opacity-70"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {session ? (
          <div className="flex items-center gap-3 md:justify-self-end">
            <span className="text-[0.8rem] font-semibold">{userName}</span>
            <button
              onClick={() => void logout()}
              className="rounded-full bg-[var(--color-dark)] px-5 py-2.5 text-[0.8rem] font-bold text-white"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="rounded-full bg-[var(--color-dark)] px-5 py-2.5 text-[0.8rem] font-bold text-white! md:justify-self-end"
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </header>
  );
}