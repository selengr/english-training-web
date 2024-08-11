import Link from 'next/link';
import styles from "./header.module.css"
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/next-auth';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

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
            


            <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">{session?.user.email}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback >VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{session?.user.name}</h4>
            <p className="text-sm">
            {session?.user.email}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                 {/* {session?.user.email} */}text
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>


            

                </div>
            </div>
    </nav>
  );
};

export default Navbar;



