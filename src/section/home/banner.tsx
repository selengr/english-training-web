// 'use client'
import Image from "next/image";
import styles from "./banner.module.css"
// import { HeroHeader } from "../custom/hero-header";


type Props = {
  data? : String,
  title? : String,
  banner:String,
  cover : String
}

const Banner = ({data,title,banner,cover}:Props) => {
  
    return (
        <div className={styles["landing-main"]}>
        
              <Image
              // loader={myLoader}
              src={'/pre/'+banner.toString().replace('public\\' ,'')}
              alt="Picture of the author"
              width={500}
              height={500}
              className={styles["landing-img"]}
              />
          

         

              <Image
              src={'/pre/'+cover.toString().replace('public\\' ,'')}
              alt="Picture of the author"
              width={0}
              height={0}
              className={styles["landing-div-rounded"]}
            />
          
             

               

                <h1 className={styles["landing-title"]}>{title ?? "commercial web"}</h1>


                

        </div>
    );
}

export default Banner;