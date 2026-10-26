import data from '../site.json';
import { october12Blog } from './october12Blog';
import { october12Research } from './october12Research';
import { october25Blog } from './october25Blog';
import { october22Blog } from './october22Blog';
import { october25Research } from './october25Research';
import { october22Research } from './october22Research';

export const site = {
  ...data,
  blog: [...october25Blog, ...october22Blog, ...october12Blog, ...data.blog],
  research: [...october25Research, ...october22Research, ...october12Research, ...data.research],
};
