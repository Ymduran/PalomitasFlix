/**
 * ============================================================================
 * api.ts
 * ----------------------------------------------------------------------------
 * Cliente HTTP compartido para comunicar el frontend con la API de SYSGEM.
 * ============================================================================
 */
import type { ApiResponse } from "../../types/api.ts";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000/api").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(public status: number, message: string, public errors?: unknown) { super(message); }
}

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const isForm = options.body instanceof FormData;
  const response = await fetch(`${API_URL}/${endpoint.replace(/^\//, "")}`, {
    ...options,
    credentials: "include",
    headers: { Accept: "application/json", ...(isForm ? {} : { "Content-Type": "application/json" }), ...options.headers },
  });
  const result = await response.json().catch(() => null);
  if (!response.ok) throw new ApiError(response.status, result?.message || `HTTP ${response.status}`, result?.errors);
  return result;
}

export const jsonBody = (data: unknown): string => JSON.stringify(data);