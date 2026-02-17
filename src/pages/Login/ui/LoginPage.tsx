import styles from "./LoginPage.module.scss";

import { LoginForm } from "@/features/login";

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.title}>Sign in</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
