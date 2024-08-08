
import prismadb from "@/libs/prismadb";
import Code from "@/section/blog/code";
import { notFound } from "next/navigation";
import Banner from "@/section/home/banner";
import MainIdea from "@/section/blog/mainIdea";
import styles from "@/section/blog/blog.module.css";
import Introduction from "@/section/blog/introduction";





const Blog = async ({params}:{params: { id : string }}) => {
    const post = await prismadb.post.findUnique({
    where: {
      id : params.id,
    },
  });

  if (!post) notFound();

  console.log("data -------------------- :>> ", post);

  return (
    <>
      
      <Banner title={post.title} banner={"upload/"+post.banner} cover={"upload/"+post.banner} />

      <div className={styles["blog-page-master"]}>
        <Introduction post={post} />
        <div className={styles["landing-article"]}>
          <MainIdea data={post} />
        {/* <Code data={post}/> */}
        </div>
      </div>
          {/* <Conclusion post={post} /> */}


    </>
  );
};


export default Blog;
