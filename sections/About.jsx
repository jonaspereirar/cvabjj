'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About CVABJJ" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        A equipe <span className="font-extrabold text-white">CVABJJ </span> 
        Castro Verde Association Brazilian Jiu-Jitsu Team, é formada por atletas
        apaixonados e dedicados. A equipe é liderada por instrutores 
        altamente qualificados, com ampla experiência na modalidade, com certificação
        reconhecida pelas principais entidades portuguesas como o IPDJ e a FPJJB "Federação Portuguesa de jiu-jitsu Brasileiro".
        
        Além de competir em campeonatos nacionais e internacionais, 
        a equipe também se dedica a difundir a cultura do Jiu-Jitsu e a promover 
        a inclusão social, oferecendo aulas para crianças e jovens. 
        Acreditamos que a arte marcial não apenas desenvolve habilidades físicas, 
        mas também ajuda a construir caráter e a promover a disciplina e o respeito.
         {' '}
        <span className="font-extrabold text-white">Castro Verde Association 
        Brazilian Jiu-Jitsu team</span> {' '}
        <span className="font-extrabold text-white"></span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
