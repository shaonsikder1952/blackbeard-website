import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Footer from "@/components/Footer";

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  "getting-started-blackbeard": {
    id: "1",
    title: "Getting Started with Blackbeard: A Complete Guide",
    excerpt: "Learn how to set up and configure Blackbeard for your development workflow in just minutes.",
    category: "Tutorial",
    readTime: "5 min read",
    date: "Jan 3, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    author: "Blackbeard Team",
    content: `
## Introduction

Welcome to Blackbeard! This comprehensive guide will walk you through everything you need to know to get started with our powerful writing assistant.

## Installation

Getting Blackbeard installed is simple. Follow these steps:

1. **Download the Extension**: Visit the Chrome Web Store and search for "Blackbeard" or click the download button on our homepage.

2. **Enable the Extension**: Once installed, click the Blackbeard icon in your browser toolbar to activate it.

3. **Sign In**: Create an account or sign in with your existing credentials to unlock all features.

## Setting Up Your Writing Style

Blackbeard learns your unique voice. Here's how to train it:

### Upload Writing Samples

Navigate to Settings → Writing Style and upload examples of your writing. The more samples you provide, the better Blackbeard understands your voice.

### Define Your Rules

Set specific guidelines for your writing:
- Preferred tone (formal, casual, professional)
- Words to avoid
- Industry-specific terminology

## Using Blackbeard Daily

Once configured, Blackbeard works seamlessly in the background:

- **Press ⌘S** to instantly rewrite selected text
- **Hover over the icon** for quick suggestions
- **Right-click** for context-specific options

## Tips for Best Results

1. Be consistent with your feedback
2. Update your samples regularly
3. Use the suggestion feature to fine-tune outputs

Ready to transform your writing? Start using Blackbeard today!
    `
  },
  "maximize-productivity-tips": {
    id: "2",
    title: "10 Tips to Maximize Your Productivity",
    excerpt: "Discover advanced techniques and shortcuts that will supercharge your coding efficiency.",
    category: "Productivity",
    readTime: "7 min read",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    author: "Blackbeard Team",
    content: `
## Boost Your Productivity with These Pro Tips

Maximizing productivity isn't about working harder—it's about working smarter. Here are our top 10 tips.

## 1. Master Keyboard Shortcuts

Learn the essential shortcuts:
- **⌘S**: Instant rewrite
- **⌘Shift+B**: Toggle Blackbeard
- **⌘K**: Quick command menu

## 2. Use Templates

Create reusable templates for common communications:
- Email responses
- Social media posts
- Report formats

## 3. Batch Similar Tasks

Group similar writing tasks together to maintain flow and consistency.

## 4. Set Up Quick Phrases

Define abbreviations that expand into full phrases you use frequently.

## 5. Use Focus Mode

Enable Focus Mode to minimize distractions while writing important content.

## 6. Review Analytics

Check your writing analytics weekly to identify patterns and improvements.

## 7. Customize for Each Platform

Set different tones for different platforms—formal for LinkedIn, casual for Twitter.

## 8. Use Voice Input

For quick drafts, use voice input and let Blackbeard polish the text.

## 9. Schedule Writing Sessions

Dedicate specific times for writing-heavy tasks when your mind is freshest.

## 10. Regular Style Updates

Update your style samples monthly to keep Blackbeard aligned with your evolving voice.

Implement these tips and watch your productivity soar!
    `
  },
  "future-developer-tools-2026": {
    id: "3",
    title: "The Future of Developer Tools in 2026",
    excerpt: "Explore upcoming trends and innovations that will shape the developer experience.",
    category: "Industry",
    readTime: "8 min read",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&h=600&fit=crop",
    author: "Blackbeard Team",
    content: `
## The Evolution of Developer Tools

The landscape of developer tools is evolving rapidly. Here's what to expect in 2026.

## AI-Powered Everything

Artificial intelligence is transforming every aspect of development:
- **Code completion**: Beyond suggestions to full function generation
- **Bug detection**: Real-time error prevention
- **Documentation**: Auto-generated, always up-to-date docs

## Low-Code Integration

The line between low-code and traditional development is blurring:
- Visual builders integrated with code editors
- Component libraries with AI customization
- Drag-and-drop meets version control

## Enhanced Collaboration

Remote work has driven innovation in collaboration:
- Real-time pair programming across time zones
- AI mediators for code reviews
- Unified communication within IDEs

## Security First

Security is becoming embedded, not added:
- Automatic vulnerability scanning
- AI-powered threat detection
- Built-in compliance checking

## What This Means for You

Stay ahead by embracing these changes early. The developers who adapt fastest will lead the industry.
    `
  },
  "scalable-applications-architecture": {
    id: "4",
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "A deep dive into architectural patterns that ensure your apps grow seamlessly.",
    category: "Architecture",
    readTime: "10 min read",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop",
    author: "Blackbeard Team",
    content: `
## Designing for Scale

Building applications that scale requires thoughtful architecture from day one.

## Microservices vs Monolith

Choose the right architecture for your stage:
- **Startups**: Start monolithic, plan for extraction
- **Growth**: Identify service boundaries
- **Scale**: Fully distributed microservices

## Database Strategies

Your database choices matter:
- Horizontal vs vertical scaling
- Read replicas for performance
- Caching layers with Redis

## Event-Driven Architecture

Decouple your services:
- Message queues for async processing
- Event sourcing for audit trails
- CQRS for read/write optimization

## Infrastructure as Code

Automate everything:
- Terraform for provisioning
- Kubernetes for orchestration
- GitOps for deployments

## Monitoring and Observability

You can't improve what you can't measure:
- Distributed tracing
- Metrics aggregation
- Log correlation

Build for the future, scale with confidence.
    `
  },
  "code-quality-best-practices": {
    id: "5",
    title: "Code Quality Best Practices for Teams",
    excerpt: "Establish coding standards and review processes that elevate your team's output.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "Dec 10, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop",
    author: "Blackbeard Team",
    content: `
## Elevating Code Quality

Great code is a team effort. Here's how to build a culture of quality.

## Establish Standards

Create clear, documented standards:
- Naming conventions
- File structure
- Comment guidelines

## Automated Testing

Build a testing culture:
- Unit tests for logic
- Integration tests for flows
- E2E tests for critical paths

## Code Review Process

Make reviews constructive:
- Focus on logic, not style (automate that)
- Provide context with comments
- Celebrate good solutions

## Continuous Integration

Automate quality gates:
- Linting on every commit
- Tests on every PR
- Coverage requirements

## Documentation

Keep docs close to code:
- README files in every folder
- API documentation auto-generated
- Architecture decision records

Build quality into your process, not as an afterthought.
    `
  },
  "ai-development-workflow": {
    id: "6",
    title: "Integrating AI into Your Development Workflow",
    excerpt: "Harness the power of AI assistants to write better code faster than ever before.",
    category: "AI & ML",
    readTime: "9 min read",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    author: "Blackbeard Team",
    content: `
## AI in Modern Development

AI tools are revolutionizing how we write code. Here's how to leverage them effectively.

## Code Generation

Use AI for boilerplate:
- Component scaffolding
- Test generation
- API endpoint creation

## Intelligent Completion

Beyond autocomplete:
- Context-aware suggestions
- Multi-line completions
- Documentation integration

## Code Review Assistance

AI as a first reviewer:
- Pattern detection
- Security scanning
- Performance suggestions

## Learning and Growth

AI as a teacher:
- Explain complex code
- Suggest improvements
- Share best practices

## Best Practices

Use AI effectively:
- Always review generated code
- Understand before accepting
- Maintain your expertise

AI amplifies your abilities—use it wisely.
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article not found</h1>
          <Link 
            to="/" 
            className="text-brand-primary hover:text-brand-primary/80 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 -mt-20 relative z-10">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 bg-brand-primary text-brand-primary-foreground text-sm font-semibold rounded-full mb-4">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none pb-16">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-muted-foreground ml-4 mb-2">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            if (paragraph.trim() === '') {
              return null;
            }
            return (
              <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
