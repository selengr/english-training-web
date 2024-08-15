
"use client"

import Link from "next/link"
import { signOut } from 'next-auth/react';
import navConfig from "./config-navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { isActiveLink } from "./isActiveLink"
import { AlignJustify, Bell, Package2, BadgeCheck, LogOut } from 'lucide-react';






export function SheetSide() {
  return (
    <div className="pr-4 pl-4 sm:pl-7">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size={"sm"}>
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            {/* <div className="flex h-full max-h-screen flex-col gap-2"> */}
            <div className="flex h-20 items-center border-b pt-8 pb-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Acme Inc</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            {/* </div> */}
          </SheetHeader>

          <nav className="grid gap-2 text-lg font-medium">


            {navConfig?.map((item: any) => {

              return (<>
                <Link
                  href={"" + item.path}
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${isActiveLink(item.path) ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {item.icon}
                  {item.title}

                  {isActiveLink(item.path) &&
                    <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </BadgeCheck>
                  }
                </Link>
              </>)

            })}


          </nav>

          <SheetFooter className="absolute bottom-8">
            <div
              onClick={() => signOut()}
              className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
            >
              <LogOut />
              logout
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}