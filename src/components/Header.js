import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import '../styles/stylesheets.css';
import '../styles/darkmode.css';
import DarkModeToggle from "./DarkMode";

const Header = () => {
  const { t } = useTranslation();
  const header = t("header", { returnObjects: true });
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Fecha o menu após o clique
    }
  };

  useEffect(() => {
    setMounted(true);
    }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <header>
          <nav>
            <div className="header-left-section">
              <button className="toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>
                <div className="icon-container">
                  <AnimatePresence mode="wait">
                    {menuOpen ? (
                      <motion.img
                        key="close"
                        src="/imgs/close-menu-icon-d3d3d3.png"
                        alt="Close menu icon"
                        id="hamburguer-icon-d3d3d3"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    ) : (
                      <motion.img
                        key="hamburger"
                        src="/imgs/hamburguer-icon-d3d3d3.png"
                        alt="Hamburger menu icon"
                        id="hamburguer-icon-d3d3d3"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>

            <div className="header-mid-section">
              <h1 id="header-title">{t("portfolio")}</h1>
            </div>

            <div className="header-right-section">
              <DarkModeToggle />
            </div>
          </nav>
        </header>
      </motion.div>

      {/* Menu Fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="fullscreen-nav">
              {header.map((item, index) => (
                <motion.button
                  key={item}
                  className="menu-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
