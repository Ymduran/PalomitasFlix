import { apiRequest, jsonBody } from "../common/utils/api.ts";
import type { LoginPayload, Session } from "../types/auth.ts";

const AuthApi = {
  login: (payload: LoginPayload) =>
      apiRequest<Session>("session/login", {
        method: "POST",
        body: jsonBody(payload),
      }),
  session: () => apiRequest<Session>("session"),
  logout: () =>
      apiRequest<null>("session/logout", { method: "DELETE" }),
};

export default AuthApi;