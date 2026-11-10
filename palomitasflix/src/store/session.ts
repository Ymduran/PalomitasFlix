/** Estado global mínimo de autenticación. */

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Session } from "../types/auth";

interface SessionState {
  session: Session | null;
  loading: boolean;
}

const initialState: SessionState = { session: null, loading: true };

const slice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      state.session = action.payload;
      state.loading = false;
    },
    clearSession: (state) => {
      state.session = null;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const sessionActions = slice.actions;
export default slice.reducer;