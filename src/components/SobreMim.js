import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { typeEffect } from "../components/typeEffect";
import Translate from '../components/Translate';
import '../styles/stylesheets.css';
import '../styles/darkmode.css';
import { useTranslation } from "react-i18next";

const SobreMim = () => {
    const { t, i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const [funFacts, setFunFacts] = useState([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            const loadedFunFacts = t("funFacts", { returnObjects: true });
            if (Array.isArray(loadedFunFacts) && loadedFunFacts.length > 0) {
                setFunFacts(loadedFunFacts);
                setTimeout(() => {
                    const element = document.getElementById("fun-fact");
                    if (element) {
                        typeEffect("fun-fact", loadedFunFacts);
                    }
                }, 100);
            }
        }
    }, [mounted, i18n.language]);

    if (!mounted) return null;

    return (
        <div className="sobre-mim">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} 
                className="sobre-mim-div-principal"
            >
                <div>
                    <div className="sobre-mim-header">
                        <Translate />
                    </div>

                    <div className="sobre-mim-conteudo">
                        <div className="sobre-mim-conteudo-esquerda">
                            <h1 className="titulo" dangerouslySetInnerHTML={{ __html: t("titulo-sobre-mim") }} />
                            <p className="texto">{t("texto-sobre-mim")}</p>
                        </div>

                        <div className="sobre-mim-conteudo-direita">
                            <img 
                                src="/imgs/provisorio.jpg" 
                                id="profile-icon" 
                                alt="Profile icon" 
                            />
                        </div>
                    </div>

                    <div className="sobre-mim-fun-facts">
                        <h2 className="letras-estilizadas-1" id="fatos-sobre-mim">{t("fatos-sobre-mim")}</h2>
                        <p id="fun-fact"></p>
                    </div>

                    <div className="sobre-mim-footer">
                        <h2 className="letras-estilizadas-1" id="precisando-desenvolvedor-texto">{t("precisando-desenvolvedor-sobre-mim")}</h2>
                        <div className="botoes-footer">
                            <button 
                                className="template-botao-1" 
                                id="visualizar-portfolio-botao" 
                                data-translate="visualizar-portfolio-sobre-mim" 
                                onClick={() => document.getElementById("projetos").scrollIntoView({ behavior: "smooth" })}
                            >
                                {t("visualizar-portfolio-sobre-mim")}
                            </button>
                            <button 
                                className="template-botao-1" 
                                id="entre-em-contato-botao" 
                                data-translate="entre-em-contato-sobre-mim" 
                                onClick={() => document.getElementById("contato").scrollIntoView({ behavior: "smooth" })}
                            >
                                {t("entre-em-contato-sobre-mim")}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SobreMim;
