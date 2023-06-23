

import Bio from "@/components/banner/bio";
import "../../styles/globals.css";
import Post from "@/components/banner/post";
import styles from "../../styles/components/banner/banner.module.css"
import Image from "next/image";
import Link from "next/link";


export default function Page() {
  

  return (
    <>

    <div className="w-100 flex justify-center align-middle">
      <article className={styles["landing-article"]}>
              <Bio />
              <Post />
      </article>
    </div>

    </>
  );
}
