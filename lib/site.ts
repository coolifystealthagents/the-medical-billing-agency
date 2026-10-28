import data from '../site.json';
import { october12Blog } from './october12Blog';
import { october12Research } from './october12Research';
import { october26Blog, october26BlogScan } from './october26Blog';
import { october28Blog } from './october28Blog';
import { october27Blog } from './october27Blog';
import { october25Blog } from './october25Blog';
import { october22Blog } from './october22Blog';
import { october28Research } from './october28Research';
import { october27Research } from './october27Research';
import { october26Research } from './october26Research';
import { october25Research } from './october25Research';
import { october22Research } from './october22Research';

const october26BlogWithMeta = october26Blog.map((entry: readonly any[]) => {
  const scan = october26BlogScan.find((item) => item.slug === entry[0]);
  return [
    entry[0],
    entry[1],
    entry[2],
    entry[3],
    entry[4],
    entry[5] || `/images/october-26/${entry[0]}.png`,
    scan?.published || '2026-10-26',
  ];
});

export const site = {
  ...data,
  blog: [...(october28Blog as any[]), ...(october27Blog as any[]), ...october26BlogWithMeta, ...october25Blog, ...october22Blog, ...october12Blog, ...data.blog],
  research: [...october28Research, ...october27Research, ...october26Research, ...october25Research, ...october22Research, ...october12Research, ...data.research],
};

// cache-bust: 2026-10-28 batch wiring
