import type { StateSchema } from "./config/StateSchema";
import { createStore, type AppDispatch } from "./config/store";

export { createStore };
export type { StateSchema, AppDispatch };
