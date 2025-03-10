import '../styles/stylesheets.css';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const CardProjetos = () => {

  const { t } = useTranslation();
  const projetoDestaque = t("projetosDestaque", { returnObjects: true });
  const projetosTotal = t("projetosTotal", { returnObjects: true });
  const [mounted, setMounted] = useState(false);
  
  const [projetoAberto, setProjetoAberto] = useState(null);

  const abrirProjetoDetalhes = (projeto) => {
    setProjetoAberto(projeto);
  };

  const fecharProjetoDetalhes = () => {
    setProjetoAberto(null);
  };

  useEffect(() => {
      setMounted(true);
      }, []);

  if (!mounted) return null;
  
  return (

    <div className='card-projetos-div'> {/* Container geral para organização */}

    <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}>

    <h1 className='letras-estilizadas-3'>{t("projetos")}</h1>

    <div style={{ marginBottom: '30px' }}>
      <h1 className='letras-estilizadas-4'>{t("destaques")}</h1>
      <hr className='quebralinha-curto' />
    </div>
    
    </motion.div> 

      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='destaque-projetos-div'>

      {projetoDestaque.map((projetoDestaque, index) => (
        
        <div key={index} className='card-interativo-projetos' onClick={() => abrirProjetoDetalhes(projetoDestaque)}>

          <div className='card-projetos-header'>
            <img className='card-projetos-imagem-header' src={`/imgs/${projetoDestaque.img}`} alt={projetoDestaque.img} />
            <div>
              <h2 className='card-projetos-titulo'>{projetoDestaque.titulo}</h2>
              <h3 className='card-projetos-subtitulo'>{projetoDestaque.subtitulo}</h3>
            </div>
          </div>

          <div className='card-projetos-corpo'>
            <img className='card-projetos-corpo-img' src={`/imgs/${projetoDestaque.img}`} alt={projetoDestaque.img} />
            
            <div className='card-overlay'>
              <h2 className='card-titulo'>{projetoDestaque.titulo}</h2>
              <h3 className='card-subtitulo'>{projetoDestaque.subtitulo}</h3>
              
              <div className='card-tecnologias'>
                {projetoDestaque.tecnologias.map((tecnologia) => (
                  <img key={tecnologia} src={`/imgs/icones-cards/${tecnologia}.png`} alt={tecnologia} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      </motion.div>

      <div style={{ marginTop: '30px', marginBottom: '30px' }}>
        <h1 className='letras-estilizadas-4'>{t("todosOsProjetos")}</h1>
        <hr className='quebralinha-curto' />
      </div>

      <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }} 
            className='card-projetos-fila'>

        {projetosTotal.map((projeto) => (

          <div key={projeto.titulo} className='card-interativo-projetos' onClick={() => abrirProjetoDetalhes(projeto)}> {/* Agora cada projeto tem seu próprio card */}

          <div className='card-projetos-header'>
            <img className='card-projetos-imagem-header' src={`/imgs/${projeto.img}`} alt={projeto.img} />
            <div>
              <h2 className='card-projetos-titulo'>{projeto.titulo}</h2>
              <h3 className='card-projetos-subtitulo'>{projeto.subtitulo}</h3>
            </div>
            
          </div>

          <div className='card-projetos-corpo'>
            <img className='card-projetos-corpo-img' src={`/imgs/${projeto.img}`} alt={projeto.img} />
            
            <div className='card-overlay'>
              <h2 className='card-titulo'>{projeto.titulo}</h2>
              <h3 className='card-subtitulo'>{projeto.subtitulo}</h3>
              
              <div className='card-tecnologias'>
                {projeto.tecnologias.map((tecnologia) => (
                  <img key={tecnologia} src={`/imgs/icones-cards/${tecnologia}.png`} alt={tecnologia} />
                ))}
              </div>
            </div>
          </div>

        </div>            

        ))}

      </motion.div>

      {projetoAberto && (
        <div
        className="projeto-detalhes-modal">
          <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} 
          className="projeto-detalhes-conteudo">
            <div className="projeto-detalhes-container">
              <div className="projeto-video">
                <iframe
                  width="100%"
                  height="550"
                  src={projetoAberto.videoUrl} // URL do vídeo do projeto
                  title="Vídeo do projeto"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className='projeto-video-inferior'>
                <button className='template-botao-2' id='video-inferior-button'><a href={projetoAberto.githubUrl} target="_blank" rel="noopener noreferrer"><img src='imgs/icones-cards/github.png'></img></a></button>
                <button className='template-botao-2' id='video-inferior-button'><a href={projetoAberto.linkedinUrl} target="_blank" rel="noopener noreferrer"><img src='imgs/icones-cards/linkedin.png'></img></a></button>
                <button className='template-botao-2' id='video-inferior-button'><a href={projetoAberto.siteUrl} target="_blank" rel="noopener noreferrer"><img src='imgs/icones-cards/site.png'></img></a></button>
                </div>
                
              </div>
              <div className="projeto-info">
                <h2 className='letras-estilizadas-1'>{projetoAberto.titulo}</h2>
                <p>{projetoAberto.descricao}</p>
              </div>
            </div>
            <button className="fechar-modal" onClick={fecharProjetoDetalhes}><img src='/imgs/close-menu-icon-black.png' id='hamburguer-icon-d3d3d3'></img></button>
            <div className='projeto-detalhes-footer'>
            </div>
          </motion.div>
        </div>
      )}

    </div>




  );
};

export default CardProjetos;
