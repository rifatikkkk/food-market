import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Button, Spinner } from "@/shared/ui";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Button onClick={() => setError(true)}>Click</Button>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
