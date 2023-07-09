// 'use client'
import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css"
import { HeroHeader } from "../custom/hero-header";
import { Button } from "@mui/material";

type Props = {
  data : String,
  title? : String,
}

const Banner = ({data,title}:Props) => {
  console.log("rr",data)
    return (
        <div className={styles["landing-main"]}>
          {data === "its me" && <div className={`${styles["landing-img"]} `}> <HeroHeader /></div>}
          {data !== "its me" && 
              <Image
              // loader={myLoader}
              src={"/images/https___s3-us-west-2.avif"}
              alt="Picture of the author"
              width={500}
              height={500}
              className={styles["landing-img"]}
              />
          }

          {data === "its me" && 
              <Image
              // loader={myLoader}
              src={"/images/E52075F8-14EA-496F-A10C-CB4405AFE196_1_105_c.jpeg"}
              alt="Picture of the author"
              width={500}
              height={500}
              className={styles["landing-div-rounded"]}
              />
          }

          {data !== "its me" && 
              <Image
              src={"/images/fikeus-west-2.avif"}
              alt="Picture of the author"
              width={0}
              height={0}
              className={styles["landing-div-rounded"]}
            />
          }
             

               

                
             {/* <Button  >commercial web</Button> */}
                <h1 className={styles["landing-title"]}>{title ?? "commercial web"}</h1>


                

        </div>
    );
}

export default Banner;