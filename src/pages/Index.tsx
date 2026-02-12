import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Ocean waves background video - covers entire page */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/ocean-waves-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.4]"
          style={{ minHeight: '100vh', minWidth: '100vw' }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        
        {/* 1. HERO - Hook & Value Proposition */}
        <Hero />
        
        {/* 2. FEATURES - How it works (Video + Benefits side by side) */}
        <Features />
        
        {/* 3. PROOF - Before/After comparison showing real results */}
        <BeforeAfter />
        
        {/* 4. PRICING - Convert visitors */}
        <div id="pricing">
          <Pricing />
        </div>
        
        {/* 5. BLOG - Build trust with content */}
        <div id="blog">
          <BlogPosts />
        </div>
        
        {/* 6. FOOTER - Final CTA & links */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;