import React, { useEffect, useState } from 'react';
import '../styles/darkmode.css';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Verifica se há um tema salvo no localStorage ao carregar a página
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            return newMode;
        });
    };

    return (
            
        <button className="theme-switch" onClick={toggleDarkMode}>
            <img 
                src="/imgs/dark-mode-icon-d3d3d3.png"
                id="dark-mode-icon-d3d3d3"
                alt="dark mode icon" 
            />
        </button>
    );
};

export default DarkModeToggle;