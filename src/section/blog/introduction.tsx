import { Separator } from "@/components/ui/separator";
import styles from "@/section/blog/blog.module.css";
import { fDate, fToNow } from "@/utils/formatTime";

const Introduction = ({ blog, user }: { blog: any, user: any }) => {
  console.log('blog0000 :>> ', blog.createdAt);
  return (

    <div className={styles["post-blog"]}>
      <div className={styles["post-blog-property-map-opt"]}>
        {blog?.tag?.map((it: any) => (
          <>
            <span>{it}</span>
          </>
        ))}
      </div>

      <span className={styles["post-blog-property-date"]}>
        {fToNow(blog?.createdAt.toString())}
      </span>
      <span className={styles["post-blog-property-name"]}>{user.name} {user.family}</span>

      <Separator className={`${styles["post-blog-propert-underLine"]}  bg-[#3a3a3a] opacity-60 dark:bg-[aliceblue]`} />

    </div>
  );
};

export default Introduction;
