// 'use client'
import Image from "next/image";
import styles from "../../styles/components/banner/banner.module.css"
import { HeroHeader } from "../custom/hero-header";
import { Button } from "@mui/material";

type Props = {
  data? : String,
  title? : String,
  banner?:String,
  cover? : String
}

const Banner = ({data,title,banner,cover}:Props) => {
  
    return (
        <div className={styles["landing-main"]}>
          {data === "its me" && <div className={`${styles["landing-img"]} `}> <HeroHeader /></div>}
          {data !== "its me" && 
              <Image
              // loader={myLoader}
              src={'/'+banner.toString().replace('public\\' ,'')}
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
              src={'/'+cover.toString().replace('public\\' ,'')}
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