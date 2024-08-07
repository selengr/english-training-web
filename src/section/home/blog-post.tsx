
import Link from "next/link";
import Image from "next/image";
import styles from "./banner.module.css";
import prismadb from "@/libs/prismadb";


export default async function BlogPost() {
  const posts = await prismadb.post.findMany();

  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {
          posts.map((it: any) => {
            let tag = it.tags
            return (
              <>
                <Link
                  href={`/blog/${it.id}`}
                  className={styles["post-blog-each-card"]}
                  key={it.id}
                >
                  <Image
                    src={"/pre/upload/" + it.banner}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                  />

                  <section className={styles["post-blog-property"]}>
                    <span className={styles["post-blog-property-title"]}>
                
                      <p className="truncate">
                        {it.title}
                        </p>
                    </span>
                    <div className={styles["post-blog-property-details"]}>
                      <span
                        className={styles["post-blog-property-description"]}
                      >
              
                          {it.body}
                  
                      </span>
                      <span className={styles["post-blog-property-date"]}>
                        {/* Mar 7, 2018 */}
                        {it?.createdAt?.toString()?.split("T")[0]}
                      </span>
                    </div>
                    <div className={styles["post-blog-property-map-opt"]}>
                      {[1,2,3,4].map((it:any) => (
                        <>
                          <span>{it}</span>
                        </>
                      ))}
                    </div>
                  </section>
                </Link>
              </>
            );
          })}
      </aside>
    </div>
  );
}




const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

function PostSkeleton() {
     return (
          <div className="col-span-4 space-y-4 my-8  border-[1px] border-neutral-300 rounded-3xl p-6">
               <div className={`relative h-[137px] rounded-xl bg-slate-200 ${shimmer}`} />

               <div className="h-6 w-1/3 rounded-lg bg-slate-200" />
               <div className="h-4 w-full rounded-lg bg-slate-200" />
               <div className=" w-[100%] py-3 rounded-lg bg-slate-200" />
          </div>
     );
}

export function BlogPostRequestSkeleton() {
     return (
          <div className={styles["post-blog-card"]}>
               <PostSkeleton />
               <PostSkeleton />
               <PostSkeleton />
               <PostSkeleton /> 
          </div>
     );
}
