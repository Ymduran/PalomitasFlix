import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Bookmark,
  Film,
  LayoutDashboard,
  LogOut,
  Menu,
  Tv,
  X,
} from "lucide-react";
import { useSession } from "../../hooks/UseSession";

const adminLinks = [
  { to: "/", label: "Resumen", icon: LayoutDashboard },
];

const memberLinks = [
  { to: "/", label: "Inicio", icon: LayoutDashboard },
  { to: "/home", label: "Explorar", icon: LayoutDashboard },
  { to: "/movies", label: "Películas", icon: Film },
  { to: "/series", label: "Series", icon: Tv },
  { to: "/list", label: "Mi lista", icon: Bookmark },
];

export default function AppLayout() {
  const { session, logout } = useSession();
  const [open, setOpen] = useState(false);
  const links =
      session?.user.role === "user" ? memberLinks : adminLinks;

  return (
      <div className="app-shell">
        <aside
            className={`sidebar ${open ? "sidebar--open" : ""}`}
        >
          <div className="brand">
            <img
                className="brand__logo"
                src="/logo.png"
                alt="Logo de PalomitasFlix"
            />
            <div>
              <strong>PalomitasFlix</strong>
            </div>
            <button
                className="icon-button sidebar__close"
                onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>

          <nav>
            {links.map(({ to, label, icon: Icon }) => (
                <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={() => setOpen(false)}
                >
                  <Icon size={19} />
                  {label}
                </NavLink>
            ))}
          </nav>

          <button className="logout" onClick={() => void logout()}>
            <LogOut size={19} />
            Cerrar sesión
          </button>
        </aside>

        <main className="workspace">
          <header className="topbar">
            <button
                className="icon-button menu-button"
                onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
            <div>
              <strong>
                {session?.user.perfil?.nombre || session?.user.username}
              </strong>
              <span>{session?.user.role}</span>
            </div>
          </header>

          <div className="content">
            <Outlet />
          </div>
        </main>

        {open && (
            <button
                className="overlay"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
            />
        )}
      </div>
  );
}