
import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import styles from "./banner.module.css";
import { fToNow } from "@/utils/formatTime";


export default async function BlogPost() {
  const posts = await prisma?.post?.findMany();

  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {
          posts?.map((it: any) => {
            console.log('it.banner ----- :>> ', it.banner);
            let tag = it.tags
            return (
              <>
                <Link
                  href={`/blog/${it.id}`}
                  className={styles["post-blog-each-card"]}
                  key={it.id}
                >
                  <Image
                    src={`/api/images/${it.banner}`}
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
                        {fToNow(it?.createdAt?.toString())}
                      </span>
                    </div>
                    <div className={styles["post-blog-property-map-opt"]}>
                      {it.tag.map((tag: any) => (
                        <>
                          <span>{tag}</span>
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
    <div className="row-span-2 space-y-4 my-8  border-[1px] border-neutral-300 rounded-2xl p-6">
      <div className={`relative h-[137px] w-full rounded-xl bg-slate-200 ${shimmer}`} />

      {/* <div className="h-full w-full rounded-lg bg-slate-200" /> */}
      {/* <div className="h-4 w-full rounded-lg bg-slate-200" />
      <div className=" w-[100%] py-3 rounded-lg bg-slate-200" /> */}
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
      <PostSkeleton />
      <PostSkeleton />
    </div>
  );
}
