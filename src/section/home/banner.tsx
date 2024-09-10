
import Image from "next/image";
import styles from "./banner.module.css"



type Props = {
  data?: String,
  title?: String,
  banner: String,
  user: any
  home?: boolean
}

const Banner = ({ data, title, banner, user, home }: Props) => {


  return (
    <div className={styles["landing-main"]}>

      <Image
        // loader={myLoader}
        src={home ? "/pre/" + banner : `/api/images/${banner}`}
        alt="Picture of the author"
        width={500}
        height={500}
        className={styles["landing-img"]}
      />





      {!home &&
        <Image
          src={`/api/images/${user?.image}`}
          alt="Picture of the author"
          width={100}
          height={100}
          className={styles["landing-div-rounded"]}
        />
      }
      {home &&
        <div className={`${styles["landing-div-rounded"]} bg-[#f7f6f3]`} >
          <Image
            // src={`${theme === "dark" ? "/LOGO/learning-logo-light.svg" : "/LOGO/learning-logo-dark.svg"}`}
            src={"/LOGO/learning-logo-dark.svg"}
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