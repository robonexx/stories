import Head from 'next/head';
import Heading from '@components/heading';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './about.module.scss';
import AboutHeading from '../../components/pageHeadings/aboutHeading';

export default function About() {
  return (
    <div className={styles.about}>
      <Head lang='en'>
        <title>Da Blog - About me myself and I</title>
        <meta name='description' content='About developer Robert Wägar' />
        <meta property='og:title' content='Da blog by Rob' />
      </Head>
      <Heading>
        <AboutHeading />
      </Heading>
      {/*   <motion.article
        className={styles.content_wrapper}
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <marquee bgcolor='#ffffff' direction='left' width='65%'>
          Today best alterntive would be Keyframes, animejs or framer-motion...
        </marquee>
        <marquee>Sadly the marquee tag is deprecated...</marquee>
        <marquee direction='right' behavior='slide'>
          These animations are done with pure html
        </marquee>
        <marquee behavior='slide' direction='left'>
          that is pretty cool right?
        </marquee>
        <marquee scrollamount='10'>
          the development goes fast forward now
        </marquee>
        <marquee scrolldelay='200'>so much to learn</marquee>
        <marquee bgcolor='#000000' width='50%'>
          100% coffee & code
        </marquee>
      </motion.article> */}
      <div className={styles.about_hero}>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.about_wrapper}>
        <h2>STORIES</h2>
        <section>
          <p>
            Welcome to &quot;Stories&quot; a captivating haven where the art of
            storytelling comes alive. Immerse yourself in a world where words
            dance on the page, weaving tales that span the spectrum of human
            experience. Our blog is a tapestry of emotions, adventures, and
            untold narratives waiting to unfold.
          </p>
          <p>
            In &quot;Stories&quot; we believe in the power of stories to
            connect, inspire, and transport. Each entry is a carefully crafted
            journey that invites you to explore the depths of imagination and
            the vast landscapes of the human heart. From heartwarming anecdotes
            that tug at your emotions to thrilling adventures that keep you on
            the edge of your seat, our blog is a celebration of the written word
            in all its splendor.
          </p>
          <p>
            Dive into the diverse realms of fiction and non-fiction, where
            characters come to life and experiences are shared with an
            authenticity that resonates. &quot;Stories&quot; is not just a blog;
            it&apos;s a sanctuary for those who seek refuge in the beauty of
            language and the richness of storytelling.
          </p>
          <p>
            Whether you&apos;re a fervent reader or an aspiring writer,
            &quot;Stories&quot; is your sanctuary. Join us on this literary
            odyssey as we embark on a journey through the enchanting landscapes
            of imagination. Discover the magic within the mundane, the
            extraordinary within the ordinary, and the beauty that lies in the
            simplicity of a well-told story.
          </p>
          <p>
            Indulge your curiosity, ignite your imagination, and let the pages
            of &quot;Stories&quot; be your portal to a world where every word
            has a story to tell. Welcome to a community bound by the love of
            narratives, where each post is a doorway to a new adventure. Join us
            as we unravel the threads of tales waiting to be told—welcome to the
            enchanting world of &quot;Stories&quot;
          </p>
        </section>
      </div>
    </div>
  );
}
