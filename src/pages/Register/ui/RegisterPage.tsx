import { Link } from "react-router";

import ArrowLeft from "@/shared/assets/icons/ArrowLeft.svg?react";
import { routePaths } from "@/shared/config";
import {
  DynamicModuleLoader,
  useAppDispatch,
  useAppSelector,
} from "@/shared/lib";
import { AppIcon, Button } from "@/shared/ui";

import styles from "./RegisterPage.module.scss";

import {
  FormSteps,
  registerActions,
  RegisterForm,
  registerReducer,
  selectRegisterStep,
  type FormStepsType,
} from "@/features/register";

const STEP_TITLES: Record<FormStepsType, string> = {
  [FormSteps.CREDENTIALS]: "Sign Up",
  [FormSteps.PASSWORD]: "Create Password",
  [FormSteps.VERIFICATION]: "Verification",
} as const;

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector(selectRegisterStep);

  const handleGoBackClick = () => {
    dispatch(registerActions.resetForm());
    dispatch(registerActions.setStep(FormSteps.CREDENTIALS));
  };

  const isCredentialsStep = step === FormSteps.CREDENTIALS;

  const title = step ? STEP_TITLES[step] : STEP_TITLES[FormSteps.CREDENTIALS];

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <DynamicModuleLoader
          reducers={{ registerForm: registerReducer }}
          removeAfterUnmount
        >
          {!isCredentialsStep && (
            <Button
              onClick={handleGoBackClick}
              theme="tertiary"
              size="md"
              form="circle"
            >
              <AppIcon Icon={ArrowLeft} />
            </Button>
          )}
          <h1 className={styles.title}>{title}</h1>
          <RegisterForm />
          {isCredentialsStep && (
            <>
              <div className={styles.divider}>
                <div className={styles.line} />
                <span className={styles.dividerText}>Or</span>
                <div className={styles.line} />
              </div>
              <div className={styles.authServices}>
                <Button>Auth by Google</Button>
              </div>
              <span className={styles.footer}>
                Already have an account?{" "}
                <Link className={styles.link} to={routePaths.login}>
                  Sign In
                </Link>
              </span>
            </>
          )}
        </DynamicModuleLoader>
      </div>
    </div>
  );
};

export default RegisterPage;
