// routes
import React from 'react';
import { PATH_PAGE } from '@/routes/paths';
import { AlignJustify, BadgeCheck, Bell, FilePlus2, Home, ShoppingCart, Users } from 'lucide-react';



// components


// ----------------------------------------------------------------------

const ICONS = {
     home : <Home className="h-5 w-5" />,
     blogCreate: <FilePlus2 className="h-6 w-6" />


};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------


               {
                    title: 'create post',
                    path: PATH_PAGE.blogCreate,
                    icon: ICONS.blogCreate,
               },
               {
                    title: 'home',
                    path: PATH_PAGE.root,
                    icon: ICONS.home,
               },
      
];

export default navConfig;
