import styles from "@/section/blog/blog.module.css";

const Introduction = ({ post }: { post: any }) => {
console.log('post0000 :>> ', post.createdAt);
  return (

    <div className={styles["post-blog"]}>
      <div className={styles["post-blog-property-map-opt"]}>
        {[1,2,3,4,5,6,7]?.map((it:any) => (
          <>
            <span>{it}</span>
          </>
        ))}
      </div>

      <span className={styles["post-blog-property-date"]}>
        {post?.createdAt.toString()}
        </span>
      <span className={styles["post-blog-property-name"]}>wwww</span>

      <hr className={styles["post-blog-propert-underLine"]} />

    </div>
  );
};

export default Introduction;
