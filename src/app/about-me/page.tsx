'use client'
// import { HeroHeader } from "@/components/hero-header";
// import { HeroHeader } from "@/components/custom/hero-header";
// import Banner from "@/components/banner";
// import Header from "@/components/header";
import styles from "@/section/home/banner.module.css"
import Image from "next/image";



const AboutMe = () => {

    return (
        <>


<div className={styles["landing-main"]}>
           {/* <div className={`${styles["landing-img"]} `}> <HeroHeader /></div> */}
  

           <Image
              // loader={myLoader}
              src={'/pre/about/about-me.avif'}
              alt="Picture of the author"
              width={500}
              height={500}
              className={styles["landing-img"]}
              />
          

         
         
             <Image
              src={"/pre/images/E52075F8-14EA-496F-A10C-CB4405AFE196_1_105_c.jpeg"}
              alt="Picture of the author"
              width={500}
              height={500}
              className={styles["landing-div-rounded"]}
              />
         

              <h1 className={styles["landing-title"]}>{"rezakarbakhsh.ir"}</h1>


                

        </div>
  
 <div className="w-full">


            <div className="flex justify-center items-center flex-col max-w-[60%] m-auto">
               

<br ></br>  
<br ></br>  

            <div className="mockup-code">
                <pre data-prefix=">" className="text-warning"><code>welecom...</code></pre> 
                <pre data-prefix=">" className="text-success"><code>first thing first; let me introduce myself</code></pre>
                <pre data-prefix="👋"><code>hi there my name is reza and i am glad to see you</code></pre>
            </div>

<br ></br>
<br ></br>


                 <div className="flex w-full">
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">i am in the mid twenties</div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">this web site is for you people</div>
                     </div>


                     <h1>hi</h1>
                     <h1>it is me</h1>
                     <h1>very soon...</h1>
                     <h1>winter is comming</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <span>start from tomorow night</span>
            
               {/* ddd   */}
               
               {/* <Image
                src={mageData.src}
                alt="Pic"
                width={1500}
                height={1000}
            /> */}


<span className="text-left">Cheers 😊</span>
</div>

            </div>
           
        </>
    );
}



 
export default AboutMe;