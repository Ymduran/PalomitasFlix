import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

export default function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      <HeaderComponent />
      <div className="flex-1">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}