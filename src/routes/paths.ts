// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_PAGE = '/';
const ROOTS_AUTH = '/auth';


// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  register: path(ROOTS_AUTH, '/register'),

};
export const PATH_PAGE = {
  root: ROOTS_PAGE,
  profile: path(ROOTS_PAGE, 'profile'),
  myPost: path(ROOTS_PAGE, 'my-post'),
  blogCreate: path(ROOTS_PAGE, 'blog/create'),
  wordOfTheDay: path(ROOTS_PAGE, 'word-of-the-day'),
  EnglishLearningRoadmap: path(ROOTS_PAGE, 'english-learning-roadmap'),
  
};
