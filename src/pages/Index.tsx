import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";
import BeforeAfter from "@/components/BeforeAfter";
import { motion } from "framer-motion";

const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="mb-10 sm:mb-12"
  >
    {children}
  </motion.div>
);

const Index = () => {
  return (
    <section className="pt-16 sm:pt-20 pb-10 sm:pb-14 px-6 sm:px-8 lg:px-12 bg-muted/30 relative overflow-hidden">
      <Header />
      <Hero />
      <BeforeAfter />
      <Section>
        <Features />
      </Section>
      <Section>
        <div id="pricing">
          <Pricing />
        </div>
      </Section>
      <Section>
        <div id="blog">
          <BlogPosts />
        </div>
      </Section>
      <Footer />
    </section>
  );
};

export default Index;
