import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "../../hooks/UseSession";
import type { UserRole } from "../../types/auth";
export function RoleRoute({ allowed }: { allowed: UserRole[] }) { const { session } = useSession(); return session && allowed.includes(session.user.role) ? <Outlet/> : <Navigate to="/" replace/>; }