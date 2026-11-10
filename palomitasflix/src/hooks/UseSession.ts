import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthApi from "../services/AuthApi";
import { sessionActions } from "../store/session.ts";
import type { AppDispatch, RootState } from "../store/index.ts";

export function useSession() {
  const state = useSelector((value: RootState) => value.session);
  const dispatch = useDispatch<AppDispatch>();

  const restore = useCallback(async () => {
    try {
      dispatch(sessionActions.setSession((await AuthApi.session()).data));
    } catch {
      dispatch(sessionActions.clearSession());
    }
  }, [dispatch]);

  const login = async (username: string, password: string) => {
    const session = (
        await AuthApi.login({ username, password })
    ).data;
    dispatch(sessionActions.setSession(session));
    return session;
  };

  const logout = async () => {
    try {
      await AuthApi.logout();
    } finally {
      dispatch(sessionActions.clearSession());
    }
  };

  return { ...state, restore, login, logout };
}