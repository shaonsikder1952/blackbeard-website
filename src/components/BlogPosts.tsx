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

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Blackbeard: A Complete Guide",
    excerpt: "Learn how to set up and configure Blackbeard for your development workflow in just minutes.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "Jan 3, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    slug: "getting-started-blackbeard"
  },
  {
    id: "2",
    title: "10 Tips to Maximize Your Productivity",
    excerpt: "Discover advanced techniques and shortcuts that will supercharge your coding efficiency.",
    category: "Productivity",
    readTime: "7 min read",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    slug: "maximize-productivity-tips"
  },
  {
    id: "3",
    title: "The Future of Developer Tools in 2026",
    excerpt: "Explore upcoming trends and innovations that will shape the developer experience.",
    category: "Industry",
    readTime: "8 min read",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    slug: "future-developer-tools-2026"
  },
  {
    id: "4",
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "A deep dive into architectural patterns that ensure your apps grow seamlessly.",
    category: "Architecture",
    readTime: "10 min read",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    slug: "scalable-applications-architecture"
  },
  {
    id: "5",
    title: "Code Quality Best Practices for Teams",
    excerpt: "Establish coding standards and review processes that elevate your team's output.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    slug: "code-quality-best-practices"
  },
  {
    id: "6",
    title: "Integrating AI into Your Development Workflow",
    excerpt: "Harness the power of AI assistants to write better code faster than ever before.",
    category: "AI & ML",
    readTime: "9 min read",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    slug: "ai-development-workflow"
  }
];

const BlogPosts = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <span className="text-brand-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
              Latest Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              From Our Blog
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Stay updated with the latest tutorials, tips, and industry insights to level up your development game.
            </p>
          </div>
          <a 
            href="#/blog" 
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 font-medium transition-colors group"
          >
            View all articles
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
