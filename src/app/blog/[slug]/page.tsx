
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Banner from "@/section/home/banner";
import Conclusion from "@/section/blog/conclusion";
import styles from "@/section/blog/blog.module.css";
import Introduction from "@/section/blog/introduction";


const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog = await prisma.post.findUnique({
    where: {
      id: params.slug,
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: blog?.authorId as string,
    },
  });


  if (!user) notFound();
  if (!blog) notFound();

  return (
    <div className="">

      <Banner title={blog.title} banner={blog.banner} user={user} />

      <div className={styles["blog-page-master"]}>
        <Introduction blog={blog} user={user} />
        <div className={styles["landing-article"]}>

          <h1>
            {blog.body}
          </h1>

          <div
            className='prose-headings:font-title font-default prose mt-4 dark:prose-invert focus:outline-none'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>

        </div>
      </div>

      <Conclusion blog={blog} />

    </div>
  );
};


export default Blog;
