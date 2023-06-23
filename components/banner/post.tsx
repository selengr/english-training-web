'use client'

import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css";
import Link from "next/link";
import { useEffect } from "react";

const Post = () => {
  let data = [
    { images: "/images/fikeus-west-2.avif", slug: 1,name:"1nop" },
    { images: "/images/fikeus-west-2.avif", slug: 2,name:"2nop" },
    { images: "/images/fikeus-west-2.avif", slug: 3,name:"3nop" },
    { images: "/images/fikeus-west-2.avif", slug: 4,name:"4nop" },
    { images: "/images/fikeus-west-2.avif", slug: 5,name:"5nop" },
    { images: "/images/fikeus-west-2.avif", slug: 6,name:"6nop" },
    { images: "/images/fikeus-west-2.avif", slug: 7,name:"6nop" },
    { images: "/images/fikeus-west-2.avif", slug: 8,name:"6nop" },
  ];

// useEffect(()=>{
//   fetch('http://localhost:8000/api/post/all')
//   .then((res) => res.json())
//   .then((d) => {
//     console.log(d)
//     debugger
//   })

// },[])


  return (
    <div className={styles["post-header"]}>
      <h2>Blog Posts</h2>

      <aside className={styles["post-blog-card"]}>
        {data.map((it) => {
          return (
            <>
              <Link
                href={`/blog/${it.slug}?query=${it.images}&${it.name}`}
                // as={`/blog/${it.slug}?query=${it.images}&${it.name}`}
                className={styles["post-blog-each-card"]}
                key={Math.floor(Math.random()*1000)}
              >
                <Image
                  src={it.images}
                  alt="Picture of the author"
                  width={0}
                  height={0}
                />

                <section className={styles["post-blog-property"]}>
                  <span className={styles["post-blog-property-title"]}>
                    Example article
                  </span>
                  <div className={styles["post-blog-property-details"]}>
                    <span className={styles["post-blog-property-description"]}>
                      The best techniques for sharing code snippets and
                      screencasts that will help propel your open source
                      projects to success.
                    </span>
                    <span className={styles["post-blog-property-date"]}>
                      Mar 7, 2018
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

export default Post;
