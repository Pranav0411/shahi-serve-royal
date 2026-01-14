import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BestsellersSection } from "@/components/BestsellersSection";
import { CreativeWaysSection } from "@/components/CreativeWaysSection";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { StorySection } from "@/components/StorySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <BestsellersSection />
        <CreativeWaysSection />
        <TrustSection />
        <TestimonialsSection />
        <InstagramSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
