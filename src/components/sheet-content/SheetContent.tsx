"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { PATH_PAGE } from "@/routes/paths"
import { AlignJustify, BadgeCheck, Bell, FilePlus2, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-react';
import Link from "next/link"


export function SheetSide() {
  return (
    <div className="pr-4 pl-4 sm:pl-7">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size={"sm"}>
            <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"}  
          // className="bg-[#f8f8f8] dark:text-[hsla(0,0%,100%,.9)]  text-[#37352f] dark:bg-[#2f3437]"
          >
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
                
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <BadgeCheck className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </BadgeCheck>
                </Link>
                <Link
                  href={PATH_PAGE.blogCreate}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                     <FilePlus2  className="h-6 w-6" />
                  Create Post
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
    
    </div>
  )
}
