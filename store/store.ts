import { configureStore } from "@reduxjs/toolkit";
import geminiReducer from "./inputSlice";

export const store = configureStore({
  reducer: {
    gemini: geminiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
