import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import BlogPosts from "@/components/BlogPosts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <div id="pricing">
        <Pricing />
      </div>
      <div id="blog">
        <BlogPosts />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
