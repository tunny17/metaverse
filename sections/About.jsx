'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '@/styles';
import { fadeIn, staggerContainer } from '@/utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title='| About Metaversus' textStyles='text-center' />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <span className='font-extrabold text-white'>Lorem ipsum</span> dolor sit
        amet, consectetur adipisicing elit. Non modi sint ducimus aspernatur at,{' '}
        <span className='font-extrabold text-white'>
          {' '}
          iure porro quo fugiat{' '}
        </span>{' '}
        tempora natus harum dignissimos voluptas ratione omnis vero maxime quod
        quidem dolores?{' '}
        <span className='font-extrabold text-white'>
          Lorem, ipsum dolor
        </span>{' '}
        sit amet consectetur adipisicing elit. Quidem iste quaerat officiis quas
        nulla aliquam eum cumque mollitia facere iure?
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
