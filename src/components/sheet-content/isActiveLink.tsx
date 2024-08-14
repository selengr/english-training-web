import { usePathname } from 'next/navigation';

export function isActiveLink(href : string) {
    const pathname = usePathname();
    const currentPath = pathname;
    return currentPath === href;
  }