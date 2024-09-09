
"use client"

import Link from "next/link"
import { signOut } from 'next-auth/react';
import navConfig from "./config-navigation"
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IsActiveLink } from "./isActiveLink"
import { AlignJustify, BadgeCheck, LogOut } from 'lucide-react';
import useMounted from "@/hooks/use-mounted";




export function SheetSide() {
  const mounted = useMounted()
  const { refresh } = useRouter()
  const [userData, setUserData] = useState<string>("")


  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/user/role')
      const data = await response.json()
      setUserData(data.user?.role)
    } catch (error: any) {
      // if ("message" in error) {
      //   toast({
      //     description: error?.message as string
      //   })
      // }
    }
  }

  const reNav = async () => {
    refresh()
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="pr-4 pl-4 sm:pl-7 cursor-pointer">
      <Sheet modal>
        <SheetTrigger >
          <Button variant="ghost" size={"icon"} >
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-[#2f3437] z-[9999999]">
          <SheetHeader>
            <div className="flex h-20 items-center border-b pt-2 pb-6">
              {/* <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Acme Inc</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button> */}
            </div>

          </SheetHeader>

          <nav className="grid gap-2 text-lg font-medium">

            {navConfig?.map((item: any) => {

              if (item.role === "USER") {
                return (<>

                  <Link
                    onClick={() => reNav()}
                    href={"" + item.path}
                    className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 ${IsActiveLink(item.path) ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <SheetTrigger className="w-full flex flex-row">
                      {item.icon}
                      <span className="ml-4">
                        {item.title}
                      </span>

                      {IsActiveLink(item.path) &&
                        <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          6
                        </BadgeCheck>
                      }
                    </SheetTrigger>
                  </Link>
                </>)
              }



              if (item.role === "ADMIN" && userData === "ADMIN") {
                return (<>
                  <Link
                    onClick={() => reNav()}
                    href={"" + item.path}
                    className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 ${IsActiveLink(item.path) ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    <SheetTrigger className="w-full flex flex-row">
                      {item.icon}
                      <span className="ml-4">
                        {item.title}
                      </span>

                      {IsActiveLink(item.path) &&
                        <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          6
                        </BadgeCheck>
                      }
                    </SheetTrigger>
                  </Link>
                </>)
              }




            })}


          </nav>

          {userData &&
            <SheetFooter className="absolute bottom-8">
              <SheetTrigger>
                <div
                  onClick={() => {
                    signOut({
                      callbackUrl: '/',
                    });
                    reNav()
                  }}
                  className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
                >

                  <LogOut />
                  logout
                </div>
              </SheetTrigger>
            </SheetFooter>
          }
        </SheetContent>
      </Sheet>
    </div >
  );
}