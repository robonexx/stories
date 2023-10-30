import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { convertDate } from '@/utils/convertDate';
import styles from '../blog.module.scss';

const BlogSlugCard = ({ title, slug, created_at, author, image }) => {
  return (
    <Link className={styles.link} href={`/blog/${slug}`}>
      <div className={styles.wrapper}>
      {image ? (
        <Image alt={title} src={image} height={78} width={100} />
      ) : (
        <span className={styles.empty}>No Image</span>
      )}
      <div className={styles.info_wrapper}>
        <p>{title}</p>
        <div className={styles.bottom_row}>
          <time className={styles.date}>{convertDate(created_at)}</time>
          {author ? (
            <span className={styles.author}>Written by: {author}</span>
          ) : (
            ''
          )}
        </div>
      </div>

      </div>
    </Link>
  );
};

export default BlogSlugCard;
