import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';

const SectionWrapper = (Component, idName) => {
  const HOC = () => (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='w-full relative'
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
  );

    return HOC;
}

export default SectionWrapper