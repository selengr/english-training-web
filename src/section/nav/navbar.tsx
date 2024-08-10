import Link from 'next/link';
import styles from "./header.module.css"
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/next-auth';
import ThemeButton from '@/components/theme/ThemeButton';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = async () => {
  const session = await getServerSession(authOption);
  return (
    <nav className='border-b py-3'>
        <div className={`${styles["landing-top"]}`}>
               <div className="flex justify-end flex-row align-middle items-center w-full pr-10">
              
               

               <Link href="/about-me"
              passHref
               > <label >About</label></Link>


               <Link href="/auth/login"
              passHref
               >  <label className="mr-4 ml-2">{`Login`}</label></Link>
                <ThemeToggle />

              
               </div>

               <div className="cover-individuals fixed sm:left-2 left-0 flex justify-center align-middle items-center">
              
               <Avatar className='pl-8 pr-4 rounded-full' >
              <AvatarImage className='rounded-full' src="https://github.com/shadcn.png" />
              <AvatarFallback  delayMs={600}>CN</AvatarFallback>
            </Avatar>
            <span>
              {session?.user.email}
            </span>
            

                </div>
            </div>
    </nav>
  );
};

export default Navbar;



