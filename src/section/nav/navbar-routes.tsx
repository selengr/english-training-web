'use client';

import { cn } from '@/lib/utils';
import { Session } from 'next-auth';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATH_PAGE } from '@/routes/paths';

type NavbarRoutesProps = {
  session: Session | null;
  vertical?: boolean;
};

const routes = [
  {
    label: 'Home',
    path: PATH_PAGE.root,
  },
  {
    label: 'About',
    path: PATH_PAGE.about,
  },
  {
    label: 'Roadmap',
    path: PATH_PAGE.EnglishLearningRoadmap,
  },
];

const NavbarRoutes = ({ vertical = false }: NavbarRoutesProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn('flex items-center justify-start gap-2', {
        'flex-col': vertical,
      })}
    >
      {routes.map(({ label, path }) => (
        <Link
          href={path}
          key={label}
          className={cn('flex items-center justify-center px-3 py-1 text-lg', {
            'rounded-md bg-black text-white': pathname === path,
          })}
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default NavbarRoutes;
