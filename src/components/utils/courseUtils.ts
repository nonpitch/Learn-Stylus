import { Course } from '../../types';
import { coursesData } from '../../data/coursesData';

export const getCourseById = (id: string | undefined): Course | undefined => {
  if (!id) return undefined;
  return coursesData.find(course => course.id === id);
};