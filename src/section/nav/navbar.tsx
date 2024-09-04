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
import prisma from '@/lib/prisma';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SheetSide } from '@/components/sheet-content/SheetContent';


const Navbar = async () => {
  const session = await getServerSession(authOption);

  let user
  if (session) {

    user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });
  }

  return (
    <nav className='border-b py-3'>
      <div className={`${styles["landing-top"]}`}>

        <div className="flex justify-end flex-row align-middle items-center w-full pr-4 sm:pr-10">

          <Link href="/about-me"
            passHref
          > <label className="mr-2 cursor-pointer">About</label></Link>


          {!session && <Link href="/auth/login"
            passHref
          >  <label className="mr-2 sm:mr-4 ml-2 cursor-pointer">{`Login`}</label></Link>
          }
          <ThemeToggle />

        </div>

        {session &&
          <div className="cover-individuals fixed sm:left-2 left-0 flex justify-center align-middle items-center">
            <SheetSide />
            <Avatar className='pl-0 pr-0 rounded-full' >
              <AvatarImage className='rounded-full' src={user ? user?.image?.toString() : ""} />
              <AvatarFallback delayMs={600}>CN</AvatarFallback>
            </Avatar>


            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className='hidden sm:flex'>{session?.user.email}</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={user ? user?.image?.toString() : ""} />
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
                        role : {user ? user.role : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>




          </div>
        }

      </div>
    </nav>
  );
};

export default Navbar;



