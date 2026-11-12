import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../hooks/UseSession";

export function ProtectedRoute() {
  const { session, loading } = useSession();

  if (loading) {
    return (
      <div className="fullscreen-state">
        Comprobando sesión...
      </div>
    );
  }

  return session
    ? <Outlet />
    : <Navigate to="/login" replace />;
}
