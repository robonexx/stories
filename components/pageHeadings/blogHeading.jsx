import React from 'react';
import { motion } from 'framer-motion';

import styles from './pageHeadings.module.scss';

const pathVariants = {
  hidden: {
    pathLength: 0,
    stroke: 'transparent',
    fill: 'none',
  },
  visible: {
    pathLength: 1,
    strokeWidth: 2,
    stroke: '#ee5f0c',
    transition: {
      duration: 1,
      when: 'afterChildren',
      staggerChildren: 0.3,
      ease: 'easeInOut',
    },
    fill: [
      '#fafafa00',
      '#fafafa00',
      '#fafafa00',
      '#fafafa00',
      '#2c2c2b25',
      '#3636364d',
      '#13131380',
      '#0c0c0cbe',
      '#030303',
    ],
  },
};
const BlogHeading = () => {
  return (
    <div>
      <motion.svg
        className={styles.heading_text}
        width='337'
        height='152'
        viewBox='0 0 337 152'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        variants={pathVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.path
          d='M89.3906 88.3359C89.3906 90.0703 89.1797 91.8984 88.7578 93.8203C88.3828 95.7422 87.7734 97.6641 86.9297 99.5859C86.0859 101.461 84.9844 103.266 83.625 105C82.3125 106.734 80.6953 108.281 78.7734 109.641C76.8984 110.953 74.7188 112.008 72.2344 112.805C69.75 113.602 66.9375 114 63.7969 114H30.8203C29.0859 114 27.2578 113.812 25.3359 113.438C23.4141 113.016 21.4922 112.383 19.5703 111.539C17.6953 110.695 15.8906 109.617 14.1562 108.305C12.4219 106.945 10.875 105.328 9.51562 103.453C8.20312 101.531 7.14844 99.3281 6.35156 96.8438C5.55469 94.3125 5.15625 91.4766 5.15625 88.3359V5.85938H23.4375V88.3359C23.4375 90.5859 24.1406 92.3906 25.5469 93.75C26.9531 95.0625 28.7109 95.7188 30.8203 95.7188H63.7969C66.0938 95.7188 67.875 95.0391 69.1406 93.6797C70.4531 92.3203 71.1094 90.5391 71.1094 88.3359V63.5859C71.1094 61.2891 70.4297 59.5078 69.0703 58.2422C67.7109 56.9297 65.9531 56.2734 63.7969 56.2734H30.8203V37.9922H63.7969C65.5312 37.9922 67.3594 38.2031 69.2812 38.625C71.2031 39 73.1016 39.6094 74.9766 40.4531C76.8984 41.2969 78.7266 42.3984 80.4609 43.7578C82.1953 45.0703 83.7188 46.6875 85.0312 48.6094C86.3438 50.4844 87.3984 52.6641 88.1953 55.1484C88.9922 57.6328 89.3906 60.4453 89.3906 63.5859V88.3359Z'
          variants={pathVariants}
        />
        <motion.path
          d='M138.398 114H130.242C127.617 114 124.805 113.555 121.805 112.664C118.852 111.773 116.086 110.32 113.508 108.305C110.93 106.242 108.797 103.594 107.109 100.359C105.422 97.0781 104.578 93.0703 104.578 88.3359V5.85938H122.859V88.3359C122.859 90.5859 123.562 92.3906 124.969 93.75C126.375 95.0625 128.133 95.7188 130.242 95.7188H138.398V114Z'
          variants={pathVariants}
        />
        <motion.path
          d='M232.828 88.3359C232.828 91.4766 232.43 94.3125 231.633 96.8438C230.836 99.3281 229.781 101.531 228.469 103.453C227.156 105.328 225.633 106.945 223.898 108.305C222.164 109.617 220.336 110.695 218.414 111.539C216.539 112.383 214.617 113.016 212.648 113.438C210.727 113.812 208.898 114 207.164 114H174.188C171.656 114 168.891 113.555 165.891 112.664C162.891 111.773 160.102 110.32 157.523 108.305C154.992 106.242 152.859 103.594 151.125 100.359C149.438 97.0781 148.594 93.0703 148.594 88.3359V63.5859C148.594 58.8984 149.438 54.9375 151.125 51.7031C152.859 48.4219 154.992 45.7734 157.523 43.7578C160.102 41.6953 162.891 40.2188 165.891 39.3281C168.891 38.4375 171.656 37.9922 174.188 37.9922H207.164C211.852 37.9922 215.836 38.8359 219.117 40.5234C222.398 42.2109 225.047 44.3438 227.062 46.9219C229.078 49.4531 230.531 52.2188 231.422 55.2188C232.359 58.2188 232.828 61.0078 232.828 63.5859V88.3359ZM214.547 63.7266C214.547 61.1953 213.914 59.3203 212.648 58.1016C211.383 56.8828 209.555 56.2734 207.164 56.2734H174.328C171.891 56.2734 170.039 56.9062 168.773 58.1719C167.508 59.3906 166.875 61.1953 166.875 63.5859V88.3359C166.875 90.7266 167.508 92.5547 168.773 93.8203C170.039 95.0859 171.891 95.7188 174.328 95.7188H207.164C209.648 95.7188 211.5 95.0859 212.719 93.8203C213.938 92.5547 214.547 90.7266 214.547 88.3359V63.7266Z'
          variants={pathVariants}
        />
        <motion.path
          d='M331.125 121.312C331.125 124.453 330.727 127.266 329.93 129.75C329.133 132.281 328.078 134.484 326.766 136.359C325.453 138.281 323.93 139.898 322.195 141.211C320.461 142.57 318.633 143.672 316.711 144.516C314.836 145.359 312.914 145.969 310.945 146.344C309.023 146.766 307.195 146.977 305.461 146.977H272.484V128.695H305.461C307.945 128.695 309.797 128.062 311.016 126.797C312.234 125.531 312.844 123.703 312.844 121.312V63.5859C312.844 61.1953 312.234 59.3906 311.016 58.1719C309.797 56.9062 307.945 56.2734 305.461 56.2734H272.484C270.234 56.2734 268.453 56.9766 267.141 58.3828C265.828 59.7422 265.172 61.4766 265.172 63.5859V88.3359C265.172 90.7266 265.805 92.5547 267.07 93.8203C268.336 95.0859 270.188 95.7188 272.625 95.7188H305.461V114H272.484C270.75 114 268.922 113.812 267 113.438C265.078 113.016 263.156 112.383 261.234 111.539C259.359 110.695 257.555 109.617 255.82 108.305C254.086 106.945 252.562 105.328 251.25 103.453C249.938 101.531 248.883 99.3281 248.086 96.8438C247.289 94.3125 246.891 91.4766 246.891 88.3359V63.5859C246.891 61.8516 247.078 60.0234 247.453 58.1016C247.875 56.1797 248.508 54.2812 249.352 52.4062C250.195 50.4844 251.273 48.6562 252.586 46.9219C253.945 45.1875 255.562 43.6641 257.438 42.3516C259.359 41.0391 261.562 39.9844 264.047 39.1875C266.531 38.3906 269.344 37.9922 272.484 37.9922H305.461C307.195 37.9922 309.023 38.2031 310.945 38.625C312.914 39 314.836 39.6094 316.711 40.4531C318.633 41.2969 320.461 42.3984 322.195 43.7578C323.93 45.0703 325.453 46.6875 326.766 48.6094C328.078 50.4844 329.133 52.6641 329.93 55.1484C330.727 57.6328 331.125 60.4453 331.125 63.5859V121.312Z'
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

export default BlogHeading;
