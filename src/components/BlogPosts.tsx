import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

// ============================================================
// BLOG POSTS DATA - Edit this array to add/remove/update posts
// Each post needs a matching entry in src/pages/BlogPost.tsx
// ============================================================
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI is Revolutionizing Content Creation in 2026",
    excerpt: "Discover how artificial intelligence is transforming the way we write, edit, and publish content across all industries.",
    category: "AI & Technology",
    readTime: "8 min read",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    slug: "ai-revolutionizing-content-creation"
  },
  {
    id: "2",
    title: "Getting Started with Blackbeard: A Complete Guide",
    excerpt: "Learn how to set up and configure Blackbeard for your writing workflow in just minutes.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "Jan 3, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    slug: "getting-started-blackbeard"
  },
  {
    id: "3",
    title: "10 Tips to Maximize Your Writing Productivity",
    excerpt: "Discover advanced techniques and shortcuts that will supercharge your content creation efficiency.",
    category: "Productivity",
    readTime: "7 min read",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    slug: "maximize-productivity-tips"
  },
  {
    id: "4",
    title: "The Future of Writing Tools in 2026",
    excerpt: "Explore upcoming trends and innovations that will shape the content creation experience.",
    category: "Industry",
    readTime: "8 min read",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    slug: "future-developer-tools-2026"
  },
  {
    id: "5",
    title: "Building Your Personal Writing Style with AI",
    excerpt: "A deep dive into how AI can learn and enhance your unique voice while maintaining authenticity.",
    category: "Writing",
    readTime: "10 min read",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    slug: "scalable-applications-architecture"
  },
  {
    id: "6",
    title: "Content Quality Best Practices for Teams",
    excerpt: "Establish writing standards and review processes that elevate your team's content output.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    slug: "code-quality-best-practices"
  }
];

const BlogPosts = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-3">
          <div>
            <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.15em]">Resources</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-1">
              From Our Blog
            </h2>
            <p className="text-sm text-foreground-muted mt-1 max-w-lg">
              Tips, tutorials, and insights to improve your writing
            </p>
          </div>
          <a
            href="#/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-primary hover:text-brand-primary/80 font-medium transition-colors group"
          >
            View all
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Scrollable Blog Cards */}
        <div className="relative">
          {/* Gradient fade on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 px-4">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="snap-start flex-shrink-0 w-[320px] md:w-[360px] group"
              >
                <Card className="h-full bg-card/50 border-border/50 hover:border-brand-primary/30 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-brand-primary/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-brand-primary/90 text-brand-primary-foreground text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <CardContent className="p-5">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <a
                      href={`#/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-brand-primary/80 transition-colors"
                    >
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          <span className="text-xs text-muted-foreground">← Swipe to see more →</span>
        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BlogPosts;
