
import Image from "next/image";
import styles from "./banner.module.css"



type Props = {
  data?: String,
  title?: String,
  banner: String,
  user: any
}

const Banner = ({ data, title, banner, user }: Props) => {
  console.log("user --------------------**** :>> ", user);
  return (
    <div className={styles["landing-main"]}>

      <Image
        // loader={myLoader}
        src={'/pre/' + banner.toString()}
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




      {/* {!title&& */}
      {/* {!title&& */}
      <h1 className={styles["landing-title"]}>{title ? title : "commercial web"}</h1>







    </div>
  );
}

export default Banner;