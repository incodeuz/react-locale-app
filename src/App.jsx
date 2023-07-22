import i18next, { changeLanguage } from "i18next";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const changeLang = (lang) => {
    i18next.changeLanguage(lang);
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("title")}</h1>
      <div className="card">
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "items",
            justifyContent: "center",
          }}
        >
          <button onClick={() => changeLang("en")}>{t("enBtn")}</button>
          <button onClick={() => changeLang("uz")}>{t("uzBtn")}</button>
        </div>
        <p>{t("pretitle")}</p>
      </div>
      <p className="read-the-docs">{t("subtitle")}</p>
    </>
  );
}

export default App;
