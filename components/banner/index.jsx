import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css"


const Banner = () => {
    return (
        <div className={styles["landing-main"]}>
             <Image
                // loader={myLoader}
                src="/images/https___s3-us-west-2.avif"
                alt="Picture of the author"
                width={500}
                height={500}
                className={styles["landing-img"]}
                />

                <>
                <Image
                  src={"/images/fikeus-west-2.avif"}
                  alt="Picture of the author"
                  width={0}
                  height={0}
                  className={styles["landing-div-rounded"]}
                />
                </>

                <h1 className={styles["landing-title"]}>commercial web</h1>


                

        </div>
    );
}

export default Banner;