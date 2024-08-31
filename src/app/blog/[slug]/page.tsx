
import prisma from "@/lib/prisma";
import Code from "@/section/blog/code";
import { notFound } from "next/navigation";
import Banner from "@/section/home/banner";
import MainIdea from "@/section/blog/mainIdea";
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
      id: blog?.authorId,
    },
  });

  if (!blog) notFound();

  console.log("data -------------------- :>> ", blog);
  console.log("user -------------------- :>> ", user);

  return (
    <>

      <Banner title={blog.title} banner={"upload/" + blog.banner} cover={"upload/" + blog.banner} />

      <div className={styles["blog-page-master"]}>
        <Introduction blog={blog} user={user} />
        <div className={styles["landing-article"]}>


          <div
            className='prose-headings:font-title font-default prose mt-4 dark:prose-invert focus:outline-none'
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>

          {/* <MainIdea data={post} /> */}

        </div>
      </div>



    </>
  );
};


export default Blog;
