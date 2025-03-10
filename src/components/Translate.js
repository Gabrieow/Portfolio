import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Translate = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(i18n.language || "pt");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("language") || "pt";
            setCurrentLang(savedLang);
            i18n.changeLanguage(savedLang); // Garante que o i18n use o idioma salvo
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLang === "pt" ? "en" : "pt";
        localStorage.setItem("language", newLang); // Salva o idioma no localStorage
        setCurrentLang(newLang);
        i18n.changeLanguage(newLang);
        window.location.reload();
    };

    return (
        <button
            className="language-selection"
            id="language-selection"
            onClick={toggleLanguage}
        >
            <img 
                src="/imgs/language-selector-icon-black.png"
                alt="language selector"
                id="language-selector-icon-black"
            />
        </button>
    );
};

export default Translate;
