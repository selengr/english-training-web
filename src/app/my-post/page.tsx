import { Suspense } from "react";
import Banner from "@/section/home/banner";
import styles from "@/section/home/banner.module.css";
import MyBlogPost, { MyBlogPostRequestSkeleton } from "@/section/my-post/my-blog-post";


const page = () => {
    return (
        <div>
            <div className='h-full'>
                <Banner
                    banner={'images/https___s3-us-west-2.avif'}
                    user={'images/fikeus-west-2.avif'}
                    home
                />

                <div className="w-full h-full flex justify-center align-middle">
                    <article className={styles['landing-article']}>
                        {/* <Bio /> */}

                        <Suspense fallback={<MyBlogPostRequestSkeleton />}>
                            <MyBlogPost />
                        </Suspense>
                    </article>
                </div>
            </div>

        </div>
    );
}

export default page;

