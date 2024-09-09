import { Suspense } from "react";
import prisma from "@/lib/prisma";
import { authOption } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import Banner from "@/section/home/banner";
import styles from "@/section/home/banner.module.css";
import MyBlogPost, { MyBlogPostRequestSkeleton } from "@/section/my-post/my-blog-post";


const page = async () => {
    const session = await getServerSession(authOption);
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email as string,
        },
        include: {
            posts: true
        },
    });


    return (
        <div>
            <div className='h-full pb-10'>
                <Banner
                    banner={'images/https___s3-us-west-2.avif'}
                    user={user}
                    title={`${user?.name} ${user?.family}`}
                    home
                    avatar
                />

                <div className="w-full h-full flex justify-center align-middle">
                    <article className={styles['landing-article']}>

                         <Suspense fallback={<MyBlogPostRequestSkeleton />}>
                             <MyBlogPost user={user} />
                         </Suspense>
                    </article>
                </div>
            </div>

        </div>
    );
}

export default page;

