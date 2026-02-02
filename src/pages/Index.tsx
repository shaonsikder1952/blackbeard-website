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
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;