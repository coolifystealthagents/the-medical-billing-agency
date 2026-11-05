export type BlogPost = {
  slug: string; title: string; service: string; description: string;
  details: { overview: string; sections: { heading: string; body: string }[]; heroImage: string; readTime: string; checklist: string[] };
  image: string; published: string; category: 'blog';
};

export type ResearchPost = {
  slug: string; title: string; cluster: string; topic: string; publishedAt: string;
  sourceCount: number; excerpt: string; thumbnail: string; heroImage: string; readingMinutes: number;
  keyStats: string[]; sections: [string, string][];
  sources: { label: string; publisher: string; url: string }[];
};
