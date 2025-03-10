import '../styles/stylesheets.css';
import { motion } from "framer-motion";

const AnimacaoCreate = () => {
    return (
    <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='born-to-create-div'>
                <h1 className='letras-estilizadas-2' id='born-to-create-letras'>CREATED TO CREATE</h1>
            </motion.div>
    );
};

export default AnimacaoCreate;