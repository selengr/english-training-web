import Link from 'next/link';
import styles from './banner.module.css';
import { PATH_PAGE } from '@/routes/paths';

const Bio = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="mb-1">Hello 👋</span>
        <span>
          I&apos;m Reza Karbakhsh — a software developer exploring AI by building
          and learning in public.
        </span>
        <span>
          <span className={styles['landing-hover-highlight']}>Learning Labs</span>{' '}
          is a place for notes, ideas, and English learning guides — starting with
          the blog and roadmap below.
        </span>
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <Link
          href={PATH_PAGE.EnglishLearningRoadmap}
          className={styles['landing-hover-highlight']}
        >
          View English roadmap →
        </Link>
        <Link href={PATH_PAGE.about} className={styles['landing-hover-highlight']}>
          About →
        </Link>
      </div>
    </section>
  );
};

export default Bio;
