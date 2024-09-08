"use client"

import Image from "next/image";
import styles from "./banner.module.css"
import { useTheme } from "next-themes";



type Props = {
  data?: String,
  title?: String,
  banner: String,
  user: any
  home?: boolean
}

const Banner = ({ data, title, banner, user, home }: Props) => {
  const { theme } = useTheme()

  return (
    <div className={styles["landing-main"]}>

      <Image
        // loader={myLoader}
        src={home ? "/pre/" + banner : banner.toString()}
        alt="Picture of the author"
        width={500}
        height={500}
        className={styles["landing-img"]}
      />





      {!home &&
        <Image
          src={user?.image}
          alt="Picture of the author"
          width={100}
          height={100}
          className={styles["landing-div-rounded"]}
        />
      }
      {home &&
        <div className={`${styles["landing-div-rounded"]} bg-[#f7f6f3] dark:bg-[#2f3437] `} >
          <Image
            src={`${theme === "dark" ? "/LOGO/learning-logo-light.svg" : "/LOGO/learning-logo-dark.svg"}`}
            alt="Picture of the author"
            width={90}
            height={90}
            className={styles["landing-div-rounded-home"]}
          />
        </div>
      }

      <h1 className={styles["landing-title"]}>{title ? title : "learninglabs.ir"}</h1>


    </div>
  );
}

export default Banner;