import React from 'react';
import { PATH_PAGE } from '@/routes/paths';
import {
  Signpost,
  UserCog,
  FilePlus2,
  Home,
  ChartNoAxesGantt,
  Info,
} from 'lucide-react';

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

const ICONS = {
  home: <Home className="h-5 w-5" />,
  about: <Info className="h-5 w-5" />,
  blogCreate: <FilePlus2 className="h-6 w-6" />,
  profile: <UserCog className="h-6 w-6" />,
  myPost: <Signpost className="h-6 w-6" />,
  EnglishLearningRoadmap: <ChartNoAxesGantt className="h-6 w-6" />,
};

const navConfig = [
  {
    title: 'Home',
    path: PATH_PAGE.root,
    icon: ICONS.home,
    role: Role.USER,
  },
  {
    title: 'About',
    path: PATH_PAGE.about,
    icon: ICONS.about,
    role: Role.USER,
  },
  {
    title: 'English roadmap',
    path: PATH_PAGE.EnglishLearningRoadmap,
    icon: ICONS.EnglishLearningRoadmap,
    role: Role.USER,
  },
  {
    title: 'Profile',
    path: PATH_PAGE.profile,
    icon: ICONS.profile,
    role: Role.USER,
  },
  {
    title: 'Create post',
    path: PATH_PAGE.blogCreate,
    icon: ICONS.blogCreate,
    role: Role.ADMIN,
  },
  {
    title: 'My posts',
    path: PATH_PAGE.myPost,
    icon: ICONS.myPost,
    role: Role.ADMIN,
  },
];

export default navConfig;
