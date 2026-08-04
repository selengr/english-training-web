"use client"

import Link from "next/link"
import { signOut } from 'next-auth/react'
import navConfig from "./config-navigation"
import { useState } from 'react'
import { usePathname, useRouter } from "next/navigation"
import useMounted from "@/hooks/use-mounted"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { isActiveLink } from "./isActiveLink"
import { AlignJustify, BadgeCheck, LogOut } from 'lucide-react'
import { toast } from "../ui/use-toast"


export function SheetSide({ session }: { session: any }) {
  const mounted = useMounted()
  const router = useRouter()
  const pathname = usePathname()
  const userRole = session?.user?.userRole as string | undefined
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const reNav = async () => {
    router.refresh()
  }

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      await signOut({ redirect: false })
      toast({
        description: "You have been successfully logged out.",
      })
      router.push('/')
      router.refresh()
    } catch (error) {
      console.error('Logout error:', error)
      toast({
        variant: "destructive",
        description: "An error occurred while logging out. Please try again.",
      })
    } finally {
      setIsLoggingOut(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="pr-4 pl-4 sm:pl-7 cursor-pointer">
      <Sheet modal>
        <SheetTrigger >
          <Button variant="ghost" size={"icon"}>
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-[#2f3437] text-white z-[9999999]">
          <SheetHeader>
            <div className="flex h-20 items-center border-b pt-2 pb-6">
              <Link
                href="/"
                onClick={() => reNav()}
                className="flex items-center gap-2 font-semibold text-white"
              >
                <span>Learning Labs</span>
              </Link>
            </div>
          </SheetHeader>

          <nav className="grid gap-2 text-lg font-medium">
            {navConfig?.map((item: any) => {
              const active = isActiveLink(pathname, item.path)

              if (item.role === "USER") {
                if (item.title !== "Profile") {
                  return (
                    <Link
                      key={item.path}
                      onClick={() => reNav()}
                      href={"" + item.path}
                      className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 ${active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-white'}`}
                    >
                      <SheetTrigger className="w-full flex flex-row">
                        {item.icon}
                        <span className="ml-4">
                          {item.title}
                        </span>

                        {active &&
                          <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                        }
                      </SheetTrigger>
                    </Link>
                  )
                }

                if (session?.user?.email) {
                  return (
                    <Link
                      key={item.path}
                      onClick={() => reNav()}
                      href={"" + item.path}
                      className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 ${active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-white'}`}
                    >
                      <SheetTrigger className="w-full flex flex-row">
                        {item.icon}
                        <span className="ml-4">
                          {item.title}
                        </span>

                        {active &&
                          <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                        }
                      </SheetTrigger>
                    </Link>
                  )
                }
              }

              if (item.role === "ADMIN" && userRole === "ADMIN") {
                return (
                  <Link
                    key={item.path}
                    onClick={() => reNav()}
                    href={"" + item.path}
                    className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 ${active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-white'}`}
                  >
                    <SheetTrigger className="w-full flex flex-row">
                      {item.icon}
                      <span className="ml-4">
                        {item.title}
                      </span>

                      {active &&
                        <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
                      }
                    </SheetTrigger>
                  </Link>
                )
              }

              return null
            })}
          </nav>

          {session?.user &&
            <SheetFooter className="absolute bottom-8">
              <SheetTrigger>
                <Button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className={`mx-[-0.65rem] bg-transparent  hover:bg-transparent  cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white`}
                >
                  <LogOut />
                  logout
                </Button>
              </SheetTrigger>
            </SheetFooter>
          }
        </SheetContent>
      </Sheet>
    </div >
  )
}
