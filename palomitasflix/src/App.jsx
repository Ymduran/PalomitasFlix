import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { useSession } from "./hooks/UseSession";

import LoginPage from "./pages/Auth/LoginPage";
import HomePage from "./pages/public/HomePage";
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

      {/* Vista previa temporal sin login, solo en desarrollo */}
      {import.meta.env.DEV && (
        <Route element={<PublicLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/series-preview" element={<SeriesPage />} />
          <Route path="/peliculas-preview" element={<PeliculasPage />} />
        </Route>
      )}

      <Route element={<ProtectedRoute />}>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="movies" element={<PeliculasPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="list" element={<MiListaPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}