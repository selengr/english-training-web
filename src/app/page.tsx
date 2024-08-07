// import Banner from '@/section/banner';
import Bio from '@/section/home/bio';
import Post, { BlogPostRequestSkeleton } from '@/section/home/blog-post';
import styles from '@/section/home/banner.module.css';

import { Suspense } from 'react';
import BlogPost from '@/section/home/blog-post';
import Banner from '@/section/home/banner';



const HomePage = () => {
     return (
          <div className='h-full'>
               <Banner
                    banner={'images/https___s3-us-west-2.avif'}
                    cover={'images/fikeus-west-2.avif'}
               />

               <div className="w-full h-full flex justify-center align-middle">
                    <article className={styles['landing-article']}>
                         <Bio />

                         <Suspense fallback={<BlogPostRequestSkeleton />}>
                              <BlogPost />
                         </Suspense>
                    </article>
               </div>
          </div>
     );
};

export default HomePage;
