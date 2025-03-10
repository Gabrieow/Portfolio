const MenuFullscreen = ({ closeMenu }) => {
    return (
      <div className="menu-fullscreen visible-menu">
        <button className="close-menu" onClick={closeMenu}>✕</button>
  
  
        <nav className="menu-links">
          <a href="#sobremim" onClick={closeMenu}>Sobre Mim</a>
          <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
      </div>
    );
  };
  
  export default MenuFullscreen;
  