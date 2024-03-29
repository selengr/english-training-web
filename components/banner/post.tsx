// "use client"
import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css";
import Link from "next/link";
import callApi from "@/services/axios";
import { IPInputs } from "@/app/types/dashboard";

export const dynamic = 'force-dynamic' 

async function getData() {
  try {
    const response = await callApi().get("/api/post");
    return response;
  } catch (error) {
    console.log("11111111111111111111111")
  }
}

export default async function Post() {
  const data: any = await getData();
  
  console.log('data****************************************************** :>> ', data);
  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {
          data?.map((it: IPInputs) => {
            let tag = it.tags
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
                    src={"/" + it.banner.toString().replace("public\\", "")}
                    alt="Picture of the author"
                    width={0}
                    height={0}
                  />

                  <section className={styles["post-blog-property"]}>
                    <span className={styles["post-blog-property-title"]}>
                      {/* Example article */}
                      <p className="truncate">
                        {it.title}
                        </p>
                    </span>
                    <div className={styles["post-blog-property-details"]}>
                      <span
                        className={styles["post-blog-property-description"]}
                      >
                        {/* The best techniques for sharing code snippets and
                      screencasts that will help propel your open source
                      projects to success. */}
                        {/* <p className="truncate"> */}
                          {it.introduction}
                          {/* </p> */}
                      </span>
                      <span className={styles["post-blog-property-date"]}>
                        {/* Mar 7, 2018 */}
                        {it.updatedAt.split("T")[0]}
                      </span>
                    </div>
                    <div className={styles["post-blog-property-map-opt"]}>
                      {tag.map((it) => (
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
