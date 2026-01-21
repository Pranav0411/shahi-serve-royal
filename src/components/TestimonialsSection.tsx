import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review: "Absolutely divine! The Galouti Kebabs melted in my mouth. It's like having a royal chef at home. My guests couldn't stop praising the authentic flavors.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rajesh Verma",
    location: "Mumbai",
    rating: 5,
    review: "I was skeptical about ready-to-eat food, but Shahi Serve changed my mind completely. The quality is exceptional and the taste is unmatched. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Anita Kapoor",
    location: "Bangalore",
    rating: 5,
    review: "Perfect for dinner parties! The packaging is elegant and the food tastes freshly made. My family is now addicted to the Shahi flavors. Five stars!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Vikram Singh",
    location: "Lucknow",
    rating: 5,
    review: "Being from Lucknow, I know my kebabs. Shahi Serve delivers authentic Awadhi taste that reminds me of the royal kitchens. Truly a feast fit for royalty!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#F4E6AD' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-navy/10 rounded-full translate-x-1/2 translate-y-1/2" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(229, 189, 130, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(23, 63, 98, 0.1) 0%, transparent 50%)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-royal-gold font-medium tracking-widest uppercase text-sm mb-4">
            Customer Love
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-navy leading-tight mb-4">
            What Our <span className="text-royal-gold italic">Royal</span> Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-royal-gold rounded-full" />
            <div className="w-3 h-3 bg-royal-gold rotate-45" />
            <div className="w-12 h-1 bg-royal-gold rounded-full" />
          </div>
          <p className="text-royal-navy/70 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the royal taste
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative h-full">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote className="w-10 h-10 text-royal-gold/20" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-royal-gold fill-royal-gold"
                        />
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-royal-navy/80 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.review}"
                    </p>
                    
                    {/* Customer Info */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-royal-gold/30"
                      />
                      <div>
                        <h4 className="font-heading font-semibold text-royal-navy">
                          {testimonial.name}
                        </h4>
                        <p className="text-royal-navy/60 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative Bottom Border */}
                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent rounded-full" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-royal-gold/30 text-royal-navy hover:bg-royal-gold/10 hover:text-royal-navy" />
            <CarouselNext className="border-royal-gold/30 text-royal-navy hover:bg-royal-gold/10 hover:text-royal-navy" />
          </Carousel>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-royal-navy">
              10,000+
            </div>
            <p className="text-royal-navy/60 text-sm mt-1">Happy Customers</p>
          </div>
          <div className="w-px h-12 bg-royal-navy/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-royal-navy flex items-center justify-center gap-1">
              4.9 <Star className="w-6 h-6 text-royal-gold fill-royal-gold" />
            </div>
            <p className="text-royal-navy/60 text-sm mt-1">Average Rating</p>
          </div>
          <div className="w-px h-12 bg-royal-navy/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-royal-navy">
              50+
            </div>
            <p className="text-royal-navy/60 text-sm mt-1">Cities Delivered</p>
          </div>
          <div className="w-px h-12 bg-royal-navy/20 hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-heading font-bold text-royal-navy">
              100%
            </div>
            <p className="text-royal-navy/60 text-sm mt-1">Quality Assured</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
