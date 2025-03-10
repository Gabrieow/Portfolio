import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Contato = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
    }, []);
  
  if (!mounted) return null;

    return (

      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            class="contato-div">
        <h1 class="letras-estilizadas-3">{t("contato")}</h1>
          <div class="contato-div-up">

            <div class="contato-div-card-texto">
              <div class="card-interativo-contato">
                <a href="https://wa.me/41999490702" target="_blank"><img src="../imgs/icones-cards/whatsapp.png"/></a>
              </div>
              <h1 class="letras-estilizadas-5">WhatsApp</h1>
            </div>

            <div class="contato-div-card-texto">
              <div class="card-interativo-contato">
                <a href="mailto:gabrielhvazsantos@gmail.com"><img src="../imgs/icones-cards/email.png" /></a>
              </div>
              <h1 class="letras-estilizadas-5">Email</h1>
            </div>

            <div class="contato-div-card-texto">
              <div class="card-interativo-contato">
                <a href="https://www.github.com/Gabrieow" target="_blank"><img src="../imgs/icones-cards/github.png" /></a>
              </div>
                <h1 class="letras-estilizadas-5">GitHub</h1>
            </div>

            <div class="contato-div-card-texto">
              <div class="card-interativo-contato">
                <a href="https://www.linkedin.com/in/gabrielhvaz"target="_blank"><img src="../imgs/icones-cards/linkedin.png" /></a>
              </div>
              <h1 class="letras-estilizadas-5">LinkedIn</h1>
            </div>
            
            </div>
        </motion.div>

    )
  };

export default Contato;