import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { convertDate } from '@/utils/convertDate';
import styles from './blogcard.module.scss';

const BlogCard = ({ title, image, slug, created_at, author }) => {
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
      <div className={styles.bottom_row}>
        <time className={styles.date}>{convertDate(created_at)}</time>
        {author ? (
          <span className={styles.author}>Written by: {author}</span>
        ) : (
          <span className={styles.author}>Written by: Unknown</span>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
