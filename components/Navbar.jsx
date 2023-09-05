'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { navVariants, slideIn } from '@/utils/motion';

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  // Use useEffect to set showNav initially based on screen width
  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth >= 768); // Set to true on screens with width 768px and above
    };

    // Initial check and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.xPaddings} py-8 relative`}>
      <div className='absolute w-[50%] inset-0 gradient-01' />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
        <div className='w-3/6 flex items-center flex-col-reverse lg:flex-row'>
          <motion.div
            variants={slideIn('left', 'tween', 1, 1)}
            initial='hidden'
            whileInView='show'
            className='w-3 lg:w-20 h-0.5 bg-white absolute left-[7%]'
          />
          <h2 className='font-extrabold text-[24px] leading-[30px] text-white ml-2'>
            Colors
          </h2>
        </div>

        <div className='lg:w-3/6 flex flex-col items-center relative'>
          <img
            src='/menu.svg'
            alt=''
            className='block lg:hidden w-7'
            onClick={() => setShowNav(!showNav)}
          />
          {showNav ? (
            <ul className='w-40 lg:w-96 h-32 lg:h-0 rounded-md leading-10 flex text-sm lg:text-md text-white justify-between items-center flex-col lg:flex-row absolute lg:static mr-20 mt-10 lg:m-0'>
              <li>About Us</li>
              <li>What We do</li>
              <li>Donate</li>
            </ul>
          ) : null}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
