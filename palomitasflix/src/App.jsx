import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { useSession } from "./hooks/UseSession"; 

import LoginPage from "./pages/Auth/LoginPage";
import InicioPage from "./pages/public/InicioPage";
import PeliculasPage from "./pages/public/PeliculasPage";
import SeriesPage from "./pages/public/SeriesPage";
import MiListaPage from "./pages/public/MiListaPage";

export default function App() {
  const { restore } = useSession();

  useEffect(() => {
    void restore();
  }, [restore]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* Vista previa temporal, solo en desarrollo */}
      {import.meta.env.DEV && (
        <Route
          path="/series-preview"
          element={<SeriesPage />}
        />
      )}

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route index element={<InicioPage />} />
          <Route path="home" element={<InicioPage />} />
          <Route path="movies" element={<PeliculasPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="list" element={<MiListaPage />} />
        </Route>
      </Route>

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}