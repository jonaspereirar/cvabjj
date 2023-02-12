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
        <span className="font-extrabold text-white">CVABJJ</span> 
        A equipe de Jiu-Jitsu Brasileiro em Castro Verde, Portugal, 
        é formada por atletas apaixonados e dedicados à arte marcial. 
        Com treinamentos intensos e rigorosos, eles buscam aperfeiçoar 
        suas habilidades e alcançar o máximo de suas potencialidades. 
        A equipe é liderada por instrutores altamente qualificados, 
        com ampla experiência na modalidade e um profundo conhecimento técnico.
        
        Além de competir em campeonatos locais e nacionais, 
        a equipe também se dedica a difundir a cultura do Jiu-Jitsu e a promover 
        a inclusão social, oferecendo aulas para crianças e jovens em situação 
        de vulnerabilidade. Eles acreditam que a arte marcial não apenas 
        desenvolve habilidades físicas, mas também ajuda a construir caráter 
        e a promover a disciplina e o respeito.
        Com sua dedicação e paixão, a equipe {' '}
        <span className="font-extrabold text-white">
          CVABJJ
        </span>{' '}
         tem se tornado um destaque na região, inspirando muitos
         outros a seguir seus passos e a se envolver com a modalidade. 
         Eles são verdadeiros campeões dentro e fora da academia, 
         levando a bandeira do Jiu-Jitsu a novos patamares.{' '}
        <span className="font-extrabold text-white">Castro Verde Association 
        Brazilian Jiu-Jitsu team</span> And for all ages, genders and nationalities. Let's{' '}
        <span className="font-extrabold text-white">explore</span> Let's explore, more by scrolling down
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
