import { redirect } from 'next/navigation';
import { PATH_PAGE } from '@/routes/paths';

export default function RoadmapStartPage() {
  redirect(PATH_PAGE.EnglishLearningRoadmap);
}
