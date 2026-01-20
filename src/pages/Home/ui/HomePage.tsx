import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shared/config";
import { useTranslation } from "react-i18next";
import { AppIcon, Button, Input } from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <>
      <h1 className={styles.title}>{t("hello")}</h1>
      <Input
        placeholder="Search..."
        Icon={<AppIcon Icon={SearchIcon} theme="background" />}
      />
      <Button onClick={toggleTheme}>theme</Button>
      <Button theme="outline" onClick={changeLanguage}>
        language
      </Button>
      <Link to={"/login"}>Login page</Link>
    </>
  );
};

export default HomePage;
