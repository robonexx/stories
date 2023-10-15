import React from 'react';
import { motion } from 'framer-motion';
import styles from './blogContainer.module.scss'

const BlogContainer = ({ children }) => {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 2 }}
    >
      {children}
    </motion.section>
  );
};

export default BlogContainer;
