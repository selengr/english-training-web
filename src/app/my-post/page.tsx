import Image from "next/image";
import { Suspense } from "react";
import prisma from "@/lib/prisma";
import { authOption } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
import styles from "@/section/home/banner.module.css";
import MyBlogPost, {  } from "@/section/my-post/my-blog-post";
import { BlogPostRequestSkeleton } from "@/section/home/blog-post";


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

                <div className={styles["landing-main"]}>
                    <Image
                        src={'/pre/images/fikeus-west-2.avif'}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className={styles["landing-img"]}
                    />


                    <Image
                        src={`/api/images/${user?.image}`}
                        alt="Picture of the author"
                        width={100}
                        height={100}
                        className={styles["landing-div-rounded"]}
                    />
                </div>

                <div className="w-full h-full flex justify-center align-middle">
                    <article className={styles['landing-article']}>

                        <Suspense fallback={<BlogPostRequestSkeleton />}>
                            <MyBlogPost user={user} />
                        </Suspense>
                    </article>
                </div>
            </div>

        </div>
    );
}

export default page;

