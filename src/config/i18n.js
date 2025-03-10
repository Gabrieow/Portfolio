import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "pt"; // Evita erro no servidor
  }
  return "pt"; // Retorna "pt" se estiver no servidor
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    lng: getSavedLanguage(), // Define o idioma inicial com segurança
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/{{lng}}.json",
    },
  });

export default i18n;
