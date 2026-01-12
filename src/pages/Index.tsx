import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { TrustSection } from "@/components/TrustSection";
import { StorySection } from "@/components/StorySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <TrustSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
