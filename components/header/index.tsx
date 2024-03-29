'use client'

import Image from "next/image";
import styles from "../../styles/components/header/header.module.css"
import Link from "next/link";
import Cookies from 'js-cookie';
import { Avatar } from "@mui/material";
import AccountMenu from "../ui/profileMenu";

const Header = () => {


    const token = Cookies.get('token') 
    const username = Cookies.get('username') 

    return (
        <>
            <div className={`${styles["landing-top"]}`}>
               {/* ddd   */}

               <div className=" fixed sm:right-20 right-10 flex justify-center align-middle items-center overflow-hidden">
                
               <Link href="/about"
               className="overflow-hidden" passHref
               > <label >About</label></Link>


               <Link href="/auth/login"
               className="overflow-hidden" passHref
               >  <label className="sm:ml-2 ml-0">{`${token ? "" : "Login"}`}</label></Link>
                

                 {/* <label className="sm:ml-2 ml-0">Contact</label> */}
               </div>


               <div className="cover-individuals fixed sm:left-2 left-0 flex justify-center align-middle items-center">
                {/* <Image
                    src={"/images/loading/Loading-own.gif"}
                    alt="author"
                    width={50}
                    height={50}
                    className="rounded-full"
                /> */}
                
                {/* <Avatar
                        alt="auther"
                        src="/images/loading/Loading-own.gif"
                        className="rounded-full"
                        //   sx={{ width: 24, height: 24 }}
                /> */}
                
                <AccountMenu />
                 {/* <label className="sm:ml-2">reza karbakhsh</label> */}
               </div>
            </div>

           
        </>
    );
}

export default Header;