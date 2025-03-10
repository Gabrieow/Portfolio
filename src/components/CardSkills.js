import '../styles/stylesheets.css';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const skillsUp = ["CSharp", "Java", "Python", "JavaScript", "DotNet", "API", "OOP", "SQL", "MongoDB"];
const skillsDown = ["HTML5", "CSS3", "React", "Angular", "Django", "Docker", "AWS"];

const CardSkills = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const infoSkillsUp = t("infoSkillsUp", { returnObjects: true })[0];
  const infoSkillsDown = t("infoSkillsDown", { returnObjects: true })[0];

  useEffect(() => {
    setMounted(true);
    }, []);

  // Função para determinar a largura da barra de progresso
  const getProgressWidth = (nivel) => {
    switch (nivel) {
      case "Básico":
      case "Basic":
        return "30%";
      case "Intermediário":
      case "Intermediate":
        return "60%";
      case "Avançado":
      case "Advanced":
        return "90%";
      default:
        return "0%";
    }
  };
  

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="card-skills-div"
    >
      <h1 className="letras-estilizadas-3">SKILLS</h1>

      {/* Hard Skills Up */}
      <div className="card-hard-skills-div-up">
        {skillsUp.map((skill) => {
          const info = infoSkillsUp[skill] || {};

          return (
            <div key={skill} className='card-interativo-skills'>
              <img src={`/imgs/icones-cards/${skill}.png`} alt={skill} />
              <div className="card-info">
                <h3>{skill}</h3>
                <br></br>
                {info.Nível && (
                  <>
                    <p><strong>{t("nivel")}</strong> {info.Nível}</p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: getProgressWidth(info.Nível) }}></div>
                    </div>
                    <br></br>
                    <p><strong>{t("destaques")}:</strong> {info.Destaques}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hard Skills Down */}
      <div className="card-hard-skills-div-down">
        {skillsDown.map((skill) => {
          const info = infoSkillsDown[skill] || {};

          return (
            <div key={skill} className='card-interativo-skills'>
              <img src={`/imgs/icones-cards/${skill}.png`} alt={skill} />
              <div className="card-info">
                <h3>{skill}</h3>
                <br></br>
                {info.Nível && (
                  <>
                    <p><strong>{t("nivel")}</strong> {info.Nível}</p>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: getProgressWidth(info.Nível) }}></div>
                    </div>
                    <br></br>
                    <p><strong>{t("destaques")}:</strong> {t(info.Destaques)}</p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CardSkills;
