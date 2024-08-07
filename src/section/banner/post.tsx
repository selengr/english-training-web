// "use client"
import Image from "next/image";
import styles from "./banner.module.css";
import Link from "next/link";
// import callApi from "@/services/axios";
// import { IPInputs } from "@/app/types/dashboard";

// export const dynamic = 'force-dynamic' 

// async function getData() {
//   try {
//     const response = await callApi().get("/api/post");
//     return response;
//   } catch (error) {
//     console.log("11111111111111111111111")
//   }
// }

export default async function Post() {
  // const data: any = await getData();
  
  // console.log('data****************************************************** :>> ', data);
  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {
          [
            {
            id:11,
            banner : "0bbb814a-0a20-4df4-89cd-d8f4e0e9e7c4.avif",
            title : "0bbb814a-0a20-4df4-89cd-d8f4e0e9e7 testjwdad",
            introduction : "",
            updatedAt : "3768T487",
            tags : ["3768T487"]},
            {
            id:11,
            banner : "1bccbafe-357a-49a2-a0b0-331177bf2c18.avif",
            title : "0bbb814a-0a20-4df4-89cd-d8f4e0e9e7 testjwdad",
            introduction : "",
            updatedAt : "3768T487",
            tags : ["3768T487"]},
            {
            id:11,
            banner : "0d763f8a-75eb-41f9-8c10-6e7e65338d64.avif",
            title : "0bbb814a-0a20-4df4-89cd-d8f4e0e9e7 testjwdad",
            introduction : "",
            updatedAt : "3768T487",
            tags : ["3768T487"]},
            {
            id:11,
            banner : "0b392b84-8b53-41d6-b625-9b3ccf39310b.avif",
            title : "0bbb814a-0a20-4df4-89cd-d8f4e0e9e7 testjwdad",
            introduction : "",
            updatedAt : "3768T487",
            tags : ["3768T487"]},
          ]?.map((it: any) => {
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
                    src={"/pre/upload/" + it.banner}
                    alt="Picture of the author"
                    width={200}
                    height={200}
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
