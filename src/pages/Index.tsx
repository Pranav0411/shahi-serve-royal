import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { CreativeWaysSection } from "@/components/CreativeWaysSection";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { StorySection } from "@/components/StorySection";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <CreativeWaysSection />
        <TrustSection />
        <TestimonialsSection />
        <InstagramSection />
        <StorySection />
      </main>
    </div>
  );
};

export default Index;
