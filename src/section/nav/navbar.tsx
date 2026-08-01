import Link from 'next/link';
import styles from './header.module.css';
import { getServerSession } from 'next-auth';
import { authOption } from '@/lib/next-auth';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@radix-ui/react-avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import prisma from '@/lib/prisma';
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SheetSide } from '@/components/sheet-content/SheetContent';
import { PATH_AUTH, PATH_PAGE } from '@/routes/paths';

const Navbar = async () => {
  const session = await getServerSession(authOption);

  let user: any;
  let image: any;
  if (session) {
    user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (user?.image) {
      image = await prisma?.image?.findUnique({
        where: {
          id: user?.image as string,
        },
      });
    }
  }

  return (
    <nav className="border-b py-3">
      <div className={`${styles['landing-top']}`}>
        <div className="cover-individuals fixed sm:left-2 left-0 flex justify-center align-middle items-center">
          <SheetSide session={session} />
          {session && (
            <>
              <Avatar className="pl-0 pr-0 rounded-full">
                <AvatarImage
                  className="rounded-full"
                  src={
                    image
                      ? `/api/images/${image?.id}`
                      : 'https://github.com/shadcn.png'
                  }
                />
                <AvatarFallback delayMs={600}>CN</AvatarFallback>
              </Avatar>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="hidden sm:flex">
                    {user?.email}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 flex justify-start">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={user ? user?.image?.toString() : ''}
                      />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{user?.name}</h4>
                      <p className="text-sm">{user?.email}</p>
                      <div className="flex items-center pt-2">
                        <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                        <span className="text-xs text-muted-foreground">
                          role : {user ? user?.role : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </>
          )}
        </div>

        <div className="flex justify-end flex-row align-middle items-center w-full pr-4 sm:pr-10 gap-1">
          <Link href={PATH_PAGE.root} passHref>
            <label className="mr-1 cursor-pointer font-medium">
              Learning Labs
            </label>
          </Link>
          <Link href={PATH_PAGE.EnglishLearningRoadmap} passHref>
            <label className="mr-1 cursor-pointer">Roadmap</label>
          </Link>
          <Link href={PATH_PAGE.about} passHref>
            <label className="mr-1 cursor-pointer">About</label>
          </Link>

          {!session && (
            <Link href={PATH_AUTH.login} passHref>
              <label className="mr-2 sm:mr-4 ml-1 cursor-pointer">Login</label>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
