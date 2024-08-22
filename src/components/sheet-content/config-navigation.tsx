// routes
import React from 'react';
import { PATH_PAGE } from '@/routes/paths';
import { AlignJustify, Signpost, UserCog, FilePlus2, Home, ShoppingCart, Users } from 'lucide-react';



// components


// ----------------------------------------------------------------------

const ICONS = {
     home: <Home className="h-5 w-5" />,
     blogCreate: <FilePlus2 className="h-6 w-6" />,
     profile: <UserCog className="h-6 w-6" />,
     myPost: <Signpost className="h-6 w-6" />


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
     {
          title: 'profile',
          path: PATH_PAGE.profile,
          icon: ICONS.profile,
     },
     {
          title: 'my post',
          path: PATH_PAGE.myPost,
          icon: ICONS.myPost,
     },

];

export default navConfig;
