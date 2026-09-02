import { photos } from "./photos";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  isNew?: boolean;
  paragraphs: string[];
}

// Starter posts — placeholder copy, swap in your own writing whenever you're ready.
export const blogPosts: BlogPost[] = [
  {
    slug: "yogyakarta-temples",
    title: "Chasing Light Through Yogyakarta's Temples",
    excerpt:
      "A short trip to Prambanan taught me more about patience than any other shoot this year.",
    cover: photos.find((p) => p.title === "Prambanan at Golden Hour")!.src,
    isNew: true,
    paragraphs: [
      "I arrived before sunrise, half-asleep, hoping the fog would lift in time. It didn't — not entirely — and that turned out to be the best part of the morning.",
      "Prambanan at golden hour is a cliché shot, and I knew it walking in. What I didn't expect was how different it feels to actually stand there, waiting, instead of just scrolling past someone else's version of it.",
      "This is a placeholder post — replace it with your own story from the trip in src/data/blog.ts.",
    ],
  },
  {
    slug: "quiet-corners",
    title: "Quiet Corners of Home",
    excerpt: "Not every good frame needs a plane ticket. Some of my favorites are five minutes away.",
    cover: photos.find((p) => p.title === "Reading Room")!.src,
    paragraphs: [
      "Most of what I shoot isn't from a trip at all — it's whatever's around when the light happens to be right.",
      "This is a placeholder post — replace it with your own story in src/data/blog.ts.",
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
