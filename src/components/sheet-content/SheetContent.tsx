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
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { isActiveLink } from "./isActiveLink"
import { AlignJustify, BadgeCheck, LogOut } from 'lucide-react'
import { toast } from "../ui/use-toast"

function NavItem({
  href,
  title,
  icon,
  active,
  onNavigate,
}: {
  href: string
  title: string
  icon: React.ReactNode
  active: boolean
  onNavigate: () => void
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={onNavigate}
        className={`mx-[-0.65rem] cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 ${active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-white'}`}
      >
        {icon}
        <span className="ml-4">{title}</span>
        {active && (
          <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full" />
        )}
      </Link>
    </SheetClose>
  )
}

export function SheetSide({ session }: { session: any }) {
  const mounted = useMounted()
  const router = useRouter()
  const pathname = usePathname()
  const userRole = session?.user?.userRole as string | undefined
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const reNav = () => {
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
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#2f3437] text-white z-[9999999]">
          <SheetHeader>
            <div className="flex h-20 items-center border-b pt-2 pb-6">
              <SheetClose asChild>
                <Link
                  href="/"
                  onClick={reNav}
                  className="flex items-center gap-2 font-semibold text-white"
                >
                  <SheetTitle className="text-base font-semibold text-white">
                    Learning Labs
                  </SheetTitle>
                </Link>
              </SheetClose>
            </div>
          </SheetHeader>

          <nav className="grid gap-2 text-lg font-medium">
            {navConfig?.map((item: any) => {
              const active = isActiveLink(pathname, item.path)

              if (item.role === "USER") {
                if (item.title !== "Profile") {
                  return (
                    <NavItem
                      key={item.path}
                      href={"" + item.path}
                      title={item.title}
                      icon={item.icon}
                      active={active}
                      onNavigate={reNav}
                    />
                  )
                }

                if (session?.user?.email) {
                  return (
                    <NavItem
                      key={item.path}
                      href={"" + item.path}
                      title={item.title}
                      icon={item.icon}
                      active={active}
                      onNavigate={reNav}
                    />
                  )
                }
              }

              if (item.role === "ADMIN" && userRole === "ADMIN") {
                return (
                  <NavItem
                    key={item.path}
                    href={"" + item.path}
                    title={item.title}
                    icon={item.icon}
                    active={active}
                    onNavigate={reNav}
                  />
                )
              }

              return null
            })}
          </nav>

          {session?.user && (
            <SheetFooter className="absolute bottom-8">
              <SheetClose asChild>
                <Button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="mx-[-0.65rem] bg-transparent hover:bg-transparent cursor-pointer flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-white"
                >
                  <LogOut />
                  logout
                </Button>
              </SheetClose>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}
