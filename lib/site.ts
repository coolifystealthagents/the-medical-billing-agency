import data from '../site.json';
// Existing articles removed; prior registry is recoverable in Git history.
export const site = {...data, blog: [] as typeof data.blog, research: [] as typeof data.research};
