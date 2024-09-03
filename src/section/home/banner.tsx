
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
        src={home ? "/pre/" + banner : banner.toString()}
        alt="Picture of the author"
        width={500}
        height={500}
        className={styles["landing-img"]}
      />


      <Image
        src={user?.image}
        alt="Picture of the author"
        width={100}
        height={100}
        className={styles["landing-div-rounded"]}
      />

      <h1 className={styles["landing-title"]}>{title ? title : "commercial web"}</h1>


    </div>
  );
}

export default Banner;