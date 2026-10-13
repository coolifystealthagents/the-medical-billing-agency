import data from '../site.json';
import { october12Blog } from './october12Blog';
import { october12Research } from './october12Research';

export const site = {
  ...data,
  blog: [...october12Blog, ...data.blog],
  research: [...october12Research, ...data.research],
};
