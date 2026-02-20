import { registerActions, registerReducer } from "./model/slice/registerSlice";
import type { RegisterFormSchema } from "./model/types/registerForm";
import { RegisterForm } from "./ui/RegisterForm/RegisterForm";

export { registerActions, registerReducer, RegisterForm };
export type { RegisterFormSchema };
