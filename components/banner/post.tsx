// "use client"
import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css";
import Link from "next/link";
import callApi from "@/services/axios";
import { IPInputs } from "@/app/types/dashboard";



async function getData() {
  try {
    const response = await callApi().get("/api/post")
    return response
  } catch (error) {
    console.log("11111111111111111111111");
  }
};


export default async function Post () {
  const data : any = await getData()

  
  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {data.length > 0 && data?.map((it:IPInputs) => {
          
          return (
            <>
              <Link
                href={`/blog/${it._id}`}
                // as={`/blog/${it.slug}?query=${it.images}&${it.name}`}
                className={styles["post-blog-each-card"]}
                key={Math.floor(Math.random() * 1000)}
                passHref
              >
                <Image
                  src={'/'+it.banner.toString().replace('public\\' ,'')}
                  alt="Picture of the author"
                  width={0}
                  height={0}
                />

                <section className={styles["post-blog-property"]}>
                  <span className={styles["post-blog-property-title"]}>
                    {/* Example article */}
                    {it.title}
                  </span>
                  <div className={styles["post-blog-property-details"]}>
                    <span className={styles["post-blog-property-description"]}>
                      {/* The best techniques for sharing code snippets and
                      screencasts that will help propel your open source
                      projects to success. */}
                      {it.introduction}
                    </span>
                    <span className={styles["post-blog-property-date"]}>
                      {/* Mar 7, 2018 */}
                      {it.updatedAt.split("-")[1]}
                    </span>
                  </div>
                  <div className={styles["post-blog-property-map-opt"]}>
                    {[1111, 2222222, 23, 584, 888888885].map((it) => (
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
};
