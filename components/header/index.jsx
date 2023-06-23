import Image from "next/image";
import styles from "../../styles/components/header/header.module.css"
import Link from "next/link";

const Header = () => {
    return (
        <>
            <div className={styles["landing-top"]}>
               {/* ddd   */}

               <div className=" fixed sm:right-28 right-10 flex justify-center align-middle items-center overflow-hidden">
                
               <Link href="/about"
               className="overflow-hidden"
               > <label >About</label></Link>
                

                 <label className="sm:ml-2 ml-0">Contact</label>
               </div>


               <div className="cover-individuals fixed sm:left-12 left-4 flex justify-center align-middle items-center">
                <Image
                    src={"/images/loading/Loading-own.gif"}
                    alt="author"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                 <label className="sm:ml-2">reza karbakhsh</label>
               </div>
            </div>

           
        </>
    );
}

export default Header;