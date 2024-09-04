// routes
import React from 'react';
import { PATH_PAGE } from '@/routes/paths';
import { AlignJustify, Signpost, UserCog, FilePlus2, Home, ShoppingCart, Users } from 'lucide-react';



// components
enum Role {
     USER = "USER",
     ADMIN = "ADMIN"
}

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
          role: Role.ADMIN
     },
     {
          title: 'home',
          path: PATH_PAGE.root,
          icon: ICONS.home,
          role: Role.USER
     },
     {
          title: 'profile',
          path: PATH_PAGE.profile,
          icon: ICONS.profile,
          role: Role.USER
     },
     {
          title: 'my post',
          path: PATH_PAGE.myPost,
          icon: ICONS.myPost,
          role: Role.ADMIN
     },
     {
          title: 'word of the day',
          path: PATH_PAGE.wordOfTheDay,
          icon: ICONS.myPost,
          role: Role.USER
     },

];

export default navConfig;
