import data from '../site.json';
import { october12Blog } from './october12Blog';
import { october12Research } from './october12Research';
import { october22Blog } from './october22Blog';
import { october22Research } from './october22Research';

export const site = {
  ...data,
  blog: [...october22Blog, ...october12Blog, ...data.blog],
  research: [...october22Research, ...october12Research, ...data.research],
};
