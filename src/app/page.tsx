
import { Suspense } from 'react';
import Bio from '@/section/home/bio';
import Banner from '@/section/home/banner';
import BlogPost from '@/section/home/blog-post';
import styles from '@/section/home/banner.module.css';
import { BlogPostRequestSkeleton } from '@/section/home/blog-post';



const HomePage = () => {
     return (
          <div className='h-full pb-14'>
               <Banner
                    banner={'images/https___s3-us-west-2.avif'}
                    user={'images/fikeus-west-2.avif'}
                    home
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
