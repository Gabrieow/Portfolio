import '../styles/stylesheets.css';
import AnimacaoCreate from '@/components/AnimacaoCreate';
import CardProjetos from '../components/CardProjetos';
import CardSkills from '../components/CardSkills';
import Contato from '../components/Contato';
import Header from '../components/Header';
import SobreMim from '../components/SobreMim';

const Home = () => {
    return(
        <div>
            
            <Header />

            <section id="sobre">
                <SobreMim />
            </section>

            <AnimacaoCreate />
            
            <section id="skills">
                <CardSkills />
            </section>

            <AnimacaoCreate />

            <section id="projetos">
                <div className='destaque-projetos-div'>
                <CardProjetos />
                </div>
            </section>

            <section id="contato">
                <Contato />
            </section>
            
        </div>
        
    );
};

export default Home;