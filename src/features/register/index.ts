import { selectRegisterStep } from "./model/selectors/selectRegisterStep/selectRegisterStep";
import { registerActions, registerReducer } from "./model/slice/registerSlice";
import {
  type RegisterFormSchema,
  type FormStepsType,
  FormSteps,
} from "./model/types/registerForm";
import { RegisterForm } from "./ui/RegisterForm/RegisterForm";

export {
  registerActions,
  registerReducer,
  RegisterForm,
  selectRegisterStep,
  FormSteps,
};

export type { RegisterFormSchema, FormStepsType };
