import { DynamicModuleLoader } from "@/shared/lib";

import styles from "./RegisterPage.module.scss";

import { RegisterForm, registerReducer } from "@/features/register";

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Sign Up</h1>
        <DynamicModuleLoader
          reducers={{ registerForm: registerReducer }}
          removeAfterUnmount
        >
          <RegisterForm />
        </DynamicModuleLoader>
      </div>
    </div>
  );
};

export default RegisterPage;
