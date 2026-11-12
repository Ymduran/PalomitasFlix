import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthApi from "../services/AuthApi";
import { sessionActions } from "../store/session";
import type { AppDispatch, RootState } from "../store";

export function useSession() {
  const state = useSelector((value: RootState) => value.session);
  const dispatch = useDispatch<AppDispatch>();

  const restore = useCallback(async () => {
    dispatch(sessionActions.setLoading(true));

    try {
      const response = await AuthApi.session();
      dispatch(sessionActions.setSession(response.data));
    } catch {
      dispatch(sessionActions.clearSession());
    }
  }, [dispatch]);

  const login = useCallback(
    async (username: string, password: string) => {
      const response = await AuthApi.login({ username, password });

      dispatch(sessionActions.setSession(response.data));

      return response.data;
    },
    [dispatch],
  );

  const logout = useCallback(async () => {
    try {
      await AuthApi.logout();
    } finally {
      dispatch(sessionActions.clearSession());
    }
  }, [dispatch]);

  return {
    ...state,
    restore,
    login,
    logout,
  };
}
