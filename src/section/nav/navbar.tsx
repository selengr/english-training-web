import Link from 'next/link';
import styles from "./header.module.css"
import { getServerSession } from 'next-auth';
import { authOption } from '@/libs/next-auth';
import ThemeButton from '@/components/theme/ThemeButton';

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <nav className='border-b py-3'>
        <div className={`${styles["landing-top"]}`}>
               {/* ddd   */}
               <ThemeButton />
               <div className=" fixed sm:right-20 right-10 flex justify-center align-middle items-center overflow-hidden">
                
               <Link href="/about"
               className="overflow-hidden" passHref
               > <label >About</label></Link>


               <Link href="/auth/login"
               className="overflow-hidden" passHref
               >  <label className="sm:ml-2 ml-0">{`Login`}</label></Link>
                

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
                
                {/* <AccountMenu /> */}
                 {/* <label className="sm:ml-2">reza karbakhsh</label> */}
               </div>
            </div>
    </nav>
  );
};

export default Navbar;



