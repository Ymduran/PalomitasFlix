export type UserRole = "admin" | "user";

export interface User {
  id: number;
  username: string;
  role: UserRole;
  perfil?: {
    nombre: string;
    correo: string;
  } | null;
}

export interface Session {
  user: User;
  roles: string[];
  permissions: string[];
}

export interface LoginPayload {
  username: string;
  password: string;
}
