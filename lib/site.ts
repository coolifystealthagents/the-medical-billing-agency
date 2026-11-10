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
import { november2Blog } from './november2Blog';
import { november2Research } from './november2Research';
import { november4Blog } from './november4Blog';
import { november4Research } from './november4Research';
import { november3Blog } from './november3Blog';
import { november3Research } from './november3Research';
import { november5Blog } from './blog-november5';
import { november5Research } from './research-november5';
import { november6Blog } from './blog-november6';
import { november6Research } from './research-november6';
import { november7Blog } from './blog-november7';
import { november7Research } from './research-november7';
import { november8Blog } from './blog-november8';
import { november8Research } from './research-november8';
import { november9Blog } from './blog-november9';
import { november9Research } from './research-november9';
import { november10Blog } from './blog-november10';
import { november10Research } from './research-november10';

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

const november5BlogRows = november5Blog.map((entry) => [
  entry.slug, entry.title, entry.service, entry.description, entry.details, entry.image, entry.published,
]);

const november6BlogRows = november6Blog.map((entry) => [
  entry.slug, entry.title, entry.service, entry.description, entry.details, entry.image, entry.published,
]);

const november7BlogRows = november7Blog.map((entry) => [
  entry.slug, entry.title, entry.service, entry.description, entry.details, entry.image, entry.published,
]);

const november8BlogRows = november8Blog.map((entry) => [
  entry.slug, entry.title, entry.service, entry.description, entry.details, entry.image, entry.published,
]);

const november9BlogRows = november9Blog.map((entry) => [
  entry.slug, entry.title, entry.service, entry.description, entry.details, entry.image, entry.published,
]);

const november10BlogRows = november10Blog.map((entry) => [
  entry.slug, entry.title, entry.service, entry.description, entry.details, entry.image, entry.published,
]);

export const site = {
  ...data,
  blog: [...(november10BlogRows as readonly any[]), ...(november9BlogRows as readonly any[]), ...(november8BlogRows as readonly any[]), ...(november7BlogRows as readonly any[]), ...(november6BlogRows as readonly any[]), ...(november5BlogRows as readonly any[]), ...(november3Blog as readonly any[]), ...(november2Blog as readonly any[]), ...(october28Blog as readonly any[]), ...(october27Blog as readonly any[]), ...october26BlogWithMeta, ...october25Blog, ...october22Blog, ...october12Blog, ...data.blog],
  research: [...november10Research, ...november9Research, ...november8Research, ...november7Research, ...november6Research, ...november5Research, ...november3Research, ...november2Research, ...october28Research, ...october27Research, ...october26Research, ...october25Research, ...october22Research, ...october12Research, ...data.research],
};

// cache-bust: 2026-11-10 batch wiring
