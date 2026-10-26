import data from '../site.json';
import { october12Blog } from './october12Blog';
import { october12Research } from './october12Research';
import { october26Blog } from './october26Blog';
import { october25Blog } from './october25Blog';
import { october22Blog } from './october22Blog';
import { october26Research } from './october26Research';
import { october25Research } from './october25Research';
import { october22Research } from './october22Research';

export const site = {
  ...data,
  blog: [...october26Blog, ...october25Blog, ...october22Blog, ...october12Blog, ...data.blog],
  research: [...october26Research, ...october25Research, ...october22Research, ...october12Research, ...data.research],
};
