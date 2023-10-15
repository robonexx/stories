import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blogcard.module.scss';

const BlogCard = ({ title, image, slug }) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      {image ? (
        <Image
          className={styles.img}
          alt={title}
          src={image}
          loading='lazy'
          width={800}
          height={400}
        />
      ) : (
        <span className={styles.emptyImg}>no img</span>
      )}
      <Link href={`/blog/${slug}`}></Link>
    </div>
  );
};

export default BlogCard;
