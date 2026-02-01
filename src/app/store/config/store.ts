import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from "@reduxjs/toolkit";

import { type StateSchema } from "./StateSchema";

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });
};

export const store = configureStore<StateSchema>({
  reducer: {},
});

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
