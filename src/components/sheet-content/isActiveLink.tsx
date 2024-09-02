'use client'

import { usePathname } from 'next/navigation';

export function IsActiveLink(href: string) {
  const pathname = usePathname();
  const currentPath = pathname;
  return currentPath === href;
}